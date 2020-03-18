import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './components/Fetch';
import Shibes from './components/Shibes';
import {connect} from 'react-redux';
import styled from 'styled-components'

const P = styled.p`
margin: 5%;`;

function App(props) {
  return (
    <div className="App">
      <h1>Shibe.Online API</h1>
      <Fetch/>
      {props.loading ? <P>Fetching data...</P> : <Shibes/>}
      {props.data.length ? <Fetch/> : null}
      {/* <Fetch/>
      <Shibes/> */}
    </div>
  );
}


const mSTP = (state) => {
  return {
    data: state.data,
    loading: state.loading
  }
}

export default connect(mSTP, {})(App);
