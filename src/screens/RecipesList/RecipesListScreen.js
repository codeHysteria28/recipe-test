import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getRecipesFromDb, getCategoryName } from '../../data/getDataFromDb';

export default class RecipesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
  }

  state = {
    recipes: []
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  getRecipes = () => {
    this.setState({recipes: getRecipesFromDb()});
  }

  getRecipe = (recipeID) => {
    const arr = [];
    const recipes = this.state.recipes;
    recipes.map(data => {
      if(data.categoryId === recipeID){
        arr.push(data);
      }
    });
    return arr;
  }

  componentDidMount(){
    this.getRecipes();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('category');
    const recipesArray = this.getRecipe(item.id);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
