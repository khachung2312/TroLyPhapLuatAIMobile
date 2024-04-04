import {Text, TouchableOpacity, Image } from "react-native";
import React, {useContext} from "react";
import ProcedureSearchModel from "../../model/ProcedureSearchModel";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

interface SearchResultProps {
  procedure: ProcedureSearchModel,
  onPressDetail: () => void
}
const SearchProcedureResultComponent: React.FC<SearchResultProps> = ({procedure, onPressDetail}) => {
  const {theme} = useContext(ThemeContext)
  const styles = createStyles(theme)
  return (
    <TouchableOpacity onPress={onPressDetail} style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/icon/ic_procedure.png')}/>
      <Text style={styles.title}>{procedure.tenThuTuc}</Text>
    </TouchableOpacity>
  );
};

export default SearchProcedureResultComponent;

