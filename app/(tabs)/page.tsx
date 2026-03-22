import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CameraView } from "expo-camera";
import { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Page from "../components/page";
import { pharmas } from "../utils/constants";
import { styles } from "../utils/styles";

export default function MainPage() {
  const [onPhotoPressed, setOnPhotoPressed] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [showPharmas, setShowPharmas] = useState<{
    open: boolean;
    selected: string | null;
  }>({
    open: false,
    selected: null,
  });
  const cameraRef = useRef<CameraView>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 0.5,
        base64: false,
      });
      setPhoto(data.uri);
      setStatus(
        "Domperidona Eurofarma - Momenta 10mg, caixa com 30 comprimidos",
      );
    }
  };

  return (
    <Page
      title="Farma Fácil"
      subtitle="Facilitando o seu jeito de comprar seus remédios!"
    >
      {showPharmas.open ? (
        <>
          <Text className="text-green-950 text-2xl font-bold mb-2 px-2">
            Fármacias que vendem este produto
          </Text>
          <Text className="text-green-950 text-base mb-4 px-2">
            Toque para selecionar a farmácia que deseja comprar o medicamento
          </Text>
          <ScrollView className="space-y-4 mb-4 px-2">
            {pharmas.map((pharma) => (
              <TouchableOpacity
                key={pharma.id}
                className="bg-green-800/10 mb-4 rounded-2xl p-6 flex-row items-center justify-between"
                onPress={() => {
                  setShowPharmas((ant) => ({
                    ...ant,
                    selected: pharma.id,
                  }));
                }}
              >
                <View className="flex-1 w-full ">
                  <View className="flex w-full flex-row justify-between items-center">
                    <Text className="text-green-950 text-2xl font-bold mb-1">
                      {pharma.name}
                    </Text>
                    <View className="w-16 justify-center items-center rounded-md h-8 bg-green-950/40">
                      <Text className="text-white font-bold text-xl">
                        {pharma.distance}
                      </Text>
                    </View>
                  </View>

                  <Text className="text-green-950 text-xl mb-4">
                    {pharma.address}
                  </Text>

                  <View className="flex w-full flex-row justify-between items-center">
                    <Text className="text-green-950 font-bold text-end text-xl">
                      Entrega: {pharma.deliveryTime}
                    </Text>
                    <View className="px-2 justify-center items-center rounded-md h-8 bg-green-950/40">
                      <Text className="text-white font-bold text-xl">
                        Preço: {pharma.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      ) : onPhotoPressed ? (
        <View style={styles.container}>
          {photo ? (
            <Image
              source={{ uri: photo }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
              }}
            />
          ) : (
            <CameraView style={styles.camera} facing={"back"} ref={cameraRef} />
          )}
          <TouchableOpacity onPress={takePicture} style={styles.message}>
            <Text style={styles.text}>{status}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            {photo ? (
              <>
                <TouchableOpacity
                  className="bg-green-800/80 rounded-2xl p-2 justify-center items-center"
                  onPress={() => {
                    setShowPharmas({
                      open: true,
                      selected: null,
                    });
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="bg-red-800/80 rounded-2xl p-2 justify-center items-center"
                  onPress={() => {
                    setStatus("Analisando...");
                    setPhoto(null);
                    setShowPharmas({
                      open: false,
                      selected: null,
                    });
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>Tentar de novo</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                className="bg-red-800/80 rounded-2xl p-2"
                onPress={() => {
                  setOnPhotoPressed(false);
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <TouchableOpacity
          className="bg-green-800/30 rounded-2xl p-6 flex-row items-center justify-between"
          onPress={() => {
            setOnPhotoPressed(true);
            setStatus("Analisando...");
          }}
        >
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
      )}
    </Page>
  );
}
