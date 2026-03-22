import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CameraView } from "expo-camera";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { cn } from "../components/cn";
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
  const [onFinalize, setOnFinalize] = useState(false);

  const [onRestart, setOnRestart] = useState(false);
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

  const selectPharmacy = pharmas.find(
    (pharma) => pharma.id === showPharmas.selected,
  );

  const infosOrder = {
    client: "Osósia Lima",
    pharmacy: selectPharmacy?.name,
    quantity: 1,
    deliveryTime: selectPharmacy?.deliveryTime,
    price: selectPharmacy?.price,
  };

  const normalizeName: Record<string, string> = {
    client: "Cliente",
    pharmacy: "Farmácia",
    quantity: "Quantidade",
    deliveryTime: "Tempo de entrega",
    price: "Preço",
  };

  return (
    <Page
      title="Farma Fácil"
      subtitle="Facilitando o seu jeito de comprar seus remédios!"
    >
      {showPharmas.open ? (
        onFinalize ? (
          onRestart ? (
            <>
              <Text className="text-green-950 text-2xl font-bold mb-6 px-2">
                Pedido concluido!
              </Text>
              <TouchableOpacity
                className="bg-green-800/10 rounded-2xl p-6 flex-row items-center justify-between"
                onPress={() => {
                  router.push("/(tabs)/orders");
                }}
              >
                <View className="flex-1">
                  <Text className="text-green-950 text-2xl font-bold mb-1">
                    Toque para verificar o seu pedido
                  </Text>
                  <Text className="text-green-950 text-base">
                    Você será redirecionado para outra tela.
                  </Text>
                </View>
                <View className="w-14 h-14 bg-green-800/20 rounded-full items-center justify-center">
                  <AntDesign name="arrow-right" size={32} color="#052e16" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowPharmas({
                    open: false,
                    selected: null,
                  });
                  setOnFinalize(false);
                  setOnRestart(false);
                  setStatus(null);
                  setOnPhotoPressed(false);
                }}
                className="absolute bottom-[70px] flex-1 right-0 left-0  items-center justify-center"
              >
                <View className="p-6 bg-green-950/60  rounded-lg">
                  <Text style={styles.text}>Fechar</Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text className="text-green-950 text-2xl font-bold mb-6 px-2">
                Finalizando o seu pedido de{" "}
                <Text className="text-green-950 font-thin text-2xl">
                  {status}
                </Text>
              </Text>
              <View className="bg-green-950/5 rounded-2xl p-4 mx-2 mb-4 border border-green-950">
                {Object.entries(infosOrder).map(([key, value]) => (
                  <View
                    key={key}
                    className="flex-row justify-between items-center py-4 border-b border-dashed border-green-950"
                  >
                    {key !== "price" ? (
                      <>
                        <Text className="text-green-950 font-semibold text-lg">
                          {normalizeName[key]}:
                        </Text>
                        {key === "quantity" ? (
                          <View className="flex-row items-center">
                            <TouchableOpacity className="w-8 h-8 bg-green-800/20 rounded-full items-center justify-center">
                              <Text className="text-green-950 font-bold">
                                -
                              </Text>
                            </TouchableOpacity>
                            <Text className="text-green-950 text-lg mx-3">
                              {value}
                            </Text>
                            <TouchableOpacity className="w-8 h-8 bg-green-800/20 rounded-full items-center justify-center">
                              <Text className="text-green-950 font-bold">
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <Text className="text-green-950 text-lg">
                            {value}
                          </Text>
                        )}
                      </>
                    ) : (
                      <View className="flex flex-col gap-2">
                        <View className="flex-row justify-between items-center w-full border-b border-dashed border-green-950 pb-4">
                          <Text className="text-green-950 font-bold text-xl">
                            {normalizeName[key]}:
                          </Text>
                          <Text className="text-green-950 font-bold text-xl ">
                            {value}
                          </Text>
                        </View>

                        {Object.entries([
                          {
                            title: "Remédio",
                            newValue: (
                              Number(
                                String(value)
                                  ?.replace("R$ ", "")
                                  .replace(",", "."),
                              ) -
                              Number(
                                String(value)
                                  ?.replace("R$ ", "")
                                  .replace(",", "."),
                              ) *
                                0.2
                            ).toFixed(2),
                          },
                          {
                            title: "Corrida",
                            newValue: (
                              Number(
                                String(value)
                                  ?.replace("R$ ", "")
                                  .replace(",", "."),
                              ) * 0.2
                            ).toFixed(2),
                          },
                        ]).map(([k, v]) => (
                          <View
                            key={k + "sub"}
                            className="flex-row justify-between items-center w-full"
                          >
                            <Text className="text-green-950 text-base">
                              {v?.title}:
                            </Text>
                            <Text className="text-green-950 text-base">
                              {v?.newValue}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>

              <TouchableOpacity
                onPress={() => {
                  setOnRestart(true);
                }}
                className="absolute bottom-[70px] flex-1 right-0 left-0  items-center justify-center"
              >
                <View className="p-6 bg-green-950/60  rounded-lg">
                  <Text style={styles.text}>Concluir</Text>
                </View>
              </TouchableOpacity>
            </>
          )
        ) : (
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
                  className={cn(
                    `bg-green-800/10 mb-4 rounded-2xl p-6 flex-row items-center justify-between`,
                    {
                      "border-2 border-green-900":
                        showPharmas.selected === pharma.id,
                    },
                  )}
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
                      <View className="px-2 justify-center items-center rounded-md h-8 bg-green-950/10">
                        <Text className="text-green-950  font-bold text-xl">
                          Preço: {pharma.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            {showPharmas.selected && (
              <TouchableOpacity
                onPress={() => setOnFinalize(true)}
                className="absolute bottom-[70px] flex-1 right-0 left-0  items-center justify-center"
              >
                <View className="p-6 bg-green-950/60 rounded-lg">
                  <Text style={styles.text}>Continuar</Text>
                </View>
              </TouchableOpacity>
            )}
          </>
        )
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
          className="bg-green-800/10 rounded-2xl p-6 flex-row items-center justify-between"
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
          <View className="w-14 h-14 bg-green-800/20 rounded-full items-center justify-center">
            <MaterialIcons name="add-a-photo" size={32} color="#052e16" />
          </View>
        </TouchableOpacity>
      )}
    </Page>
  );
}
