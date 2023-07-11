import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";


const initialState = {
   events : [],
    event : {} ,
    isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  };
export const eventSlice = createSlice ({
    name : "event" ,
    initialState , 
    reducers: {
         reset: (state) => {
          state.event = {};
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = false;
          state.message = "";
        },
      },
            extraReducers: (builder) => {
                builder
                .addCase(createEvent.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(createEvent.fulfilled, (state) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                  
                  })
                  .addCase(createEvent.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                     state.message = action.payload;
                  })
                  .addCase(getEvents.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(getEvents.fulfilled, (state,action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.events = action.payload;
                  })
                  .addCase(getEvents.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                  })
                   .addCase(getEvent.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(getEvent.fulfilled, (state,action) => {
                    state.isLoading = false;
                    state.event = action.payload;
                  })
                  .addCase(getEvent.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                  })
                  .addCase(updatEvent.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(updatEvent.fulfilled, (state,action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                     state.event = action.payload;
                  })
                  .addCase(updatEvent.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                  })
                  .addCase(deleteEvent.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(deleteEvent.fulfilled, (state,action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                     state.event = action.payload;
                  })
                  .addCase(deleteEvent.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                  })
                 
              },
           });
            

  export const createEvent = createAsyncThunk(
    "event/create",
    async (eventData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await eventService.createEvent(eventData ,token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message = "Sorry there is something wrong" ;
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
         }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getEvents = createAsyncThunk(
    "event/getAll",
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await eventService.getEvents(token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getEvent = createAsyncThunk(
    "event/getById ",
    async (evnetId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await eventService.getEvent(evnetId,token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const updatEvent = createAsyncThunk(
    "event/update ",
    async (eventData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await eventService.updatEvent(eventData,token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  
  export const deleteEvent = createAsyncThunk(
    "event/delete ",
    async (evnetId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await eventService.deleteEvent(evnetId,token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        } else if (error.response.data.errors) {
          message ="Sorry there is something wrong"
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


export const { reset } = eventSlice.actions;
export default eventSlice.reducer;
