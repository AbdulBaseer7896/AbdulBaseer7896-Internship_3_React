// src/features/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";



const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
};



const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === 'abdulbasirqazi@gmail.com' && password === 'basir123') {
        state.email = email;
        state.password = password;
        state.isLoggedIn = true;
      }
      else{
        alert("your Email or password is wrong !!!")
      }
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
