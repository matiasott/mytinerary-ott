import "./CardCity.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const data = [
    {
        image: 'https://www.ecured.cu/images/d/d0/Gualeguaych%C3%BA.jpg',
        name_city: 'Gualeguaychú',
        name_country: 'Argentina'
    },
    {
        image: 'https://www.undp.org/sites/g/files/zskgke326/files/migration/py/UNDP_PRY_Asuncion_2018.jpg',
        name_city: 'Asuncion',
        name_country: 'Paraguay'
    },
    {
        image: 'https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg',
        name_city: 'Rio de Janeiro',
        name_country: 'Brazil'
    },
    {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/c0/aa/51/playa-de-punta-del-diablo.jpg',
        name_city: 'Punta del Diablo',
        name_country: 'Uruguay'
    },
    {
        image: 'https://img.freepik.com/fotos-premium/vista-aerea-calles-antiguas-ciudad-colonial-sucre-bolivia_620810-537.jpg',
        name_city: 'Sucre',
        name_country: 'Bolivia'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2019/11/11/14/54/city-4618598_1280.jpg',
        name_city: 'Quito',
        name_country: 'Ecuador'
    },
    {
        image: 'https://media.revistagq.com/photos/5ca5f0b5f4648880d9f490ee/master/w_1600%2Cc_limit/el_helicoide_caracas_465.jpg',
        name_city: 'Caracas',
        name_country: 'Venezuela'
    },
    {
        image: 'https://content.r9cdn.net/rimg/dimg/34/a4/c96235ea-city-30430-1707c99ff99.jpg?crop=true&width=1020&height=498',
        name_city: 'Medellin',
        name_country: 'Colombia'
    },
    {
        image: 'https://viajes.nationalgeographic.com.es/medio/2023/03/27/vistas-de-la-costanera-de-ushuaia_f8dbe0c3_610883992_230327105110_1280x853.jpg',
        name_city: 'Ushuaia',
        name_country: 'Argentina'
    },
    {
        image: 'https://blogimagestc.s3.amazonaws.com/Chile-Santiago-de-Chile.jpg',
        name_city: 'Santiago',
        name_country: 'Chile'
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Bogot%C3%A1_Colpatria_Night.jpg',
        name_city: 'Bogotá',
        name_country: 'Colombia'
    },
    {
        image: 'https://thumbs.dreamstime.com/b/plaza-de-armas-en-lima-per%C3%BA-43063152.jpg',
        name_city: 'Lima',
        name_country: 'Perú'
    },
];

const CardCity = () => {
    return (
        <>
            <div className="card-container-wrapper">
                {data.map((city, index) => (
                    <Card key={index} className="card-container">
                        <Card.Img src={city.image} alt="City Image" className="card-image" />
                        <div className="card-overlay">
                            <Card.Title className="card-citi">{city.name_city}</Card.Title>
                            <Card.Text className="card-country">{city.name_country}</Card.Text>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default CardCity;




