import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";
import Page from "../components/page";

export default function MainPage() {
  return (
    <Page
      title="Farma Fácil"
      subtitle="Facilitando o seu jeito de comprar seus remédios!"
    >
      <TouchableOpacity className="bg-green-800/30 rounded-2xl p-6 flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-green-950 text-2xl font-bold mb-1">
            Toque para fotografar o medicamento
          </Text>
          <Text className="text-green-950 text-base">
            Ao clicar, posicione o remédio na câmera.
          </Text>
        </View>
        <View className="w-20 h-20 bg-green-800/20 rounded-full items-center justify-center">
          <MaterialIcons name="add-a-photo" size={32} color="#052e16" />
        </View>
      </TouchableOpacity>
    </Page>
  );
}
