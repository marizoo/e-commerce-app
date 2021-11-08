import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Img = styled.img`
height: 75%;
z-index: 2;
`

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: gray;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`
// https://www.youtube.com/watch?v=c1xTDSIXit8&t=77s
// min 1:10:45

const Product = ({item}) => {
    return (
        <Cont>
            <Circle />
            <Img src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Cont>
    )
}

export default Product
