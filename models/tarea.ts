import mongoose, { Model, Schema } from 'mongoose'
import type { TareaType } from '../types'

// 1. Definición del Schema

let tareaSchema: Schema<TareaType> = new mongoose.Schema<TareaType>({
  //_id: ObjectId: Identificador único de documento
  Asignado: {
    type: String
  },
  'Fecha de creación': {
    type: Date,
    require: true
  },
  'Fecha de inicio': {
    type: String
  },
  'Fecha de última actualización': {
    type: String
  },
  'Fecha de vencimiento': {
    type: String
  },
  Herencia: {
    type: String
  },
  'ID de contacto': {
    type: String
  },
  'ID de incidente': {
    type: String
  },
  Motivo: {
    type: String
  },
  Nombre: {
    type: String
  },
  Notas: {
    type: String
  },
  'Plantilla de tarea': {
    type: String
  }
})

// 2. Definición del Modelo

const Tarea: Model<TareaType> =
  mongoose.models.Tarea || mongoose.model<TareaType>('Tarea', tareaSchema)

export default Tarea
