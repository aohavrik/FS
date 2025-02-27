import { Component } from "react"






export class Sidebar extends Component {
  side
  
  constructor(props){
    super()

    this.side = props.name_Sidebar.content
  }
  
    render() {
        return (
            <nav>
                <div><h2>Сайдбар</h2></div>
                <div>
                    {this.side}
                </div>

            </nav>
        )
    }
}