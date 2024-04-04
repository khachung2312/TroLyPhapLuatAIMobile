import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

const MenuProcedureComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.titleMenu}>Nội dung</Text>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>I. Thông tin chung</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>II. Căn cứ pháp lý</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>III. Văn bản liên quan</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>IV. Thủ tục thực hiện</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>V. Cách thức & lệ phí thực hiện</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemTextMenu}>VI. Thành phần hồ sơ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuProcedureComponent;

