import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Routes from './components/routes';
import { Link } from 'react-router-dom';

class App extends Component {
render(){
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="TODOLIST" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/adverts">Adverts</Link>
          </Navigation>
        </Header>
        <Drawer title="TODOLIST">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/adverts">Adverts</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Routes/>
        </Content>
      </Layout>
    </div>

  )
}
}

export default App;