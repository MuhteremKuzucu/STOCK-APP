import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSucces:(state,{payload})=>{
      console.log(payload);
      state.currentUser=payload.data.username;
      state.token=payload.token;
      state.loading=true;
    },
    loginSucces:(state,{payload})=>{
      console.log(payload);
      state.currentUser=payload.data.username;
      state.token=payload.token;
      state.loading=true;
      state.isAdmin=payload.user.isAdmin;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail,registerSucces,loginSucces} = authSlice.actions;
export default authSlice.reducer;
