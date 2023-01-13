import {SectionBackground} from './SectionBackground'
import {SectionContainer} from '../SectionContainer/SectionContainer'

export default{
title: 'SectionBackground',
component: SectionBackground,
    args:{
    children: (
            <div>
                <h1>SectionContainer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos alias mollitia animi earum eum iure, accusamus nobis dolorem sint esse vitae nemo commodi! Libero molestias, neque dignissimos quidem recusandae iure?</p>
            </div>
    ),
    background: false,
},
    argTypes:{
        children: {type: ''},
        background: {type: 'boolean'},
},
}


export const Template = (args) => {
    return(
        <div>
        <SectionBackground {...args} />
        </div>
);
};
