import { createSlice } from "@reduxjs/toolkit";
import { SignUp } from "./action";

const initialState = {
  company_name: "",
  email: "",
  message: "",
  isAuthenticated: false,
  auth_loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(SignUp.pending, (state) => {
        state.auth_loading = true;
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.auth_loading = false;
        state.message = action.payload;
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.auth_loading = false;
        state.error = action.payload.message;
      });
  },
});

export default authSlice.reducer;
