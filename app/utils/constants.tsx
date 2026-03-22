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

export const pharmas = [
  {
    id: "1",
    name: "Farmácia Panvet",
    deliveryTime: "45 min",
    price: "R$ 16,99",
    distance: "5 km",
    address: "Rua Mareshal Floreando, 645",
  },

  {
    id: "2",
    name: "Farmácia Santa Maria",
    deliveryTime: "15 min",
    price: "R$ 12,99",
    distance: "2 km",
    address: "Av. Presidente Getúlio, 565",
  },

  {
    id: "3",
    name: "Farmácia Kureha Med",
    deliveryTime: "6 min",
    price: "R$ 7,99",
    distance: "1 km",
    address: "Rua de Sá Cura, 134",
  },
];
