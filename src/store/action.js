import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  LoadQuests: 'data/loadQuests',
  LoadQuest: 'data/loadQuest',
  LoadQuestComplete: 'data/loadQuestComplete',
  LoadQuestError: 'data/loadQuestError',
  SetFilter: 'app/setFilter',
  SetMenuItem: 'app/setMenuItem',
  UserBookQuest: 'user/userBookQuest',
}

const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);

const loadQuest = createAction(ActionType.LoadQuest);
const loadQuestError = createAction(ActionType.LoadQuestError);

const loadQuestComplete = createAction(
  ActionType.LoadQuestComplete,
  (quest) => ({
    payload: quest,
  }),
);

const setFilter = createAction(
  ActionType.SetFilter,
  (filter) => ({
    payload: filter,
  }),
);

const setMenuItem = createAction(
  ActionType.SetMenuItem,
  (menuitem) => ({
    payload: menuitem,
  }),
);

const userBookQuest = createAction(
  ActionType.UserBookQuest,
  (bookFormStatus) => ({
    payload: bookFormStatus,
  }),
);

export {loadQuests, loadQuest, loadQuestComplete, loadQuestError, setFilter, userBookQuest, setMenuItem};
