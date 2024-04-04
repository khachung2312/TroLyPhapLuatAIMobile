import { Text, View, StyleSheet } from "react-native";
import React from "react";
import YouTube from "react-native-youtube";

const StorageBookScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <YouTube
        apiKey="AIzaSyC_Mk2hcP8DUK1eJqAWI2L2vGm-RsEY6XQ"
        videoId="LLAZUTbc97I"
        play={false}
        fullscreen
        loop={false}
        style={styles.youtubePlayer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  youtubePlayer: {
    alignSelf: "stretch",
    height: 300,
  },
});

export default StorageBookScreen;
