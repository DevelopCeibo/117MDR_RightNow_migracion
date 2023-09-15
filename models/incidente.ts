import mongoose, { Model, Schema } from 'mongoose'
import type { IncidenteType } from '../types'

// 1. Definición del Schema

const incidenteSchema: Schema<IncidenteType> = new Schema<IncidenteType>({
  //_id: ObjectId: Identificador único de documento
  'Nº de referencia': {
    type: String,
    required: true
  },
  'Actualizado por': {
    type: String,
    required: true
  },
  Asunto: {
    type: String,
    required: true
  },
  'Buzón de correo': {
    type: String,
    required: true
  },
  Cola: {
    type: String,
    required: true
  },
  'Creado por cuenta': {
    type: String,
    required: true
  },
  'Modo de Contacto': {
    type: String,
    required: true
  },
  UsuarioIntra: {
    type: String,
    required: true
  },
  'Tipo de Incidente': {
    type: String,
    required: true
  },
  'Tipo de estado': {
    type: String,
    required: true
  },
  'Tipo Cobro': {
    type: String,
    required: true
  },
  Siniestro: {
    type: String,
    required: true
  },
  Poliza: {
    type: String,
    required: true
  },
  NroCuenta: {
    type: String,
    required: true
  },
  'ID de producto': {
    type: String
  },
  'ID de incidente': {
    type: String,
    required: true
  },
  'ID de disposición': {
    type: String
  },
  'ID de contacto': {
    type: String,
    required: true
  },
  'ID de categoría': {
    type: String,
    required: true
  },
  Grupo: {
    type: String
  },
  FechaEfecto: {
    type: String,
    required: true
  },
  'Fecha de última respuesta': {
    type: String,
    required: true
  },
  'Fecha de última actualización': {
    type: String,
    required: true
  },
  'Fecha de creación': {
    type: Date,
    required: true
  },
  'Fecha de cierre': {
    type: String,
    required: true
  },
  Estado: {
    type: String,
    required: true
  },
  'Cuenta asignada': {
    type: String,
    required: true
  }
})

// 2. Definición del Modelo

const Incidente: Model<IncidenteType> =
  mongoose.models.Incidente || mongoose.model('Incidente', incidenteSchema)

export default Incidente
