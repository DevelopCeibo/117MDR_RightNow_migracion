import { readdirSync, readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'
import { connectDB, disconectDB } from '../db'

async function seeds() {
  const inicio = new Date()
  console.log('Hora de inicio', inicio)

  await connectDB()

  const files = readdirSync('./assets').filter(
    (file) => file.startsWith('MIGRA_') && file.endsWith('.csv')
  )

  const insertPromise: Promise<any>[] = []

  console.log('files', files)

  for (let i = 0; i < files.length; i++) {
    //const [, model, ...rest] = files[i].match(/MIGRA_(.*)_v\d\d.csv/) || []
    const [, model, ...rest] = files[i].match(/MIGRA_(.*)_v\d{2,3}.csv/) || []
    const modelName = model[0].toLowerCase() + model.slice(1)
    console.log('Accediendo al model: ', modelName)
    const environment = process.env.NODE_ENV
    const extension = environment === 'production' ? '.js' : '.ts'
    const myModel = require(`../models/${modelName}${extension}`).default
    //const myModel = require(`../models/${modelName}.js`).default

    console.log('Se accedió al modelo: ', myModel)

    const fileToRead = `assets/${files[i]}`
    console.log('Leyendo el archivo: ', fileToRead)

    let fileContent = readFileSync(fileToRead, 'utf-8')

    if (fileContent.charCodeAt(0) === 0xfeff) {
      fileContent = fileContent.substring(1)
    }

    const fin = 'Recuento de registros'
    const indexFin = fileContent.lastIndexOf(fin)
    if (indexFin !== -1) {
      fileContent = fileContent.substring(0, indexFin)
    }

    const cvsContent = parse(fileContent, {
      delimiter: [','],
      columns: true,
      skip_records_with_empty_values: true,
      cast: (value, context) => {
        try {
          if (context.column.toString().includes('Fecha')) {
            value = sinComillasSimples(value)
          }
          if (context.column === 'Fecha de creación') {
            return new Date(value)
          }

          return value
        } catch (error: any) {
          console.log(`Error al convertir la fecha: ${error.message}`)
        }
      }
    })

    insertPromise.push(
      await myModel
        .insertMany(cvsContent)
        .then(() => {
          console.log(
            `Los datos del archivo ${fileToRead} fueron almacenados en la base de datos exitosamente`
          )
        })
        .catch((error: Error) => console.log(error.message))
    )
  }
  Promise.all(insertPromise)
    .then(() => {
      console.log(
        'Todos los datos fueron almacenados en la base de datos exitosamente'
      )
      // Ahora podemos cerrar la conexión a la base de datos
      const fin = new Date()
      console.log('Hora de inicio', fin)
      disconectDB()
    })
    .catch((error: any) => {
      console.log('Un error a sucedido', error.message)
    })
}

seeds()

const sinComillasSimples = (text: string): string => {
  return text[0] === "'" && text[text.length - 1] === "'"
    ? text.slice(1, -1)
    : text
}
