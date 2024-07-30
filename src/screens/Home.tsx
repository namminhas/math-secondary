import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, VStack, useTheme, Text } from "native-base";
import BackgroundLayout from "../components/BackgroundLayout";
import CustomBtn from "../components/CustomBtn";
import PopupParent from "../components/PopupParent";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";
import { Audio } from "expo-av";
import { loadSound } from "../utils/func";
import { EOperation } from "../types/utils";
import { SourceSansPro_700Bold } from "@expo-google-fonts/source-sans-pro";
import { Image } from "expo-image";
type Props = {};

const Home = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  const [showModal, setShowModal] = useState(false);

  const navigateLessonsScreen = async () => {
    navigation.navigate("Lessons");
  };
  const navigateCountScreen = async () => {
    navigation.navigate("QuizLogic");
  };
  const navigateMultiScreen = async () => {
    navigation.navigate("Quiz", {
      operation: EOperation.MultiOperation,
    });
  };
  const navigateDivideScreen = async () => {
    navigation.navigate("Quiz", {
      operation: EOperation.DivideOperation,
    });
  };

  useFocusEffect(() => {
    // const playSound = new Audio.Sound();
    // loadSound(playSound, require("../../assets/sound/music.mp3"));
    // const unsubscribe = async () => {
    //   await playSound.stopAsync();
    // };
    // return () => unsubscribe();
  });

  return (
    <BackgroundLayout imageSource={require("../../assets/images/bg-1.png")}>
      {/* Popup */}
      <PopupParent showModal={showModal} setShowModal={setShowModal} />
      <HStack flex={1} justifyContent={"center"}>
        <Center flex={3}>
          <VStack w="80%" space={4} justifyContent={"space-between"}>
            <VStack space={4}>
              <Text
                color={"muted.900"}
                fontWeight={SourceSansPro_700Bold}
                fontSize={36}
                textAlign={"center"}
              >
                Math Logic For Kid
              </Text>
              <HStack justifyContent={"space-between"} space="4">
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  text="Bài giảng"
                  size="MD"
                  handleBtn={navigateLessonsScreen}
                />
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  text="Toán Logic"
                  size="MD"
                  handleBtn={navigateCountScreen}
                />
              </HStack>
              <HStack justifyContent={"space-between"} space="4">
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  text="Phép nhân"
                  size="MD"
                  handleBtn={navigateMultiScreen}
                />
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  text="Phép chia"
                  size="MD"
                  handleBtn={navigateDivideScreen}
                />
              </HStack>
              <Text color={"muted.600"} fontSize={14} textAlign={"center"}>
                Lựa chọn các chủ đề bài học
              </Text>
            </VStack>
            <Box alignItems={"center"}>
              <CustomBtn
                btnColor={colors.gradient.secondary.orange}
                text="Dành cho phụ huynh"
                size="XS"
                handleBtn={() => setShowModal(true)}
              />
            </Box>
          </VStack>
        </Center>
        <Box flex={2} px="8">
          <Image
            source={require("../../assets/images/home-obj.png")}
            contentFit="contain"
            style={{ height: "100%" }}
          />
        </Box>
      </HStack>
    </BackgroundLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
