import mongoose, { Model, Schema } from 'mongoose'
import type { ArchivoType } from '../types'

// 1. Definición del Schema

const archivoSchema: Schema<ArchivoType> = new Schema<ArchivoType>({
  //_id: ObjectId: Identificador único de documento
  'Nº de referencia': {
    type: String,
    required: true
  },
  'Asociación de tabla': {
    type: String
  },
  'Clave ajena': {
    type: String
  },
  Desactivado: {
    type: String
  },
  Descripción: {
    type: String
  },
  'Fecha de creación': {
    type: Date,
    required: true
  },
  'Fecha de última actualización': {
    type: String
  },
  'ID de archivo anexo': {
    type: String
  },
  'Índice de palabras clave': {
    type: String
  },
  Nombre: {
    type: String
  },
  'Nombre de archivo de usuario': {
    type: String
  },
  'Nombre de archivo local': {
    type: String
  },
  Privado: {
    type: String
  },
  Secuencia: {
    type: String
  },
  Tamaño: {
    type: String
  },
  Tipo: {
    type: String
  },
  'Tipo de contenido': {
    type: String
  }
})

// 2. Definición del Modelo

const Archivo: Model<ArchivoType> =
  mongoose.models.Archivo || mongoose.model('Archivo', archivoSchema)

export default Archivo
