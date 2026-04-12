import { CameraView } from "expo-camera";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { FaceVerificationModalProps } from "../utils/interface";

export default function FaceVerificationModal({
  visible,
  onClose,
  onConfirm,
  setVerified,
}: FaceVerificationModalProps) {
  const [cameraReady, setCameraReady] = useState(false);
  const [running, setRunning] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    if (!visible) {
      setRunning("idle");
      setCameraReady(false);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/70 justify-center items-center px-4">
        <View className="w-full max-w-3xl rounded-[32px] overflow-hidden bg-white border border-green-950/20 shadow-2xl">
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

          <View className="p-6 items-center">
            <Text className="text-3xl font-bold text-green-950 text-center mb-4">
              Validação facial dos seus dados
            </Text>
            <Text className="text-base leading-8 text-slate-700 text-center mb-6">
              Posicione seu rosto no centro da câmera. A validação é rápida e
              segura.
            </Text>

            <View className="w-full max-w-[420px] aspect-square rounded-[36px] overflow-hidden bg-black">
              <CameraView
                style={modalStyles.camera}
                facing="front"
                onCameraReady={() => setCameraReady(true)}
              />
            </View>

            <Text className="text-sm text-slate-500 text-center mt-3">
              {cameraReady
                ? "Câmera pronta. Centralize o rosto no centro da câmera."
                : "Abrindo câmera frontal..."}
            </Text>

            <View className="mt-6 w-full space-y-4">
              <Pressable
                onPress={() => {
                  if (running !== "idle") return;
                  if (onConfirm) onConfirm();
                  setRunning("loading");
                  setTimeout(() => setRunning("done"), 1400);
                }}
                className="rounded-3xl bg-green-700 mb-2 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-white">
                  Iniciar verificação
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  if (running === "idle") onClose();
                }}
                className="rounded-3xl bg-slate-200 py-5 items-center justify-center"
              >
                <Text className="text-xl font-bold text-green-950">Voltar</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {running !== "idle" && (
          <View className="absolute inset-0 justify-center items-center bg-white/95 px-6">
            {running === "loading" ? (
              <View className="w-full h-full justify-center items-center">
                <ActivityIndicator
                  size="large"
                  color="#047857"
                  className="mb-4"
                />
                <Text className="text-3xl font-bold text-green-950 text-center">
                  Validando...
                </Text>
                <Text className="text-center text-slate-700 mt-2">
                  Aguarde enquanto verificamos seu rosto.
                </Text>
              </View>
            ) : (
              <Pressable
                onPress={() => {
                  onClose();
                  setVerified(true);
                }}
                className="w-full h-full justify-center items-center"
              >
                <LottieView
                  source={require("../assets/success (1).json")}
                  autoPlay
                  loop={false}
                  style={modalStyles.lottie}
                />
                <Text className="text-3xl font-bold text-green-950 text-center mt-4">
                  Validação concluída, Inácia!
                </Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </Modal>
  );
}

const modalStyles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 240,
    height: 240,
  },
  oval: {
    width: "84%",
    aspectRatio: 1,
    borderRadius: 220,
    borderWidth: 4,
    borderColor: "rgba(16, 185, 129, 0.9)",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
});
