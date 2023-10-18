import mongoose, { Model, Schema } from 'mongoose'
import type { NotaPrivadaType } from '../types'

// 1. Definición del Schema

let notaPrivadaSchema: Schema<NotaPrivadaType> =
  new mongoose.Schema<NotaPrivadaType>({
    //_id: ObjectId: Identificador único de documento
    Nro_de_referencia: {
      type: String,
      require: true
    },
    ID_de_incidente: {
      type: String,
      require: true
    },
    ID_de_hilo_del_incidente: {
      type: String,
      require: true
    },
    Fecha_de_creacion: {
      type: Date,
      require: true
    },
    Fecha_de_cierre: {
      type: String
      //require: true
    },
    Modo_de_Contacto: {
      type: String
      //require: true
    },
    Jerarquia_de_categoria: {
      type: String
      //require: true
    },
    ID_de_categoria: {
      type: String
      //require: true
    },
    Estado: {
      type: String
      //require: true
    },
    Texto: {
      type: String
      //require: true
    }
  })

// 2. Definición del Modelo

const NotaPrivada: Model<NotaPrivadaType> =
  mongoose.models.NotaPrivada ||
  mongoose.model<NotaPrivadaType>('NotaPrivada', notaPrivadaSchema)

export default NotaPrivada
