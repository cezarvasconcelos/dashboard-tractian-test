import { DeleteButton, DetalhesButton } from "components";
import { cardBorderShadow, displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { useState } from "react";
import styled from "styled-components";
import AssetDetails from "./AssetDetails";
import HealthStatus from "./HealthStatus";
import Modal from "./Modal";

const AssetCard = ({ asset, onRemove }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AssetCardContainer>
        <CardLeft>
          <Thumbnail src={asset.image} alt={"image of " + asset.model} />
        </CardLeft>
        <CardRight>
          <DeleteButton
            onRemove={() => {
              onRemove(asset.id);
            }}
          />
          <AssetName>{asset.name}</AssetName>
          <HealthStatus healthscore={asset.healthscore} status={asset.status} />
          <MoreInfo>
            <DetalhesButton setShowModal={setShowModal} text={"Detalhes/Editar"} />
          </MoreInfo>
        </CardRight>
      </AssetCardContainer>

      <Modal active={showModal} hideModal={() => setShowModal(false)} title={"Equipamento - " + asset.name}>
        <AssetDetails asset={asset} />
      </Modal>
    </>
  );
};

const CardLeft = styled.div`
  padding: 0 0.3rem;
`;
// const CustomDeleteButton = styled(DeleteButton)`
//   right: 0.7rem;
//   top: 0.6rem;
// `;
const CardRight = styled.div`
  ${displayFlex};
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  padding: 1rem 0.3rem;
`;
const AssetCardContainer = styled.div`
  ${displayFlexCenter};
  ${cardBorderShadow};
  margin: 0.2rem;

  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    width: 400px;
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
