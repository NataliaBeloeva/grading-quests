import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterType, getLevel } from 'utils';
import { Filter } from 'const';
import { getIsDataLoaded, getQuests } from 'store/quests-data/selectors';
import { getCurrentFilter } from 'store/filter-data/selectors';
import { setFilter } from 'store/action';
import Loader from 'components/loader/loader';

const QuestsCatalog = () => {
  const quests = useSelector(getQuests);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const currentFilter = useSelector(getCurrentFilter);

  const filteredQuests = quests.filter((quest) => currentFilter === getFilterType(quest.type) || currentFilter === Filter.All.title);

  const dispatch = useDispatch();

  const handleFilterChange = (title) => {
    dispatch(setFilter(title));
  };

  return (
    <>
      <S.Tabs>
        {Object.values(Filter).map((filter) => {
          const {title, icon: Icon} = filter;
          return (
            <S.TabItem key={title} onClick={() => handleFilterChange(title)}>
              <S.TabBtn isActive={currentFilter === title}>
                <Icon />
                <S.TabTitle>{title}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          );
        })}
      </S.Tabs>

      {!isDataLoaded ?
        <Loader /> :
        <S.QuestsList>
          {filteredQuests.map((quest) => {
            const {id, title, previewImg, level, peopleCount} = quest;
            return (
              <S.QuestItem key={id} id={id}>
                <S.QuestItemLink to={`/quest/${id}`}>
                  <S.Quest>
                    <S.QuestImage
                      src={previewImg}
                      width="344"
                      height="232"
                      alt={`квест ${title}`}
                    />

                    <S.QuestContent>
                      <S.QuestTitle>{title}</S.QuestTitle>

                      <S.QuestFeatures>
                        <S.QuestFeatureItem>
                          <IconPerson />
                          {peopleCount.join('-')} чел
                        </S.QuestFeatureItem>
                        <S.QuestFeatureItem>
                          <IconPuzzle />
                          {getLevel(level)}
                        </S.QuestFeatureItem>
                      </S.QuestFeatures>
                    </S.QuestContent>
                  </S.Quest>
                </S.QuestItemLink>
              </S.QuestItem>
            );
          })}
        </S.QuestsList>
      }
    </>
  );
};

export default QuestsCatalog;
