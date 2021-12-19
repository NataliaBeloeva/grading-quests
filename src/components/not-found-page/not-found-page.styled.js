import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

const NotFoundContainer = styled.div`
  margin-top: 50px;
`;

const NotFoundTitle = styled.h1`
  font-size: 64px;
  line-height: 70px;
  text-align: center;
  color: white;
`;

const NotFoundText = styled.p`
  text-align: center;
`;

const Link = styled(RouterLink)`
  color: #F2890F;
  text-decoration: underline;
`;

export {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
  Link,
};
