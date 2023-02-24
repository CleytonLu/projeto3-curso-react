import * as Styled from './styles';
import P from 'prop-types';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import { GoTop } from '../../components/GoTop/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
    return (
        <>
            <Menu links={links} logoData={logoData} />
            <Styled.Container>
                {children}
                <Footer html={footerHtml} />
            </Styled.Container>
            <GoTop />
        </>
    );
};

Base.propTypes = {
    children: P.node.isRequired,
    ...Menu.propTypes,
    footerHtml: P.string.isRequired,
};
