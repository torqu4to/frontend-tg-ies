import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createSession = async (cpf, password) => { 
    return api.post('/login', { cpf, password })
}

export const createMembers = async (cpf, name, dob, tel, email) => {
    return api.post('/member', { cpf, name, dob, tel, email })
}

export const getMembers = async () => {
    return api.get('/member')
}

export const deleteMembers = async (id) => {
    return api.delete('/member/' + id)
}

export const updateMembers = async (id) => {
    return api.put(`/member/${id}`)
}