import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState:  {
        languageValue: 'en'
    },
    reducers: {
        setHebrew: (state: { languageValue: string }) => {
            state.languageValue = 'he'
        },
        setEnglish: (state: { languageValue: string }) => {
            state.languageValue = 'en'
        }
    }
})

export const { setHebrew, setEnglish } = languageSlice.actions
export default languageSlice.reducer