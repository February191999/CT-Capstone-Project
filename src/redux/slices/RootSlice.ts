import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Cat Name',
        breed: 'Cat Breed',
        color: 'Cat Color',
        owner_name: 'Owner Name',
        owner_contact_number: 'Owner Contact Number',
    },
    reducers: {
        chooseCatName: (state, action) => { state.name = action.payload},
        chooseCatBreed: (state, action) => { state.breed = action.payload},
        chooseCatColor: (state, action) => { state.color = action.payload},
        chooseOwnerName: (state, action) => { state.owner_name = action.payload},
        chooseOwnerContactNumber: (state, action) => { state.owner_contact_number = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCatName, chooseCatBreed, chooseCatColor, chooseOwnerContactNumber, chooseOwnerName } = rootSlice.actions;