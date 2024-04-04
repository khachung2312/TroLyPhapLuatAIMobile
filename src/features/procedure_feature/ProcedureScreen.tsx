import {
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProcedureAPI from "../../services/api_handler/ProcedureAPI";
import ProcedureModel from "../../model/ProcedureModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../themes/ThemeContext";
import { createStyles } from "./style";
import MenuProcedureComponent from "../../component/menu_procedure_component/MenuProcedureComponent";
import GeneralProcedureInfomation from "../../component/general_procedure_information/GeneralProcedureInfomation";
import { WebView } from "react-native-webview";

const ProcedureScreen: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const [procedureData, setProcedureData] = useState<ProcedureModel | null>(
    null
  );
  const [modalDocumentVisible, setModalDocumentVisible] = useState(false);

  useEffect(() => {
    const fetchProcedureData = async () => {
      try {
        const resProcedure = await ProcedureAPI.getProcedureData();
        setProcedureData(resProcedure);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchProcedureData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconBack}
            source={require("../../assets/icon/ic_goback.png")}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.titleFirst}>TroLyPhapLuat</Text>
          <Text style={styles.titleLast}>.ai</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Text style={styles.tenThuTucStyle}>
            {procedureData?.thongTinChung.tenThuTuc}
          </Text>
          <MenuProcedureComponent />
          <GeneralProcedureInfomation procedure={procedureData} />
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#3f5876" }}>
            II. Văn bản liên quan
          </Text>
          <TouchableOpacity
            onPress={() => setModalDocumentVisible(true)}
            style={styles.webViewComponent}
          >
            <WebView
              originWhitelist={["*"]}
              source={{
                uri: "https://www.trolyphapluat.ai/document_legislation/?legislation-id=06/2019/N%C4%90-CP&position=1-1",
              }}
              style={styles.webViewComponent}
            />
          </TouchableOpacity>
        </ScrollView>
        <Modal visible={modalDocumentVisible} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => setModalDocumentVisible(false)} style={styles.btnCloseContainer}>
                <Text style={styles.btnCloseStyle}>X</Text>
              </TouchableOpacity>
            <WebView
              originWhitelist={["*"]}
              source={{
                uri: "https://www.trolyphapluat.ai/document_legislation/?legislation-id=06/2019/N%C4%90-CP&position=1-1",
              }}
              style={styles.webViewDetailDocument}
            />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ProcedureScreen;
