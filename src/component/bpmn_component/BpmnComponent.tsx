import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const BpmnComponent = () => {
  const bpmnViewerHtml = require('./bpmn-viewer.html');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}></Text>
      <WebView
        originWhitelist={['*']}
        source={{uri: bpmnViewerHtml}}
        style={styles.webview}
      />
    </View>
  );
};

export default BpmnComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  webview: {
    flex: 1,
  },
});
