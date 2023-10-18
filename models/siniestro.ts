import mongoose, { Model, Schema } from 'mongoose'
import type { SiniestroType } from '../types'

// 1. Definición del Schema

let siniestroSchema: Schema<SiniestroType> = new mongoose.Schema<SiniestroType>(
  {
    //_id: ObjectId: Identificador único de documento
    Apellido_Conductor: {
      type: String
    },
    Apellido_y_Nombre: {
      type: String
    },
    Calle: {
      type: String
    },
    Causa: {
      type: String
    },
    Codigo_de_Productor: {
      type: String
    },
    Codigo_Postal: {
      type: String
    },
    Codigo_Producto: {
      type: String
    },
    Comiseria: {
      type: String
    },
    Contacto: {
      type: String
    },
    Danios_Propios: {
      type: String
    },
    Danios_Terceros: {
      type: String
    },
    Documento_Conductor: {
      type: String
    },
    Estado: {
      type: String
    },
    Fecha_de_creacion: {
      type: Date,
      require: true
    },
    Fecha_de_siniestro: {
      type: String
    },
    Fecha_de_ultima_actualizacion: {
      type: String
    },
    Fecha_siniestro: {
      type: String
    },
    Hora: {
      type: String
    },
    ID: {
      type: String
    },
    Lesiones_Terceros: {
      type: String
    },
    Localidad: {
      type: String
    },
    Nombre_Conductor: {
      type: String
    },
    Numero: {
      type: String
    },
    Numero_de_Documento: {
      type: String
    },
    Numero_de_Siniestro: {
      type: String
    },
    Numero_de_Siniestro_Nuevo: {
      type: String
    },
    Oficina: {
      type: String
    },
    Pais: {
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
    Tomador_Riesgo: {
      type: String
    }
  }
)

// 2. Definición del Modelo

const Siniestro: Model<SiniestroType> =
  mongoose.models.Siniestro ||
  mongoose.model<SiniestroType>('Siniestro', siniestroSchema)

export default Siniestro
