import React from 'react'

import { CardStyled } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
    return (
        <CardStyled direction={id % 2 === 0 ? "row-reverse" : "row"}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt={title} />
            </div>
        </CardStyled>
    )
}
