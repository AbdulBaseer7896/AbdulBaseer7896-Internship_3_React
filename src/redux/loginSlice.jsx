// src/features/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';


  const initialState = {
    email: localStorage.getItem('email') || null,
    password: localStorage.getItem('password') || null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  };    
  

const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const allUsers = action.payload.allUsers;

      let ifEmail = allUsers.some((person) => person.email === email);
      let ifPassword = allUsers.some((person) => person.password === password);
      
      if (ifEmail && ifPassword) {
        state.email = email;
        state.password = password;
        state.isLoggedIn = true;

        // Save to localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('isLoggedIn', 'true');
      }
      else{
        alert("your Email or password is wrong !!!")
      }
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;

      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('isLoggedIn');
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
