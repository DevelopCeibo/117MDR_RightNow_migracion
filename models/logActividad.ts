import mongoose, { Model, Schema } from 'mongoose'
import type { LogActividadType } from '../types'

// 1. Definición del Schema

let logActividadSchema: Schema<LogActividadType> =
  new mongoose.Schema<LogActividadType>({
    //_id: ObjectId: Identificador único de documento
    'ID de contacto': {
      type: String
    },
    Fecha: {
      type: String
    },
    Sector: {
      type: String
    },
    Asesor: {
      type: String,
      require: true
    },
    'Acción realizada': {
      type: String,
      require: true
    },
    Descripción: {
      type: String
    },
    'ID de tipo de transacción': {
      type: String
    },
    Inicial: {
      type: String
    },
    'Dirección IP del cliente': {
      type: String
    }
  })

// 2. Definición del Modelo

const LogActividad: Model<LogActividadType> =
  mongoose.models.LogActividad ||
  mongoose.model<LogActividadType>('LogActividad', logActividadSchema)

export default LogActividad
