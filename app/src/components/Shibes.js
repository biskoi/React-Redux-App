import React from 'react';
import {Shibe} from './Shibe';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 5% 0%;
`;

const Shibes = props => {

    return (
        <Box>
        {props.data.length ? props.data.map((item, index) => (
            <Shibe data = {item} key = {index}/>
        )) : 'No Shibes here yet!'}
        </Box>
    )

}

const mSTP = (state) => {
    return {
    data: state.data,
    loading: state.loading
    }
}

export default connect(mSTP, {})(Shibes)