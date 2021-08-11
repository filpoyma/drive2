import React, { Component } from 'react';
import tests from '../api/tests';
import Quiz from './Quiz';
import { Grid } from 'semantic-ui-react';
import Question from '../components/Question';

class RaccoonsTest extends Component {
  constructor(props) {
    super(props);
    this.quiz = [];
    this.state = {
      question: {
        content: '',
        img: '',
      },
      answers: [],
      delay: 0,
      correctAnswer: 0,
      questionsCount: 0,
      userAnswers: [],
      isFin: false,
    };
  }

  componentDidMount() {
    this.quiz = tests.raccoonsTest;
    this.setState({
      ...this.quiz[0],
    });
  }

  onAnswerSelected = (value, index) => {
    this.setUserAnswer(value, index);
    if (this.state.questionsCount < this.quiz.length - 1)
      this.setNextQuestion();
    else this.setState({ isFin: true });
  };

  setUserAnswer = (answer) => {
    this.setState((state) => ({
      userAnswers: [
        ...state.userAnswers,
        {
          question: this.quiz[this.state.questionsCount].question.content,
          answer: answer,
          isCorrect: this.state.correctAnswer === answer,
        },
      ],
    }));
  };

  setNextQuestion() {
    let counter = this.state.questionsCount + 1;
    this.setState({
      questionsCount: counter,
      ...this.quiz[counter],
      answers: this.quiz[counter].answers,
    });
  }

  renderQuiz() {
    return <Quiz quiz={this.state} onAnswerSelected={this.onAnswerSelected} />;
  }

  renderResult() {
    let correctAnswers = 0;
    this.state.userAnswers.forEach((answers) => {
      answers.isCorrect && ++correctAnswers;
    });
    const userMessage = `Поздравляем! Вы правильно ответили на ${correctAnswers} вопросов из ${this.quiz.length}`;
    const img = 'images/raccoon-6.jpg';
    return <Question content={userMessage} img={img} />;
  }

  render() {
    console.log('state>>>>', this.state);
    return (
      <Grid>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            {this.state.isFin ? this.renderResult() : this.renderQuiz()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default RaccoonsTest;
