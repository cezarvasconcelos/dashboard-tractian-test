import { AssetStatus } from "components";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const AssetDetails = ({ asset }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <AssetName>{asset.name}</AssetName>
      <AssetStatus status={asset.status} />
      <ImgAssetModal src={asset.image} alt={"image of " + asset.model} />
      <div className="model">Modelo: {asset.model}</div>
      <div className="sensor">Sensores: {asset.sensors[0]}</div>
      <div className="saude">Saúde: {asset.healthscore}%</div>
      <div className="specifications">
        Especificações:
        <span> - Temp Maxima: {asset.specifications.maxTemp != null ? asset.specifications.maxTemp : "Não informado"}</span>
        <span> - Potência: {asset.specifications.power != null ? asset.specifications.power : "Não informado"}</span>
        <span> - RPM: {asset.specifications.rpm != null ? asset.specifications.rpm : "Não informado"}</span>
      </div>
      <div className="metricas">
        <span>Tempo Ligado: {asset?.metrics.totalUptime?.toFixed()} horas</span>
        <span>Último momento em operação: {new Date(Date.parse(asset?.metrics.lastUptimeAt)).toLocaleString("PT-BR")}</span>
      </div>
      <div className="responsavel">
        Responsável:
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </div>
    </div>
  );
};
const AssetName = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
const ImgAssetModal = styled.img`
  width: 40%;
`;

export default AssetDetails;
