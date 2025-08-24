// src/__tests__/TodoList.smoke.test.js
import { render } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('TodoList renders without crashing', () => {
  render(<TodoList />);
});
