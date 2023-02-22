import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { LogoLink } from '../LogoLink/LogoLink';
import { NavLinks } from '../NavLinks/NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Styled.Button visible={visible} onClick={() => setVisible(true)} arial-label= "Open/Close">
                {visible ? (<CloseIcon />) : (<MenuIcon />)}
            </Styled.Button>

            <Styled.Container visible={visible} onClick={()=> setVisible(false)}>
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData} />
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired,
};
