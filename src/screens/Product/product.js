import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { getProducts } from "../../data/dataApi";
import * as cartActions from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "react-native-paper";

function Product() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    const productArray = getProducts();
    setProducts(productArray);
    setChange(false);
  }, [change]);

  const incQuantity = (product) => {
    //dispatch(cartActions.incQuantity(product));

    if (product.quantity >= 1 && product.quantity < product.stock) {
      product.quantity++;
      setChange(true);
    }
  };

  const decQuantity = (product) => {
    //dispatch(cartActions.decQuantity(product));
    if (product.quantity > 1 && product.quantity <= product.stock) {
      product.quantity--;
      setChange(true);
    }
  };

  const addToCart = (product) => {
    dispatch(cartActions.addToCart({ quantity: product.quantity, product }));
    ToastAndroid.show("Ürün Başarıyla Eklendi", ToastAndroid.SHORT);
  };
  const renderProduct = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photoUrl }} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.price} ₺</Text>
        <Text style={styles.title}>Stock : {item.stock}</Text>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <IconButton
            icon="minus"
            mode="outlined"
            color="red"
            onPress={() => decQuantity(item)}
          ></IconButton>
          <Text>{item.quantity}</Text>
          <IconButton
            icon="plus"
            mode="outlined"
            color="blue"
            onPress={() => incQuantity(item)}
          ></IconButton>
        </View>
        <Button color="tomato" onPress={() => addToCart(item)}>
          Sepete Ekle
        </Button>
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}

export default Product;
