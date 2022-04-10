import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapScreen from "../Screens/MapScreen/MapScreen";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./Styles";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const renderTabBarIcon = (isFocused, label) => {
    let tabIcon = <></>;

    switch (label) {
      case "Search": {
        tabIcon = isFocused ? (
          <View>
            <EvilIcons name="search" size={26} color="white" />
          </View>
        ) : (
          <EvilIcons name="search" size={26} color="white" />
        );
        break;
      }
      case "Map": {
        tabIcon = isFocused ? (
          <FontAwesome5 name="map-marked-alt" size={20} color="white" />
        ) : (
          <View>
            <FontAwesome5 name="map-marked-alt" size={20} color="white" />
          </View>
        );
        break;
      }
      case "Saved": {
        tabIcon = isFocused ? (
          <AntDesign name="hearto" size={20} color="white" />
        ) : (
          <View>
            <AntDesign name="hearto" size={20} color="white" />
          </View>
        );
        break;
      }
      case "Profile": {
        tabIcon = isFocused ? (
          <Ionicons name="person-circle-outline" size={24} color="white" />
        ) : (
          <View>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </View>
        );
        break;
      }
    }
    return tabIcon;
  };

  const TabBar = ({ state, descriptors, navigation }) => (
    <View style={styles.tabWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.6}
            style={isFocused ? styles.focusedBox : styles.tabIconContainer}
          >
            <View>{renderTabBarIcon(isFocused, label)}</View>
            <Text numberOfLines={1} style={[styles.labelStyle]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Search",
            unmountOnBlur: true,
          }}
          name="SearchScreen"
          component={MapScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Map",
            unmountOnBlur: true,
          }}
          name="MapScreen"
          component={MapScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Saved",
            unmountOnBlur: true,
          }}
          name="SavedScreen"
          component={MapScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            unmountOnBlur: true,
          }}
          name="ProfileScreen"
          component={MapScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
