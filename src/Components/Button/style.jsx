import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${(props) => props.width || '100%'};
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  color: #fff;
  background: #4f46e5;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #6366f1;
  }
`;
