import { render, fireEvent, screen , cleanup} from '@testing-library/react';
import react from 'react';
import App from './App';
import Menu from './components/menu'
import Start from './components/gameplay'
import Results from './components/results'
import Timer from './components/game_components/timer';
import LifeLines from './components/game_components/lifelines';
import Question from './components/game_components/questions';
import Buttons from './components/game_components/buttoncontroller';
import Answers from './components/game_components/answers';



test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText("Quiz game");
  expect(linkElement).toBeInTheDocument();
});



test('renders menu', () => {
  render(<Menu />);
  const linkElement = screen.getByText("start");
  expect(linkElement).toBeInTheDocument();
});

test('renders start', () => {
  render(<Start />);
  const linkElement = screen.getByText("Next Question");
  expect(linkElement).toBeInTheDocument();
});
