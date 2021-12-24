import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import styled from "styled-components";

const Modal = ({ title, footer, children, active, hideModal }) => {
  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};
export default Modal;

const ModalBlock = styled.div`
  ${displayFlexCenter}
  bottom: 0;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 1;
  z-index: 400;
`;

const ModalOverlay = styled.a`
  background: rgba(53, 54, 54, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  border-radius: 5px;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

const ModalBody = styled.div`
  ${displayFlexColumn};
  align-items: center;
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 0 5px;
  @media (max-width: ${(props) => props.theme.sizes.breakPointBig}) {
    font-size: 1.3rem;
  }
`;

const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.breakPointBig}) {
    font-size: 1.3rem;
  }
`;
