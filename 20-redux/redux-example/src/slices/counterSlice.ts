import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state: { value: number }) => {
            state.value += 1;
        },

        decrement: (state: { value: number }) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },

        reset: (state: { value: number }) => {
            state.value = 0
        },
     },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
