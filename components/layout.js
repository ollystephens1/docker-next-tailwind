import { Fragment } from 'react';
import Head from 'next/head';
import stylesheet from '../styles/styles.css';

export default props => (
  <Fragment>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </Head>
    <div>{props.children}</div>
  </Fragment>
);
