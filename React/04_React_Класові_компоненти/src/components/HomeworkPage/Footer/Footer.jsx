
import { Component } from "react";

export class Footer extends Component {
    foot

    constructor(props) {
        super()
        this.foot = props.name_Footer.end
    }


    render() {


        return (

            <nav>
                <div><h2>Футер</h2></div>
                <div>
                    {this.foot}
                </div>
            </nav>

        )
    }
}