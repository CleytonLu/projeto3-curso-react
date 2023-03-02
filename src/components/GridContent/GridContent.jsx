import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridContent = ({ title, html, background = false, sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Heading uppercase colorDark={!background} as="h2">
                    {title}
                </Heading>
                <Styled.Html>
                    <TextComponent>{html}</TextComponent>
                </Styled.Html>
            </Styled.Container>
        </SectionBackground>
    );
};

GridContent.propTypes = {
    title: P.string.isRequired,
    html: P.string.isRequired,
    background: P.bool,
};
