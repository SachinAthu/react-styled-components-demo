import React from 'react'

import { FooterTopStyled } from './styles/FooterTop.styled'
import { ButtonStyled } from './styles/Button.styled'

export default function FooterTop() {
    return (
        <FooterTopStyled>
            <h2>Ready To Build Your Community</h2>

            <ButtonStyled bg="#ff0099" color="#fff">
                Get Started For Free
            </ButtonStyled>
        </FooterTopStyled>
    )
}
