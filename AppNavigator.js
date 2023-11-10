import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import SPIG010000Screen from './screens/SPIG010000Screen';
import SPIG020000Screen from './screens/SPIG020000Screen';
import SPIG020100Screen from './screens/SPIG020100Screen';
import SPIG020200Screen from './screens/SPIG020200Screen';
import SPIG020500Screen from './screens/SPIG020500Screen';
import SPIG020700Screen from './screens/SPIG020700Screen';
import SPIG020800Screen from './screens/SPIG020800Screen';
import SPIG030000Screen from './screens/SPIG030000Screen';
import Swiper020000Screen from './screens/Swiper020000Screen';
import Swiper2Screen from './screens/Swiper2Screen';
import SwiperScreen from './screens/SwiperScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function SPaMobile() {
  return (
    <Tab.Navigator
      initialRouteName="SPIG010000Screen"
      screenOptions={{
        headerShown: true,
        headerTitle: 'S-Pa Mobile',
        headerTitleAlign: 'center',
        tabBarStyle: { borderTopColor: 'transparent' },
        tabBarShowLabel: false,
        tabBarLabelPosition: 'below-icon',
      }}
      tabPressToInitialScreen={true}
      backBehavior="none"
    >
      <Tab.Screen
        name="SPIG020500Screen"
        component={SPIG020500Screen}
        options={{
          title: 'SPIG020500',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/user"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SPIG020100Screen"
        component={SPIG020100Screen}
        options={{
          title: 'SPIG020100',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/search1"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SPIG030000Screen"
        component={SPIG030000Screen}
        options={{
          title: 'SPIG030000',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/system-update-tv"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SPIG020700Screen"
        component={SPIG020700Screen}
        options={{
          headerTransparent: false,
          title: 'SPIG020700',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/retweet"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SPIG010000Screen"
        component={SPIG010000Screen}
        options={{
          title: 'SPIG010000',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/map"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function SPaMobile2() {
  return (
    <Stack.Navigator
      presentation="card"
      initialRouteName="SPIG020800Screen"
      screenOptions={{
        headerShown: true,
        headerBackTitle: ' ',
      }}
    >
      <Stack.Screen
        name="SPIG020800Screen"
        component={SPIG020800Screen}
        options={{
          headerTitle: 'S-Pa Mobile',
          headerTitleAlign: 'center',
          title: 'SPIG020800',
        }}
      />
      <Stack.Screen
        name="SPIG020000Screen"
        component={SPIG020000Screen}
        options={{
          headerTitle: 'S-Pa Mobile',
          headerTitleAlign: 'center',
          title: 'SPIG020000',
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        presentation="card"
        initialRouteName="SPaMobile"
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: false,
          gestureDirection: 'vertical-inverted',
        }}
      >
        <Stack.Screen
          name="SPIG020200Screen"
          component={SPIG020200Screen}
          options={{
            title: 'SPIG020200',
          }}
        />
        <Stack.Screen
          name="SwiperScreen"
          component={SwiperScreen}
          options={{
            title: 'Swiper',
          }}
        />
        <Stack.Screen
          name="Swiper020000Screen"
          component={Swiper020000Screen}
          options={{
            title: 'Swiper020000',
          }}
        />
        <Stack.Screen
          name="Swiper2Screen"
          component={Swiper2Screen}
          options={{
            title: 'Swiper2',
          }}
        />
        <Stack.Screen name="SPaMobile" component={SPaMobile} />
        <Stack.Screen name="SPaMobile2" component={SPaMobile2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
