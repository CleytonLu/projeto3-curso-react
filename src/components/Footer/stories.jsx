import {Footer} from './Footer'
export default{
title: 'Footer',
component: Footer,
args:{
    children: `<p><a href= "https://beacons.page/otaviomiranda"> Feito com <3 por Cleyton Lucas</a><p>`,
},
argTypes:{
    children: {type: 'string'},
},
}
export const Template = (args) => {
return(
    <div>
        <Footer {...args} />
    </div>
);
};
