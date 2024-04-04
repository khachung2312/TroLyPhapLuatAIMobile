import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../loading_component/LoadingComponent";

interface SearchComponentProps {
  hanlderSearchProcedure: (text: string) => void;
  isLoading: boolean;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  hanlderSearchProcedure,
  isLoading,
}) => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useTranslation();
  const [cancelStyle, setCancelStyle] = useState(styles.btnCancel);
  const inputRef = useRef<TextInput>(null);

  const handleSearch = async (text: string) => {
    hanlderSearchProcedure(text);
  };

  const handleCancelSearch = () => {
    setIsFocused(false);
    setCancelStyle({ ...styles.btnCancel, display: "none" });
    if (inputRef.current) {
      inputRef.current.clear();
      hanlderSearchProcedure("");
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setCancelStyle({ ...styles.btnCancel, display: "flex" });
  };

  const inputStyle = [styles.contentSearch, isFocused && styles.focusedInput];
  const placeholderTextColor = isFocused ? "gray" : "#fff";
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.icon}
          source={require("../../assets/icon/ic_search.png")}
        />
        <View></View>
        <View style={inputStyle}>
          <TextInput
            ref={inputRef}
            style={styles.contentSearch}
            placeholder={t("serviceText.search")}
            placeholderTextColor={placeholderTextColor}
            onPressIn={handleInputFocus}
            onFocus={handleInputFocus}
            editable={isFocused}
            onChangeText={(text) => {
              handleSearch(text);
            }}
          />
          {
           isLoading && <LoadingComponent />
            }
        </View>

        <TouchableOpacity
          style={cancelStyle}
          onPress={() => handleCancelSearch()}
        >
          <Text style={styles.textCancel}>{t("serviceText.cancel_text")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchComponent;
