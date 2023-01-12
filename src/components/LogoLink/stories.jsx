import {LogoLink} from './LogoLink'

export default{
    title: 'LogoLink',
    component: LogoLink,
    args:{
        text: 'LogoLink',
        srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXIgJ4iqYIN2JiLO5m8kBdInrrQTbEt47mA&usqp=CAU',
        link: 'htpps://localhost',
},
}


export const ImageOnly = (args) => {
    return(
        <div>
            <LogoLink {...args} />
        </div>
);
};

export const TextOnly = (args) => {
    return(
        <div>
            <LogoLink {...args} />
        </div>
);
};

TextOnly.args = {
    srcImg:'',
}
