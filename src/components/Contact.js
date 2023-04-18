import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MainContainer from './MainContainer';

const BigLogoImg = styled.img`
    max-height: 400px
`;

const ImgContainer = styled.div`
    background-image: linear-gradient(to right, rgb(51, 51, 51), black, rgb(51, 51, 51));
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`;

function Contact() {
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <BigLogoImg src='../assets/logo-black.png'></BigLogoImg>
        </ImgContainer>
        <Typography variant='body2'>
          KSI WORKSHOP <br />

          A: test 7, 21000 Temerin<br />
          T: +38163 7778793<br />
          E: ksimetalart@test.com<br />

          MON-FRI: 7am - 10pm<br />
          SATURDAY: 9am - 10pm<br />
          SUNDAY: 8am - 11pm<br />

          FAQ /<br />
          Shipping & Returns /<br />
          Payment Methods /
        </Typography>
      </MainContainer>

    </>
  )
}

export default Contact
