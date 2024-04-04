import { Text, View } from "react-native";
import React, {useState} from "react";
import BpmnComponent from "../../component/bpmn_component/BpmnComponent";

const UserScreen: React.FC = () => {
  
  return (
    <View style={{ flex: 1 }}>
      <BpmnComponent />

    </View>
  );
};

export default UserScreen;
