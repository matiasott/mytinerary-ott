import React, { useEffect, useState } from 'react';
import './CardCity.css';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 4;

const CardCity = () => {
    const [cities, setCities] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/api/cities')
            .then(res => res.json())
            .then(data => {
                setCities(data.response);
            })
            .catch(err => console.log(err));
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1); // Reset page when changing the filter
    };

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().startsWith(filter.toLowerCase())
    );

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
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
            <div className="card-container-wrapper">
                {visibleCities.map((city, index) => (
                    <Link to={`/cities/detailcity/${city._id}`} key={index} className="card-container">
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










