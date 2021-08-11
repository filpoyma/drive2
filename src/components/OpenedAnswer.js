import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const OpenedAnswer = ({ setAnswerData }) => (
  <Input
    fluid
    size={'mini'}
    onChange={(event) => setAnswerData(event.target.value)}
    placeholder='Ваш ответ...'
  />
);

OpenedAnswer.propTypes = {
  setAnswerData: PropTypes.func.isRequired
};

export default OpenedAnswer;
