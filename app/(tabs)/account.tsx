import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "react-native";
import Page from "../components/page";

export default function Account() {
  return (
    <Page
      title="Suas Informações"
      subtitle="Estas são as informações que o Farma Fácil utiliza para facilitar sua compra de remédios!"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-green-950 text-2xl font-bold mb-1">
            Seu endereço de referência
          </Text>
          <Text className="text-green-950 text-base">
            Baseado na sua localização.
          </Text>
        </View>
        <View className="w-20 h-20 bg-green-800/20 rounded-full items-center justify-center">
          <FontAwesome5 name="map-marker-alt" size={32} color="#052e16" />
        </View>
      </View>
    </Page>
  );
}
