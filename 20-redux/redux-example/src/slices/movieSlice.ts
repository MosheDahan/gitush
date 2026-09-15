import {createSlice} from '@reduxjs/toolkit';

const movierSlice = createSlice({
    name: "movie",
    initialState: {
        selectedMovie: ""
    },
    reducers: {
        selectAvatar: (state) => {
            state.selectedMovie = 'Avatar';
        },

        selectSpiderMan: (state) => {
           state.selectedMovie = 'Spider-Man'
        },

        selectInsideOut: (state) => {
            state.selectedMovie = 'Inside Out'
        },

        resetMovie: (state) => {
            state.selectedMovie = 'No movie selected'
        }
     },
});

export const { selectAvatar, selectSpiderMan, selectInsideOut, resetMovie } = movierSlice.actions;
export default movierSlice.reducer;
