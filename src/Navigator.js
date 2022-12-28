import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import ListScreen from "../screens/ListScreen";
import EditScreen from "../screens/EditScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import ViewScreen from "../screens/ViewScreen";

const AddButton = () => null;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
 return( 
  <Tab.Navigator tabBarOptions={{ inactiveTintColor: '#9E9E9E', showLabel: false, borderTopColor: '#BDBDBD' }}>
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{ tabBarIcon: ({ color, size }) => <Icon name="document-text-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="AddButton"
        component={AddButton}
        options={{ tabBarIcon: () => <Icon name="add-circle" size={46} color="#DA5746" /> }}
        listeners={({navigation}) => ({
            tabPress: event => {
                event.preventDefault();
                navigation.navigate('Edit');
            }
        })}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ tabBarIcon: ({ color, size }) => <Icon name="md-heart-circle" size={size} color={color} /> }}
      />
      
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none" mode="modal">
            <Stack.Screen name="Main" component={MainScreen}/>
            <Stack.Screen name="Edit" component={EditScreen}/>
            <Stack.Screen name="View" component={ViewScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigator;
