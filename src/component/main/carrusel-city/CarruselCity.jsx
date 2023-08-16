import "./CarruselCity.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const CarruselCity = () => {
    const [indexData, setIndexData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/cities')
            .then(res => res.json())
            .then(data => {
                const cities = data.response;
                const divideDataIntoGroups = (dataArray, groupSize) => {
                    const groupedArray = [];
                    for (let i = 0; i < dataArray.length; i += groupSize) {
                        groupedArray.push(dataArray.slice(i, i + groupSize));
                    }
                    return groupedArray;
                };
                const groupedData = divideDataIntoGroups(cities, 4);
                setIndexData(groupedData);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="carrusel-container-main">
            <div className="row1">
                <h3 className="titulo-container">Popular MyTineraries!</h3>
            </div>
            <Carousel className="carrusel-carrusel" fade interval={3000}>
                {indexData.map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex} className="carrusel-item">
                        <div className="row1">
                            {group.map((item, itemIndex) => (
                                <div key={itemIndex} className="col-md-6">
                                    <Link to={`/cities/detailcity/${item._id}`}>
                                    <Card className="carrusel-container">
                                        <Card.Img
                                            className="img-carrusel"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <div className="city-info">
                                            <Card.Title className="carrusel-citi">
                                                {item.name}
                                            </Card.Title>
                                            <Card.Text className="carrusel-country">
                                                {item.country}
                                            </Card.Text>
                                        </div>
                                    </Card>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarruselCity;
