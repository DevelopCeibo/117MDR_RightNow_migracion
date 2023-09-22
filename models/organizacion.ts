import mongoose, { Model, Schema } from 'mongoose'
import type { OrganizacionType } from '../types'

// 1. Definición del Schema

let orgazacionSchema: Schema<OrganizacionType> =
  new mongoose.Schema<OrganizacionType>({
    //_id: ObjectId: Identificador único de documento
    Estado: {
      type: String,
      require: true
    },
    'Fecha de creación': {
      type: Date,
      require: true
    },
    'Fecha de última actualización': {
      type: String
    },
    'ID de organización': {
      type: String
    },
    'Jerarquía de organización - Nivel 1': {
      type: String
    },
    'Nombre de organización': {
      type: String
    },
    Vendedor: {
      type: String
    }
  })

// 2. Definición del Modelo

const Organizacion: Model<OrganizacionType> =
  mongoose.models.Organizacion ||
  mongoose.model<OrganizacionType>('Organizacion', orgazacionSchema)

export default Organizacion
