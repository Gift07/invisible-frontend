import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
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
      const res = await axios.post("/auth/jwt/tokens", formdata);

      return res.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);
