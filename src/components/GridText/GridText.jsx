import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridText = ({ title, description, grid, background, sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Heading size="huge" uppercase colorDark={!background}>
                    {title}
                </Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((item) => (
                        <Styled.GridElement key={item.title}>
                            <Heading
                                size="medium"
                                colorDark={!background}
                                as="h3"
                            >
                                {item.title}
                            </Heading>
                            <TextComponent>{item.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridText.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        })
    ),
    sectionId: P.string,
};
