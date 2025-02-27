import { Component } from "react";


export class Events extends Component {


    handleEvent = (event) => {
        console.log(event);
    };

    render() {
        return (<div style={{ border: '1px solid black', padding: '20px', margin:"50px", display:'flex', justifyContent:'space-between'}} >
          
          
            <div onClick={this.handleEvent} style={{ border: '1px solid black', padding: '20px'}}> onClick</div>
            <div onMouseDown={this.handleEvent} style={{ border: '1px solid black', padding: '20px'}}>onMouseDown</div>
            <div onMouseMove={this.handleEvent} style={{ border: '1px solid black', padding: '20px'}}>onMouseMove</div>
            <div onCut={this.handleEvent} style={{ border: '1px solid black', padding: '20px'}}>onCut</div>
            <div onCopy={this.handleEvent} style={{ border: '1px solid black', padding: '20px'}}>onCopy</div>
            <div onWheel={this.handleEvent} style={{ border: '1px solid black', padding: '20px' }}>onWheel</div>


        </div>
        );
    }
}