import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const AppRoute = {
  Root: '/',
  Contacts: '/contacts',
  Quest: '/quest/:id',
};

const Level = {
  Easy: {
    en: 'easy',
    ru: 'легкий',
  },
  Medium: {
    en: 'medium',
    ru: 'средний',
  },
  Hard: {
    en: 'hard',
    ru: 'сложный',
  },
};

const Filter = {
  All: {
    type: '',
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  Adventures: {
    type: 'adventures',
    title: 'Приключения',
    icon: IconAdventures,
  },
  Horrors: {
    type: 'horror',
    title: 'Ужасы',
    icon: IconHorrors,
  },
  Mystic: {
    type: 'mystic',
    title: 'Мистика',
    icon: IconMystic,
  },
  Detective: {
    type: 'detective',
    title: 'Детектив',
    icon: IconDetective,
  },
  Scifi: {
    type: 'sci-fi',
    title: 'Sci-fi',
    icon: IconScifi,
  },
};

const ApiRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const ServiceMessage = {
  ServerFail: 'Сервер не отвечает, попробуйте позже',
  QuestFail: 'Что-то пошло не так',
  SendFail: 'Что-то пошло не так при отправке, попробуйте еще раз',
};

const BookFormStatus = {
  Uploading: 'UPLOADING',
  Uploaded: 'UPLOADED',
  NotUploaded: 'NOT_UPLOADED',
  Unknown: 'UNKNOWN',
};

const Menu = {
  Quests: {
    title: 'Квесты',
    route: AppRoute.Root,
  },
  Beginners: {
    title: 'Новичкам',
    route: '#!',
  },
  Reviews: {
    title: 'Отзывы',
    route: '#!',
  },
  Sales: {
    title: 'Акции',
    route: '#!',
  },
  Contacts: {
    title: 'Контакты',
    route: AppRoute.Contacts,
  },
};

export {AppRoute, Level, Filter, ServiceMessage, ApiRoute, BookFormStatus, Menu};
