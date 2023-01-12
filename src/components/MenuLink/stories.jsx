
import {MenuLink} from './MenuLink'

export default{
    title: 'MenuLink',
    component: MenuLink,
    args:{
        children: 'MenuLink',
        link: 'https://www.google.com.br/',
        target: false,
},
    argTypes:{
        children: {type: 'string'},
        link: {type: 'string'},
        target: {tyoe: 'boolean'},
},
}


export const Template = (args) => {
    return(
        <div style={{display: 'flex'}}>
            <MenuLink {...args} />
        </div>
);
};
