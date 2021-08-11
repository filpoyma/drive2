import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Answer from './Answer';

const ListAnswers = ({ quiz, setAnswerData, isDisabled }) => {
  return (
    <List divided relaxed>
      {quiz.answers.map((answer, index) => (
        <Answer
          answer={answer}
          key={answer}
          index={index}
          isDisabled={isDisabled}
          correctAnswer={quiz.correctAnswer}
          onAnswerSelected={(value, i) => {
            setAnswerData(value, i);
          }}
        />
      ))}
    </List>
  );
};

ListAnswers.propTypes = {
  quiz: PropTypes.object.isRequired,
  setAnswerData: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default ListAnswers;
