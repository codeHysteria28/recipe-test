import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { getCategoriesFromDb, getNumberOfRecipes} from '../../data/getDataFromDb';


export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'CATEGORIES'
  };

  constructor(props) {
    super(props);
  }

  state = {
    categories: []
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
      </View>
    </TouchableHighlight>
  );

  getCategories = () => {
    this.setState({categories: getCategoriesFromDb()});
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
