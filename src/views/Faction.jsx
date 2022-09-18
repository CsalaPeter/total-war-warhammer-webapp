import { useLocation } from "react-router-dom";

export default function Faction() {
  let { state } = useLocation();
  console.log(state);
  return <h2>{state}</h2>;
}
