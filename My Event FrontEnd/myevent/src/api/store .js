import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import  eventReducer  from './events/eventSlice'
import  categoryReducer  from './categories/categorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event : eventReducer,
    category : categoryReducer

  },
})