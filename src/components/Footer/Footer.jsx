import * as Styled from './styles';
import P from 'prop-types';

import { TextComponent } from '../TextComponent/TextComponent';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const Footer = ({ children }) => {
    return (
        <Styled.Container>
            <SectionContainer>
                <TextComponent>{children}</TextComponent>
            </SectionContainer>
        </Styled.Container>
    );
};

Footer.propTypes = {
    children: P.node.isRequired,
};
