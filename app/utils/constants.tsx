import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const tabs = [
  {
    name: "page",
    title: "Início",
    icon: <MaterialIcons name="home" color="#052e16" size={36} />,
  },
  {
    name: "orders",
    title: "Pedidos",
    icon: <FontAwesome name="shopping-basket" color="#052e16" size={32} />,
  },
  {
    name: "account",
    title: "Você",
    icon: <MaterialIcons name="account-circle" color="#052e16" size={36} />,
  },
];
