import React, { useEffect, useState } from 'react';
import './DetailCity.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import LayoutMain from '../../../pages/Layout/LayoutMain';
import Image from 'react-bootstrap/Image';


const DetailCity = () => {

    const { id } = useParams();
    const [city, setCity] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/cities/${id}`)
            .then(res => res.json())
            .then(data => {
                setCity(data.response);
            })
            .catch(err => console.log(err));
    }, []);


    let googleMapsUrl = null;

    if (city && city.coordinates) {
        googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${city.coordinates.latitude},${city.coordinates.longitude}`;
    }

    return (
        <>
            <LayoutMain>
                <Link className="booton-atras" to="/cities">
                    <Button className="booton-call" variant="dark"><FaArrowLeft /></Button>
                </Link>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={city.image} className="img-fluid mb-3" alt={city.name} />

                        </div>
                        <div className="col-md-6">
                            <h2>{city.name}</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Country:</td>
                                        <td>{city.country}</td>
                                    </tr>
                                    <tr>
                                        <td>Language:</td>
                                        <td>{city.language}</td>
                                    </tr>
                                    <tr>
                                        <td>Currency:</td>
                                        <td>{city.currency}</td>
                                    </tr>
                                    <tr>
                                        <td>Population:</td>
                                        <td>{city.population + " pop"}</td>
                                    </tr>
                                    <tr>
                                        <td>Area:</td>
                                        <td>{city.area} Km<sup>2</sup></td>
                                    </tr>
                                    <tr>
                                        <td>Location:</td>
                                        <td>
                                            {googleMapsUrl ? (
                                                <a className='location-icon' href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                                    <FaMapMarkerAlt />
                                                </a>
                                            ) : (
                                                "Location not available"
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Description:</h3>
                            <p>{city.description}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center m-2">
                    <Image src="https://puzsle.de/UnderConstruction.jpg" />
                </div>
            </LayoutMain>
        </>
    );
};

export default DetailCity;
