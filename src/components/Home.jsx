// 'use client';
import {React,useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
function Home() {
  // useEffect(()=>{
  //   db.collection("movies").onSnapshot((snapshot)=>{
  //     let tempMovies=snapshot.docs.map((doc)=>{
  //       console.log(doc.data());
  //       return {id:doc.id,...doc.data()}
  //     })
  //   })
  //   },[])
  return (
  <Container>
    <ImageSlider/>
    <Viewers/>
    <Movies/>
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