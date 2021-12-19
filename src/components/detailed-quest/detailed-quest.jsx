import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { getLevel, getFilterType } from 'utils';
import { getIsQuestError, getIsQuestLoading, getQuest } from 'store/quests-data/selectors';
import { fetchQuest } from 'store/api-action';
import Loader from 'components/loader/loader';
import NotFoundPage from 'components/not-found-page/not-found-page';

const DetailedQuest = () => {
  const quest = useSelector(getQuest);
  const isQuestLoading = useSelector(getIsQuestLoading);
  const isQuestError = useSelector(getIsQuestError);

  const {id} = useParams();
  const dispatch = useDispatch();

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  useEffect(() => {
    dispatch(fetchQuest(id));;
  },[dispatch, id]);

  const renderQuest = () => {
    if (isQuestLoading) {
      return <Loader />;
    }

    if (quest) {
      return (
        <S.Main>
          <S.PageImage
            src={`../${quest.coverImg}`}
            alt={`Квест ${quest.title}`}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{quest.title}</S.PageTitle>
              <S.PageSubtitle>{getFilterType(quest.type)}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{quest.peopleCount.join('-')} чел</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{getLevel(quest.level)}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>{quest.description}</S.QuestDescription>

              <S.QuestBookingBtn onClick={handleBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal onCloseBtnClick={handleBookingBtnClick}/>}
        </S.Main>
      );
    }
  }

  return (
    <div>
      {isQuestError ?
        <NotFoundPage /> :
        <MainLayout>
          {renderQuest()}
        </MainLayout>
      }
    </div>
  );
};

export default DetailedQuest;
