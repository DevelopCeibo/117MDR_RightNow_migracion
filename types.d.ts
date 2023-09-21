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
  'ID de organización'?: string
}

export interface RespuestaType extends Document {
  'Nro Incidente': string
  'Clave ajena': string
  Cuenta: string
  'Fecha de creación': Date
  'ID de contacto': string
  'ID de cuenta de canal': string
  'ID de hilo del incidente': string
  Secuencia: string
  Texto: string
  'Tipo de entrada de hilo': string
  Peso: string
}

export interface NotaPrivadaType extends Document {
  'Nº de referencia': string
  'Fecha de creación': Date
  'Fecha de cierre': string
  'Modo de Contacto': string
  'Jerarquía de categoría': string
  'ID de categoría': string
  Estado: string
  Texto: string
}
