import axios from 'axios'

const API_URL='https://localhost:7220/api/Events/'


//Create event

const createEvent = async(eventData ,token)=>{

 const config = {
    headers :{
        Authorization : `Bearer ${token}`,
        'content-type': 'multipart/form-data',
    }
 }

    const response = await axios.post(API_URL,eventData,config)
  
    return response.data
}
//get all event 

const getEvents = async(token)=>{
    const config = {
       headers :{
           Authorization : `Bearer ${token}`,
          
       }
    }
   
       const response = await axios.get(API_URL,config)
     
       return response.data
   }

   //get  event 

const getEvent = async(eventId,token)=>{
    const config = {
       headers :{
           Authorization : `Bearer ${token}`
       }
    }
   
       const response = await axios.get(API_URL+eventId,config)
     
       return response.data
   }

   //upate event
const updatEvent = async(eventData,token)=>{
    const config = {
       headers :{
           Authorization : `Bearer ${token}`,
           'content-type': 'multipart/form-data',
       }
    }
   
       const response = await axios.put(API_URL,eventData,config)
     
       return response.data
   }

   // delet event
   const deleteEvent = async(eventId,token)=>{
    const config = {
       headers :{
           Authorization : `Bearer ${token}`
       }
    }
   
    const response = await axios.delete(API_URL+eventId,config)
     
       return response.data
   }

const eventService = {createEvent,getEvents , getEvent, updatEvent ,deleteEvent}

export default eventService ;