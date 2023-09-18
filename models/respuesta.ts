import mongoose, { Model, Schema } from 'mongoose'
import type { RespuestaType } from '../types'

// 1. Definición del Schema

let respuestaSchema: Schema<RespuestaType> = new mongoose.Schema<RespuestaType>(
  {
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
      type: String,
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
  }
)

// 2. Definición del Modelo

const Respuesta: Model<RespuestaType> =
  mongoose.models.Respuesta ||
  mongoose.model<RespuestaType>('Respuesta', respuestaSchema)

export default Respuesta
