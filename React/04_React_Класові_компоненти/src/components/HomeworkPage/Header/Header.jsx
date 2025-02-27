import { Component } from "react";



export class Header extends Component {
    world





    
constructor(props){
    super()

    this.world = props.name_header.world
}

    render(){
    return(
        <div>
        <nav>
            <div><h2>Хедер</h2></div>
            <div>
               {this.world}
            </div>
        </nav>

        </div>
    )
    }
}