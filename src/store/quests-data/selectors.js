import { NameSpace } from '../root-reducer';

const getQuests = (state) => state[NameSpace.Quests].quests;
const getQuest = (state) => state[NameSpace.Quests].quest;
const getIsDataLoaded = (state) => state[NameSpace.Quests].isDataLoaded;
const getIsQuestLoading = (state) => state[NameSpace.Quests].isQuestLoading;
const getIsQuestError = (state) => state[NameSpace.Quests].isQuestError;

export {getQuests, getQuest, getIsDataLoaded, getIsQuestLoading, getIsQuestError};
