import { Document } from 'mongoose'

export interface IncidenteType extends Document {
  'Nº de referencia': string
  'Actualizado por': string
  Asunto: string
  'Buzón de correo': string
  Cola: string
  'Creado por cuenta': string
  'Modo de Contacto': string
  UsuarioIntra: string
  'Tipo de Incidente': string
  'Tipo de estado': string
  'Tipo Cobro': string
  Siniestro: string
  Poliza: string
  NroCuenta?: string
  'ID de producto'?: string
  'ID de incidente': string
  'ID de disposición'?: string
  'ID de contacto': string
  'ID de categoría': string
  Grupo: string
  FechaEfecto: string
  'Fecha de última respuesta': string
  'Fecha de última actualización': string
  'Fecha de creación': Date
  'Fecha de cierre': string
  Estado: string
  'Cuenta asignada'?: string
}

export interface RespuestaType extends Document {
  'Nro Incidente': string
  Texto: string
  'ID de hilo del incidente': string
  'Cabecera de correo': string
  'ID de contacto': string
  'Fecha de creación': Date
}
