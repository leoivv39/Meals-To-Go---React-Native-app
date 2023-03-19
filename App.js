import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealInstructionScreen from "./screens/MealInstructionsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#588582" },
        headerTitleAlign: "center",
        sceneContainerStyle: { backgroundColor: "#D5FFFC" },
        drawerContentStyle: {
          backgroundColor: "#D5FFFC",
        },
        drawerContentContainerStyle: {
          flex: 1,
          justifyContent: "center",
        },
        drawerActiveBackgroundColor: "#13abbf",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name="restaurant-outline"
              size={size}
              color={color}
            ></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="heart-circle" size={size} color={color}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#588582" },
              contentStyle: { backgroundColor: "#D5FFFC" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={({ route }) => {
                return {
                  title: `All ${route.params.category.title} Meals`,
                };
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="MealInstructions"
              component={MealInstructionScreen}
              options={({ route }) => {
                return {
                  title: route.params.meal.title,
                };
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
