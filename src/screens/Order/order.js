import { View, ToastAndroid } from "react-native";
import React, { Component } from "react";
import styles from "./styles";
import { DataTable, Button, IconButton, Text } from "react-native-paper";
import * as cartActions from "../../redux/actions/cartActions";
import * as orderActions from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dialog, {
  SlideAnimation,
  ScaleAnimation,
  DialogTitle,
  DialogFooter,
  DialogButton,
  DialogContent,
} from "react-native-popup-dialog";

export default function Order({ navigation }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [totalPrice, setTotalPrice] = useState();
  const [visible, setVisible] = useState(false);

  const removeFromCart = (product) => {
    dispatch(cartActions.removeFromCart(product));
    console.log("Ürün Başarıyla Silindi");
  };

  const incQuantity = (cartItem) => {
    dispatch(cartActions.incQuantity(cartItem));
    console.log("Başarıyla Güncellendi");
  };

  const decQuantity = (cartItem) => {
    dispatch(cartActions.decQuantity(cartItem));
    console.log("Başarıyla Güncellendi");
  };

  const resetCart = () => {
    dispatch(cartActions.resetCart());
    console.log("Sepet Boşaltıldı");
  };

  const successCart = () => {
    var totalPrice = 0;
    var orderNo = Math.floor(Math.random() * 1000000) + 9999999;
    state.cart.map((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
    });

    var order = { orderNo: orderNo, totalPrice: totalPrice };
    dispatch(orderActions.successCart(order));
    setVisible(true);
    resetCart();
  };

  const totalPriceCalc = () => {
    var total = 0;
    state.cart.map((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    totalPriceCalc();
  });

  const renderSummary = () => {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Ürün Adı</DataTable.Title>
          <DataTable.Title>Adeti</DataTable.Title>
          <DataTable.Title>Fiyatı</DataTable.Title>
          <DataTable.Title></DataTable.Title>
        </DataTable.Header>
        {state.cart.map((cartItem) => (
          <DataTable.Row key={cartItem.product.productId}>
            <DataTable.Cell>{cartItem.product.name}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton
                icon="minus"
                mode="outlined"
                color="red"
                onPress={() => decQuantity(cartItem)}
              ></IconButton>
              <Text>{cartItem.quantity}</Text>
              <IconButton
                icon="plus"
                mode="outlined"
                color="blue"
                onPress={() => incQuantity(cartItem)}
              ></IconButton>
            </DataTable.Cell>
            <DataTable.Cell>{cartItem.product.price} ₺</DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "flex-end" }}>
              <IconButton
                icon="delete"
                mode="outlined"
                color="red"
                onPress={() => removeFromCart(cartItem.product)}
              ></IconButton>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Toplam Tutar :
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontStyle: "italic" }}>{totalPrice} ₺</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Button mode="contained" color="red" onPress={() => resetCart()}>
              Sepeti Boşalt
            </Button>
          </DataTable.Cell>
          <DataTable.Cell>
            <Button
              mode="contained"
              color="green"
              onPress={() => successCart()}
            >
              Sepeti Onayla
            </Button>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  };
  const renderEmpty = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Sepetiniz Boş</Text>
      </View>
    );
  };
  return (
    <View>
      {state.cart.length > 0 ? renderSummary() : renderEmpty()}
      <Dialog
        visible={visible}
        dialogTitle={<DialogTitle title="Başarılı" />}
        dialogAnimation={
          new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true, // optional
          })
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="Tüm Siparişleri Görüntüle"
              onPress={() => {
                setVisible(false);
                navigation.navigate("Dashboard");
              }}
            />
          </DialogFooter>
        }
        onTouchOutside={() => {
          setVisible(false);
        }}
      >
        <DialogContent>
          <Text style={{ fontSize: 25, marginTop: 20 }}>
            Siparişiniz Tamamlandı
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
}
