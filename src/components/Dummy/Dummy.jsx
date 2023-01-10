import * as Styled from './styles'
import P from 'prop-types'

export const Dummy = ({ children }) => {
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
)
}

Dummy.propTypes = {
    children: P.node.isRequired,
}
