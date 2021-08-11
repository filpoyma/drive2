import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from "semantic-ui-react";

const Question = ({ content, img }) => (
  <div className='question'>
    <img className='imgQuestion' src={img} alt=''/>
    <p className='textQuestion'>{content}</p>
  </div>
);

Question.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
};

export default Question;
