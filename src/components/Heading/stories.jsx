import { Heading } from "./Heading";

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'O texto está claro',
        colorDark: false,
    },
    argTypes: {
        children:{type: 'string'},
    },
    parameters: {
        backgrounds:{
            default: 'dark'
        }
    }
};

export const Light = (args) => <Heading {...args} />
export const Dark = (args) => <Heading {...args} />

Light.parameters = {
        backgrounds:{
            default: 'light',
    }
};

Light.args = {
    children: 'O texto está escuro',
    colorDark: true,
};
