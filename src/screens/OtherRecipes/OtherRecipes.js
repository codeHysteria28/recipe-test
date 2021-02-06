import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Item,
  Button,
  Form
} from 'react-native';
import axios from 'axios';

class OtherRecipes extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name')
        };
      };

    state = { recipes: [], term: '' }

    getRecipeName = term => {
      this.setState({ term: term});
    };

    searchForRecipe = async () => {
      if(this.state.term !== ''){
        let url = `http://www.recipepuppy.com/api/q=${this.state.term}`;
        axios.get(url).then((res) => console.log(res));
      }else {
        console.log(err)
      }
    }
    
    render(){
        return(
            <View>
                <TextInput 
                placeholder="Search for recipes" 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={term => this.getRecipeName(term)}
                />
                {this.state.term !== '' ? <Button title="Search" onPress={() => this.searchForRecipe()}/> : <Text>kokot</Text> }
            </View>
        );
    }
}

export default OtherRecipes;