import ViewContainer from "components/containers/ViewContainer";
import { displayFlexCenter } from "css/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import db from "services/database.json";

// {
//       "id": 1,
//       "sensors": ["GSJ1535"],
//       "model": "motor",
//       "status": "inAlert",
//       "healthscore": 70,
//       "name": "Motor H13D-1",
//       "image": "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
//       "specifications": {
//         "maxTemp": 80
//       },
//       "metrics": {
//         "totalCollectsUptime": 7516,
//         "totalUptime": 1419.620084999977,
//         "lastUptimeAt": "2021-02-16T16:17:50.180Z"
//       },
//       "unitId": 1,
//       "companyId": 1
//     },

const Assets = ({ assets }) => {
  // console.log(assets);

  return (
    <ViewContainer>
      {assets.map((el) => (
        <AssetCard key={el.id}>
          <div>{el.name}</div>
          <img src={el.image} alt={"image of " + el.model} />
        </AssetCard>
      ))}
    </ViewContainer>
  );
};
const AssetCard = styled.div`
  ${displayFlexCenter};
  img {
    width: 100px;
    height: 100px;
  }
`;
export default Assets;
