import mongoose, { Model, Schema } from 'mongoose'
import type { ContactoType } from '../types'

// 1. Definición del Schema

const contactoSchema: Schema<ContactoType> = new Schema<ContactoType>({
  //_id: ObjectId: Identificador único de documento
  Acepta_Envio_Informacion: {
    type: String
  },
  Apellido: {
    type: String
  },
  Calle: {
    type: String
  },
  Codigo_Postal: {
    type: String
  },
  Conexion: {
    type: String
  },
  Conflictivo: {
    type: String
  },
  Correo_electronico_no_valido: {
    type: String
  },
  Correo_E_alternativo_1: {
    type: String
  },
  Correo_E_alternativo_2: {
    type: String
  },
  Departamento: {
    type: String
  },
  Direccion_de_correo_electronico: {
    type: String
  },
  DNI: {
    type: String
  },
  Fecha_Alta: {
    type: String
  },
  Fecha_de_creacion: {
    type: Date
  },
  Fecha_de_ultima_actualizacion: {
    type: String
  },
  Fecha_Rechazo_Op: {
    type: String
  },
  ID_de_contacto: {
    type: String
  },
  ID_de_usuario: {
    type: String
  },
  ID_en_AIS: {
    type: String
  },
  Id_en_BI: {
    type: String
  },
  Localidad: {
    type: String
  },
  Marca_ADS: {
    type: String
  },
  No_Molestar: {
    type: String
  },
  Nombre: {
    type: String
  },
  Nombre_completo: {
    type: String
  },
  Numero_de_domicilio: {
    type: String
  },
  Pais: {
    type: String
  },
  Piso: {
    type: String
  },
  Poliza_Vida: {
    type: String
  },
  Poliza_Vida_2: {
    type: String
  },
  Poliza_Vida_3: {
    type: String
  },
  Poliza_Vida_4: {
    type: String
  },
  Provincia: {
    type: String
  },
  Telefono_de_la_oficina_sin_formato: {
    type: String
  },
  Telefono_de_oficina: {
    type: String
  },
  Telefono_del_asistente: {
    type: String
  },
  Telefono_del_asistente_sin_formato: {
    type: String
  },
  Telefono_movil: {
    type: String
  },
  Telefono_movil_sin_formato: {
    type: String
  },
  Telefono_particular: {
    type: String
  },
  Telefono_particular_sin_formato: {
    type: String
  },
  Tipo_Documento: {
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
