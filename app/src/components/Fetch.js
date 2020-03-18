import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/shibeActions';
import styled from 'styled-components';

const Button = styled.button`
margin: 3% 0% 0% 0%;
width: 20%;
background-color: black;
color: white;
`;

const Fetch = props => {

    // const fetchData = () => {
    //     // Need to dispatch to call api
    //     alert('fetchData invoked')
    // }

    return (
        <Button type = 'button' onClick = {props.fetchData}>Fetch!</Button>
    )

}

export default connect(null, {fetchData})(Fetch)