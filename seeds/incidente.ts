import { readFileSync } from 'fs'
import { parse } from 'csv-parse'
import dbConection from '../db'
import Incident from '../models/incidente'
import type { IncidenteType } from '../types'

dbConection()

const fileToRead = 'assets/Migracion_CT_Incidente.csv'
let fileContent = readFileSync(fileToRead, 'utf-8')

if (fileContent.charCodeAt(0) === 0xfeff) {
  fileContent = fileContent.substring(1)
}

const parser = parse(fileContent, {
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

const cvsContent: IncidenteType[] = []
parser.on('readable', function () {
  let record
  while ((record = parser.read())) {
    delete record['']
    cvsContent.push(record)
  }
})
parser.on('end', async function () {
  await Incident.insertMany(cvsContent)
    .then(() => {
      console.log(
        `Los datos del archivo ${fileToRead} fueron almacenados en la base de datos exitosamente`
      )
      process.exit(1)
    })
    .catch((error: Error) => console.log(error.message))
})
