import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosJSON } from "./apiSlice";
import { getAuth, signOut } from "firebase/auth";



const axios = AxiosJSON();

// worker Login Async
export const getUserByUnit = createAsyncThunk(
    "auth/getUser",
    async ({ getAuth }, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await axios.get(getAuth);
        // const { data } = await axios.get(`api/v1/user/${credentials}`);
        console.log(data);
        dispatch(getUserUnit(data.data));
      } catch (error) {
        console.log(error);
        dispatch(getUserFail(error.response.data));
        return rejectWithValue("An error occurred");
      }
    }
  );



  const initialState = {
    data: [],
    loading: false,
    error: false,
    errorMessage: null,
  };
  



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserUnit: (state, action) => {
      state.unitData = action.payload;
    },
    getUserFail: (state, action) => {
      state.error = true;
      state.loading = false;
      state.errorMessage = action.payload;
    },
    clearError: (state) => {
      state.error = false;
      state.errorMessage = null;
      state.loading = false;
      state.message = null;
    }
  },
});

export const {

  getUserUnit,
  getUserFail,
  clearError
} = authSlice.actions;

export default authSlice;