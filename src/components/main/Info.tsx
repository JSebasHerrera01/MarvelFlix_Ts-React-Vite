import { FaRegCirclePlay } from 'react-icons/fa6';
import { ContainerInfo } from '../styled.components';


const Info = () => {
    return(<>
        <ContainerInfo height={50}>
            <section className='icon-info'>
            <FaRegCirclePlay size={25} color={'red'}/>
            </section>
            <section className='title-info'>
                BlackWidows
            </section>
        </ContainerInfo>
    </>)
 
};
export default Info; 