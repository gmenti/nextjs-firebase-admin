import * as React from "react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import Layout from "../containers/Layout";

const defaultState = {
  count: 0,
  isOpenMenu: false
}

const reducer = (state = defaultState, action) => {
  console.log(state)
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: ++state.count };
    case "MENU_OPEN":
      return { ...state, isOpenMenu: true };
    case "MENU_CLOSE":
      return { ...state, isOpenMenu: false };
    default:
      return state;
  }
};

const makeStore = (initialState = defaultState) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout title="Admin panel">
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
