import { useEffect, useState } from "react";
import InfoTotal from "./InfoTotal";

const UnitsInfo = ({ units }) => {
  const [totalUnits, setTotalUnits] = useState(0);

  console.log(units);
  useEffect(() => {
    setTotalUnits(units.length);
  }, [units]);
  return <InfoTotal title={"Unidades"} total={totalUnits} />;
};

export default UnitsInfo;
