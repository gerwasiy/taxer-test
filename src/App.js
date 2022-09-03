import React, {useState} from "react";

import DragDrop from "./drag&drop";
import Info from "./info";
function App() {
 
  

  const [btn,setBtn] = useState(false);

  let OnClickHandler = function(e){
      e.preventDefault();
      setBtn(false);
  }
  let OffClickHandler = function(e){
      e.preventDefault();
      setBtn(true);
     
  }
 
  return (
    <div className="App">
      <main>
        <section>
          <div className="subject-box">
          <h1>Власник</h1>
            <div className="subjects"> </div>
            
            <div>
            {
                btn ? <button onClick={(e) => OnClickHandler(e)} className="cancel">Скасувати</button> : <button  onClick={(e) => OffClickHandler(e)} className="add">Додати</button>
            }
        </div>
          </div>
     {btn ? <DragDrop/> : <Info />}

        </section>
      </main>
    </div>
  );
}

export default App;
