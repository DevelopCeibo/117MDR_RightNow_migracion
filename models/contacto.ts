import mongoose, { Model, Schema } from 'mongoose'
import type { ContactoType } from '../types'

// 1. Definición del Schema

const contactoSchema: Schema<ContactoType> = new Schema<ContactoType>({
  //_id: ObjectId: Identificador único de documento
  AceptaEnvioInformacion: {
    type: String
  },
  Apellido: {
    type: String
  },
  Calle: {
    type: String
  },
  'Codigo Postal': {
    type: String
  },
  Conexión: {
    type: String
  },
  Conflictivo: {
    type: String
  },
  'Correo electrónico no válido': {
    type: String
  },
  'Correo-E alternativo 1': {
    type: String
  },
  'Correo-E alternativo 2': {
    type: String
  },
  Departamento: {
    type: String
  },
  'Dirección de correo electrónico': {
    type: String
  },
  Dni: {
    type: String
  },
  'Fecha Alta': {
    type: String
  },
  'Fecha de creación': {
    type: Date
  },
  'Fecha de última actualización': {
    type: String
  },
  FechaRechazoOp: {
    type: String
  },
  'ID de contacto': {
    type: String
  },
  'ID de usuario': {
    type: String
  },
  'ID en AIS': {
    type: String
  },
  'Id en BI': {
    type: String
  },
  Localidad: {
    type: String
  },
  Marca_ADS: {
    type: String
  },
  'No Molestar': {
    type: String
  },
  Nombre: {
    type: String
  },
  'Nombre completo': {
    type: String
  },
  'Número de Domicilio': {
    type: String
  },
  País: {
    type: String
  },
  Piso: {
    type: String
  },
  PolizaVida: {
    type: String
  },
  PolizaVida2: {
    type: String
  },
  PolizaVida3: {
    type: String
  },
  PolizaVida4: {
    type: String
  },
  Provincia: {
    type: String
  },
  'Teléfono de la oficina sin formato': {
    type: String
  },
  'Teléfono de oficina': {
    type: String
  },
  'Teléfono del asistente': {
    type: String
  },
  'Teléfono del asistente sin formato': {
    type: String
  },
  'Teléfono móvil': {
    type: String
  },
  'Teléfono móvil sin formato': {
    type: String
  },
  'Teléfono particular': {
    type: String
  },
  'Teléfono particular sin formato': {
    type: String
  },
  TipoDocumento: {
    type: String
  },
  Vendedor: {
    type: String
  }
})

// 2. Definición del Modelo

const Contacto: Model<ContactoType> =
  mongoose.models.Contacto || mongoose.model('Contacto', contactoSchema)

export default Contacto
