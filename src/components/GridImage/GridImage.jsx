import * as Styled from './styles';
import P, { shape } from 'prop-types';

import {SectionBackground} from '../SectionBackground/SectionBackground'
import {Heading} from '../Heading/Heading'
import {TextComponent} from '../TextComponent/TextComponent'

export const GridImage = ({ title, description, grid, background, sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Heading size="huge" uppercase colorDark={!background}>
                    {title}
                </Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((item) => (
                        <Styled.GridElement key={item.srcImg}>
                            <Styled.Image src={item.srcImg} alt={item.altText} />
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridImage.propTypes = {
    background: P.bool,
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            altText: P.string.isRequired,
            srcImg: P.string.isRequired,
        })
    ),
    sectionId: P.string,
};
