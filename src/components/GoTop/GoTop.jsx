import * as Styled from './styles';
import P from 'prop-types';

import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = ({ children }) => {
    return (
        <Styled.Container href="#" aria-label='Vai Para o Topo' title='Vai Para o Topo'>
            <KeyboardArrowUp /> 
        </Styled.Container>
    );
};

GoTop.propTypes = {
    children: P.node.isRequired,
};
