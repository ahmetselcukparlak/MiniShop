import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";
import { DataTable, Button, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function OrderList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const renderEmpty = () => {
    return (
      <View>
        <Text
          style={[
            styles.title,
            {
              textAlign: "center",
              marginHorizontal: 15,
              marginTop: 10,
              paddingVertical: 10,
            },
          ]}
        >
          Henüz Siparişiniz Bulunmamaktadır.
        </Text>
      </View>
    );
  };
  const renderOrders = () => {
    return (
      <View>
        <Text
          style={[
            styles.title,
            {
              textAlign: "center",
              marginHorizontal: 15,
              marginTop: 10,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderStyle: "dashed",
            },
          ]}
        >
          Tüm Siparişler
        </Text>

        <ScrollView style={{ marginBottom: 70 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Sipariş Numarası</DataTable.Title>
              <DataTable.Title>Sipariş Toplam Tutar</DataTable.Title>
              <DataTable.Title></DataTable.Title>
            </DataTable.Header>
            {state.orders.map((order) => (
              <DataTable.Row key={order.orderNo}>
                <DataTable.Cell>{order.orderNo}</DataTable.Cell>
                <DataTable.Cell>{order.totalPrice} ₺</DataTable.Cell>
                <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                  <IconButton
                    icon="eye"
                    mode="outlined"
                    color="blue"
                    onPress={() => console.log("Sipariş Detayı")}
                  ></IconButton>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    );
  };
  return (
    <View>{state.orders.length > 0 ? renderOrders() : renderEmpty()}</View>
  );
}
