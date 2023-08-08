import "./Cities.css";
import LayoutMain from "../Layout/LayoutMain";
import CardCity from "../../component/main/card-city/CardCity"
import Image from 'react-bootstrap/Image';

const Cities = () => {

    return (
        <LayoutMain>            
            {/* <CardCity  />         */}
            <div className="d-flex justify-content-center align-items-center">
                <Image src="https://puzsle.de/UnderConstruction.jpg" />
            </div>
        </LayoutMain>
    );
};

export default Cities;