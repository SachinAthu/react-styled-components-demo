import React from 'react'
import { FaTwitter, FaFacebook , FaInstagram} from 'react-icons/fa'

import { SocialIconsStyled } from './styles/SocialIcons.styled'

export default function SocialIcons() {
    return (
        <SocialIconsStyled>
            <li>
                <a href="https://www.facebook.com/">
                    <FaFacebook />
                </a>
            </li>

            <li>
                <a href="https://www.twitter.com/">
                    <FaTwitter />
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/">
                    <FaInstagram />
                </a>
            </li>
        </SocialIconsStyled>
    )
}
