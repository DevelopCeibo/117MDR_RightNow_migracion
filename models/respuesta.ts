import mongoose, { Model, Schema } from 'mongoose'
import type { RespuestaType } from '../types'

// 1. Definición del Schema

let respuestaSchema: Schema<RespuestaType> = new mongoose.Schema<RespuestaType>(
  {
    //_id: ObjectId: Identificador único de documento
    Nro_Incidente: {
      type: String,
      require: true
    },
    Clave_ajena: {
      type: String
      //require: true
    },
    Cuenta: {
      type: String
      //require: true
    },
    Fecha_de_creacion: {
      type: Date,
      require: true
    },
    ID_de_contacto: {
      type: String
      //require: true
    },
    ID_de_cuenta_de_canal: {
      type: String
      //require: true
    },
    ID_de_hilo_del_incidente: {
      type: String
      //require: true
    },
    Secuencia: {
      type: String
      //require: true
    },
    Texto: {
      type: String
      //require: true
    },
    Tipo_de_entrada_de_hilo: {
      type: String
      //require: true
    },
    Peso: {
      type: String
    }
  }
)

// 2. Definición del Modelo

const Respuesta: Model<RespuestaType> =
  mongoose.models.Respuesta ||
  mongoose.model<RespuestaType>('Respuesta', respuestaSchema)

export default Respuesta
