import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageComponentProps } from "../utils/interface";

export default function Page({
  title,
  subtitle,
  children,
}: PageComponentProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-6">
        <Text className="text-4xl font-extrabold text-green-950">{title}</Text>
        <Text className="text-lg text-green-950 mt-2">{subtitle}</Text>
      </View>

      <View className="bg-green-950/10 rounded-t-3xl flex-1 p-6 w-full">
        {children}
      </View>
    </SafeAreaView>
  );
}
