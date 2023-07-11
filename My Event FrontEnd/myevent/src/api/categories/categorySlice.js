import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";


const initialState = {
   categories : [],
    category : {} ,
    isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  };
export const categorySlice = createSlice ({
    name : "category" ,
    initialState , 
    reducers: {
         reset: (state) => {
    
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = false;
          state.message = "";
        },
      },
            extraReducers: (builder) => {
                builder
                .addCase(createCategiry.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(createCategiry.fulfilled, (state) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                  
                  })
                  .addCase(createCategiry.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                     state.message = action.payload;
                  })
                  .addCase(getCategories.pending, (state) => {
                    state.isLoading = true;
                  })
                  .addCase(getCategories.fulfilled, (state,action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.categories = action.payload;
                  })
                  .addCase(getCategories.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                  })
                 
              },
           });
            

  export const createCategiry = createAsyncThunk(
    "category/create",
    async (categoryData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await categoryService.createCategiry(categoryData ,token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message = "User Name must be with a minimum length of '6'." ;
        } else if (error.response.data.errors) {
          message ="Passwords must have at least one non alphanumeric character, Passwords must have at least one digit (0-9), Passwords must have at least one uppercase (A-Z)";
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getCategories = createAsyncThunk(
    "category/getAll",
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await categoryService.getCategories(token);
      } catch (error) {
        var message = "";
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (error.response.data.errors) {
          message = "User Name must be with a minimum length of '6'." ;
        } else if (error.response.data.errors) {
          message ="Passwords must have at least one non alphanumeric character, Passwords must have at least one digit (0-9), Passwords must have at least one uppercase (A-Z)";
        }
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const { reset } = categorySlice.actions;
  export default categorySlice.reducer;
  