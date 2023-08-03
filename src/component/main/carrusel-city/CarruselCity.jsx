import "./CarruselCity.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const CarruselCity = () => {
    return (
        <>

            <div className="carrusel-container-main">
                <div className="row row1">
                    <h3 className="titulo-container">Popular MyTineraries!</h3>
                </div>
                <Carousel className="carrusel-carrusel" fade interval={3000}>
                    <Carousel.Item className="carrusel-item">
                        <div className="row row1">
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/gualeguaychu.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Gualeguaychu</Card.Title>
                                        <Card.Text className="carrusel-country">Argentina</Card.Text>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/asuncion.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Asuncion</Card.Title>
                                        <Card.Text className="carrusel-country">Paraguay</Card.Text>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="row row1">
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/puntadeldiablo.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Punta del Diablo</Card.Title>
                                        <Card.Text className="carrusel-country">Uruguay</Card.Text>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/riodejaneiro.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Rio de Janeiro</Card.Title>
                                        <Card.Text className="carrusel-country">Brazil</Card.Text>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <div className="row row1">
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/asuncion.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Asuncion</Card.Title>
                                        <Card.Text className="carrusel-country">Paraguay</Card.Text>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/gualeguaychu.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Gualeguaychu</Card.Title>
                                        <Card.Text className="carrusel-country">Argentina</Card.Text>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="row row1">
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/puntadeldiablo.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Punta del Diablo</Card.Title>
                                        <Card.Text className="carrusel-country">Uruguay</Card.Text>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card className="carrusel-container">
                                    <Card.Img className="img-carrusel" src="/img/citis/riodejaneiro.jpg" alt="City Image" />
                                    <div className="city-info">
                                        <Card.Title className="carrusel-citi">Rio de Janeiro</Card.Title>
                                        <Card.Text className="carrusel-country">Brazil</Card.Text>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default CarruselCity;