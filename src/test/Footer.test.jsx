import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer', () => {
  test('renders "Powered by" text and DH logo', () => {
    const { getByText, getByAltText } = render(<Footer />);
    
    // busca el texto "Powered by" en el componente renderizado
    const poweredByText = getByText('Powered by');
    expect(poweredByText).toBeInTheDocument();

    // busca la imagen con el alt "DH-logo" en el componente renderizado
    const dhLogo = getByAltText('DH-logo');
    expect(dhLogo).toBeInTheDocument();
    expect(dhLogo).toHaveAttribute('src', './images/DH.png');
  });
});
