import { Document } from 'mongoose'

export interface IncidenteType extends Document {
  'Nro Incidente': string
  Motivo: string
  'Registrado por': string
  Grupo: string
  'Buzón de correo': string
  Cliente: string
  Estado: string
  'Asignado a': string
  'Sector Responsable': string
  'Fecha de creación': Date
  Productor: string
  'Fecha de última actualización': Date
}

export interface RespuestaType extends Document {
  'Nro Incidente': string
  Texto: string
  'ID de hilo del incidente': number
  'Cabecera de correo': string
  'ID de contacto': string
  'Fecha de creación': Date
}
