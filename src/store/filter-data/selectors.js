import {NameSpace} from '../root-reducer';

const getCurrentFilter = (state) => state[NameSpace.Filter].currentFilter;
const getCurrentMenuItem = (state) => state[NameSpace.Filter].currentMenuItem;

export {getCurrentFilter, getCurrentMenuItem};
