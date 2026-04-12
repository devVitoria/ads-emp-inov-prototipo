import { Text, View } from "react-native";
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
            Seu endereço de referência e informações pessoais
          </Text>
          <Text className="text-green-950 text-base">
            Baseado na sua localização.
          </Text>
        </View>
      </View>

      <Text className="text-lg mb-2">Inácia Silva - 65 anos</Text>
      <Text className="text-base mb-2">CPF: 123.**.***-**</Text>
      <Text className="text-base mb-2">
        Rua das Flores, 123 - Centro, Passo Fundo - RS
      </Text>
      <Text className="text-base">
        12 Pedidos realizados no APP nos últimos 30 dias
      </Text>
    </Page>
  );
}
