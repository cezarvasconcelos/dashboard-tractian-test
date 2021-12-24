import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { useState } from "react";
import styled from "styled-components";
import AssetDetails from "./AssetDetails";
import HealthStatus from "./HealthStatus";
import Modal from "./Modal";

const AssetCard = ({ asset, onRemove }) => {
  const openModal = (set) => {
    set((prev) => !prev);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AssetCardContainer>
        <CardLeft>
          <Thumbnail src={asset.image} alt={"image of " + asset.model} />
        </CardLeft>
        <CardRight>
          <AssetName>{asset.name}</AssetName>
          <HealthStatus healthscore={asset.healthscore} status={asset.status} />
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
          </MoreInfo>
        </CardRight>
      </AssetCardContainer>

      <Modal active={showModal} hideModal={() => setShowModal(false)} title="Máquina" footer={<button>Footer Button</button>}>
        <AssetDetails asset={asset} />
      </Modal>
    </>
  );
};

const CardLeft = styled.div``;

const CardRight = styled.div`
  ${displayFlex};
  justify-content: space-around;
  flex-wrap: wrap;
`;
const AssetCardContainer = styled.div`
  ${displayFlexCenter};

  outline: 1px solid black;
  margin: 0.2rem;

  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    width: 400px;
    /* height: 300px; */
  }
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin-left: 0.2rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    width: 100px;
    height: 100px;
  }
`;

const MoreInfo = styled.div`
  ${displayFlexColumn};
  /* align-items: center; */
  width: 100%;
  button {
    /* width: 40%; */
  }
`;
const AssetName = styled.span`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    font-size: 1.3rem;
  }
`;

export default AssetCard;
