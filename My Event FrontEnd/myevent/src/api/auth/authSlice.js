import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled,(state)=>{
        state.user=null})
  },
});

export const register = createAsyncThunk(
  "auth/regiter",
  async (user, thunkAPI) => {
    try {
      
      return await authService.register(user);
    } catch (error) {
      var message = "";
      if (error.response.data.error) {
        message = error.response.data.error;
      } else if (error.response.data.errors.UserName) {
        message = "User Name must be with a minimum length of '6'." ;
      } else if (error.response.data.errors.Password) {
        message ="Passwords must have at least one non alphanumeric character, Passwords must have at least one digit (0-9), Passwords must have at least one uppercase (A-Z)";
      }

      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    var message = "";
    if (error.response.data.error) {
      message = error.response.data.error;
    } else if (error.response.data.errors.UserName) {
      message = "User Name must be with a minimum length of '6'." ;
    } else if (error.response.data.errors.Password) {
      message ="Passwords must have at least one non alphanumeric character, Passwords must have at least one digit (0-9), Passwords must have at least one uppercase (A-Z)";
    }

    return thunkAPI.rejectWithValue(message);
  }
});


export const logout = createAsyncThunk("auth/logout", async () => {
   await authService.logout() 
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
