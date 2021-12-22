import ViewContainer from "components/containers/ViewContainer";
import { AssetCard } from "components";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Assets = ({ assets }) => {
  const [activeAssets, setActiveAssets] = useState(assets);
  const [filter, setFilter] = useState("");
  // console.log(assets);

  useEffect(() => {
    setActiveAssets(assets);
  }, [assets]);
  return (
    <ViewContainer>
      <InputSearch placeholder={"search"} />
      {activeAssets.map((el) => (
        <AssetCard key={el.id} asset={el} />
      ))}
    </ViewContainer>
  );
};

const InputSearch = styled.input`
  width: 100%;
  margin-bottom: 0.7rem;
`;

export default Assets;
