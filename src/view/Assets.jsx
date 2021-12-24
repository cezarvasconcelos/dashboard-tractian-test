import ViewContainer from "containers/ViewContainer";
import { AssetCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { filterListByUnitId } from "util";
import { addAsset, assetDeleteFromList, deleteAsset, updateAsset, updateAssetFromList } from "redux/assets";
import styled from "styled-components";
import { displayFlexCenter } from "css/styles";

const Assets = () => {
  const dispatch = useDispatch();
  const unitId = useSelector((state) => state.current.unitSelected);
  const listAssets = useSelector((state) => state.assets.listAssets);

  const onRemove = (idAsset) => {
    dispatch(deleteAsset(idAsset));
    dispatch(assetDeleteFromList(idAsset));
  };

  const newAsset = () => {
    // dispatch(addAsset(assetTest));
  };

  return (
    <ViewContainer>
      <ContainerButton>
        <ButtonAdd onClick={newAsset}>Adicionar Ativo</ButtonAdd>
      </ContainerButton>

      {filterListByUnitId(listAssets, unitId).map((el) => {
        return <AssetCard key={el.id} asset={el} onRemove={onRemove} />;
      })}
    </ViewContainer>
  );
};

const ButtonAdd = styled.button`
  flex-basis: 30%;
  margin-bottom: 0.4rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4e7bdb81;
  }
`;

const ContainerButton = styled.div`
  ${displayFlexCenter};
  width: 90%;
`;

export default Assets;
