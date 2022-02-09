import React from 'react';
import styled from 'styled-components';
function Login() {
  return (
      <Container>
          <CTA>
              <CTALogo1 src="/images/cta-logo-one.svg" />
              <SignUp>GET ALL THERE</SignUp>
              <Description>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  unde assumenda iusto? Quos iusto quisquam quidem libero,
                  tempora explicabo esse, non veritatis magni beatae,
              </Description>
              <CTALogo2 src="/images/cta-logo-two.png" />
          </CTA>
      </Container>
  );
}

export default Login;

const Container=styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before{
        position:absolute;
        top: 0;
        bottom: 0;
        content: "";
        left:0;
        right:0;
        opacity:0.7;
        background-image: url("/images/login-background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;

    align-items: center;
`;
const CTALogo1 = styled.img``;

const SignUp= styled.a`
    width: 100%;
    cursor: pointer;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color:#f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
        letter-spacing: 5px;
    }
    `

const Description=styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogo2=styled.img`
    width:90%;
`