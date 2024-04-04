import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from "react-native";
import React, { useContext } from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

interface ServiceComponentProps {
  iconName: ImageSourcePropType;
  title: string;
  total: number;
  onPress: () => void;
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({iconName, title, total, onPress}) => {
    const {theme} = useContext(ThemeContext)
    const styles = createStyles(theme)
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={iconName} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.total}>{total}</Text>
    </TouchableOpacity>
  );
};

export default ServiceComponent;

