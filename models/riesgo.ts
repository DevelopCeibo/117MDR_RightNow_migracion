import mongoose, { Model, Schema } from 'mongoose'
import type { RiesgoType } from '../types'

// 1. Definición del Schema

let riesgoSchema: Schema<RiesgoType> = new mongoose.Schema<RiesgoType>({
  //_id: ObjectId: Identificador único de documento
  Contact: {
    type: String
  },
  'Detalle de Cobertura': {
    type: String
  },
  'Detalle de Riesgo': {
    type: String
  },
  Estado: {
    type: String
  },
  'Fecha de creación': {
    type: Date,
    require: true
  },
  'Fecha de última actualización': {
    type: String
  },
  ID: {
    type: String
  },
  IdTipoRiesgo: {
    type: String
  },
  NumeroPoliza: {
    type: String
  },
  Patente: {
    type: String
  },
  Poliza: {
    type: String
  },
  TomadorRiesgo: {
    type: String
  }
})

// 2. Definición del Modelo

const Riesgo: Model<RiesgoType> =
  mongoose.models.Riesgo || mongoose.model<RiesgoType>('Riesgo', riesgoSchema)

export default Riesgo
