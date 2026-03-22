import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import Page from "../components/page";

export default function Orders() {
  return (
    <Page title="Seus Pedidos" subtitle="Verifique aqui os seus pedidos!">
      <TouchableOpacity className=" flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-green-950 text-2xl font-bold mb-1">
            Consulte seus pedidos em andamento
          </Text>
        </View>
        <View className="w-20 h-20 bg-green-800/20 rounded-full items-center justify-center">
          <FontAwesome name="shopping-basket" size={32} color="#052e16" />
        </View>
      </TouchableOpacity>
    </Page>
  );
}
