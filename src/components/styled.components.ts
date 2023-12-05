import styled from "styled-components";

interface Props {
    height?: number;
    src?: string;
}

export const Flex = styled.div<Props>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;


export const Container = styled.div<Props>`
height: calc(${props => props.height}vh - 50px);
width: 90%;
margin-top: 50px;
border-radius: 10px 10px 0 0;
background: url(${props => props.src}) no-repeat;
background-size: contain;
background-position: center;
opacity: 0.5;
`;

export const AvatarContainer = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    margin: auto;
`;

export const Avatar = styled.div<Props>`
    width: auto;
    height: ${props => props.height}vh;
    background: url(${props => props.src}) no-repeat;
    background-position: top;
    background-size: cover;
    
`;

export const Degrade = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(transparent 0, #000 90%);
    margin: auto;
`;


export const ContainerInfo = styled.div<Props>`
height: ${props => props.height}vh;
width: 100%;
color: #FFF;
background: black;
`;