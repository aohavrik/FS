import { Component } from 'react';
import { Header } from './Header/Header';
import {Footer} from './Footer/Footer';
import {Content} from './Content/Content';
import {Sidebar} from './Sidebar/Sidebar';
import './HomeworkPage.css'


export class HomeworkPage extends Component{
    props_class = {
        world: 'Hello Worlde!',
        content: 'lorem content',
        end: 'lorem End'
    }


    render(){
        return(
    <div className='homepage'>

        <Header name_header={this.props_class} />

        <div className='centr'>
            <Sidebar name_Sidebar={this.props_class} />

            <Content />
        </div>

        <Footer name_Footer={this.props_class}/>

    </div>

        )
    }
}



