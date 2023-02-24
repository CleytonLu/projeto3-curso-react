import { Heading } from '../../components/Heading/Heading';
import { Base } from '../Base/Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';

function Home() {
    return <Base {...mockBase} />;
}

export default Home;
