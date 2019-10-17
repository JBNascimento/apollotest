import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';
import CurrentPosition from '../../components/locations'
import {Container} from './styles';

import UserList from '../../components/UserList';
import { ApolloProvider, RenderPromises } from '@apollo/react-hooks';
import { client } from '../../services/apollo';


 
function Dashboard({navigation}) {
  
  return(
    <Container>
      <Header navigation={navigation} />
      <Text>Dashboard</Text>
      <CurrentPosition/>

      <ApolloProvider client={client}>
         <UserList />              
      </ApolloProvider>

    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
