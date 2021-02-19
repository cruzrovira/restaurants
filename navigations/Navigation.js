import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Account from "./../screens/Account";
import Favorites from "./../screens/Favorites";

import Search from "./../screens/Search";
import TopRestaurants from "./../screens/TopRestaurants";
import RestaurantsStack from "./RestaurantsStack";

const tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen
          name="restautants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes", tabBarBadge: 3 }}
        />
        <tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{ title: "Top Restaurantes" }}
        />
        <tab.Screen
          name="search"
          component={Search}
          options={{ title: "Buscar" }}
        />
        <tab.Screen
          name="account"
          component={Account}
          options={{ title: "Cuenta" }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
