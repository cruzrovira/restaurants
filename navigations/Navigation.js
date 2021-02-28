import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
import { Icon } from "react-native-elements";

const tab = createBottomTabNavigator();
const Navigation = () => {
  const screnIcon = (route, color) => {
    let iconName = "";
    switch (route.name) {
      case "restautants":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "top-restaurants":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };

  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="restautants"
        tabBarOptions={{
          // inactiveTintColor: "#a17dc3",
          activeTintColor: "#2089DC",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screnIcon(route, color),
        })}
      >
        <tab.Screen
          name="restautants"
          component={RestaurantsStack}
          options={{
            title: "Restaurantes",
          }}
        />
        <tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
        <tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
