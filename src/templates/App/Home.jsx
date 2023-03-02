import { useState } from 'react';
import { useEffect } from 'react';
import { Heading } from '../../components/Heading/Heading';
import { Base } from '../Base/Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';

function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        const load = async () => {
            const data = await fetch('../../api/dados.api');
            const json = await data.json();

            const pageData = mapData(json);
            setData(pageData);
        };

        load();
    }, []);

    if (data === undefined) {
        return <h1>Página não encontrada</h1>;
    }

    if (data && !data.slug) {
        return <h1>Carregando...</h1>;
    }

    return <Base {...mockBase} />;
}

export default Home;
