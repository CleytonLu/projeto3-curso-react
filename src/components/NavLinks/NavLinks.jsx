import * as Styled from './styles'
import P from 'prop-types'

import {MenuLink} from '../MenuLink/MenuLink'
import { NavLink } from 'react-router-dom'

export const NavLinks = ({ links = [] }) => {
    return(
        <Styled.Container>
            {links.map((link) => (
                <MenuLink key={link.link} {...link} />
            ))}
        </Styled.Container>
)
}

NavLinks.propTypes = {
    links: P.arrayOf(
        P.shape({
            children: P.node.isRequired,
            link: P.string.isRequired,
            newTab: P.bool,
        }))
}

