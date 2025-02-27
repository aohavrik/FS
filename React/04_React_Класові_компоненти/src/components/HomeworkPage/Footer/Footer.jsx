
import { Component } from "react";

export class Footer extends Component {

    render() {


        return (

            <nav>
                <div><h2>Футер</h2></div>
                <div>
                    {props.name.end}
                </div>
            </nav>

        )
    }
}