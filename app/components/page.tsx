import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageComponentProps } from "../utils/interface";

export default function Page({
  title,
  subtitle,
  children,
}: PageComponentProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-6">
        <View className="flex flex-row items-center gap-4">
          <Image
            source={require("../assets/logo.png")}
            className="w-10 h-10 object-contain"
          />
          <Text className="text-4xl font-extrabold text-green-900">
            {title}
          </Text>
        </View>
        <Text className="text-lg text-blue-950 mt-2">{subtitle}</Text>
      </View>

      <View className="bg-blue-950/10 rounded-t-3xl flex-1 p-6 w-full">
        {children}
      </View>
    </SafeAreaView>
  );
}
