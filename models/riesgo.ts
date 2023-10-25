import mongoose, { Model, Schema } from 'mongoose'
import type { RiesgoType } from '../types'

// 1. Definición del Schema

let riesgoSchema: Schema<RiesgoType> = new mongoose.Schema<RiesgoType>({
  //_id: ObjectId: Identificador único de documento
  Contacto: {
    type: String
  },
  Detalle_de_Cobertura: {
    type: String
  },
  Detalle_de_Riesgo: {
    type: String
  },
  Estado: {
    type: String
  },
  Fecha_de_creacion: {
    type: Date,
    require: true
  },
  Fecha_de_ultima_actualizacion: {
    type: String
  },
  ID: {
    type: String
  },
  Id_Tipo_Riesgo: {
    type: String
  },
  Numero_Poliza: {
    type: String
  },
  Patente: {
    type: String
  },
  Poliza: {
    type: String
  },
  Tomador_Riesgo: {
    type: String
  }
})

// 2. Definición del Modelo

const Riesgo: Model<RiesgoType> =
  mongoose.models.Riesgo || mongoose.model<RiesgoType>('Riesgo', riesgoSchema)

export default Riesgo
