import mongoose, { Model, Schema } from 'mongoose'
import type { IncidenteType } from '../types'

// 1. Definición del Schema

const incidenteSchema: Schema<IncidenteType> = new Schema<IncidenteType>({
  //_id: ObjectId: Identificador único de documento
  'Nro Incidente': {
    type: String,
    required: true
  },
  Motivo: {
    type: String,
    required: true
  },
  'Registrado por': {
    type: String,
    required: true
  },
  Grupo: {
    type: String,
    required: true,
    default: 'Sin valor'
  },
  'Buzón de correo': {
    type: String,
    required: true,
    default: 'Sin valor'
  },
  Cliente: {
    type: String,
    required: true
  },
  Estado: {
    type: String,
    required: true
  },
  'Asignado a': {
    type: String
  },
  'Sector Responsable': {
    type: String,
    required: true
  },
  'Fecha de creación': {
    type: Date,
    required: true
  },
  Productor: {
    type: String,
    required: true
  },
  'Fecha de última actualización': {
    type: Date,
    required: true
  }
})

// 2. Definición del Modelo

const Incidente: Model<IncidenteType> =
  mongoose.models.Incidente || mongoose.model('Incidente', incidenteSchema)

export default Incidente
