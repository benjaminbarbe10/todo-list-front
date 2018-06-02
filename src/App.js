import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Provider } from 'react-redux';
import store from './redux/redux';
import { createStore, applyMiddleware } from 'react';
import thunk from 'redux-thunk';
import Routes from "./components/Routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    const store = createStore(store, applyMiddleware(thunk));
    return <div>
        <Provider store={store}>
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
              <Routes />
            </Content>
          </Layout>
        </Provider>
      </div>;
  }
}

export default App;
