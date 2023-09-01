import React, { useEffect, useState , useRef} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cargarCities, cargarCitySync,filtrarCities } from "../../../redux/actions/citiesActions.js"
import './CardCity.css';

const ITEMS_PER_PAGE = 4;

const CardCity = () => {
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);


    const inputBusqueda = useRef(null);


    const dispatch = useDispatch()

    const { loading, filteredCities, cities , valueFilter} = useSelector(store => store.cities)

    useEffect(() => {
        if (cities.length === 0) {
            dispatch(cargarCities())
        }
        
    }, []);

    if (loading) {
        return <h1 className='text-center mt-5 text-primary'>Loading...</h1>;
    }

    // const handleFilterChange = (e) => {
    //     setFilter(e.target.value);
    //     setCurrentPage(1);
    // };

    // const filteredCities = cities.filter(city =>
    //     city.name.toLowerCase().startsWith(filter.toLowerCase())
    // );

    const handleFilterChange = () => {
        dispatch(filtrarCities(inputBusqueda.current.value));
    }

    const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleCities = filteredCities.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="filter-input">
                <Form.Control
                    type="text"
                    placeholder="Search by city name"
                    onChange={handleFilterChange}
                    ref={inputBusqueda}
                    defaultValue = {valueFilter}
                />
            </div>
            <div className="card-container-wrapper">
                {visibleCities.map((city, index) => (
                    <Link to={`/cities/detailcity/${city._id}`} key={index} className="card-container" onClick={() => dispatch(cargarCitySync(city))}>
                        <Card className="card-container">
                            <Card.Img src={city.image} alt="City Image" className="card-image" />
                            <div className="card-overlay">
                                <Card.Title className="card-city">{city.name}</Card.Title>
                                <Card.Text className="card-country">{city.country}</Card.Text>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="pagination-container">
                <Pagination>
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </Pagination>
            </div>
        </>
    );
};

export default CardCity;










