import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridSection = ({ title, description, grid, background }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading size="huge" uppercase colorDark={!background}>
                    {title}
                </Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.grid bak>
                    {grid.map((item, index) => (
                        <Styled.GridElement key={index}>
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
                </Styled.grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridSection.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        })
    ),
};
