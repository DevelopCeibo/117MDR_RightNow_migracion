import mongoose, { Schema } from 'mongoose'
import type { RespuestaType } from '../types'

// 1. Definición del Schema

let repuestaSchema: Schema = new mongoose.Schema({
  //_id: ObjectId: Identificador único de documento
  'Nro Incidente': {
    type: String,
    require: true
  },
  Texto: {
    type: String,
    require: true
  },
  'ID de hilo del incidente': {
    type: Number,
    require: true
  },
  'Cabecera de correo': {
    type: String,
    require: true
  },
  'ID de contacto': {
    type: String,
    require: true
  },
  'Fecha de creación': {
    type: Date,
    require: true
  }
})

// 2. Definición del Modelo

const Repuesta =
  mongoose.models.Repuesta ||
  mongoose.model<RespuestaType>('Repuesta', repuestaSchema)

export default Repuesta
