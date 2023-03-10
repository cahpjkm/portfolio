import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { useRef } from 'react';

const Header = () => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <S.Header>
      <Wrapper>
        <S.Content>
          <S.InitialText ref={textRef}>{C.text}</S.InitialText>
          <S.Profission>{C.profission}</S.Profission>
          <Button>{C.button.text}</Button>
        </S.Content>
      </Wrapper>
    </S.Header>
  )
}

export default Header;