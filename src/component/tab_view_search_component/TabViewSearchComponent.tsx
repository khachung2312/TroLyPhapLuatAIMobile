import React, { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, Route, TabBar } from "react-native-tab-view";
import SearchProcedureResultComponent from "../search_procedure_result_component/SearchProcedureResultComponent";
import SearchDocumentResultComponent from "../search_document_result_component /SearchDocumentResultComponent";
import { useNavigation } from "@react-navigation/native";
import { createStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";
import LoadingComponent from "../loading_component/LoadingComponent";
import SearchAPI from "../../services/api_handler/SearchAPI";

interface SearchResultProps {
  searchProcedureData: any;
  setSearchProcedureData: React.Dispatch<React.SetStateAction<any>>;
  searchDocumentData: any;
  setSearchDocumentData: React.Dispatch<React.SetStateAction<any>>;
  searchTextQuery: string
}

const TabViewSearchComponent: React.FC<SearchResultProps> = ({
  searchProcedureData,
  searchDocumentData,
  setSearchProcedureData,
  setSearchDocumentData,
  searchTextQuery
}) => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [reachedEnd, setReachedEnd] = useState(false);
  const goToSeeDetailPost = (text: string) => {
    navigation.navigate("PostsScreen", { namePosts: text });
  };
  const [isLoadingStatus, setIsLoadingStatus] = useState(false)
  const [page, setPage] = useState(1);

  const fetchProcedureData = async (text: string) => {
    if(page < 2) {
      setIsLoadingStatus(false)
    }
    setIsLoadingStatus(true);

    const query = text;
    
    try {
      const searchResults = await SearchAPI.searchThuTuc(query, page);
      const dataSearchProcedure = searchResults.ketQuaTimKiem.thongTinThuTuc;
      const currentPage = searchResults.currentPage
      const numberOfPage = 4
      setSearchProcedureData((prevData: []) => [
        ...prevData,
        ...dataSearchProcedure,
      ]);
      if (currentPage <= numberOfPage) {
        setPage(currentPage + 1);
      } else {
        setReachedEnd(true)
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }

    setIsLoadingStatus(false);
  };
 

  const fetctDocumentData = async (text: string) => {
    if(page < 2) {
      setIsLoadingStatus(false)
    }
    setIsLoadingStatus(true);

    const query = text;
    
    try {
      const searchResults = await SearchAPI.searchThuTuc(query, page);
      const dataSearchDocument = searchResults.ketQuaTimKiem.thongTinVanBan;
      const currentPage = searchResults.currentPage
      const numberOfPage = 4
      setSearchDocumentData((prevData: []) => [
        ...prevData,
        ...dataSearchDocument,
      ]);
      if (currentPage <= numberOfPage) {
        setPage(currentPage + 1);
      } else {
        setReachedEnd(true)
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }

    setIsLoadingStatus(false);
  };

  const renderSearchProcedureResultItem = ({ item }) => {
    const handlePressDetail = () => {
      goToSeeDetailPost(item.tenThuTuc);
    };
    return (
      <SearchProcedureResultComponent
        procedure={item}
        onPressDetail={handlePressDetail}
      />
    );
  };

  const renderSearchDocumentResultItem = ({ item }) => {
    const handlePressDetail = () => {
      goToSeeDetailPost(item.tenVanBan);
    };

    return (
      <SearchDocumentResultComponent
        document={item}
        onPressDetail={handlePressDetail}
      />
    );
  };
  const handleProcedureEndReached = () => {
    if (!reachedEnd) {
      fetchProcedureData(searchTextQuery)
    }
  };
  const handleDocumentEndReached = () => {
    if (!reachedEnd) {
      fetctDocumentData(searchTextQuery)
    }
  };
  const ProcedureRoute = () => (
    <View style={styles.procedureContainer}>
      <FlatList
        data={searchProcedureData}
        renderItem={renderSearchProcedureResultItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleProcedureEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoadingStatus ? <LoadingComponent /> : null}
        onScrollBeginDrag={() => setReachedEnd(false)}
      />
    </View>
  );

  const DocumentRoute = () => (
    <View style={styles.documentContainer}>
      <FlatList
        data={searchDocumentData}
        renderItem={renderSearchDocumentResultItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleDocumentEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoadingStatus ? <LoadingComponent /> : null}
        onScrollBeginDrag={() => setReachedEnd(false)}
      />
    </View>
  );

  const renderScene = SceneMap({
    first: ProcedureRoute,
    second: DocumentRoute,
  });

  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<Route[]>([
    { key: "first", title: "Thủ tục" },
    { key: "second", title: "Văn bản" },
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.tabView}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            labelStyle={styles.tabBarText}
            indicatorStyle={styles.tabBarIndicator}
          />
        )}
      />
    </View>
  );
};

export default TabViewSearchComponent;
