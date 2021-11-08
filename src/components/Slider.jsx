import React, {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import {sliderItems} from "../data"


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
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

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

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return (
        <Cont>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                    <ImgCont>
                        <Img src={item.img} alt={item.title}/>
                    </ImgCont>
                    <InfoCont>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Slide>
                    ))}
               
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Cont>
    )
}

export default Slider
