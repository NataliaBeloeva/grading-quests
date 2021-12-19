import { Filter, Level } from "const";

const getLevel = (level) => {
  switch (level) {
    case Level.Easy.en:
      return Level.Easy.ru;
    case Level.Medium.en:
      return Level.Medium.ru;
    case Level.Hard.en:
      return Level.Medium.ru;
    default:
      return '';
  }
};

const getFilterType = (filtertype) => {
  switch (filtertype) {
    case Filter.Adventures.type:
      return Filter.Adventures.title;
    case Filter.Horrors.type:
      return Filter.Horrors.title;
    case Filter.Mystic.type:
      return Filter.Mystic.title;
    case Filter.Detective.type:
      return Filter.Detective.title;
    case Filter.Scifi.type:
      return Filter.Scifi.title;
    default:
      return '';
  }
};

export {getLevel, getFilterType};
