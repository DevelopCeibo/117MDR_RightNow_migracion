import axios from 'axios'

export async function fetchContactos(
  page: number,
  limit: number,
  modelName: string,
  contactoApellido?: string,
  contactoDni?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      contactoDni: contactoDni,
      contactoApellido: contactoApellido,
      creationDate: creationDate
    }
  })
  return response.data
}
