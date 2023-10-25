import mongoose, { Model, Schema } from 'mongoose'
import type { TareaType } from '../types'

// 1. Definición del Schema

let tareaSchema: Schema<TareaType> = new mongoose.Schema<TareaType>({
  //_id: ObjectId: Identificador único de documento
  Asignado: {
    type: String
  },
  Fecha_de_creacion: {
    type: Date,
    require: true
  },
  Fecha_de_inicio: {
    type: String
  },
  Fecha_de_ultima_actualizacion: {
    type: String
  },
  Fecha_de_vencimiento: {
    type: String
  },
  Herencia: {
    type: String
  },
  ID_de_contacto: {
    type: String
  },
  ID_de_incidente: {
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
  Plantilla_de_tarea: {
    type: String
  }
})

// 2. Definición del Modelo

const Tarea: Model<TareaType> =
  mongoose.models.Tarea || mongoose.model<TareaType>('Tarea', tareaSchema)

export default Tarea
