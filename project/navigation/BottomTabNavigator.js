import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OverviewScreen from '../screens/OverviewScreen'
import CalendarDisplay from "../screens/CalendarDisplay";
import TimeToStudy from "../screens/TimeToStudy";
import CreateNewEvent from "../screens/CreateNewEvent";
import TimerScreen from "../screens/TimerScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
      <BottomTab.Screen
        name="TimerScreen"
        component={TimerScreen}
        options={{
          title: '',
        }}
      />
      <BottomTab.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{
          title: '',
        }}
      />
      <BottomTab.Screen
        name="CalendarDisplay"
        component={CalendarDisplay}
        options={{
            title: '',
        }}
      />
      <BottomTab.Screen
          name="TimeToStudy"
          component={TimeToStudy}
          options={{
              title: '',
          }}
      />
      <BottomTab.Screen
          name="CreateNewEvent"
          component={CreateNewEvent}
          options={{
              title: '',
          }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'Links':
      return 'Links to learn more';
  }
}
