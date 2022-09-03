import React, { useState } from "react";

// import ASN1, {Hex} from "@lapo/asn1js";

const DragDrop = () => {
  const [drag, setDrag] = useState(false);

  let dragStartHandler = function (e) {
    e.preventDefault();
    setDrag(true);
  };

  let dragLeaveHandler = function (e) {
    e.preventDefault();
    setDrag(false);
  };

  let onDropHandler = function (e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];

    // const result = ASN1.decode(files[0]);
    // if (result.typeName() !== "SEQUENCE") {
    //   throw "Неправильна структура конверта сертифіката (очікується SEQUENCE)";
    // }
    // const tbsCertificate = result.sub[0];

    console.log(files[0]);
  };
  return (
    <div>
      {drag ? (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
          className="drag-drop"
        >
          Відпустіть файл, щоб завантажити
        </div>
      ) : (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          className="drag-drop"
        >
          Перетягніть файл сертифіката у поле
        </div>
      )}
    </div>
  );
};

export default DragDrop;
