import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../themes/ThemeContext";
import { createStyles } from "./styles";
import WebView from "react-native-webview";

const PostsScreen: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const route = useRoute();

  const { namePosts } = route.params as { namePosts: string };
  const urlPosts = nonAccentVietnamese("Thủ tục " + namePosts);
  console.log(urlPosts);

  function nonAccentVietnamese(str: string) {
    str = str.substring(0, 199);
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    // Replace spaces with hyphens
    // str = str.replace(/\s+/g, '-');
    str = str.replace(/[(),\s\/\.]+/g, "-");
    return "https://www.trolyphapluat.ai/" + "docs/" + str;
  }

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

      </View>
      <View style={styles.bodyContainer}>
        <WebView
        originWhitelist={['*']}
        source={{uri: urlPosts}}
        style={styles.webview}
      />
      </View>
    </SafeAreaView>
  );
};

export default PostsScreen;
