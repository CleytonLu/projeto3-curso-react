import { GridContent } from '../../components/GridContent/GridContent';

export const PageNotFound = () => {
    return (
        <GridContent
            title="Erro 404"
            html='<p> A página não foi encontrada. <a href="/"> Clique para voltar</a>'
        />
    );
};
