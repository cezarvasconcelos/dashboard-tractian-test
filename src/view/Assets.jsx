import ViewContainer from "containers/ViewContainer";
import { AddButton, AssetCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { filterListByUnitId } from "util";
import { assetDeleteFromList, deleteAsset } from "redux/assets";
import styled from "styled-components";
import { displayFlexCenter } from "css/styles";
import Modal from "components/Modal";
import { useState } from "react";
import NewAssetForm from "components/NewAssetForm";

const Assets = () => {
  const dispatch = useDispatch();
  const unitId = useSelector((state) => state.current.unitSelected);
  const listAssets = useSelector((state) => state.assets.listAssets);
  const [showModal, setShowModal] = useState(false);
  const onRemove = (idAsset) => {
    dispatch(deleteAsset(idAsset));
    dispatch(assetDeleteFromList(idAsset));
  };

  return (
    <ViewContainer>
      <ContainerButton>
        <AddButton setShowModal={setShowModal} text={"Adicionar Ativo"} />
        <Modal active={showModal} hideModal={() => setShowModal(false)} title="Adicionar nova máquina">
          <NewAssetForm setShowModalParent={setShowModal} />
        </Modal>
      </ContainerButton>

      {filterListByUnitId(listAssets, unitId).map((el) => {
        return <AssetCard key={el.id} asset={el} onRemove={onRemove} />;
      })}
    </ViewContainer>
  );
};

const ContainerButton = styled.div`
  ${displayFlexCenter};
  width: 90%;
`;

export default Assets;
