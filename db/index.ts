// mongodb conection
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/zurichdb'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Base de datos conectada')
  } catch (error: any) {
    console.error('Error al conectar a la base de datos:', error.message)
    process.exit(1) // Termina el proceso de la aplicación si no se puede conectar a la base de datos
  }
}

export default connectDB
