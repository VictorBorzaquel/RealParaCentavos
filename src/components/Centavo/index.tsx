import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface IProps {
  value: number;
  renderItem: ImageSourcePropType;
}

export function Centavo({ value, renderItem }: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Image source={renderItem} style={styles.image} />
      </View>

        <View style={styles.footer}>
          <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>{value}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#a5a5a5',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#a5a5a5',
    width: 105
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 100
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  }
})