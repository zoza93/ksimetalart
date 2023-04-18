import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import CenterElement from "./CenterElement";
import { Link } from 'react-router-dom';
import MainContainer from './MainContainer';

const BigLogoImg = styled.img`
    max-height: 400px
`;

const ResponsiveImg100 = styled.img`
    width: 100%;
    text-align: center;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`;

const TwoGuitarsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20rem;
    color: white;

    @media(max-width:1700px){
        padding: 0 3rem;
    }
`;

const PicasoDiv0 = styled.div`
    background: url(../assets/IMG_0008.jpg);
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PicasoDiv = styled.div`
    background: url(../assets/IMG_6090.jpg);
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProjectsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3rem 20rem 3rem 20rem;
    color: white;
    gap: 1rem;

    @media(max-width:1700px){
        padding: 0 3rem;
    }
`;

const PicasoDiv2 = styled.div`
    background: url(../assets/metalArt3.webp);
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContactButton = styled.button`
    height: 40px;
    width: 250px;
    background: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    transition: background 2s;

    &:hover{
        background: white;
        color: #333;
        border: 1px solid #333;
    }
`;

function Home() {
    return (
        <>
            <MainContainer>
                <ImgContainer>
                    {/* <ResponsiveImg src={'../assets/SPOT_HNY2.gif'}></ResponsiveImg> */}
                    <BigLogoImg src='../assets/logo-black.png'></BigLogoImg>
                </ImgContainer>

                <PicasoDiv0>
                    <Typography variant='body1' style={{
                        fontSize: "30px",
                        fontWeight: "500",
                        color: "#fff",
                        fontStyle: "italic"
                    }}>"Everything you can imagine is real." ― Pablo Picasso</Typography>
                </PicasoDiv0>

                <TwoGuitarsDiv>
                    <div>
                        <ResponsiveImg100 src={'../assets/IMG_8293.png'}></ResponsiveImg100>
                    </div>
                    <div>
                        <Typography variant='h5' paddingTop={'1rem'} marginBottom={'2rem'} textAlign={'center'}>Add Custom Metal Art To Your Interior Design</Typography>
                        <Typography variant='body1' paddingX={'3rem'} textAlign={'center'}>Are you looking to add a personal touch to your home or workspace? KSI Art Company crafts handmade, custom metal artwork in Novi Sad. Our crew can create anything you envision. We've got the skills and equipment needed to create the art piece of your dreams.

                            Make us your preferred metal art company in KSI Metal Art. Contact us to inquire about our custom metal artwork.</Typography>
                    </div>
                    <div>
                        <ResponsiveImg100 src={'../assets/IMG_8302.png'}></ResponsiveImg100>
                    </div>
                </TwoGuitarsDiv>

                <PicasoDiv>
                    <Typography variant='body1' style={{
                        fontSize: "30px",
                        fontWeight: "500",
                        color: "#fff",
                        fontStyle: "italic"
                    }}>"Art washes away from the soul the dust of everyday life." ― Pablo Picasso</Typography>
                </PicasoDiv>

                <ProjectsDiv>
                    <div>
                        <ResponsiveImg100 src={'../assets/metalart-category1.png'}></ResponsiveImg100>
                    </div>
                    <div>
                        <ResponsiveImg100 src={'../assets/metalart-category2.png'}></ResponsiveImg100>
                    </div>
                    <div>
                        <ResponsiveImg100 src={'../assets/metalart-category3.png'}></ResponsiveImg100>
                    </div>
                    <div>
                        <ResponsiveImg100 src={'../assets/metalart-category4.png'}></ResponsiveImg100>
                    </div>
                </ProjectsDiv>

                <PicasoDiv2>
                    <div>
                        <Typography variant='body1' style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "#fff",
                            fontStyle: "italic"
                        }}>We have a wide variety of metal art for sale</Typography>
                        <br />
                        <CenterElement>
                            <ContactButton><Link className='linkButton' to='/contact'>Contact</Link></ContactButton>
                        </CenterElement>
                    </div>
                </PicasoDiv2>
            </MainContainer>
        </>
    )
}

export default Home
