import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, loadQuestComplete, loadQuestError } from 'store/action';

const initialState = {
  quests: [],
  quest: null,
  isDataLoaded: false,
  isQuestLoading: false,
  isQuestError: false,
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadQuest, (state) => {
      state.isQuestLoading = true;
      state.isQuestError = false;
    })
    .addCase(loadQuestComplete, (state, action) => {
      state.quest = action.payload;
      state.isQuestLoading = false;
    })
    .addCase(loadQuestError, (state) => {
      state.isQuestLoading = false;
      state.isQuestError = true;
    });
});

export {questsData};
