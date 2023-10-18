import mongoose, { Model, Schema } from 'mongoose'
import type { ArchivoType } from '../types'

// 1. Definición del Schema

const archivoSchema: Schema<ArchivoType> = new Schema<ArchivoType>({
  //_id: ObjectId: Identificador único de documento
  Nro_de_referencia: {
    type: String,
    required: true
  },
  Asociacion_de_tabla: {
    type: String
  },
  Clave_ajena: {
    type: String
  },
  Desactivado: {
    type: String
  },
  Descripcion: {
    type: String
  },
  Fecha_de_creacion: {
    type: Date,
    required: true
  },
  Fecha_de_ultima_actualizacion: {
    type: String
  },
  ID_de_archivo_anexo: {
    type: String
  },
  Indice_de_palabras_clave: {
    type: String
  },
  Nombre: {
    type: String
  },
  Nombre_de_archivo_de_usuario: {
    type: String
  },
  Nombre_de_archivo_local: {
    type: String
  },
  Privado: {
    type: String
  },
  Secuencia: {
    type: String
  },
  Tamanio: {
    type: String
  },
  Tipo: {
    type: String
  },
  Tipo_de_contenido: {
    type: String
  }
})

// 2. Definición del Modelo

const Archivo: Model<ArchivoType> =
  mongoose.models.Archivo || mongoose.model('Archivo', archivoSchema)

export default Archivo
