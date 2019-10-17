import React from 'react';
import {useSelector} from 'react-redux';

import CreateRouter from './routes';

import UserList from './components/UserList';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './services/apollo';


export default function App() {
  const signed = useSelector(state => state.auth.signed);

  console.tron.log('SIGNED', signed);

  const Routes = CreateRouter(signed);

 // return <Routes />;
  return (
   //<ApolloProvider client={client}>
      <Routes />  
    
  //   </ApolloProvider>
  );
}
