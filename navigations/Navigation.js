import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import React from 'react'

import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'

import Account from '../screens/Account'
import Favorites from '../screens/Favorites'
import Search from '../screens/Search'
import TopRestaurants from '../screens/TopRestaurants'
import Restaurants from '../screens/Restaurants'


const Tab = createBottomTabNavigator()

export default function Navigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{title:"Restaurantes"}}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{title:"Favoritos"}}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{title:"Top 5"}}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{title:"Buscar"}}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{title:"Cuenta"}}
        />
        
      </Tab.Navigator>
   </NavigationContainer>
  )
}
