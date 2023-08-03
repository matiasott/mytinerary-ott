import "./CardCity.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardCity = () => {
    return (
        <>
            <div className="card-container-wrapper">
                <Card className="card-container">
                    <Card.Img src="/img/citis/gualeguaychu.jpg" alt="City Image" className="card-image" />
                    <div className="card-overlay">
                        <Card.Title className="card-citi">Gualeguaychú</Card.Title>
                        <Card.Text className="card-country">Argentina</Card.Text>
                    </div>
                </Card>
                <Card className="card-container">
                    <Card.Img src="/img/citis/asuncion.jpg" alt="City Image" className="card-image" />
                    <div className="card-overlay">
                        <Card.Title className="card-citi">Asuncion</Card.Title>
                        <Card.Text className="card-country">Paraguay</Card.Text>
                    </div>
                </Card>
                <Card className="card-container">
                    <Card.Img src="/img/citis/puntadeldiablo.jpg" alt="City Image" className="card-image" />
                    <div className="card-overlay">
                        <Card.Title className="card-citi">Punta del Diablo</Card.Title>
                        <Card.Text className="card-country">Uruguay</Card.Text>
                    </div>
                </Card>
                <Card className="card-container">
                    <Card.Img src="/img/citis/riodejaneiro.jpg" alt="City Image" className="card-image" />
                    <div className="card-overlay">
                        <Card.Title className="card-citi">Rio de Janeriro</Card.Title>
                        <Card.Text className="card-country">Brazil</Card.Text>
                    </div>
                </Card>
            </div>

        </>
    );
};

export default CardCity;