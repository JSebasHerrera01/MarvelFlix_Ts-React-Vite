import { useEffect, useState } from 'react'
import { Container, Avatar, AvatarContainer, Degrade } from "../styled.components";
import BlackWidow from '../../assets/black-widow.png';

interface Movie {
    name: string;
    description: string;
    thumbnail: string;
}

interface Item {
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}
const Carousel = (): JSX.Element => {

    const [data, setData] = useState<Movie[]>([]);

    const getData = async (): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL;
        const items = await fetch(url);
        const response = await items.json();
        const aItems = response.data.results.map((item: Item) => {
            const obj: Movie = {
                name: item.name,
                description: item.description,
                thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
            };
            return obj;
        });
        setData(aItems);
    }

    useEffect(() => {
        getData();
    }, []);
    return (<>
        {data.length > 0 && <>
            <Container height={50} src={data[1].thumbnail}>Contenedor</Container>
            <AvatarContainer height={50}>
                <Avatar height={50} src={BlackWidow} />
            </AvatarContainer>
            <Degrade height={50}></Degrade>
        </>
        }
    </>)
};

export default Carousel;