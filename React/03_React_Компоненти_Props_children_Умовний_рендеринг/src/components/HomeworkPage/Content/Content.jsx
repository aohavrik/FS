import React from "react";
import Count from "./Count";
function Content() {
  const Obj = {
    title: 'Title',
    describe: 'describe'
  }

    return (
        <nav>
            <div><h2>Контент</h2></div>
         <Count/>

         <h1>{Obj.title}</h1>
         <p>{Obj.describe}</p>
        </nav>
    )
}
export default Content