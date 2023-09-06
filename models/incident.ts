import mongoose, { Schema } from 'mongoose'
import type { IncidentType } from '../types'

// 1. Definición del Schema

let incidentSchema: Schema = new mongoose.Schema({
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
    require: true
  },
  Grupo: {
    type: String,
    require: true,
    default: 'Sin valor'
  },
  'Buzón de correo': {
    type: String,
    require: true,
    default: 'Sin valor'
  },
  Cliente: {
    type: String,
    require: true
  },
  Estado: {
    type: String,
    require: true
  },
  'Asignado a': {
    type: String
  },
  'Sector Responsable': {
    type: String,
    require: true
  },
  'Fecha de creación': {
    type: Date,
    require: true
  },
  Productor: {
    type: String,
    require: true
  },
  'Fecha de última actualización': {
    type: Date,
    require: true
  }
})

// 2. Definición del Modelo

const Incident =
  mongoose.models.Incident ||
  mongoose.model<IncidentType>('Incident', incidentSchema)

export default Incident
