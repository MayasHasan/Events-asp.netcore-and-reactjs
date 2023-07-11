import axios from 'axios'

const API_URL='https://localhost:7220/api/Account/'


// Register user 

const register = async(userData)=>{
    const response = await axios.post(API_URL +'register',userData)
    if (response.data) {
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


  const login = async(userData)=>{
    const response = await axios.post(API_URL+'authenticate',userData)
    if (response.data) {
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}



const logout =() =>{ localStorage.removeItem('user')}
const authService = {register ,login, logout}





export default authService ;