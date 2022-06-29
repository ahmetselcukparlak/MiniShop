import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/Dashboard/dashboard";
import OrderScreen from "../screens/Order/order";
import ProductScreen from "../screens/Product/product";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Dashboard") {
                  iconName = focused ? "dashboard" : "dashboard";
                } else if (route.name === "Products") {
                  iconName = focused ? "list" : "list";
                } else if (route.name === "Orders") {
                  iconName = focused ? "shopping-basket" : "shopping-basket";
                }
                return (
                  <FontAwesome name={iconName} size={size} color={color} />
                );
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Products"
              component={ProductScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Orders"
              component={OrderScreen}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
