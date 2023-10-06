import HomePage from './HomePage';
import Menu from './Menu';
import Blog from './Blog';
import AboutMe from './AboutMe';
import BookingPage from './BookingPage';
import {Routes,Route} from "react-router-dom";

function Main(){
  function subimtform(){
    
}
return (

<Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/menu" element={<Menu />}></Route>
    <Route path="/booking-page" element={<BookingPage />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/about-me" element={<AboutMe />}></Route>
    </Routes>);
}

export default Main;
