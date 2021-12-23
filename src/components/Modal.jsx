import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";

const Modal = ({ showModal, setShowModal, children, id }) => {
  // para utilizar o modal, é necessário que seja setado o state desse modal
  // no componente pai, pois ele quem terá o controle se deve abrir ou fechar
  // #TODO :
  // deve haver uma implementação melhor para lidar com esse estado

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target || e.target.id === id) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalHeader>
              <CloseIcon>
                <span id={id} onClick={closeModal}>
                  x
                </span>
              </CloseIcon>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 85%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  overflow: scroll;
`;

export const ModalBody = styled.div`
  ${displayFlexColumn};
  overflow: scroll;
`;

export const ModalFooter = styled.div`
  ${displayFlexCenter};
`;

export const ModalHeader = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const CloseIcon = styled.div`
  ${displayFlex};
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  margin-right: 1rem;
  span {
    font-weight: 900;
    font-size: 2rem;
  }
`;

export default Modal;