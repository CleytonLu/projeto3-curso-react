import {GridTwoColumns} from './GridTwoColumns'

export default{
title: 'GridTwoColumns',
component: GridTwoColumns,
args:{
    title: 'GridTwoColumns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, non! Dolores facere debitis exercitationem repellat iure. Beatae dolores, error eum qui porro doloremque minus, laboriosam quia sequi distinctio reiciendis saepe?`,
    srcImg: 'https://landingpagecursojs.netlify.app/assets/img/javascript.svg'
},
argTypes:{
    title: {type: 'string'},
    text: {type: 'string'},
    srcImg: {type: 'string'},
},
}
export const Template = (args) => {
return(
    <div>
        <GridTwoColumns {...args} />
    </div>
);
};
