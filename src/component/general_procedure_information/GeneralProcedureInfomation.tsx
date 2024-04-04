import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";
import ProcedureModel from "../../model/ProcedureModel";
import { Linking } from "react-native";

interface GeneralProcedureInfomationProps {
  procedure: ProcedureModel | null;
}

const GeneralProcedureInfomation: React.FC<GeneralProcedureInfomationProps> = ({
  procedure,
}) => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.titleMenu}>I. Thông tin chung</Text>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>1. Tên thủ tục</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.tenThuTuc}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>2. Mã thủ tục</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.maThuTuc}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>3. Số quyết định</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.soQuyetDinh}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>4. Loại thủ tục</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.loaiThuTuc}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>5. Lĩnh vực</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.linhVuc}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>6. Cấp thực hiện</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.capThucHien}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>7. Đối tượng thực hiện</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.doiTuongThucHien}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>8. Cơ quan thực hiện</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.coQuanThucHien}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>9. Cơ quan có thẩm quyền</Text>
        <Text style={styles.textContent}>{procedure?.thongTinChung.coQuanCoThamQuyen}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.itemTextLable}>10. Tham khảo</Text>
        <Text style={styles.textContent}>Cổng dịch vụ quốc gia</Text>
        <TouchableOpacity onPress={() => {
            Linking.openURL(procedure?.thongTinChung.link + '')
        }}>
          <Text style={styles.xemThemText}>(Xem thêm)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneralProcedureInfomation;
