import { v4 as uid } from "uuid";

const data = [
  {
    id: uid(),
    title: "Fast Food",
    url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "dinner",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "Italian cousine",
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "breakfast",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "Chinese Food",
    url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "lunch",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "Delicious Meat",
    url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "lunch",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "Chinese Special",
    url: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "breakfast",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "Brownise",
    url: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "breakfast",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "bbq special",
    url: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences.",
    category: "dinner",
    price: Math.floor(Math.random() * 1000),
  },
  {
    id: uid(),
    title: "special salad",
    url: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      " It really didn't matter what they did to him. He's already made up his mind Whatever came his way, he was prepared for the consequences.",
    category: "lunch",
    price: Math.floor(Math.random() * 1000),
  },
];

export default data;
