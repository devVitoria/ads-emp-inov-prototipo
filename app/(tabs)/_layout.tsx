import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { cn } from "../components/cn";
import { tabs } from "../utils/constants";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            width: "100%",
            alignItems: "center",
            bottom: 0,
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,

            display: route.name === "logo" ? "none" : "flex",
          },
        })}
      >
        <Tabs.Screen
          name="logo"
          options={{
            tabBarButton: () => (
              <View
                className={cn(
                  "bg-transparent h-20 w-20 p-2 absolute ml-6 bottom-0 Srounded-full justify-center items-center",
                  { "bg-green-950/30": false },
                )}
              >
                <SimpleLineIcons name="logout" size={24} color="black" />
              </View>
            ),
          }}
        />

        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => (
                <View
                  className={cn(
                    "bg-transparent h-16 w-16 p-2 mb-2 rounded-full justify-center items-center",
                    { "bg-green-950/30": focused },
                  )}
                >
                  {tab.icon}
                </View>
              ),
            }}
          />
        ))}
      </Tabs>

      <StatusBar style="dark" />
    </>
  );
}
