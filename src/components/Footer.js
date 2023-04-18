import React from 'react';
import CenterElement from './CenterElement';
import styled from 'styled-components';

const FooterDark = styled.div`
    background-image: linear-gradient(to right, rgb(51, 51, 51), black, rgb(51, 51, 51));
    color: white
`;

function Footer() {
  return (
    <FooterDark>
      <CenterElement>
        <p>Copyright © 2021 KSI Metal Art Company, all rights reserved.</p>
      </CenterElement>
    </FooterDark>
  )
}

export default Footer
