import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Grid, Row, Col } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { LIGHTBLUE, LIGHTGRAY } from '../../constants/Colors';

type HelpElementType = {
  question: string;
  answer: string;
};

const HelpElement = ({ question, answer }: HelpElementType) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const onClick = () => {
    if (!unmounted.current) {
      setShowAnswer((previousState) => !previousState);
    }
  };
  return (
    <Grid>
      <Row style={styles.questionRow}>
        <Col size={7}>
          <Text style={styles.questionText}>{question}</Text>
        </Col>
        <Col size={1}>
          <TouchableOpacity onPress={onClick}>
            <MaterialIcons
              name={showAnswer ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
              size={40}
              color={LIGHTBLUE}
            />
          </TouchableOpacity>
        </Col>
      </Row>
      <Row style={styles.answerRow}>
        {showAnswer && <Text style={styles.answerText}>{answer}</Text>}
      </Row>
    </Grid>
  );
};

export default HelpElement;

const styles = StyleSheet.create({
  questionRow: {
    backgroundColor: LIGHTGRAY,
    marginTop: 10,
    padding: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  questionText: {
    fontSize: 16,
  },
  answerRow: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 5,
  },
  answerText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
