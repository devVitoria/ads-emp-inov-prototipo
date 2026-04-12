import { Image, Modal, Pressable, Text, View } from "react-native";
import { PermissionModalProps } from "../utils/interface";

export default function PermissionModal({
  visible,
  onAllow,
  onDeny,
}: PermissionModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={onDeny}
    >
      <View className="flex-1 bg-black/60 justify-center items-center px-6">
        <View className="w-full max-w-xl rounded-[32px] overflow-hidden bg-white border border-green-950/20 shadow-2xl">
          <View className="bg-green-700 px-6 py-6 items-center">
            <Image
              source={require("../assets/logo.png")}
              className="w-20 h-20 mb-4"
              resizeMode="contain"
            />
            <Text className="text-3xl font-extrabold text-white text-center">
              Farma Fácil
            </Text>
          </View>

          <View className="p-6">
            <Text className="text-2xl font-bold text-green-950 text-center mb-4">
              Usar sua localização?
            </Text>
            <Text className="text-base leading-8 text-slate-700 text-center mb-6">
              Para encontrar a farmácia mais próxima e entregar o remédio no
              lugar certo, permita o uso da localização.
            </Text>

            <View className="space-y-4">
              <Pressable
                onPress={onAllow}
                className="rounded-3xl bg-green-700 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-white">
                  Sim, permitir localização
                </Text>
              </Pressable>

              <Pressable
                onPress={onDeny}
                className="rounded-3xl mt-2 bg-slate-200 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-green-950">
                  Não permitir localização
                </Text>
              </Pressable>
            </View>

            <Text className="text-sm text-slate-500 text-center mt-5">
              Sem permissão, pode ser mais difícil receber o remédio onde você
              está.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
