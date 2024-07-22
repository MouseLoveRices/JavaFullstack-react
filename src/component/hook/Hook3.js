import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Col, Row } from 'reactstrap';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './hook3.css'

import img1 from '../../img/tour-1.png';
import img2 from '../../img/tour-2.png';
import img3 from '../../img/tour-3.png';
import img4 from '../../img/tour-4.png';
import img5 from '../../img/tour-5.png';
import img6 from '../../img/tour-6.png';
import img7 from '../../img/tour-7.png';
import img8 from '../../img/tour-8.png';
import img9 from '../../img/tour-9.png';
import img10 from '../../img/tour-10.png';
import img11 from '../../img/tour-11.png';
import img12 from '../../img/tour-12.png';
import img13 from '../../img/tour-13.png';
import img14 from '../../img/tour-14.png';
import img15 from '../../img/tour-15.png';
import img16 from '../../img/tour-16.png';

export default function Hook3() {
    const [selectedCategory, setSelectedCategory] = useState('New York');

    let arr = [
        { id: 1, title: "Three Temples Bangkok City Tour Must Visit", category: "New York", price: 149.99, img: img1 },
        { id: 2, title: "Essence of Vietnam South to North", category: "New York", price: 167.19, img: img2 },
        { id: 3, title: "Osa Peninsula to Dominical City Tour", category: "New York", price: 134.99, img: img3 },
        { id: 4, title: "Mt Fuji, Hakone, Lake Ashi Cruise", category: "New York", price: 50.15, img: img4 },
        { id: 5, title: "Three Temples Bangkok City Tour Must Visit", category: "London", price: 149.99, img: img5 },
        { id: 6, title: "Essence of Vietnam South to North", category: "London", price: 167.19, img: img6 },
        { id: 7, title: "Osa Peninsula to Dominical City Tour", category: "London", price: 134.99, img: img7 },
        { id: 8, title: "Mt Fuji, Hakone, Lake Ashi Cruise", category: "London", price: 50.15, img: img8 },
        { id: 9, title: "Three Temples Bangkok City Tour Must Visit", category: "Tokyo", price: 149.99, img: img9 },
        { id: 10, title: "Essence of Vietnam South to North", category: "Tokyo", price: 117.19, img: img10 },
        { id: 11, title: "Osa Peninsula to Dominical City Tour", category: "Tokyo", price: 134.99, img: img11 },
        { id: 12, title: "Mt Fuji, Hakone, Lake Ashi Cruise", category: "Tokyo", price: 50.15, img: img12 },
        { id: 13, title: "Three Temples Bangkok City Tour Must Visit", category: "Los Angeles", price: 149.99, img: img13 },
        { id: 14, title: "Essence of Vietnam South to North", category: "Los Angeles", price: 117.19, img: img14 },
        { id: 15, title: "Osa Peninsula to Dominical City Tour", category: "Los Angeles", price: 134.99, img: img15 },
        { id: 16, title: "Mt Fuji, Hakone, Lake Ashi Cruise", category: "Los Angeles", price: 50.15, img: img16 }
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    const filteredArr = arr.filter(card => card.category === selectedCategory);

    return (
        <Container>
            <Box className="tabs-container" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedCategory} onChange={handleTabChange} aria-label="city tabs">
                    <Tab label="New York" value="New York" sx={{ 
                        '&.Mui-selected': { backgroundColor: '#44d7b6', color: 'white', borderRadius: '5px', textDecoration: 'none' },
                        textTransform: 'none'
                    }}/>
                    <Tab label="London" value="London" sx={{ 
                        '&.Mui-selected': { backgroundColor: '#44d7b6', color: 'white', borderRadius: '5px', textDecoration: 'none' },
                        textTransform: 'none'
                    }}/>
                    <Tab label="Tokyo" value="Tokyo" sx={{ 
                        '&.Mui-selected': { backgroundColor: '#44d7b6', color: 'white', borderRadius: '5px', textDecoration: 'none' },
                        textTransform: 'none'
                    }}/>
                    <Tab label="Los Angeles" value="Los Angeles" sx={{ 
                        '&.Mui-selected': { backgroundColor: '#44d7b6', color: 'white', borderRadius: '5px', textDecoration: 'none' },
                        textTransform: 'none'
                    }}/>
                </Tabs>
            </Box>
            <Row className='rowCard'>
                {filteredArr.map((card, index) => (
                    <Col key={index} lg={3} md={4} sm={6} xs={6}>
                        <Card>
                            <img alt="Sample" src={card.img} />
                            <CardBody>
                                <h6><i className="fa-solid fa-map-pin"></i> {card.category}</h6>
                                <CardTitle tag="h5"> {card.title}</CardTitle>
                                <CardText>{card.text}</CardText>
                                <p>From <a>{card.price}</a> <span className='price'>$250.00</span></p>
                                <p>
                                    <i className="fa-solid fa-star icon"></i>
                                    <i className="fa-solid fa-star icon"></i>
                                    <i className="fa-solid fa-star icon"></i>
                                    <i className="fa-solid fa-star icon"></i>
                                    <i className="fa-regular fa-star-half-stroke icon"></i>
                                </p>
                                
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
