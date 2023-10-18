import mongoose, { Model, Schema } from 'mongoose'
import type { PolizaType } from '../types'

// 1. Definición del Schema

let polizaSchema: Schema<PolizaType> = new mongoose.Schema<PolizaType>({
  //_id: ObjectId: Identificador único de documento
  Acreedor_Prendario_Hipotecario: {
    type: String
  },
  Actualizado_por: {
    type: String
  },
  Bolso_Compra: {
    type: String
  },
  Canal_de_cobro: {
    type: String
  },
  Codigo_Productor: {
    type: String
  },
  Compania: {
    type: String
  },
  Condicion_de_IVA: {
    type: String
  },
  Contacto: {
    type: String
  },
  Creado_por: {
    type: String
  },
  E_Cupones: {
    type: String
  },
  E_Poliza: {
    type: String
  },
  Estado: {
    type: String
  },
  Fecha_de_creacion: {
    type: Date,
    required: true
  },
  Fecha_de_Emision: {
    type: String
  },
  Fecha_de_ultima_actualizacion: {
    type: String
  },
  Fecha_Siniestro: {
    type: String
  },
  Grupo_de_afinidad: {
    type: String
  },
  Grupo_Organizador: {
    type: String
  },
  ID: {
    type: String
  },
  Numero_de_cuenta: {
    type: String
  },
  Numero_de_Cuenta_Enmascarado: {
    type: String
  },
  Organizador: {
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
  SubRamo: {
    type: String
  },
  Sucursal: {
    type: String
  },
  Tipo_de_cuenta: {
    type: String
  },
  Tomador_Riesgo: {
    type: String
  },
  Vendedor: {
    type: String
  },
  Vigencia_Desde: {
    type: String
  },
  Vigencia_Hasta: {
    type: String
  }
})

// 2. Definición del Modelo

const Poliza: Model<PolizaType> =
  mongoose.models.Poliza || mongoose.model<PolizaType>('Poliza', polizaSchema)

export default Poliza
