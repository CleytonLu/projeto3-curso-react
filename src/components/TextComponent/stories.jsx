
import {TextComponent} from './TextComponent'

export default{
    title: 'TextComponent',
    component: TextComponent,
    args:{
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus quod doloremque suscipit commodi sunt totam placeat maxime deleniti inventore quia, labore minima alias ex dolorem sed aperiam ab. Labore.',
},
    argTypes:{
        children: {type: 'string'},
},
}


export const Template = (args) => {
    return(
        <div>
            <TextComponent {...args} />
        </div>
);
};
