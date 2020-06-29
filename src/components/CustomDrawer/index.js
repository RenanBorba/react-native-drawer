import React from 'react';
import { SafeAreaView, View, Text, Image }
  from 'react-native';
import { DrawerNavigatorItems }
  from 'react-navigation-drawer';

import styles from './styles';

export default function CustomDrawer({ ...props }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userArea}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Renan Borba</Text>
        <Text style={styles.email}>renandbm.rb@gmail.com</Text>
      </View>

      <DrawerNavigatorItems { ...props } />
    </SafeAreaView>
  );
}