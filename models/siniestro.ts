import mongoose, { Model, Schema } from 'mongoose'
import type { SiniestroType } from '../types'

// 1. Definición del Schema

let siniestroSchema: Schema<SiniestroType> = new mongoose.Schema<SiniestroType>(
  {
    //_id: ObjectId: Identificador único de documento
    'Apellido Conductor': {
      type: String
    },
    'Apellido y Nombre': {
      type: String
    },
    Calle: {
      type: String
    },
    Causa: {
      type: String
    },
    'Codigo de Productor': {
      type: String
    },
    'Código Postal': {
      type: String
    },
    'Código Producto': {
      type: String
    },
    Comiseria: {
      type: String
    },
    Contact: {
      type: String
    },
    'Daños Propios': {
      type: String
    },
    'Daños Terceros': {
      type: String
    },
    DocumentoConductor: {
      type: String
    },
    Estado: {
      type: String
    },
    'Fecha de creación': {
      type: Date,
      require: true
    },
    'Fecha De Siniestro': {
      type: String
    },
    'Fecha de última actualización': {
      type: String
    },
    Fecha_Siniestro: {
      type: String
    },
    Hora: {
      type: String
    },
    ID: {
      type: String
    },
    'Lesiones Terceros': {
      type: String
    },
    Localidad: {
      type: String
    },
    'Nombre Conductor': {
      type: String
    },
    Numero: {
      type: String
    },
    'Numero de Documento': {
      type: String
    },
    'Número de Siniestro': {
      type: String
    },
    'Numero de Siniestro': {
      type: String
    },
    Oficina: {
      type: String
    },
    País: {
      type: String
    },
    Poliza: {
      type: String
    },
    Producto: {
      type: String
    },
    Productor: {
      type: String
    },
    Provincia: {
      type: String
    },
    Responsable: {
      type: String
    },
    'Tomador / Riesgo': {
      type: String
    }
  }
)

// 2. Definición del Modelo

const Siniestro: Model<SiniestroType> =
  mongoose.models.Siniestro ||
  mongoose.model<SiniestroType>('Siniestro', siniestroSchema)

export default Siniestro
