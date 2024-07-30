import { StyleSheet, Text } from "react-native";
import React, { ReactNode } from "react";
import BackgroundLayout from "./BackgroundLayout";
import { Box, HStack } from "native-base";
import CloseBtn from "./CloseBtn";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

export enum ETypeImage {
  QUIZ,
  LOGIC,
  LESSON,
}

type Props = {
  iconSource: string;
  children: ReactNode;
  handleBack?: () => void;
  type?: ETypeImage;
};

const LessonLayout = (props: Props) => {
  const { type = ETypeImage.QUIZ } = props;
  const navigation = useNavigation();
  const { handleBack = () => navigation.goBack() } = props;

  const imageObj = {
    [ETypeImage.QUIZ]: require("../../assets/images/quiz-obj.png"),
    [ETypeImage.LOGIC]: require("../../assets/images/logic-obj.png"),
    [ETypeImage.LESSON]: require("../../assets/images/lesson-obj.png"),
  };

  return (
    <BackgroundLayout
      imageSource={props.iconSource || require("../../assets/images/bg-2.png")}
    >
      <Box flex={1} py={8} px="4">
        <HStack flex={1} justifyContent={"space-between"}>
          <Box flex={2}>
            <Image
              source={imageObj[type]}
              contentFit="contain"
              style={{ height: "100%" }}
            />
          </Box>
          <Box height="100%" flex={3}>
            <BackgroundLayout
              imageSource={require("../../assets/images/table.png")}
            >
              {props.children}
            </BackgroundLayout>
          </Box>
          <Box mx={6} mt={"-2"}>
            <CloseBtn handleBtn={handleBack} />
          </Box>
        </HStack>
      </Box>
    </BackgroundLayout>
  );
};

export default LessonLayout;

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
});
