import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import { ThemeContext } from "../../themes/ThemeContext";
import { createStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const navigation = useNavigation();
  const handleHomeTabPress = () => {
    navigation.navigate('ProcedureScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text>{t("hello")}</Text>
      <Text>{t("welcome")}</Text>
      <TouchableOpacity onPress={handleChangeLanguage}>
        <Text style={{ color: "red" }}>Change Language</Text>
      </TouchableOpacity>
      <Text>BPMN</Text>
      <Button
        title="Chuyển màn"
        onPress={handleHomeTabPress}
      />
    </View>
  );
};

export default HomeScreen;
