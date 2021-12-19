import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookQuest } from 'store/api-action';
import { getBookFormStatus } from 'store/user-data/selectors';
import { BookFormStatus } from 'const';

const BookingModal = ({onCloseBtnClick}) => {
  const bookFormStatus = useSelector(getBookFormStatus);

  const [isBookFormUploading, isBookFormUploaded] = [
    bookFormStatus === BookFormStatus.Uploading,
    bookFormStatus === BookFormStatus.Uploaded,
  ];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [legal, setLegal] = useState(false);

  const dispatch = useDispatch();

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  const handlePhoneChange = (evt) => {
    setPhone(evt.target.value);
  }

  const handlePeopleCountChange = (evt) => {
    setPeopleCount(evt.target.value);
  }

  const handleLegalChange = () => {
    setLegal(!legal);
  }

  const closeForm = () => {
    onCloseBtnClick();
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(bookQuest({name, phone, peopleCount: Number(peopleCount), isLegal: legal}, closeForm));
  };

  useEffect(() => {
    if (isBookFormUploaded) {
      setName('');
      setPhone('');
      setPeopleCount('');
      setLegal(false);
    }
  }, [isBookFormUploaded]);


  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseBtnClick()}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              value={name}
              onChange={handleNameChange}
              disabled={isBookFormUploading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              value={phone}
              onChange={handlePhoneChange}
              disabled={isBookFormUploading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              value={peopleCount}
              onChange={handlePeopleCountChange}
              disabled={isBookFormUploading}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={isBookFormUploading}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              value={legal}
              onChange={handleLegalChange}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
