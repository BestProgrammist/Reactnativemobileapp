/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { PropsWithChildren, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {  Colors} from 'react-native/Libraries/NewAppScreen';
import Custominput from '../component/Custominput';
// import Logo from '../../assets/images/logo1.png';
const Logo = require("../../assets/images/logo1.png")

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}



function Registerscreen(): React.JSX.Element {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'light';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Signinaccountpressed = () => {
    console.warn("cretae")
    navigation.navigate('Signin')
  }
  
  const Forgotpasswordpressed = () => {
    console.warn("forgot")
    navigation.navigate('Confirmphone')
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height: "100%"
          }}>
          <ImageBackground source={Logo} style={styles.logo}>
            <Section title="Ro'yxatdan o'tish">
              <Text style={styles.highlight}>Mehnat muhofazasi va texnika xavfsizligi bo'limi xodimlari dasturi</Text>
              
            </Section>
            <View>
            <Custominput 
              placeholder="JSHSHIR raqamni kiriting" 
              value={username} 
              setValue={setUsername}
              secure={false}
              inputMode='numeric'
            />
            <Custominput 
              placeholder="Telefoningizni kiriting" 
              value={password} 
              setValue={setPassword}
              secure={false}
              inputMode='numeric'
            />
            </View>
            <View style={styles.bottom}>
              <Button title = 'Yaratish'/>
            
              <View style={styles.footer}>
                <Button 
                  title='Hisobga kirish'
                  onPress={Signinaccountpressed}
                  color="hidden"
                />
                <Button 
                  title='Parolni unitdingizmi?' 
                  onPress={Forgotpasswordpressed}
                  color="hidden"
                />
              </View>
            </View>
          </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  logo: {
    width: 'auto',
    height: "70%",
    flex: 1,
    justifyContent: "space-around",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  tb: {
    color: 'white',
    fontWeight: '500',
  },
  bottom: {
    width: '90%',
    borderColor: '#e8e8e8',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 15
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default Registerscreen;
