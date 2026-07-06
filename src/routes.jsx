import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";


function AppRoutes () {

    return (

        <>
        
        <BrowserRouter>
        
         <Routes>

        {/* <Route path="*" element= {<Page404 />}></Route> */}
        <Route path="/" element ={<HomeScreen/>}></Route>

         </Routes>
        
        
        </BrowserRouter>
        
        </>

    )

}

export default AppRoutes;