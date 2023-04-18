import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import MainContainer from './MainContainer';

const ResponsiveImg = styled.img`
  width: 100%
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const TextContainer = styled.div`
  display:flex;
  justify-content: center;
`;

const ResponsiveDiv = styled.div`
  width: 50%;

  @media(max-width:1200px){
    width: 85%;
  }
`;

function AboutUs() {
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <ResponsiveDiv>
            <ResponsiveImg src={'../assets/SPOT_HNY2.gif'}></ResponsiveImg>
          </ResponsiveDiv>
        </ImgContainer>
        <Typography variant='h4'>OUR STORY</Typography>
        <ImgContainer>
          <ResponsiveDiv>
            <ResponsiveImg src='../assets/igor1.webp'></ResponsiveImg>
          </ResponsiveDiv>
        </ImgContainer>
        <TextContainer>
          <ResponsiveDiv>
            <Typography variant='body1'>
              Igor Milankovic is the President and Artist, He has been a metal artist since the age of 17.
              His designs and techniques have led to some of the most unique and beautiful pieces of artwork.
              Starting his career in pencil and learning how to weld and fabricate, Igor blended the two to create these extremely detailed pieces.
              The approach to the finishes leaves the artwork ready for the Gallery.
              Inspired by his love of the outdoors and the western lifestyle, Igor uses images burned into his memory to create the scenes that you see today.
            </Typography>
          </ResponsiveDiv>
        </TextContainer>
      </MainContainer>
    </>
  )
}

export default AboutUs
