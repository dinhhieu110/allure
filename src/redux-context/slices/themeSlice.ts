import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
    value: string
  }
  
  // const localStoredTheme = localStorage.getItem("theme")

  // const initialState: themeState =localStoredTheme?JSON.parse(localStoredTheme) :{ value :""}
// console.log(initialState);
const initialState: themeState = { value: "Cobalt" }

  
  export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      changeTheme: (state, action: PayloadAction<string>) => {
        state.value = action.payload;

        // localStorage.setItem("theme", JSON.stringify(state));
      },
    },  
  })
  
  // Action creators are generated for each case reducer function
  export const { changeTheme } = themeSlice.actions
  
  export default themeSlice.reducer