import Navbar from "../header/navbar";
import Footer from "../footer/footer";

export default function StandardLayout({children}){
    return(
        <>
        <Navbar/>
        <div> {children} </div>
        <Footer/>
        </>
    );
}