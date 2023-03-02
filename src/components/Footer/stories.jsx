import { Footer } from './Footer';
export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p><a href= "https://beacons.page/otaviomiranda"> Feito com <3 por Cleyton Lucas</a><p>`,
    },
};
export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
};
