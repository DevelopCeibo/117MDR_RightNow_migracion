import mongoose, { Model, Schema } from 'mongoose'
import type { TipoIncidenteType } from '../types'

// 1. Definición del Schema

let tipoIncidenteSchema: Schema<TipoIncidenteType> =
  new mongoose.Schema<TipoIncidenteType>({
    //_id: ObjectId: Identificador único de documento
    Descripcion: {
      type: String
    },
    Display_Order: {
      type: String
    },
    ID: {
      type: String
    }
  })

// 2. Definición del Modelo

const TipoIncidente: Model<TipoIncidenteType> =
  mongoose.models.TipoIncidente ||
  mongoose.model<TipoIncidenteType>('TipoIncidente', tipoIncidenteSchema)

export default TipoIncidente
