import mongoose, { Model, Schema } from 'mongoose'
import type { IncidenteType } from '../types'

// 1. Definición del Schema

const incidenteSchema: Schema<IncidenteType> = new Schema<IncidenteType>({
  //_id: ObjectId: Identificador único de documento
  Nro_de_referencia: {
    type: String,
    required: true
  },
  Actualizado_por: {
    type: String
    //required: true
  },
  Asunto: {
    type: String
    //required: true
  },
  Buzon_de_correo: {
    type: String
    //required: true
  },
  Cola: {
    type: String
    //required: true
  },
  Creado_por_cuenta: {
    type: String
    //required: true
  },
  Modo_de_Contacto: {
    type: String
    //required: true
  },
  Usuario_Intra: {
    type: String
    //required: true
  },
  Tipo_de_Incidente: {
    type: String
    //required: true
  },
  Tipo_de_estado: {
    type: String
    //required: true
  },
  Tipo_Cobro: {
    type: String
    //required: true
  },
  Siniestro: {
    type: String
    //required: true
  },
  Poliza: {
    type: String
    //required: true
  },
  Nro_Cuenta: {
    type: String
    //required: true
  },
  ID_de_producto: {
    type: String
  },
  ID_de_incidente: {
    type: String
    //required: true
  },
  ID_de_disposicion: {
    type: String
  },
  ID_de_contacto: {
    type: String
    //required: true
  },
  ID_de_categoria: {
    type: String
    //required: true
  },
  Grupo: {
    type: String
    //required: true
  },
  Fecha_Efecto: {
    type: String
    //required: true
  },
  Fecha_de_ultima_respuesta: {
    type: String
    //required: true
  },
  Fecha_de_ultima_actualizacion: {
    type: String
    //required: true
  },
  Fecha_de_creacion: {
    type: Date,
    required: true
  },
  Fecha_de_cierre: {
    type: String
    //required: true
  },
  Estado: {
    type: String
    //required: true
  },
  Cuenta_asignada: {
    type: String
    //required: true
  },
  ID_de_organizacion: {
    type: String
    //required: true
  }
})

// 2. Definición del Modelo

const Incidente: Model<IncidenteType> =
  mongoose.models.Incidente || mongoose.model('Incidente', incidenteSchema)

export default Incidente
