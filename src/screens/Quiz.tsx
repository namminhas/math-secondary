import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LessonLayout, { ETypeImage } from "../components/LessonLayout";
import { Center, VStack } from "native-base";
import { EQuizStatus, IAnserTag } from "../types/utils";
import Formula from "../components/Formula";
import GroupAnswer from "../components/GroupAnswer";
import PopupRightAnswer from "../components/PopupRightAnswer";
import { RootStackParams } from "../navigations/config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { quizzes } from "../data/mockup";
import { getRandomArray } from "../utils/func";

type Props = {} & NativeStackScreenProps<RootStackParams, "Quiz">;

const Quiz = (props: Props) => {
  const { route, navigation } = props;
  const { operation } = route.params;
  const [listTest] = useState(getRandomArray(quizzes[operation], 5));
  const [answerTag, setAnswerTag] = useState<IAnserTag>(null);
  const [quesIndex, setQuesIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNextQues = () => {
    console.log(quesIndex, listTest.length);
    if (quesIndex < listTest.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnswerTag(null);
      setShowModal(false);
    } else {
      setAnswerTag(null);
      setShowModal(false);
      navigation.navigate("Collection");
    }
  };

  useEffect(() => {
    if (answerTag) {
      setShowModal(true);
    }
  }, [answerTag]);

  return (
    <LessonLayout
      iconSource={require("../../assets/images/bg-1.png")}
      type={ETypeImage.QUIZ}
    >
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleNextQues}
      />
      <Center flex={1}>
        <VStack space={10}>
          <Formula
            size="M"
            data={listTest[quesIndex]}
            status={EQuizStatus.ANSWER}
            answerTag={answerTag}
          />
          <GroupAnswer
            size="M"
            dataAnswer={{
              choices: listTest[quesIndex].choices,
              answer: listTest[quesIndex].answer,
            }}
            answerTag={answerTag}
            setAnswerTag={setAnswerTag}
          />
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
