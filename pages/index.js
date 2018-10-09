import * as React from 'react';
import Link from "next/link";
import { firestore } from '../firebase'
import Counter from '../containers/Counter'

class Index extends React.Component {
  static async getInitialProps () {
    console.log("Called getDefault props in index.js");
    const snapshot = await firestore.collection("roles").get();
    console.log(snapshot);
    return {};
  }
  render () {
    return (
      <div>
        <h1>Hello from index.jsx</h1>
        <Counter />
        <Link href="/test">
          <a>Go to test.js</a>
        </Link>
      </div>
    )
  }
}

export default Index;
