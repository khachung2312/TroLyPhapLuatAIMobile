import { Text, TouchableOpacity, Image } from "react-native";
import React, {useContext} from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";
import DocumentSearchModel from "../../model/DocumentSearchModel";

interface SearchResultProps {
  document: DocumentSearchModel,
  onPressDetail: () => void
}
const SearchDocumentResultComponent: React.FC<SearchResultProps> = ({document, onPressDetail}) => {
  const {theme} = useContext(ThemeContext)
  const styles = createStyles(theme)
  return (
    <TouchableOpacity onPress={onPressDetail} style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/icon/ic_document_light.png')}/>
      <Text style={styles.title}>{document.tenVanBan}</Text>
    </TouchableOpacity>
  );
};

export default SearchDocumentResultComponent;

