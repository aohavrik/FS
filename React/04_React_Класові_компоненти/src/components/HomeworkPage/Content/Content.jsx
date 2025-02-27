import React from "react";
import { Component } from "react";
import {Count} from "./Count";


function Content() {
  const Obj = {
    title: 'Title',
    describe: 'describe'
  }

  return (
        <div></div>
    )
}
export default Content



export class Content extends Component {
  
  
  
  Obj = {
    title: 'Title',
    describe: 'describe'
  }


  constructor(props){
    super()
  }
  render() {
    return (
      <nav>
        <div><h2>Контент</h2></div>
        <Count />

        <h1>{Obj.title}</h1>
        <p>{Obj.describe}</p>
      </nav>
    )
  }
}