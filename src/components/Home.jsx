import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
function Home() {
  return (
  <Container>
    <ImageSlider/>
  </Container>
  );
}

export default Home;

const Container=styled.main`
  min-height: calc(100vh - 7px);
  padding:0 calc(3.5vw + 7px);
  position: relative;
  overflow-x: hidden;
  &:before{
    background: url("/images/home-background.png") center center / cover repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1; 
  }
`;