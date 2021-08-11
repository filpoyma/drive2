import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import ButtonFwd from '../components/ButtonFwd';
import ListAnswers from '../components/ListAnswers';
import OpenedAnswer from '../components/OpenedAnswer';

class Quiz extends Component {
  timerId = 0;
  state = {
    value: '',
    i: null,
    delay: this.props.quiz.delay,
  };

  timer() {
    this.timerID = setInterval(
      () => this.setState((state) => ({ delay: state.delay - 1 })),
      1000
    );
  }

  componentDidMount() {
    this.timer();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.delay <= 0) {
      clearInterval(this.timerID);
      if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
        this.setState({ delay: this.props.quiz.delay || 0 });
        this.timer();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <Question {...this.props.quiz.question} />
        {this.props.quiz.answers ? (
          <ListAnswers
            quiz={this.props.quiz}
            setAnswerData={(value, i) => this.setState({ value, i, delay: 0 })}
            isDisabled={!!this.state.value || !this.state.delay}
          />
        ) : (
          <OpenedAnswer
            setAnswerData={(value, i) => this.setState({ value, i })}
          />
        )}
        <p style={{ visibility: !!this.state.delay ? 'visible' : 'hidden' }}>
          Осталось {this.state.delay} сек.
        </p>
        <ButtonFwd
          onAnswerSelected={() => {
            this.props.onAnswerSelected(this.state.value, this.state.i);
            this.setState({ value: '', i: null });
          }}
          isDisabled={!this.state.value && !!this.state.delay}
        />
      </>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
