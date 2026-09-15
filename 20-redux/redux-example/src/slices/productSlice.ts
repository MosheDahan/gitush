import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    price:number;
}

interface ProductState {
    product: Product | null;
}

const initialState: ProductState = {
    product: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        selectProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;;
        },
        clearProduct: (state) => {
            state.product = null;
        }
     },
});

export const { selectProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
