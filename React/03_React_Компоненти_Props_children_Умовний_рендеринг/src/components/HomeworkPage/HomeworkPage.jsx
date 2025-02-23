import  Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';


import './HomeworkPage.css'


function HomePage() {
    const n1 = 'hello world'
    const n2 = 2222

    return (
        <div className='homepage'>

            <Header />

            <div className='centr'>
                <Sidebar one='111' text={12} />

                <Content hello={n1} var2={n2}/>
            </div>

            <Footer />

        </div>
    );
}

export default HomePage;