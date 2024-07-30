import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import { EFont } from "../types/utils";
import BoxQuestion from "./BoxQuestion";
import { Image } from "expo-image";

type Props = {
  imageUrl: string;
  answerTag?: ChildNode | null;
};

const FormulaLogic = (props: Props) => {
  const { imageUrl } = props;
  return (
    <HStack space={8} alignItems={"center"}>
      {/* Formula */}
      <HStack height={160} space={2} flex={1}>
        <Image
          style={{
            width: "100%",
          }}
          contentFit="contain"
          source={{
            uri: imageUrl,
          }}
        />
      </HStack>
      {/* <Text color={"white"} fontSize={48} fontFamily={EFont.SourceSansPro_700Bold}>
        =
      </Text>
      {props.answerTag ? props.answerTag : <BoxQuestion size={"M"} />} */}
    </HStack>
  );
};

export default FormulaLogic;

const styles = StyleSheet.create({});
