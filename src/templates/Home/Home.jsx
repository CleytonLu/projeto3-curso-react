import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns/GridTwoColumns';
import { GridContent } from '../../components/GridContent/GridContent';
import { GridText } from '../../components/GridText/GridText';
import { GridImage } from '../../components/GridImage/GridImage';

import { Base } from '../Base/Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import config from '../../config/index'

function Home() {
    const [data, setData] = useState([]);
    const isMounted = useRef(true);

    useEffect(() => {
        const load = async () => {
            try {
                console.log('fetching');
                const data = await fetch(
                    `http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep`
                );
                const json = await data.json();
                const { attributes } = json.data[0];
                const pageData = mapData([attributes]);
                setData(() => pageData[0]);
            } catch (e) {
                setData(undefined);
            }
        };

        if (isMounted.current === true) {
            load();
        }

        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(()=> {
        if (data === undefined) {
            document.title = `Página não encontrada | ${config.siteName}`;
        }

        if (data && !data.slug) {
            document.title = `Carregando... | ${config.siteName}`;
        }

        if (data && data.title) {
            document.title = `${data.title} | ${config.siteName}`;
        }
    }, [])

    if (data === undefined) {
        return <PageNotFound />;
    }

    if (data && !data.slug) {
        return <Loading />;
    }

    const { menu, sections, footerHtml, slug } = data;
    const { links, text, link, srcImg } = menu;

    return (
        <Base
            links={links}
            footerHtml={footerHtml}
            logoData={{ text, link, srcImg }}
        >
            {sections.map((section, index) => {
                const { component } = section;
                const key = `${slug}-${index}`;

                if (component === 'section.section-two-columns') {
                    return <GridTwoColumns key={key} {...section} />;
                }
                if (component === 'section.section-content') {
                    return <GridContent key={key} {...section} />;
                }
                if (component === 'section.section-grid-text') {
                    return <GridText key={key} {...section} />;
                }
                if (component === 'section.section-grid-image') {
                    return <GridImage key={key} {...section} />;
                }
            })}
        </Base>
    );
}

export { Home };
export default Home;
