import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import PermissionModal from "../components/permission";

export default function LogoPage() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setOpenModal(true);
      }}
      className="flex-1 bg-blue-50 justify-center items-center"
    >
      <Text className="text-blue-900 text-6xl font-bold mb-4 italic w-full text-center">
        Farma Fácil
      </Text>

      <Image
        source={require("../assets/logo.png")}
        className="w-80 h-80 object-contain"
      />

      <Text className="text-blue-900 text-lg mt-6 px-10 text-center">
        O jeito mais fácil de comprar remédios online!
      </Text>

      <Text className="text-blue-900 text-sm font-bold mt-6 px-10 text-center">
        Grupo NSVA
      </Text>

      {openModal && (
        <PermissionModal
          visible={openModal}
          onAllow={() => {
            router.push("/(tabs)/page");
          }}
          onDeny={() => setOpenModal(false)}
        />
      )}
    </Pressable>
  );
}
