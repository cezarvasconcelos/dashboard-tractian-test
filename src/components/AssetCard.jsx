import { displayFlexCenter, displayFlexColumn } from "css/styles";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AssetDetails from "./AssetDetails";
import AssetStatus from "./AssetStatus";
import Modal from "./Modal";

const AssetCard = ({ asset, onRemove, onUpdate }) => {
  const openModal = (set) => {
    set((prev) => !prev);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AssetCardContainer>
        <AssetName>{asset.name}</AssetName>
        <img src={asset.image} alt={"image of " + asset.model} />
        <AssetStatus status={asset.status} />
        <HealthScore>Saúde {asset.healthscore}%</HealthScore>
        <MoreInfo>
          <button
            onClick={() => {
              openModal(setShowModal);
            }}
          >
            Info
          </button>

          <button
            onClick={() => {
              onRemove(asset.id);
            }}
          >
            deletaAsset
          </button>
          <button
            onClick={() => {
              onUpdate(asset);
            }}
          >
            updateAsset
          </button>
        </MoreInfo>
      </AssetCardContainer>
      <Modal id={"card"} showModal={showModal} setShowModal={setShowModal}>
        <AssetDetails asset={asset} />
      </Modal>
    </>
  );
};

const AssetCardContainer = styled.div`
  ${displayFlexCenter};
  ${displayFlexColumn};
  outline: 1px solid black;
  padding: 0.3rem;
  margin: 0.2rem;

  img {
    width: 100px;
    height: 100px;
  }
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    width: 300px;
    height: 300px;
  }
`;

const HealthScore = styled.div``;
const MoreInfo = styled.div``;
const AssetName = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export default AssetCard;
