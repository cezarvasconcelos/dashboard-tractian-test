import { displayFlexCenter, displayFlexColumn } from "css/styles";
import React from "react";
import styled from "styled-components";
import AssetStatus from "./AssetStatus";
import { PlusIcon } from "./icon";

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

const AssetCard = ({ asset }) => {
  return (
    <AssetCardContainer>
      <AssetName>{asset.name}</AssetName>
      <img src={asset.image} alt={"image of " + asset.model} />
      <AssetStatus status={asset.status} />
      <HealthScore>Saúde {asset.healthscore}%</HealthScore>
      <MoreInfo>
        <PlusIcon fill={"red;"} />
      </MoreInfo>
    </AssetCardContainer>
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
