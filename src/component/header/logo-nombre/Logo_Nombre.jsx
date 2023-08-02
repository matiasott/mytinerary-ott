import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import "./Logo_Nombre.css";

function Logo_Nombre() {
    return (
        <Container>
            <Row>
                <Col className='logo-logo-nombre'xs={6} md={4}>
                    <Image className='logo-logo' src="/img/logo.jpg" rounded />
                    <h1 className='nombre-titulo'>MyTinerary</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Logo_Nombre;