import ViewContainer from "components/containers/ViewContainer";
import { AssetCard } from "components";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "components/Modal";

const Assets = ({ assets }) => {
  const [assetsList, setAssetsList] = useState(assets);
  const [filter, setFilter] = useState("");
  // console.log(assets);

  useEffect(() => {
    setAssetsList(assets);
  }, [assets]);
  return (
    <ViewContainer>
      <InputSearch placeholder={"search"} />
      {assetsList.map((el) => {
        return <AssetCard key={el.id} asset={el} />;
      })}
    </ViewContainer>
  );
};

const InputSearch = styled.input`
  width: 100%;
  margin-bottom: 0.7rem;
`;

export default Assets;
