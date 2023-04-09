import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { ContextGlobal } from '../Components/utils/global.context';

describe('Navbar', () => {
  const context = { state: { theme: 'light' }, dispatch: jest.fn() };

  beforeEach(() => {
    render(
      <Router>
        <ContextGlobal.Provider value={context}>
          <Navbar />
        </ContextGlobal.Provider>
      </Router>
    );
  });

  test('should render three links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  test('should render a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should change theme on button click', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(context.dispatch).toHaveBeenCalledWith({
      type: 'SET_THEME',
      payload: 'dark',
    });
  });
});