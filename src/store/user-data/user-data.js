import { createReducer } from '@reduxjs/toolkit';
import { BookFormStatus } from 'const';
import { userBookQuest } from 'store/action';

const initialState = {
  bookFormStatus: BookFormStatus.Unknown,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(userBookQuest, (state, action) => {
      state.bookFormStatus = action.payload;
    });
});

export {userData};
