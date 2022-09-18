import { useLocation } from "react-router-dom";

export default function Race() {
  let { state } = useLocation();
  console.log(state);
  return <h2>{state}</h2>;
}
