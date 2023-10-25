import { Document } from 'mongoose'

export interface IncidenteType extends Document {
  Nro_de_referencia: string
  Actualizado_por: string
  Asunto: string
  Buzon_de_correo: string
  Cola: string
  Creado_por_cuenta: string
  Modo_de_Contacto: string
  Usuario_Intra: string
  Tipo_de_Incidente: string
  Tipo_de_estado: string
  Tipo_Cobro: string
  Siniestro: string
  Poliza: string
  Nro_Cuenta: string
  ID_de_producto?: string
  ID_de_incidente: string
  ID_de_disposicion?: string
  ID_de_contacto: string
  ID_de_categoria: string
  Grupo: string
  Fecha_Efecto: string
  Fecha_de_ultima_respuesta: string
  Fecha_de_ultima_actualizacion: string
  Fecha_de_creacion: Date
  Fecha_de_cierre: string
  Estado: string
  Cuenta_asignada?: string
  ID_de_organizacion?: string
}

export interface RespuestaType extends Document {
  Nro_Incidente: string
  Clave_ajena: string
  Cuenta: string
  Fecha_de_creacion: Date
  ID_de_contacto: string
  ID_de_cuenta_de_canal: string
  ID_de_hilo_del_incidente: string
  Secuencia: string
  Texto: string
  Tipo_de_entrada_de_hilo: string
  Peso: string
}

export interface NotaPrivadaType extends Document {
  Nro_de_referencia: string
  ID_de_incidente: string
  ID_de_hilo_del_incidente: string
  Fecha_de_creacion: Date
  Fecha_de_cierre: string
  Modo_de_Contacto: string
  Jerarquia_de_categoria: string
  ID_de_categoria: string
  Estado: string
  Texto: string
}

export interface ContactoType extends Document {
  Acepta_Envio_Informacion: string
  Apellido: string
  Calle: string
  Codigo_Postal: string
  Conexion: string
  Conflictivo: string
  Correo_electronico_no_valido: string
  Correo_E_alternativo_1: string
  Correo_E_alternativo_2: string
  Departamento: string
  Direccion_de_correo_electronico: string
  DNI: string
  Fecha_Alta: string
  Fecha_de_creacion: Date
  Fecha_de_ultima_actualizacion: string
  Fecha_Rechazo_Op: string
  ID_de_contacto: string
  ID_de_usuario: string
  ID_en_AIS: string
  Id_en_BI: string
  Localidad: string
  Marca_ADS: string
  No_Molestar: string
  Nombre: string
  Nombre_completo: string
  Numero_de_domicilio: string
  Pais: string
  Piso: string
  Poliza_Vida: string
  Poliza_Vida_2: string
  Poliza_Vida_3: string
  Poliza_Vida_4: string
  Provincia: string
  Telefono_de_la_oficina_sin_formato: string
  Telefono_de_oficina: string
  Telefono_del_asistente: string
  Telefono_del_asistente_sin_formato: string
  Telefono_movil: string
  Telefono_movil_sin_formato: string
  Telefono_particular: string
  Telefono_particular_sin_formato: string
  Tipo_Documento: string
  Vendedor: string
}

export interface LogActividadType extends Document {
  ID_de_contacto: string
  ID_de_incidente: string
  Fecha: string
  Sector: string
  Asesor: string
  Accion_realizada: string
  Descripcion: string
  ID_de_tipo_de_transaccion: string
  Inicial: string
  Direccion_IP_del_cliente: string
}

export interface TareaType extends Document {
  Asignado: string
  Fecha_de_creacion: Date
  Fecha_de_inicio: string
  Fecha_de_ultima_actualizacion: string
  Fecha_de_vencimiento: string
  Herencia: string
  ID_de_contacto: string
  ID_de_incidente: string
  Motivo: string
  Nombre: string
  Notas: string
  Plantilla_de_tarea: string
}

export interface OrganizacionType extends Document {
  Estado: string
  Fecha_de_creacion: Date
  Fecha_de_ultima_actualizacion: string
  ID_de_organizacion: string
  Jerarquia_de_organizacion_Nivel_1: string
  Nombre_de_organizacion: string
  Vendedor: string
}

export interface PolizaType extends Document {
  Acreedor_Prendario_Hipotecario: string
  Actualizado_por: string
  Bolso_Compra: string
  Canal_de_cobro: string
  Codigo_Productor: string
  Compania: string
  Condicion_de_IVA: string
  Contacto: string
  Creado_por: string
  E_Cupones: string
  E_Poliza: string
  Estado: string
  Fecha_de_creacion: Date
  Fecha_de_Emision: string
  Fecha_de_ultima_actualizacion: string
  Fecha_Siniestro: string
  Grupo_de_afinidad: string
  Grupo_Organizador: string
  ID: string
  Numero_de_cuenta: string
  Numero_de_Cuenta_Enmascarado: string
  Organizador: string
  Poliza: string
  Producto: string
  Productor: string
  SubRamo: string
  Sucursal: string
  Tipo_de_cuenta: string
  Tomador_Riesgo: string
  Vendedor: string
  Vigencia_Desde: string
  Vigencia_Hasta: string
}
export interface ProductorType extends Document {
  Cliensec: string
  Codigo_Completo: string
  Dni_Cuit: string
  Ejecutivo_Cuenta: string
  Gerente: string
  Grupo_Organizador: string
  ID: string
  Nombre: string
  Segmentacion: string
  Unidad_De_Negocio: string
}

export interface RiesgoType extends Document {
  Contacto: string
  Detalle_de_Cobertura: string
  Detalle_de_Riesgo: string
  Estado: string
  Fecha_de_creacion: Date
  Fecha_de_ultima_actualizacion: string
  ID: string
  Id_Tipo_Riesgo: string
  Numero_Poliza: string
  Patente: string
  Poliza: string
  Tomador_Riesgo: string
}

export interface SiniestroType extends Document {
  Apellido_Conductor: string
  Apellido_y_Nombre: string
  Calle: string
  Causa: string
  Codigo_de_Productor: string
  Codigo_Postal: string
  Codigo_Producto: string
  Comiseria: string
  Contacto: string
  Danios_Propios: string
  Danios_Terceros: string
  Documento_Conductor: string
  Estado: string
  Fecha_de_creacion: Date
  Fecha_de_siniestro: string
  Fecha_de_ultima_actualizacion: string
  Fecha_siniestro: string
  Hora: string
  ID: string
  Lesiones_Terceros: string
  Localidad: string
  Nombre_Conductor: string
  Numero: string
  Numero_de_Documento: string
  Numero_de_Siniestro: string
  Numero_de_Siniestro_Nuevo: string
  Oficina: string
  Pais: string
  Poliza: string
  Producto: string
  Productor: string
  Provincia: string
  Responsable: string
  Tomador_Riesgo: string
}

export interface TipoIncidenteType extends Document {
  Descripcion: string
  Display_Order: string
  ID: string
}

export interface ArchivoType extends Document {
  Nro_de_referencia: string
  Asociacion_de_tabla: string
  Clave_ajena: string
  Desactivado: string
  Descripcion: string
  Fecha_de_creacion: Date
  Fecha_de_ultima_actualizacion: string
  ID_de_archivo_anexo: string
  Indice_de_palabras_clave: string
  Nombre: string
  Nombre_de_archivo_de_usuario: string
  Nombre_de_archivo_local: string
  Privado: string
  Secuencia: string
  Tamanio: string
  Tipo: string
  Tipo_de_contenido: string
}
