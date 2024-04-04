import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Button } from "react-native";
import { ThemeContext } from "../../themes/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import { useNavigation } from "@react-navigation/native";
import { createStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import IconBottomComponent from "../../component/icon_button/IconBottomComponent";
import IconBottomSolidComponent from "../../component/icon_button/IconBottomSolidComponent";
import AssistantAPI from "../../services/api_handler/AssistantAPI";

const AssistantScreen: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const styles = createStyles(theme);
  const [messages, setMessages] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const sampleMessages = [
      {
        _id: "sample_message_2_m",
        text: "Chúc bạn ngày mới vui vẻ!!",
        createdAt: new Date(),
        user: {
          _id: '2',
          name: "Người dùng khác",
        },
      },
      {
        _id: "sample_message_1",
        text: "Xin chào!",
        createdAt: new Date(),
        user: {
          _id: '1',
          name: "Người dùng khác",
        },
      },
    ];

    const updatedMessages = [...sampleMessages, ...messages];

    // Cập nhật state của tin nhắn
    setMessages(updatedMessages);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    if (newMessages.length > 0 && newMessages[0].text) {
      handleSendQuestion(newMessages[0].text);
    } else {
      console.log("Không có tin nhắn mới hoặc tin nhắn không chứa nội dung");
      return;
    }
  };

  const handleSendQuestion = async (contentQuestion: string) => {
    try {
      const answerResult = await AssistantAPI.sendQuestion(
        "",
        "",
        "",
        contentQuestion,
        ""
      );
      console.log(answerResult.message);
      console.log("API response:", answerResult);
    } catch (error) {
      console.log("Error send question: ", error);
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            style={[styles.btnHeader]}
            source={require("../../assets/img/book.jpg")}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {t("headerAssistantScreen.title")}
          </Text>
          <View style={styles.titleLink}>
            <Image
              style={styles.iconStatus}
              source={require("../../assets/icon/ic_ellipse.png")}
            />
            <Text style={styles.linkText}>trolyphapluat.ai</Text>
          </View>
        </View>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={[styles.btnHeader]}
            source={require("../../assets/icon/ic_more.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewChat}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
          }}
          renderInputToolbar={(props) => (
            <InputToolbar
              {...props}
              containerStyle={styles.inputContainer}
              textInputStyle={styles.inputText}
              renderComposer={(composerProps) => (
                <Composer
                  {...composerProps}
                  placeholder={t("input.content_of_exchange")}
                />
              )}
              renderSend={(sendProps) => (
                <Send {...sendProps} containerStyle={styles.sendContainer}>
                  <Image
                    style={styles.iconSend}
                    source={require("../../assets/icon/ic_send.png")}
                  />
                </Send>
              )}
            />
          )}
          renderBubble={(bubbleProps) => (
            <Bubble
              {...bubbleProps}
              wrapperStyle={{
                right: [styles.backgroundContentChat],
              }}
            />
          )}
        />
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <TouchableOpacity onPress={closeModal} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.btnModalStyle}>
              <Image style={styles.iconBtnModal} source={require('../../assets/icon/ic_archive_add.png')}/>
              <Text style={styles.btnTextModal}>Tạo cuộc hội thoại mới</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnModalStyle}>
              <Image style={styles.iconBtnModal} source={require('../../assets/icon/ic_star.png')}/>
              <Text style={styles.btnTextModal}>Đánh giá cuộc hội thoại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnModalStyle}>
              <Image style={styles.iconBtnModal} source={require('../../assets/icon/ic_archive_add.png')}/>
              <Text style={styles.btnTextModal}>Lưu cuộc hội thoại</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* <View style={styles.iconButtonContainer}>
        <IconBottomComponent
          iconName={require("../../assets/icon/ic_star.png")}
          text={t("buttons.conversation_assessment")}
          onPress={undefined}
        />
        <IconBottomSolidComponent
          iconName={require("../../assets/icon/ic_archive_add_white.png")}
          text={t("buttons.save_the_conversation")}
          onPress={undefined}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default AssistantScreen;
