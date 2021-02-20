import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

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
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top Restaurantes" }}
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
