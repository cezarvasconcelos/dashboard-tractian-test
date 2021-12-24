import { UserCard } from "components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "./Modal";
import { filterListByUnitId } from "util";
import { displayFlexCenter, displayFlexColumn } from "css/styles";
import InputForm from "./Form/InputForm";
import { useReducer } from "react";
import { addAsset } from "redux/assets";
const notFound = process.env.PUBLIC_URL + "/assets/images/notFound.jpg";

const NewAssetForm = ({ setShowModalParent }) => {
  const listUsers = useSelector((state) => state.users.listUsers);
  const unitId = useSelector((state) => state.current.unitSelected);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  //chamada do reducer para adicionar o novo asset
  const addNewAsset = (newAsset) => {
    dispatch(addAsset(newAsset));
  };

  const initialState = {
    name: "",
    model: "",
    sensors: [],
    maxTemp: "",
    power: "",
    rpm: "",
  };

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
  }

  const [state, dispatchComponent] = useReducer(reducer, initialState);

  const onChange = (event) => {
    dispatchComponent({ field: event.target.name, value: event.target.value });
  };

  const { name, model, sensors, maxTemp, power, rpm } = state;

  const [responsible, setResponsible] = useState({});
  const [curDate] = useState(new Date());
  const onEnviar = (event) => {
    event.preventDefault();
    //de momento só permite alguns dados preenchidos pelo  usuário
    //outros serão enviados padrão
    let asset = {
      name: name,
      model: model,
      healthscore: 100,
      status: "inOperation",
      sensors: sensors,
      responsible: responsible,
      specifications: { maxTemp, power, rpm },
      metrics: {
        totalCollectsUptime: 0,
        totalUptime: 0,
        lastUptimeAt: curDate,
      },
      unitId: unitId,
      companyId: 1,
      image: notFound,
    };
    addNewAsset(asset);
    setShowModalParent(false);
  };

  return (
    <>
      <ImgAssetModal src={notFound} alt={"Imagem cinza com um rosto sorridente triste e um texto - não encontrado"} />
      <Form onSubmit={onEnviar}>
        <InputForm label={"Descrição"} name={"name"} value={name} onChange={onChange} />
        <MidSection>
          <GroupDetails>
            <InputForm label={"Modelo"} name={"model"} value={model} onChange={onChange} />
            <InputForm label={"Sensores"} name={"sensors"} value={sensors} onChange={onChange} />
            <InputForm
              label={"Responsável"}
              name={"responsible"}
              value={responsible !== undefined ? responsible.name : ""}
              onChange={onChange}
            />
            <div className="responsável">
              <button type="button" onClick={() => setShowModal(true)}>
                Adicionar
              </button>
            </div>
          </GroupDetails>

          <Specifications>
            <InputForm label={"Temp Maxima"} name={"maxTemp"} value={maxTemp} onChange={onChange} />
            <InputForm label={"Potência"} name={"power"} value={power} onChange={onChange} />
            <InputForm label={"RPM"} name={"rpm"} value={rpm} onChange={onChange} />
          </Specifications>
        </MidSection>
        <BottomSection>
          <span>Último momento em operação: {curDate.toLocaleString("PT-BR")}</span>
          <button type="submit">Salvar</button>
        </BottomSection>
      </Form>

      <Modal active={showModal} hideModal={() => setShowModal(false)} title="Selecione o responsável pela máquina">
        {filterListByUnitId(listUsers, unitId).map((user) => {
          return <UserCard user={user} key={user.id} setShowModal={setShowModal} setResponsible={setResponsible} />;
        })}
      </Modal>
    </>
  );
};

const GroupDetails = styled.div`
  ${displayFlexColumn};
  align-self: flex-start;
`;

const Form = styled.form`
  ${displayFlexColumn};
  justify-content: center;
  align-items: center;
`;

const Specifications = styled.div`
  ${displayFlexColumn};
  align-self: flex-start;
`;
const MidSection = styled.div`
  margin: 0.3rem 0;
  ${displayFlexCenter};

  flex-wrap: wrap;
  width: 100%;
`;

const ImgAssetModal = styled.img`
  width: 100%;
  height: 50%;
  max-height: 300px;
  object-fit: cover;
  margin-top: -50px;
`;
const BottomSection = styled.div`
  ${displayFlexColumn};
  justify-content: space-between;
`;

export default NewAssetForm;
