import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Cont = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`

const Categories = () => {
    return (
        <Cont>
            {categories.map(item => (
                <CategoryItem item={item} key={item.key}/>
            ))};
        </Cont>
    )
}

export default Categories
