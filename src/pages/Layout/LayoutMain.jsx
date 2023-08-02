import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import "./LayoutMain.css";


const LayoutMain = ({ children }) => {
    return (
        <div className="app-layout">
            <header className="app-header" >
            <Header />
            </header>
            <main className="app-main">
            {children}
            </main>
            <footer className="app-footer">
            <Footer />
            </footer>
            
        </div>
    );
};

export default LayoutMain;