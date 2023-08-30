import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { cargarCities , cargarCitySync} from "../../../redux/actions/citiesActions.js"
import './CarruselCity.css';


const CarruselCity = () => {
    const dispatch = useDispatch();
    const { loading, cities } = useSelector(store => store.cities);

    useEffect(() => {
        if (cities.length === 0) {
            dispatch(cargarCities());
        }
    }, [dispatch, cities]);

    if (loading) {
        return <h1 className='text-center mt-5 text-primary'>Loading...</h1>;
    }

    const divideDataIntoGroups = (dataArray, groupSize) => {
        const groupedArray = [];
        for (let i = 0; i < dataArray.length; i += groupSize) {
            groupedArray.push(dataArray.slice(i, i + groupSize));
        }
        return groupedArray;
    };

    const groupedData = divideDataIntoGroups(cities, 4);

    return (
        <div className="carrusel-container-main">
            <h3 className="titulo-container">Popular MyTineraries!</h3>
            <Carousel className="carrusel-carrusel" fade interval={3000}>
                {groupedData.map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex} className="carrusel-item">
                        <div className="row">
                            {group.map((item, itemIndex) => (
                                <div key={itemIndex} className="col-md-6">
                                    <Link to={`/cities/detailcity/${item._id}`} onClick={() => dispatch(cargarCitySync(item))}>
                                        <Card className="carrusel-container">
                                            <Card.Img
                                                className="img-carrusel"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                            <div className="city-info">
                                                <Card.Title className="carrusel-city">
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