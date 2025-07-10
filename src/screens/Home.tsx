import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

// react navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
// components
import Seperator from '../components/Seperator';
import { PRODUCT_LIST } from '../data/constants';
import ProductItems from '../components/ProductItems';

// type safety - typescript
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCT_LIST}
        keyExtractor={item => item.id} // productID
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', { product: item });
            }}
          >
            <ProductItems product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
