import { createReducer } from '@reduxjs/toolkit';
import { Filter, Menu } from 'const';
import { setFilter, setMenuItem } from 'store/action';

const initialState = {
  currentFilter: Filter.All.title,
  currentMenuItem: Menu.Quests.title,
};

const filterData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilter, (state, action) => {
      state.currentFilter = action.payload;
    })
    .addCase(setMenuItem, (state, action) => {
      state.currentMenuItem = action.payload;
    });
});

export {filterData};
