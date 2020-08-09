import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
       <ImageBackground
        resizeMode="contain"
        style={styles.content}
        source={giveClassesBackgroundImage}
      >
        <Text style={styles.title}>
          Quer ser um Proffy?
        </Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  );  
}

export default GiveClasses;