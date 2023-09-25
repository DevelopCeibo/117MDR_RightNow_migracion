import mongoose, { Model, Schema } from 'mongoose'
import type { PolizaType } from '../types'

// 1. Definición del Schema

let polizaSchema: Schema<PolizaType> = new mongoose.Schema<PolizaType>({
  //_id: ObjectId: Identificador único de documento
  'Acreedor Prendario/Hipotecario': {
    type: String
  },
  'Actualizado por': {
    type: String
  },
  Bolso_Compra: {
    type: String
  },
  'Canal de cobro': {
    type: String
  },
  CodigoProductor: {
    type: String
  },
  Compaña: {
    type: String
  },
  CondicionDeIVA: {
    type: String
  },
  Contact: {
    type: String
  },
  'Creado por': {
    type: String
  },
  'E-Cupones': {
    type: String
  },
  'E-Póliza': {
    type: String
  },
  Estado: {
    type: String
  },
  'Fecha de creación': {
    type: Date,
    required: true
  },
  'Fecha De Emisión': {
    type: String
  },
  'Fecha de última actualización': {
    type: String
  },
  FechaSiniestro: {
    type: String
  },
  'Grupo de afinidad': {
    type: String
  },
  'Grupo Organizador': {
    type: String
  },
  ID: {
    type: String
  },
  'Numero de cuenta': {
    type: String
  },
  'Numero de Cuenta Enmascarado': {
    type: String
  },
  Organizador: {
    type: String
  },
  Póliza: {
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
  'Tipo de cuenta': {
    type: String
  },
  TomadorRiesgo: {
    type: String
  },
  Vendedor: {
    type: String
  },
  'Vigencia Desde': {
    type: String
  },
  'Vigencia Hasta': {
    type: String
  }
})

// 2. Definición del Modelo

const Poliza: Model<PolizaType> =
  mongoose.models.Poliza || mongoose.model<PolizaType>('Poliza', polizaSchema)

export default Poliza
