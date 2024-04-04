import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchComponent from "../../component/search_component/SearchComponent";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";
import ServiceComponent from "../../component/service_component/ServiceComponent";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import SearchAPI from "../../services/api_handler/SearchAPI";
import SearchProcedureResultComponent from "../../component/search_procedure_result_component/SearchProcedureResultComponent";
import SearchDocumentResultComponent from "../../component/search_document_result_component /SearchDocumentResultComponent";
import TabViewSearchComponent from "../../component/tab_view_search_component/TabViewSearchComponent";

const SearchScreen: React.FC = () => {
  const [searchProcedureData, setSearchProcedureData] = useState([]);
  const [searchDocumentData, setSearchDocumentData] = useState([]);
  const [totalProcedureResult, setTotalProcedureResult] = useState(Number);
  const [totalDocumentResult, setTotalDocumentResult] = useState(Number);
  const [searchText, setSearchText] = useState('')
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const [scrollViewStyle, setScrollViewStyle] = useState({
    ...styles.bodyContainer,
  });
  const [isTotalResults, setIsTotalResults] = useState(Number);

  const [isLoading, setIsLoading] = useState(false);

  const [searchResultStyle, setSearchResultStyle] = useState({
    display: "none",
  });


  const handleSearch = async (text: string) => {
    setIsLoading(true);
    if (text === "") {
      setScrollViewStyle(styles.bodyContainer);
      setSearchResultStyle({ display: "none" });
    } else {
      setScrollViewStyle({ display: "none" });
      setSearchResultStyle(styles.searchResultContainer);
      const query = text;
      setSearchText(query)
      try {
        const searchResults = await SearchAPI.searchThuTuc(query, 1);
        const numberOfResults = searchResults.totalResult;
        const dataSearchProcedure = searchResults.ketQuaTimKiem.thongTinThuTuc;
        const numberProcedureResults = dataSearchProcedure.length;
        const dataSearchDocument = searchResults.ketQuaTimKiem.thongTinVanBan;
        const numberDocumentResults = dataSearchDocument.length;
        setIsTotalResults(numberOfResults);
        setTotalProcedureResult(numberProcedureResults);
        setTotalDocumentResult(numberDocumentResults);
        setSearchProcedureData(dataSearchProcedure);
        setSearchDocumentData(dataSearchDocument);
      } catch (error) {
        console.error("Error searching:", error);
      }
    }
    setIsLoading(false);
  };

  

  const debouncedSearch = debounce(handleSearch, 1000);

  const handleInputChange = (text: string) => {
    debouncedSearch(text);
  };

  const renderServiceItem = (item: { id?: number; icon: any; title: any; total: any; }) => (
    <ServiceComponent
      iconName={item.icon}
      title={item.title}
      total={item.total}
      onPress={undefined}
    />
  );


  const itemServiceData = [
    {
      id: 1,
      icon: require("../../assets/icon/ic_building.png"),
      title: t("serviceName.enterprise"),
      total: 3782 + " " + t("totalName.information"),
    },
    {
      id: 2,
      icon: require("../../assets/icon/ic_profile_2user.png"),
      title: t("serviceName.workers"),
      total: 589 + " " + t("totalName.information"),
    },
    {
      id: 3,
      icon: require("../../assets/icon/ic_bank.png"),
      title: t("serviceName.government_agencies"),
      total: 2076 + " " + t("totalName.information"),
    },
    {
      id: 4,
      icon: require("../../assets/icon/ic_folder_open.png"),
      title: t("serviceName.legislation"),
      total: 2426 + " " + t("totalName.document"),
    },
    {
      id: 5,
      icon: require("../../assets/icon/ic_layer.png"),
      title: t("serviceName.administrative_procedures"),
      total: 267 + " " + t("totalName.procedure"),
    },
    {
      id: 6,
      icon: require("../../assets/icon/ic_document_text.png"),
      title: t("serviceName.implementation_guide"),
      total: 2095 + " " + t("totalName.instruct"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchComponent
          hanlderSearchProcedure={handleInputChange}
          isLoading={isLoading}
        />
      </View>

      <View style={searchResultStyle}>
        <Text style={styles.totalResultText}>
          Tìm thấy {isTotalResults} kết quả
        </Text>
        <TabViewSearchComponent searchTextQuery={searchText} searchProcedureData={searchProcedureData} setSearchProcedureData={setSearchProcedureData} setSearchDocumentData={setSearchDocumentData} searchDocumentData={searchDocumentData}/>      
      </View>  
      <ScrollView nestedScrollEnabled style={scrollViewStyle}>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.textTitle1}>TroLyPhapLuat</Text>
            <Text style={styles.textTitle2}>.ai</Text>
          </View>
          <Text style={styles.textTitle3}>{t("serviceText.search_title")}</Text>
        </View>

        <View style={styles.viewListService}>
          <View style={styles.columnSearvice}>
            {itemServiceData
              .slice(0, Math.ceil(itemServiceData.length / 2))
              .map((e) => {
                return renderServiceItem(e);
              })}
          </View>
          <View style={styles.columnSearvice}>
            {itemServiceData
              .slice(Math.ceil(itemServiceData.length / 2))
              .map((e) => {
                return renderServiceItem(e);
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
