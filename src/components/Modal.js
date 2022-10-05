import styled from '@emotion/styled';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

function Modal({ children }) {
  return <StyledModal>{children}</StyledModal>;
}

export default Modal;
