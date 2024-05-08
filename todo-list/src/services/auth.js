import axios from 'axios'

const API_KEY = 'AIzaSyBJpDd7W17b1kG3b8NoO3XjQoq7rKnMVDo';

const URL_API = 'https://identitytoolkit.googleapis.com/v1/accounts:'
           
const authenticate = async (mode, email, password) => {
    try {
        const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
            email: email,
            password: password,
            returnSecureToken: true
        })
        console.log(response.data)
        return response.data.idToken
    } catch(err) {
        console.log(err)
    }
}

export const createUser = async (email, password) => {
    const token = await authenticate("signUp", email, password)
    return token
}
export const login = async (email, password) => {
    const token = await authenticate("signInWithPassword", email, password)
    return token
}