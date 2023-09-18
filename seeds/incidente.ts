import { readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'
import { connectDB, disconectDB } from '../db'
import Incident from '../models/incidente'

async function seedIncidentes() {
  await connectDB()

  const fileToRead = 'assets/Migracion_CT_Incidente.csv'
  let fileContent = readFileSync(fileToRead, 'utf-8')

  if (fileContent.charCodeAt(0) === 0xfeff) {
    fileContent = fileContent.substring(1)
  }

  const cvsContent = parse(fileContent, {
    delimiter: [';'],
    columns: true,
    //skip_records_with_empty_values: true,
    cast: (value, context) => {
      if (context.column === 'Fecha de creación') return new Date(value)
      if (context.column === 'Fecha de última actualización')
        return new Date(value)

      return value
    }
  })

  Incident.insertMany(cvsContent)
    .then(() => {
      console.log(
        `Los datos del archivo ${fileToRead} fueron almacenados en la base de datos exitosamente`
      )
      disconectDB()
    })
    .catch((error: Error) => console.log(error.message))
}

seedIncidentes()
