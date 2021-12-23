import ViewContainer from "containers/ViewContainer";
import { AssetCard } from "components";
import { useSelector } from "react-redux";
import { filterListByUnitId } from "util";

const Assets = () => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const listAssets = useSelector((state) => state.assets.listAssets);

  return (
    <ViewContainer>
      {filterListByUnitId(listAssets, unitId).map((el) => {
        return <AssetCard key={el.id} asset={el} />;
      })}
    </ViewContainer>
  );
};

export default Assets;
