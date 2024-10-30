import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { RouteProp } from "@react-navigation/native";
import styles from "./style";

export default function Mapa({ route }) {
  const { origem, destino } = route.params;
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (origem && destino) {
      const centerLat = (origem.latitude + destino.latitude) / 2;
      const centerLng = (origem.longitude + destino.longitude) / 2;
      setRegion({
        latitude: centerLat,
        longitude: centerLng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      setLoading(false);
    }
  }, [origem, destino]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {region && (
          <MapView style={styles.map} initialRegion={region}>
            <Marker
              coordinate={{
                latitude: origem.latitude,
                longitude: origem.longitude,
              }}
              title="Origem"
            />
            <Marker
              coordinate={{
                latitude: destino.latitude,
                longitude: destino.longitude,
              }}
              title="Destino"
            />
          </MapView>
        )}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
