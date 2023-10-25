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
    Fecha_de_creacion: {
      type: Date,
      require: true
    },
    Fecha_de_ultima_actualizacion: {
      type: String
    },
    ID_de_organizacion: {
      type: String
    },
    Jerarquia_de_organizacion_Nivel_1: {
      type: String
    },
    Nombre_de_organizacion: {
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
