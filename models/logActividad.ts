import mongoose, { Model, Schema } from 'mongoose'
import type { LogActividadType } from '../types'

// 1. Definición del Schema

let logActividadSchema: Schema<LogActividadType> =
  new mongoose.Schema<LogActividadType>({
    //_id: ObjectId: Identificador único de documento
    ID_de_contacto: {
      type: String
    },
    ID_de_incidente: {
      type: String
    },
    Fecha: {
      type: String
    },
    Sector: {
      type: String
    },
    Asesor: {
      type: String,
      require: true
    },
    Accion_realizada: {
      type: String,
      require: true
    },
    Descripcion: {
      type: String
    },
    ID_de_tipo_de_transaccion: {
      type: String
    },
    Inicial: {
      type: String
    },
    Direccion_IP_del_cliente: {
      type: String
    }
  })

// 2. Definición del Modelo

const LogActividad: Model<LogActividadType> =
  mongoose.models.LogActividad ||
  mongoose.model<LogActividadType>('LogActividad', logActividadSchema)

export default LogActividad
