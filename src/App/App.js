import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
import { Main, Header, Content } from '../layout';
import { Home, History } from '../scenes';
import storeObj from '../store';

const { store, persistor } = storeObj;

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  // <StoreProvider store={store}>
  //   <PersistGate persistor={persistor} loading={null}>
  <StyleProvider theme={theme}>
    <BrowserRouter>
      <Main>
        <Header />
        {/* <Content>
              <Route path="/" exact component={Home} />
              <Route path="/history" component={History} />
            </Content> */}
      </Main>
    </BrowserRouter>
  </StyleProvider>
  //   </PersistGate>
  // </StoreProvider>
);

export default App;
