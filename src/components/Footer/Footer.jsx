import * as Styled from './styles';
import P from 'prop-types';

import { TextComponent } from '../TextComponent/TextComponent';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const Footer = ({ html }) => {
    return (
        <Styled.Container>
            <SectionContainer>
                <TextComponent>{html}</TextComponent>
            </SectionContainer>
        </Styled.Container>
    );
};

Footer.propTypes = {
    html: P.string.isRequired,
};
