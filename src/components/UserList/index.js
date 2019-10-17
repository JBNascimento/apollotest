import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import * as Apollo from 'apollo-boost';
import { useQuery, RenderPromises } from '@apollo/react-hooks';


const UserList = () => {
  return (
    <View style={styles.container}>
      <Users />
    </View> 
  ); 
} 

const Users = () => {
  const get_users = Apollo.gql(`
  query gitUsers($location: String!, $first: Int!){
    search(query: $location, type: USER, first: $first) {
      edges {
        node {
          ... on User {
              id
              avatarUrl
              name
              login
              email   
              followers{totalCount}                   	
            }          
      }
      }
    }
  }
  `);

  const { loading, error, data } = useQuery(get_users,{
    variables: {location: "location:minas%gerais", first: 20 },
  });


  if (loading) return (<View><ActivityIndicator size='large' color='#EE2D58' /></View>);  

  if (error)return (<Text>Error!!</Text>); 
  console.log(data.search.edges); 
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      
       <FlatList
          data={data.search.edges}
          keyExtractor={item => item.node.id}
          renderItem={({ item }) => {
            return (
                <View style={styles.line}>                  
                    <Image source={{ uri: item.node.avatarUrl }} style={styles.avatar} />                
                    <View style={styles}>
                        <Text style={styles.text}> Nome: {item.node.name}</Text>
                        <Text style={styles.text}> Username: {item.node.login}</Text>
                        <Text style={styles.text}> Seguidores: {item.node.followers.totalCount}</Text>                  
                    </View>      
                </View>
            );
          }}
        />
        
    </ScrollView>
  );
}


export default UserList;


const styles = StyleSheet.create({
container: {
  flex: 1
},

line:{
  height: 80,
  flexDirection: "row",
  borderBottomColor: "#ccc",
  borderBottomWidth:1,
  padding:10,
}, 
avatar:{
  width: 70,
  height: 70,
  borderRadius: 50,
  marginRight: 10,
  alignSelf: "center"
}

});
