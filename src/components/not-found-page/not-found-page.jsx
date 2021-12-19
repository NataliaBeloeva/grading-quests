import * as S from './not-found-page.styled.js';
import { AppRoute } from 'const';

const NotFoundPage = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundTitle >404: Страница не найдена</S.NotFoundTitle>
      <S.NotFoundText><S.Link to={AppRoute.Root}>На главную страницу</S.Link></S.NotFoundText>
    </S.NotFoundContainer>
  );
}

export default NotFoundPage;
