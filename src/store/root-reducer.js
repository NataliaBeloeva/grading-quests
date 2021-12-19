import {combineReducers} from 'redux';
import { filterData } from './filter-data/filter-data';
import { questsData } from './quests-data/quests-data';
import { userData } from './user-data/user-data';

const NameSpace  = {
  Quests: 'QUESTS',
  Filter: 'FILTER',
  User: 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsData,
  [NameSpace.Filter]: filterData,
  [NameSpace.User]: userData,

});

export {NameSpace, rootReducer};
