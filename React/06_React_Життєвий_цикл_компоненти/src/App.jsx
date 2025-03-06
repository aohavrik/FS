
import { Component } from "react"
import {Wrapper} from "./component/Wrapper";

export class App extends Component {

  state = {
    isTrue: false
  }



  setStateTrue = () => {
    const {isTrue} = this.state
    this.setState({isTrue: !isTrue})
    console.log(isTrue);


  }
  render() {
    const {isTrue} = this.state

    return (
      <div>
        <button onClick={this.setStateTrue}>isTrue</button>
        {this.state.isTrue && <div> Hello</div>}

        <Wrapper/>
      </div>
    )
  }
}
