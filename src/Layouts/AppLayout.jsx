import  Sidebar  from '../Components/Sidebar.jsx';
import { Outlet } from "react-router-dom";


function AppLayout ()
{
    return (
        <>   {/*display elements horizontally(Flexbox)*/}
            <div style={{ display : "flex"}}>
                <Sidebar/>
                <main >
                    <Outlet/>
                </main>
            </div>
        </>
    );
 
}


export default AppLayout;