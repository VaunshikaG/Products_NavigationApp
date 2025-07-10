import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// navigate using hooks
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type safety - typescript
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsProps) => {
  const { productId } = route.params;

  // hook
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate('Home')}

        // to go one screen back
        // onPress={() => navigation.goBack()}

        // go back to first screen
        // onPress={() => navigation.pop(2)}

        onPress={() => navigation.pop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
