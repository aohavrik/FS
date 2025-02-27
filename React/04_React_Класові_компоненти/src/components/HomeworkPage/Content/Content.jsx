import React from "react";
import { Component } from "react";
import {Count} from "./Count";





export class Content extends Component {
  
  
  
  Obj = {
    title: 'Title',
    describe: 'describe'
  }



  render() {
    return (
      <nav>
        <div><h2>Контент</h2></div>
        <Count/>

        <h1>{this.Obj.title}</h1>
        <p>{this.Obj.describe}</p>
      </nav>
    )
  }
}