import { DataContext } from "../context/Context";
import { useContext } from "react";

import { Link } from "react-router-dom";

function Links() {
  const { data } = useContext(DataContext);

  return (
    <>
      {data?.map((data, i) => (
        <li key={i}>
          <Link to={`/clientes/${i}`}> Tester {i + 1}</Link>
        </li>
      ))}
    </>
  );
}

export default Links;
