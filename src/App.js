import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carduser from "./component/Carduser";

function App() {
  const [person, setperson] = useState([
    {
      name: "chaima",
      age: 27,
      profesion: "etuidante",
      img: "https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg?w=2000",
    },
  ]);
  const [show, setshow] = useState(false);

  return (
    <div style={{ marginLeft: "600px" }}>
      <button
        style={{
          display: "inlineBlock",
          backgroundColor: " #7b38d8",
          borderRadius: "10px",
          border: "4px double #cccccc",
          color: "#eeeeee",
          textAlign: "center",
          fontSize: "23px",
          padding: "20px",
          width: "289px",
          transition: "all 0.5s",
          cursor: "pointer",
          marginTop: "120px",
          marginBottom: "50px",
        }}
        onClick={() => setshow(!show)}
      >
        Click here to show card
      </button>
      {show ? (
        <div>
          {person.map((el) => (
            <Carduser el={el} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
