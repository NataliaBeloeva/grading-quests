import ReactLoader from 'react-loader-spinner';
import * as S from './loader.styled.js';

const Loader = () => {
  return (
    <S.LoaderContainer>
      <ReactLoader type="ThreeDots" color="#F2890F" height={100} width={100} />
    </S.LoaderContainer>
  );
}

export default Loader;
