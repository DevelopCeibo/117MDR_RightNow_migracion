import mongoose, { Model, Schema } from 'mongoose'
import type { ProductorType } from '../types'

// 1. Definición del Schema

let productorSchema: Schema<ProductorType> = new mongoose.Schema<ProductorType>(
  {
    //_id: ObjectId: Identificador único de documento
    Cliensec: {
      type: String
    },
    Codigo_Completo: {
      type: String
    },
    Dni_Cuit: {
      type: String
    },
    Ejecutivo_Cuenta: {
      type: String
    },
    Gerente: {
      type: String
    },
    Grupo_Organizador: {
      type: String
    },
    ID: {
      type: String
    },
    Nombre: {
      type: String
    },
    Segmentacion: {
      type: String
    },
    Unidad_De_Negocio: {
      type: String
    }
  }
)

// 2. Definición del Modelo

const Productor: Model<ProductorType> =
  mongoose.models.Productor ||
  mongoose.model<ProductorType>('Productor', productorSchema)

export default Productor
