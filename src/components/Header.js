import React from 'react'

import { HeaderStyled, NavStyled, LogoStyled, ImageStyled } from './styles/Header.styled'
import { ContainerStyled } from './styles/Container.styled'
import { ButtonStyled } from './styles/Button.styled'
import { FlexStyled } from './styles/Flex.styled'

export default function Header() {
    return (
        <HeaderStyled>
            <ContainerStyled>
                <NavStyled>
                    <LogoStyled src="./images/logo.svg" alt="logo" />
                    <ButtonStyled>Try It Free</ButtonStyled>
                </NavStyled>

                <FlexStyled>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                        </p>

                        <ButtonStyled bg="#ff0099" color="#fff">
                            Get Started For Free
                        </ButtonStyled>
                    </div>

                    <ImageStyled src="./images/illustration-mockups.svg" alt="illustration-mockups" />
                </FlexStyled>
            </ContainerStyled>
        </HeaderStyled>
    )
}
