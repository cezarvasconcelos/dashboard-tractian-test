import { UserCard } from "components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterListByUnitId } from "util";
import { displayFlexColumn } from "css/styles";
import InputForm from "./Form/InputForm";
import { useReducer } from "react";
import { addUser } from "redux/users";

const NewAssetForm = ({ setShowModalParent }) => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const dispatch = useDispatch();

  //chamada do reducer para adicionar o novo asset
  const addNewUser = (newUser) => {
    dispatch(addUser(newUser));
  };

  const initialState = {
    name: "",
    email: "",
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

  const { name, email } = state;

  const onEnviar = (event) => {
    event.preventDefault();
    let user = {
      name: name,
      email: email,
      unitId: unitId,
      companyId: 1,
    };
    addNewUser(user);
    setShowModalParent(false);
  };

  return (
    <>
      <Form onSubmit={onEnviar}>
        <InputForm label={"Nome"} name={"name"} value={name} onChange={onChange} />
        <InputForm label={"Email"} name={"email"} value={email} onChange={onChange} />
        <BottomSection>
          <button type="submit">Salvar</button>
        </BottomSection>
      </Form>
    </>
  );
};

const Form = styled.form`
  ${displayFlexColumn};
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.div`
  ${displayFlexColumn};
  justify-content: space-between;
`;

export default NewAssetForm;
