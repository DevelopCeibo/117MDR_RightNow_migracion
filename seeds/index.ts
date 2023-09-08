import { readdirSync, readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'
import { connectDB, disconectDB } from '../db'

async function seeds() {
  await connectDB()

  const files = readdirSync('./assets').filter((file) => file.endsWith('.csv'))

  const insertPromise: Promise<any>[] = []

  console.log('files', files)
  let i = 0
  for (i; i < files.length; i++) {
    const [, modelName, ...rest] = files[i].match(/Migracion_CT_(.*).csv/) || []
    console.log('modelName', modelName)

    const myModel = require(`../models/${modelName.toLowerCase()}.ts`).default

    console.log('myModel', myModel)

    const fileToRead = `assets/${files[i]}`
    console.log('filetoRead', fileToRead)

    let fileContent = readFileSync(fileToRead, 'utf-8')

    if (fileContent.charCodeAt(0) === 0xfeff) {
      fileContent = fileContent.substring(1)
    }

    const cvsContent = parse(fileContent, {
      delimiter: [';'],
      columns: true,
      skip_records_with_empty_values: true,
      cast: (value, context) => {
        if (context.column === 'Fecha de creación') return new Date(value)
        if (context.column === 'Fecha de última actualización')
          return new Date(value)

        return value
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
