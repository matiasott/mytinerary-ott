import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { FaClock } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import "./Itineraries.css";
import { useDispatch, useSelector } from "react-redux";
import { cargarItineraries, cargarItinerarySync } from "../../../redux/actions/itinerariesActions.js";

const Itineraries = ({ cityName }) => {
    const [expandedItem, setExpandedItem] = useState(null);
    const dispatch = useDispatch()
    const { loading, itineraries } = useSelector(store => store.itineraries)

    useEffect(() => {
        if (itineraries.length === 0) {
            dispatch(cargarItineraries())
        }
    }, []);

    if (loading) {
        return <h1 className='text-center mt-5 text-primary'>Loading...</h1>;
    }

    const filteredItinerariesByCity = itineraries.filter(itinerary => {
        return itinerary.cities.some(city => city.name === cityName);
    })

    if (!filteredItinerariesByCity || filteredItinerariesByCity.length === 0) {
        return (
            <div className='itinerary'>
                <div className="row">
                    <div className="col">
                        <h3>Itinerary:</h3>
                        <div>No itineraries available.</div>
                    </div>
                </div>
            </div>)
    }
    return (
        <div className='itinerary'>
            <div className="row">
                <div className="col">
                    <h3>Itinerary:</h3>
                </div>
            </div>
            <Accordion>
                {filteredItinerariesByCity.map((itinerary, index) => {
                    const priceIcons = Array.from({ length: itinerary.price }, (_, i) => (
                        <RiMoneyDollarBoxFill key={i} className="green-icon" />
                    ));

                    return (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header>
                                <div className="d-flex flex-column flex-md-row align-items-center">
                                    <div className="person-info mb-2 mb-md-0">
                                        <img src={itinerary.imageAutor} alt={`Person ${index + 1}`} className="rounded-image mr-3 small-image" />
                                        <div className="person-name">{itinerary.nameAutor}</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center item-details">
                                            <div className="item-meta">
                                                <p><FaClock className="reloj" /> Duration: {itinerary.duration} hs. </p>
                                                <p><span className="red-heart"><BsFillHeartFill /></span> Like: {itinerary.like}</p>
                                                <p>Price: {priceIcons}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="d-flex align-items-center item-details-tag">
                                            <p className='mb-0 tag'>{itinerary.tag}</p>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex justify-content-center align-items-center m-2">
                                    <Image src="https://puzsle.de/UnderConstruction.jpg" fluid />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default Itineraries;