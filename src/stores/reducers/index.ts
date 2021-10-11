import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameInterface {
    id:number
}

interface NameSliceState {
    arraySlice: NameInterface[]
}

const initialState: NameSliceState = {
    arraySlice: []
}
export const nameSlice = createSlice({
    name: 'sliceName',
    initialState: initialState,
    reducers : {
        add : (state, action: PayloadAction<string>) => {
        
        }
    }
})

export  const { add } = nameSlice.actions;
