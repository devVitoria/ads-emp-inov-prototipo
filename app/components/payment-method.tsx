import { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { PaymentMethodModalProps } from "../utils/interface";

export default function PaymentMethodModal({
  visible,
  onClose,
  onConfirm,
}: PaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<
    "DINHEIRO" | "CARTÃO" | "PIX" | null
  >(null);
  const [pixValue, setPixValue] = useState("100");
  const [customValue, setCustomValue] = useState("");

  const clearSelection = () => {
    setSelectedMethod(null);
    setPixValue("100");
    setCustomValue("");
  };

  const handleClose = () => {
    clearSelection();
    onClose();
  };

  const confirmedAmount = () => {
    if (selectedMethod !== "PIX") return undefined;
    if (customValue.trim().length > 0) return customValue.trim();
    return pixValue;
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={handleClose}
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
              Escolha a forma de pagamento
            </Text>
            <Text className="text-base leading-8 text-slate-700 text-center mb-6">
              Selecione como você deseja pagar o motorista do seu pedido.
            </Text>

            <View className="space-y-3">
              {(["DINHEIRO", "CARTÃO", "PIX"] as const).map((method) => (
                <Pressable
                  key={method}
                  onPress={() => setSelectedMethod(method)}
                  className={`rounded-3xl border p-4 mb-2 ${
                    selectedMethod === method
                      ? "border-green-950 bg-green-950/10"
                      : "border-slate-200 bg-slate-100"
                  }`}
                >
                  <Text
                    className={`text-xl font-bold ${
                      selectedMethod === method
                        ? "text-green-950"
                        : "text-slate-800"
                    }`}
                  >
                    {method}
                  </Text>
                </Pressable>
              ))}
            </View>

            {selectedMethod === "DINHEIRO" && (
              <View className="mt-6 rounded-3xl border border-green-950/20 bg-green-950/5 p-4">
                <Text className="text-lg font-semibold text-green-950 mb-3">
                  Quanto você vai entregar ao motorista?
                </Text>
                <View className="flex-row justify-between gap-3 mb-4">
                  {["100", "50", "25"].map((value) => (
                    <Pressable
                      key={value}
                      onPress={() => {
                        setPixValue(value);
                        setCustomValue("");
                      }}
                      className={`flex-1 rounded-3xl py-4 items-center justify-center ${
                        pixValue === value && customValue === ""
                          ? "bg-green-950"
                          : "bg-white"
                      } border border-green-950/20`}
                    >
                      <Text
                        className={`text-xl font-bold ${pixValue === value && customValue === "" ? "text-white" : "text-green-950"}`}
                      >
                        R$ {value}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                <View>
                  <Text className="text-sm text-slate-600 mb-2">
                    Ou digite outro valor para o motorista
                  </Text>
                  <TextInput
                    value={customValue}
                    onChangeText={(text) => {
                      setCustomValue(text.replace(/[^0-9]/g, ""));
                      setPixValue("100");
                    }}
                    keyboardType="numeric"
                    placeholder="Valor em reais"
                    placeholderTextColor="#94a3b8"
                    className="rounded-3xl border border-slate-300 bg-slate-100 px-4 py-4 text-lg text-slate-900"
                  />
                </View>
              </View>
            )}

            <View className="mt-6 space-y-4">
              <Pressable
                onPress={() => {
                  if (!selectedMethod) return;
                  onConfirm(selectedMethod, confirmedAmount());
                }}
                className="rounded-3xl bg-green-700 mb-2 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-white">Confirmar</Text>
              </Pressable>

              <Pressable
                onPress={handleClose}
                className="rounded-3xl bg-slate-200 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-green-950">
                  Cancelar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
  },
});
