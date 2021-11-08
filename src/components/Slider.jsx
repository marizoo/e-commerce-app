import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'


const Cont = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg };
`

const ImgCont = styled.div`
height: 100%;
flex: 1;
`

const Img = styled.img`
height: 70%;
margin-left: 150px;
margin-top: 50px;
`

const InfoCont = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`


const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`


const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`



const Slider = () => {
    return (
        <Cont>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                {/* SLIDE 1 */}
                <Slide bg="f5fafd">
                    <ImgCont>
                        <Img src="./img/kid-girl.png" alt="a little girl smiling"/>
                    </ImgCont>
                    <InfoCont>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Slide>
                {/* SLIDE 2 */}
                <Slide bg="fcf1ed">
                    <ImgCont>
                        <Img src="./img/kid-girl.png" alt="a little girl smiling"/>
                    </ImgCont>
                    <InfoCont>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Slide>
                {/* SLIDE 3 */}
                <Slide bg="fbf0f4">
                    <ImgCont>
                        <Img src="./img/kid-girl.png" alt="a little girl smiling"/>
                    </ImgCont>
                    <InfoCont>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Cont>
    )
}

export default Slider
