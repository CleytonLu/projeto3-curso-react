import {SectionContainer} from './SectionContainer'

export default{
title: 'SectionContainer',
component: SectionContainer,
    args:{
    children: (
        <div>
            <h1>SectionContainer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos alias mollitia animi earum eum iure, accusamus nobis dolorem sint esse vitae nemo commodi! Libero molestias, neque dignissimos quidem recusandae iure?</p>
        </div>
    ),
},
    argTypes:{
        children: {type: ''},
},
}


export const Template = (args) => {
    return(
        <div>
        <SectionContainer {...args} />
        </div>
);
};
