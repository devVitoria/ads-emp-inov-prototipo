import { Tabs } from "expo-router";
import { View } from "react-native";
import { cn } from "../components/cn";
import { tabs } from "../utils/constants";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          width: "100%",
          display: "flex",
          alignItems: "center",
          bottom: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <View
                className={cn(
                  `bg-transparent h-16 w-16 p-2 mb-2 rounded-full  justify-center items-center`,
                  { "bg-green-950/30 ": focused },
                )}
              >
                {tab.icon}
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
