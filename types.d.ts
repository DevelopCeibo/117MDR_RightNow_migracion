import { Document } from 'mongoose'

export interface IncidentType extends Document {
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
