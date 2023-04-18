import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import CenterElement from './CenterElement';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MainContainer from './MainContainer';

import { dataBaseGuitars, dataBaseViolins, dataBaseBikes, dataBaseDecorations, dataBaseLamps, dataBaseCars } from './ProductsDataBase';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1600 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1600, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 750, min: 0 },
        items: 2
    }
};

const CarouselImage = styled.img`
    width: 100%;
`;

function Projects() {

    const [imgsData, setImgsData] = useState([]);
    const [category, setCategory] = useState('guitars');
    useEffect(() => {
        setCategory('guitars');
    }, []);
    useEffect(() => {
        switch (category) {
            case 'guitars':
                setImgsData(dataBaseGuitars);
                break;
            case 'bikes':
                setImgsData(dataBaseBikes);
                break;
            case 'cars':
                setImgsData(dataBaseCars);
                break;
            case 'decorations':
                setImgsData(dataBaseDecorations);
                break;
            case 'lamps':
                setImgsData(dataBaseLamps);
                break;
            case 'violins':
                setImgsData(dataBaseViolins);
                break;
            default:
                setImgsData([]);
                break;
        }
    }, [category]);

    return (
        <MainContainer>
            <Carousel responsive={responsive} infinite={true} dotListClass="custom-dot-list-style">
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('bikes') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-bikes.jpg"
                            title="BIKES"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                BIKES
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('cars') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-cars.jpg"
                            title="CARS"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CARS
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('decorations') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-funnydecorations.jpg"
                            title="funnydecorations"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                DECORATIONS
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('guitars') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-guitars.jpg"
                            title="GUITARS"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                GUITARS
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('lamps') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-lamps.jpg"
                            title="LAMPA"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                LAMPS
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }} onClick={() => { setCategory('violins') }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="../assets/multi-carousel/project-violin.jpg"
                            title="VIOLIN"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                VIOLIN
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Carousel>
            <Gallery resource={imgsData} />
        </MainContainer>
    )
}

export default Projects
