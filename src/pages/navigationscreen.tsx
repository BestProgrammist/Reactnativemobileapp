/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import {  Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './loginscreen';
import Registerscreen from './registerscreem';
import Homescreen from './homescreen';
import Confirmscreen from './confirmscreen';
import Adressforconfirm from './adressforconfirm';
import Workscreen from './workscreen';
import BottomTabnavigation from './bottomtabnavigations';
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

const Stack = createNativeStackNavigator();

function Navigationscreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height: "100%"
          }}>
          <ImageBackground source={Logo} style={styles.logo}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Signin" component={Loginscreen} />
                    <Stack.Screen name="Signup" component={Registerscreen} />
                    <Stack.Screen name="Confirmphone" component={Adressforconfirm} />
                    <Stack.Screen name="Confirm" component={Confirmscreen} />
                    <Stack.Screen name="Home" component={BottomTabnavigation} />
                    {/* <Stack.Screen name="Settings" component={Workscreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
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

export default Navigationscreen;
