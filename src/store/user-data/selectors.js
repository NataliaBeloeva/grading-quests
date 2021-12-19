import { NameSpace } from '../root-reducer';

const getBookFormStatus = (state) => state[NameSpace.User].bookFormStatus;

export {getBookFormStatus};
