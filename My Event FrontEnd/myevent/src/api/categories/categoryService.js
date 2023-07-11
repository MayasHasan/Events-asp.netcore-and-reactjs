import axios from 'axios'

const API_URL='https://localhost:7220/api/Category/'


const createCategiry = async(categoryData ,token)=>{
    const config = {
       headers :{
           Authorization : `Bearer ${token}`
       }
    }
   
       const response = await axios.post(API_URL,categoryData,config)
     
       return response.data
   }
   //get all Categiry 
   
   const getCategories = async(token)=>{
       const config = {
          headers :{
              Authorization : `Bearer ${token}`
          }
       }
      
          const response = await axios.get(API_URL+"allwithevents?includeHistory=false",config)
        
          return response.data
      }
   

      const categiryService = {createCategiry,getCategories}

      export default categiryService ;