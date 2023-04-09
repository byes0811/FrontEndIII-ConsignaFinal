import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Components/Form';

describe('Form', () => {
  test('should render the form correctly', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre completo:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('should show an error message when the form is submitted with invalid data', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre completo:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john.com' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Por favor verifique su información nuevamente')).toBeInTheDocument();
  });

  test("should show a success message when the form is submitted with valid data", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/enviar/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.click(submitButton);

    const successMessage = screen.queryByText(/gracias/i);
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent(
      "Gracias John Doe, te contactaremos cuanto antes vía mail."
    );
  });
});
