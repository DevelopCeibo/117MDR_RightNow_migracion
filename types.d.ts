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

export interface ContactoType extends Document {
  AceptaEnvioInformacion: string
  Apellido: string
  Calle: string
  'Codigo Postal': string
  Conexión: string
  Conflictivo: string
  'Correo electrónico no válido': string
  'Correo-E alternativo 1': string
  'Correo-E alternativo 2': string
  Departamento: string
  'Dirección de correo electrónico': string
  Dni: string
  'Fecha Alta': string
  'Fecha de creación': Date
  'Fecha de última actualización': string
  FechaRechazoOp: string
  'ID de contacto': string
  'ID de usuario': string
  'ID en AIS': string
  'Id en BI': string
  Localidad: string
  Marca_ADS: string
  'No Molestar': string
  Nombre: string
  'Nombre completo': string
  'Número de Domicilio': string
  País: string
  Piso: string
  PolizaVida: string
  PolizaVida2: string
  PolizaVida3: string
  PolizaVida4: string
  Provincia: string
  'Teléfono de la oficina sin formato': string
  'Teléfono de oficina': string
  'Teléfono del asistente': string
  'Teléfono del asistente sin formato': string
  'Teléfono móvil': string
  'Teléfono móvil sin formato': string
  'Teléfono particular': string
  'Teléfono particular sin formato': string
  TipoDocumento: string
  Vendedor: string
}

export interface LogActividadType extends Document {
  'ID de contacto': string
  Fecha: string
  Sector: string
  Asesor: string
  'Acción realizada': string
  Descripción: string
  'ID de tipo de transacción': string
  Inicial: string
  'Dirección IP del cliente': string
}

export interface TareaType extends Document {
  Asignado: string
  'Fecha de creación': Date
  'Fecha de inicio': string
  'Fecha de última actualización': string
  'Fecha de vencimiento': string
  Herencia: string
  'ID de contacto': string
  'ID de incidente': string
  Motivo: string
  Nombre: string
  Notas: string
  'Plantilla de tarea': string
}

export interface OrganizacionType extends Document {
  Estado: string
  'Fecha de creación': Date
  'Fecha de última actualización': string
  'ID de organización': string
  'Jerarquía de organización - Nivel 1': string
  'Nombre de organización': string
  Vendedor: string
}
