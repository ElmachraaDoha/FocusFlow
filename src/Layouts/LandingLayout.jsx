import  Header from '../Components/Header.jsx';
import  Footer from '../Components/Footer.jsx';

import { Outlet } from 'react-router-dom';


function LandingLayout ()
{
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}


export default LandingLayout;