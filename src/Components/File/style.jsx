import styled from 'styled-components';

export const ContainerFile = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 200px;
  border: 3px dashed ${(props) => (props.error ? '#fca5a5' : '#94a3b8')};
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 1rem;
  position: relative;

  background-image: url(${(props) => (!props.image ? '' : props.image)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  color: ${(props) =>
    !props.image ? (!props.error ? '#94a3b8' : '#fca5a5') : 'transparent'};
  transition: background 0.2s;
`;

export const Sobreposicao = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: transparent;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(148, 163, 184, 0.4);
    /* opacity: 0.4; */
    color: ${(props) => (props.image ? '#1e293b' : '')};
  }
`;
