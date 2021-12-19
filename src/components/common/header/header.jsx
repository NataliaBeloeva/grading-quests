import { useDispatch, useSelector } from 'react-redux';
import logo from 'assets/img/logo.svg';
import { AppRoute, Menu } from 'const';
import * as S from './header.styled';
import { getCurrentMenuItem } from 'store/filter-data/selectors';
import { setMenuItem } from 'store/action';

const Header = () => {
  const currentMenuItem = useSelector(getCurrentMenuItem);

  const dispatch = useDispatch();

  const handleMenuChange = (menuitem) => {
    dispatch(setMenuItem(menuitem));
  };

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Root}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {Object.values(Menu).map((menuitem) => {
              const {title, route} = menuitem;
              const isCurrent = currentMenuItem === title;
              return (
                <S.LinkItem key={title}>
                  <S.Link $isActiveLink={isCurrent} to={route} onClick={() => handleMenuChange(title)}>{title}</S.Link>
                </S.LinkItem>
              );
            })}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
