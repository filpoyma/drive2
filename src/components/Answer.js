import React from 'react';
import PropTypes from 'prop-types';
import { Icon, List, Popup } from 'semantic-ui-react';

const Answer = ({
  answer,
  index,
  correctAnswer,
  isDisabled,
  onAnswerSelected,
}) => {
  return (
    <Popup
      content={String(index + 1) === correctAnswer ? 'верно' : 'неверно'}
      on='click'
      trigger={
        <List.Item
          as='a'
          onClick={() => onAnswerSelected(String(index+1))}
          disabled={isDisabled}
        >
          <Icon name='circle' />
          <List.Content>
            <List.Header>{answer}</List.Header>
          </List.Content>
        </List.Item>
      }
    />
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Answer;
