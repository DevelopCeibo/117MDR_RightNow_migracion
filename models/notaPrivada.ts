import mongoose, { Model, Schema } from 'mongoose'
import type { NotaPrivadaType } from '../types'

// 1. Definición del Schema

let notaPrivadaSchema: Schema<NotaPrivadaType> =
  new mongoose.Schema<NotaPrivadaType>({
    //_id: ObjectId: Identificador único de documento
    'Nº de referencia': {
      type: String,
      require: true
    },
    'Fecha de creación': {
      type: Date,
      require: true
    },
    'Fecha de cierre': {
      type: String
      //require: true
    },
    'Modo de Contacto': {
      type: String
      //require: true
    },
    'Jerarquía de categoría': {
      type: String
      //require: true
    },
    'ID de categoría': {
      type: String
      //require: true
    },
    Estado: {
      type: String
      //require: true
    },
    Texto: {
      type: String
      //require: true
    }
  })

// 2. Definición del Modelo

const NotaPrivada: Model<NotaPrivadaType> =
  mongoose.models.NotaPrivada ||
  mongoose.model<NotaPrivadaType>('NotaPrivada', notaPrivadaSchema)

export default NotaPrivada
