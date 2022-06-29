import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./orderList";
export default function Dashboard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const totalPrice = () => {
    var total = 0;
    state.orders.map((order) => (total += order.totalPrice));
    return total;
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.itemBox}>
          <Text style={styles.title}>Toplam Tutar</Text>
          <Text style={styles.price}>{totalPrice()} ₺</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.title}>Toplam Sipariş</Text>
          <Text style={styles.price}>{state.orders.length}</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <OrderList />
      </View>
    </View>
  );
}
