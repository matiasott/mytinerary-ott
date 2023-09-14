import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FormRegister.css';
import citiesData from './jsonCountyStateCity/cities.json';
import statesData from './jsonCountyStateCity/states.json';
import countriesData from './jsonCountyStateCity/countries.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signUp } from '../../../../services/userService.js';
import { useNavigate } from 'react-router-dom';

const FormRegister = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        photo: '',
        birthDate: '',
        age: '',
        phone: '',
        city: '',
        state: '',
        country: '',
        verified: false
    });

    const [cityOptions, setCityOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setCountryOptions(countriesData.countries.map(country => ({ label: country.name, value: country.id })));
    }, []);

    useEffect(() => {
        if (formData.country) {
            setStateOptions(statesData.states.filter(state => state.id_country === formData.country).map(state => ({ label: state.name, value: state.id })));
        } else {
            setStateOptions([]);
        }
    }, [formData.country]);

    useEffect(() => {
        if (formData.state) {
            setCityOptions(citiesData.cities.filter(city => city.id_state === formData.state).map(city => ({ label: city.name, value: city.id })));
        } else {
            setCityOptions([]);
        }
    }, [formData.state]);

    const handleCountryChange = selectedOption => {
        setFormData({
            ...formData,
            country: selectedOption.value,
            state: '',
            city: '',
        });
    };

    const handleStateChange = selectedOption => {
        setFormData({
            ...formData,
            state: selectedOption.value,
            city: '',
        });
    };

    const handleCityChange = selectedOption => {
        setFormData({
            ...formData,
            city: selectedOption.value,
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name !== "confirmPassword") {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            let aux = { ...formData };
            if (aux.country) {
                const selectedCountry = countriesData.countries.find(country => country.id === aux.country);
                if (selectedCountry) {
                    aux.country = selectedCountry.name;
                }
            }
            if (aux.state) {
                const selectedState = statesData.states.find(state => state.id === aux.state);
                if (selectedState) {
                    aux.state = selectedState.name;
                }
            }
            if (aux.city) {
                const selectedCity = citiesData.cities.find(city => city.id === aux.city);
                if (selectedCity) {
                    aux.city = selectedCity.name;
                }
            }
            if (formData.photo) {
                aux.photo = formData.photo;
            } else {
                delete aux.photo;
            }

            const response = await signUp(aux);
            console.log('Registration successful:');
            setFormData({
                email: '',
                password: '',
                name: '',
                lastName: '',
                photo: '',
                birthDate: '',
                age: '',
                phone: '',
                city: '',
                state: '',
                country: '',
                verified: false
            });
            return navigate('/');
            console.log(formData)

        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, birthDate: date });
    };



    return (
        <Form className="registration-form" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="password-input">
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle-button"
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                        />
                    </button>
                </div>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="password-input">
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle-button"
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                        />
                    </button>
                </div>
            </Form.Group>

            <Form.Group controlId="photo">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="birthDate">
                <Form.Label>Birth Date</Form.Label>
                <div className="form-control" >
                    <DatePicker
                        type="text"
                        className="fecha-form"
                        selected={formData.birthDate}
                        onChange={(date) => handleDateChange(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </Form.Group>

            <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    placeholder="Example: 1234567890"
                />
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Select
                    value={formData.country ? { label: countryOptions.find(country => country.value === formData.country).label, value: formData.country } : null}
                    options={countryOptions}
                    onChange={handleCountryChange}
                />
            </Form.Group>
            <Form.Group controlId="state">
                <Form.Label>State/Province</Form.Label>
                <Select
                    value={formData.state ? { label: stateOptions.find(state => state.value === formData.state).label, value: formData.state } : null}
                    options={stateOptions}
                    onChange={handleStateChange}
                    isDisabled={!formData.country}
                />
            </Form.Group>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Select
                    value={formData.city ? { label: cityOptions.find(city => city.value === formData.city).label, value: formData.city } : null}
                    options={cityOptions}
                    onChange={handleCityChange}
                    isDisabled={!formData.state}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className='botonInicio'>
                Register
            </Button>
        </Form>
    );
};


export default FormRegister
