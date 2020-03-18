import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
max-width: 100%;
max-height: 100%;
border-radius: 20px;
`;

const Card = styled.div`
border: solid white 2px;
border-radius: 20px;
max-width: 20%;
`;

export const Shibe = props => {

    return (
        <Card>
        <Img src = {props.data}/>
        </Card>
    )

}