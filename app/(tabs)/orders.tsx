import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Page from "../components/page";

export default function Orders() {
  return (
    <Page title="Seus Pedidos" subtitle="Verifique aqui os seus pedidos!">
      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-1">
            <Text className="text-green-950 text-2xl font-bold mb-1">
              Seus pedidos em andamento
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="mb-20">
          <TouchableOpacity className="bg-green-50 rounded-2xl border border-green-950 overflow-hidden mb-4">
            <View className="bg-green-700 px-4 py-3 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-green-800/10 rounded-full items-center justify-center mr-2">
                  <MaterialIcons
                    name="local-shipping"
                    size={20}
                    color="white"
                  />
                </View>
                <View>
                  <Text className="text-white font-bold text-lg">
                    Seu pedido
                  </Text>
                  <Text className="text-white text-xs">
                    Chegará em 4 minutos
                  </Text>
                </View>
              </View>
            </View>

            <View className="px-4 py-4">
              <View className="mb-4 pb-4 border-b border-green-950/20">
                <View className="flex-row items-start">
                  <MaterialIcons
                    name="local-pharmacy"
                    size={24}
                    color="#15803d"
                  />
                  <View className="flex-1 ml-3">
                    <Text className="text-green-700 font-bold text-base">
                      Domperidona Eurofarma - Momenta 10mg, caixa com 30
                      comprimidos {"\n"}| 1 unidade
                    </Text>

                    <Text className="text-green-800 font-bold text-base mt-1">
                      R$ 16,99
                    </Text>
                  </View>
                </View>
              </View>

              <View className="mb-4 pb-4 border-b border-green-950/10">
                <View className="flex-row items-start">
                  <MaterialIcons name="store" size={24} color="#15803d" />
                  <View className="flex-1 ml-3">
                    <Text className="text-green-700 font-bold text-base">
                      Farmácia Pandel{" "}
                    </Text>
                    <Text className="text-green-900 text-sm">
                      Rua Mareshal Floreando, 645{" "}
                    </Text>
                    <Text className="text-green-800 font-semibold text-sm mt-1">
                      5 km de distância
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex-row items-center">
                <MaterialIcons name="person" size={24} color="#15803d" />
                <View className="flex-1 ml-3">
                  <Text className="text-green-700 font-bold text-base">
                    Entregador
                  </Text>
                  <Text className="text-green-700 text-sm">Latino Silva</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-10">
                <Entypo name="old-phone" size={24} color="#15803d" />
                <View className="flex-1 ml-3">
                  <Text className="text-green-700 font-bold text-base">
                    Contato da Farmácia
                  </Text>
                  <Text className="text-green-700 font-bold text-sm">
                    (54) 99999-9999 (Toque para Ligar)
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Page>
  );
}
