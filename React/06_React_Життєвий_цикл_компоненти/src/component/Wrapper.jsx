import { Component } from 'react';
import {Navbar} from './Navbar'
import {Content1} from './Content1';

export class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbars: true,
            content1s: true
        };
    }

    Comp = (component) => {
        this.setState((state) => ({ [component]: !state[component] }))
    };

    render() {
        const { navbars: navbars, content1s: content1s } = this.state;
        return (
            <div>
                <button onClick={() => this.Comp('navbars')}> Navbar</button>
                <button onClick={() => this.Comp('content1s')}> Content1</button>
                {navbars && <Navbar />}
                {content1s && <Content1 />}
            </div>
        )
    }
}


