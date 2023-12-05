import {Flex} from '../styled.components.ts';
import Carousel from './Carousel.tsx';
import Info from './Info.tsx';

const Main = (): JSX.Element => {
    
    return (<>
        <Flex>
            <Carousel/>
            <Info/>
        </Flex>
    </>)
};

export default Main;