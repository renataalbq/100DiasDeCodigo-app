import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Timeline } from "../screens/timeline/timeline";
import { Profile } from "../screens/profile/profile";

const Tab = createBottomTabNavigator();

export function TabRoutes() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#0f0f16',
          marginBottom: 5
        },
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Timeline}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}