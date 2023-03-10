import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridTwoColumns = ({ title, text, srcImg, background = false, sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container background={background}>
                <Styled.TextContainer>
                    <Heading as="h2">{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>
                <Styled.ImageContainer>
                    <Styled.Image src={srcImg} alt={title} />
                </Styled.ImageContainer>
            </Styled.Container>
        </SectionBackground>
    );
};

GridTwoColumns.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
    background: P.bool,
    sectionId: P.string,
};
