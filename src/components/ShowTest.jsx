import { useState, useEffect } from "react";
import { DataContext } from "../context/Context";
import { useContext } from "react";

import { useParams } from "react-router-dom";

function ShowTest() {
  const { data } = useContext(DataContext);

  const { testerNumber } = useParams();

  const [fede, setDataToShow] = useState([])
  
  useEffect(() => {
    const setTester = () => {
      const tester = testerNumber.split("-");
      setDataToShow(data[+testerNumber]);
      console.log(tester);
    };
    typeof(data) !== 'undefined' && setTester();
  }, [data, testerNumber]);

  return (
    <div>
        { }
      <video src={fede.linkVideo} controls autoPlay className="w-3/4">
        {" "}
      </video>

  <div>
        {fede.transcripcion?.split("<br>").map((parrafo, index) => {
          return (
            <span key={index} className="block">
              {parrafo}
            </span>
          );
        })}
      </div>

      <h1 className="font-bold">
        Cliente: <span className="text-lg uppercase">{fede.cliente}</span>
      </h1>
      {fede.preguntas?.map((preg, index) => {
        return (
          <>
            <div className="font-bold mt-2">Tarea {index + 1}</div>
            <h1 key={preg.texto}>{preg.texto}</h1>
            {preg.tipoTarea === "opinionScale5" ? (
              <h1>Respuesta: {preg.respuesta}</h1>
            ) : null}
            <h2 className="text-pink-700">
              duracion de la tarea: {preg.tiempo}
            </h2>
          </>
        );
      })}  
    </div>
  );
}

export default ShowTest;
