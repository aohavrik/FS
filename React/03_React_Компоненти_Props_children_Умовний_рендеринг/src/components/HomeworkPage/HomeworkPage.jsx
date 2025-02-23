import  Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';


import './HomeworkPage.css'


function HomePage() {
    const props_header = {
        world: 'Hello Worlde!',
    }
    const Props_Sidebar = {
        content: 'lorem content'
    }
    const props_end =  {
        end: 'lorem End'
    }

    return (
        <div className='homepage'>

            <Header name ={props_header} />

            <div className='centr'>
                <Sidebar name={Props_Sidebar} />

                <Content />
            </div>

            <Footer name={props_end}/>

        </div>
    );
}

export default HomePage;