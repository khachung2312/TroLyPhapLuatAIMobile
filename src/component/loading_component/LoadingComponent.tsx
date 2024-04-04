import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

const LoadingComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  return (
    <View style={styles.loadingContainer}>
    <ActivityIndicator color={theme.inputSearch.background} size="small"  />
  </View>
  );
};

export default LoadingComponent;

