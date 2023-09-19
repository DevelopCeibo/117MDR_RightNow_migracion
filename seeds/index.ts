import { readdirSync, readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'
import { connectDB, disconectDB } from '../db'

async function seeds() {
  await connectDB()

  const files = readdirSync('./assets').filter((file) => file.endsWith('.csv'))

  const insertPromise: Promise<any>[] = []

  console.log('files', files)

  for (let i = 0; i < files.length; i++) {
    const [, model, ...rest] = files[i].match(/Migracion_CT_(.*).csv/) || []
    const modelName = model[0].toLowerCase() + model.slice(1)
    console.log('Accediendo al model: ', modelName)

    const myModel = require(`../models/${modelName}.ts`).default

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
      delimiter: [';'],
      columns: true,
      skip_records_with_empty_values: true,
      cast: (value, context) => {
        try {
          if (context.column === 'Fecha de creación') return new Date(value)
          return value
        } catch (error: any) {
          console.log(`Error al convertir la fecha: ${error.message}`)
        }
      }
    })

    insertPromise.push(
      myModel
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
      disconectDB()
    })
    .catch((error: any) => {
      console.log('Un error a sucedido', error.message)
    })
}

seeds()
