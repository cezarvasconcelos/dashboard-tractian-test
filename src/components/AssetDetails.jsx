import { AddButton, UserCard } from "components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "./Modal";
import { filterListByUnitId } from "util";
import { displayFlexCenter, displayFlexColumn } from "css/styles";
import InputForm from "./Form/InputForm";
import HealthStatus from "./HealthStatus";
import { useReducer } from "react";
import { updateAsset, updateAssetFromList } from "redux/assets";

const AssetDetails = ({ asset }) => {
  const listUsers = useSelector((state) => state.users.listUsers);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  //chamada do reducer para atualizar o asset selecionado
  const onUpdate = (assetToUpdate) => {
    dispatch(updateAsset(assetToUpdate));
    dispatch(updateAssetFromList(assetToUpdate));
  };

  //ao utilizar form é interessante usar o useReducer,
  //que funciona de maneira bem semelhante ao redux, precisando
  //inicializar os states e o reducer
  const initialState = {
    name: asset.name,
    model: asset.model,
    sensors: asset.sensors,
    maxTemp: asset.specifications.maxTemp != null ? asset.specifications.maxTemp : "Não informado",
    power: asset.specifications.power != null ? asset.specifications.power : "Não informado",
    rpm: asset.specifications.rpm != null ? asset.specifications.rpm : "Não informado",
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

  const [responsible, setResponsible] = useState(asset.responsible);

  const onEnviar = (event) => {
    event.preventDefault();
    //faz a cópia do objeto pra uma nova variável
    //não copia itens undefined
    let newAsset = JSON.parse(JSON.stringify(asset));
    // let newAsset = asset;
    newAsset.name = name;
    newAsset.model = model;
    newAsset.sensors = sensors;
    newAsset.responsible = responsible;
    newAsset.specifications = { maxTemp, power, rpm };
    console.log("O mais novo asset");
    console.log(event);
    onUpdate(newAsset);
    setShowModal(false);
  };
  return (
    <>
      <ImgAssetModal src={asset.image} alt={"image of " + asset.model} />
      <Form onSubmit={onEnviar}>
        <InputForm label={"Descrição"} name={"name"} value={name} onChange={onChange} />
        <HealthStatus healthscore={asset.healthscore} status={asset.status} />
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
              {/* <button type="button" onClick={() => setShowModal(true)}> */}
              <AddButton setShowModal={setShowModal} text={"responsável"} />
            </div>
          </GroupDetails>

          <Specifications>
            <InputForm label={"Temp Maxima"} name={"maxTemp"} value={maxTemp} onChange={onChange} />
            <InputForm label={"Potência"} name={"power"} value={power} onChange={onChange} />
            <InputForm label={"RPM"} name={"rpm"} value={rpm} onChange={onChange} />
          </Specifications>
        </MidSection>
        <BottomSection>
          <span>Tempo Ligado: {asset?.metrics.totalUptime?.toFixed()} horas</span>
          <span>Último momento em operação: {new Date(Date.parse(asset?.metrics.lastUptimeAt)).toLocaleString("PT-BR")}</span>
          <button type="submit">Salvar</button>
        </BottomSection>
      </Form>

      <Modal active={showModal} hideModal={() => setShowModal(false)} title="Selecione o responsável pela máquina">
        {/* deve mostrar apenas o responsável da empresa referente ao asset clicado */}
        {filterListByUnitId(listUsers, asset.unitId).map((user) => {
          return <UserCard user={user} key={user.id} setShowModal={setShowModal} setResponsible={setResponsible} pointer />;
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
  margin-top: 1rem;
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
  height: 250px;
  max-height: 300px;
  object-fit: cover;
  margin-top: -50px;
`;
const BottomSection = styled.div`
  ${displayFlexColumn};
  justify-content: space-between;
`;

export default AssetDetails;
