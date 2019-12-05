import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from "./components/Container"
import Detail from './components/Detail'
import Nav from './components/Nav'
import styled from "styled-components"

const GlobalContainer = styled.div`
    display: flex;
    margin-top: 5vh;
`


const Routes = () => (
  <BrowserRouter>
      <Nav></Nav>
      <GlobalContainer>
      <Route path="/" component={Container} />
      <Route path="/:id" component={Detail}/>
      </GlobalContainer>
  </BrowserRouter>
)

export default Routes