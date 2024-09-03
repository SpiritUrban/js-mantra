import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  email: string | null;
  password: string | null;
}

const initialState: Auth = {
  email: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setAuthData } = authSlice.actions;
export default authSlice.reducer;
