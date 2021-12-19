import { toast } from 'react-toastify';
import { ApiRoute, BookFormStatus, ServiceMessage } from 'const';
import { loadQuests, loadQuest, loadQuestComplete, loadQuestError, userBookQuest } from './action';

const fetchQuests = () =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(ApiRoute.Quests);
      dispatch(loadQuests(data));
    } catch {
      toast.error(ServiceMessage.ServerFail);
    }
  };

const fetchQuest = (id) =>
  async (dispatch, _getState, api) => {
    dispatch(loadQuest());
    try {
      const {data} = await api.get(`${ApiRoute.Quests}/${id}`);
      dispatch(loadQuestComplete(data));
    } catch {
      dispatch(loadQuestError());
      toast.error(ServiceMessage.QuestFail);
    }
  };

const bookQuest = ({name, phone, peopleCount, isLegal}, closeForm) =>
  async (dispatch, _getState, api) => {
    dispatch(userBookQuest(BookFormStatus.Uploading));
    try {
      await api.post(ApiRoute.Orders, {name, phone, peopleCount, isLegal}, closeForm);
      dispatch(userBookQuest(BookFormStatus.Uploaded));
      closeForm();
    } catch {
      dispatch(userBookQuest(BookFormStatus.NotUploaded));
      toast.warn(ServiceMessage.SendFail);
    }
  };


export {fetchQuests, fetchQuest, bookQuest};
