import mongoose, { Model, Schema } from 'mongoose'
import type { ProductorType } from '../types'

// 1. Definición del Schema

let productorSchema: Schema<ProductorType> = new mongoose.Schema<ProductorType>(
  {
    //_id: ObjectId: Identificador único de documento
    Cliensec: {
      type: String
    },
    CodigoCompleto: {
      type: String
    },
    DniCuit: {
      type: String
    },
    EjecutivoCuenta: {
      type: String
    },
    Gerente: {
      type: String
    },
    GrupoOrganizador: {
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
    UnidadDeNegocio: {
      type: String
    }
  }
)

// 2. Definición del Modelo

const Productor: Model<ProductorType> =
  mongoose.models.Productor ||
  mongoose.model<ProductorType>('Productor', productorSchema)

export default Productor
