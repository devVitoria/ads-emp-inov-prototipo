import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, TouchableOpacity, View } from "react-native";
import Page from "../components/page";

export default function Account() {
  return (
    <Page
      title="Suas Informações"
      subtitle="Estas são as informações que o Farma Fácil utiliza para facilitar sua compra de remédios!"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 mb-6">
          <Text className="text-green-950 text-2xl font-bold mb-1">
            Seu endereço de referência
          </Text>
          <Text className="text-green-950 text-base">
            Baseado na sua localização.
          </Text>
        </View>
      </View>

      <TouchableOpacity className="bg-green-950/10 rounded-2xl border border-green-950 overflow-hidden mb-4">
        <View className="bg-green-950/5 px-4 py-3 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-green-800/10 rounded-full items-center justify-center mr-2">
              <FontAwesome5 name="map-marker-alt" size={20} color="#052e16" />
            </View>
            <View>
              <Text className="text-green-950 font-bold text-lg">
                Osório Silva - 65 anos
              </Text>
              <Text className="text-green-900 text-xs">
                12 pedidos realizados a partir deste endereço
              </Text>
            </View>
          </View>
        </View>

        <View className="px-4 py-4">
          <View className="mb-4 pb-4 border-b border-green-950/20">
            <View className="flex-row items-start">
              <Entypo name="address" size={24} color="#052e16" />
              <View className="flex-1 ml-3">
                <Text className="text-green-950 font-bold text-base">
                  Rua Travessa 25 de Janeiro, 2005
                </Text>

                <Text className="text-green-800 font-bold text-base mt-1">
                  Passo Fundo, Rio Grande do Sul - Brasil
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Page>
  );
}
