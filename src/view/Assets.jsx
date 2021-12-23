import ViewContainer from "containers/ViewContainer";
import { AssetCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { filterListByUnitId } from "util";
import { addAsset, assetDeleteFromList, deleteAsset, updateAsset, updateAssetFromList } from "redux/assets";
let assetTest = {
  sensors: ["Latest"],
  model: "motor",
  status: "inAlert",
  healthscore: 70,
  name: "MOTORESTE",
  image: "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
  specifications: {
    maxTemp: 80,
  },
  metrics: {
    totalCollectsUptime: 7516,
    totalUptime: 1419.620084999977,
    lastUptimeAt: "2021-02-16T16:17:50.180Z",
  },
  unitId: 1,
  companyId: 1,
};
const Assets = () => {
  const dispatch = useDispatch();
  const unitId = useSelector((state) => state.current.unitSelected);
  // const [assets, setAssets] = useState(useSelector((state) => state.assets.listAssets));
  const listAssets = useSelector((state) => state.assets.listAssets);

  const onRemove = (idAsset) => {
    dispatch(deleteAsset(idAsset));
    dispatch(assetDeleteFromList(idAsset));
  };
  const onUpdate = (asset) => {
    dispatch(updateAsset(asset));
    dispatch(updateAssetFromList(asset));
  };

  const newAsset = () => {
    dispatch(addAsset(assetTest));
  };

  return (
    <ViewContainer>
      <button onClick={newAsset}>Novo asset</button>
      {filterListByUnitId(listAssets, unitId).map((el) => {
        return <AssetCard key={el.id} asset={el} onRemove={onRemove} onUpdate={onUpdate} />;
      })}
    </ViewContainer>
  );
};

export default Assets;
