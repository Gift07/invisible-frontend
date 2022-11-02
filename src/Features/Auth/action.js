import { createAsyncThunk } from "@reduxjs/toolkit";
import cookie from "cookie";
import axios from "../../axios";

export const SignUp = createAsyncThunk(
  "Auth/Signup",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", formdata);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const SignIn = createAsyncThunk(
  "Auth/SignIn",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/jwt/tokens", formdata);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
