import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CityState {
  city: string;
}

const initialState: CityState = {
  city: 'No city selected',
};
export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        changeCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
     },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
