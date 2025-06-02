import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import { useTranslation } from 'next-i18next';

// Mock for next-i18next is in __mocks__/next-i18next.js
// We will rely on its t function returning the key or a modified key for testing

describe('Footer', () => {
  const currentYear = new Date().getFullYear();

  it('renders the copyright text with the current year, translated', () => {
    // The mock t function will return 'footer.copyright_YYYY'
    render(<Footer />);

    // Check if the text, as transformed by the mock, is present
    // The mock useTranslation returns t: (key, options) => `${key}_${options.currentYear}`
    const expectedText = `footer.copyright_${currentYear}`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('renders other static text and links (sample check)', () => {
    render(<Footer />);
    // Example: Check for a link. Text might be language-dependent if not using t() for them.
    // For this test, assuming "Links Úteis" is hardcoded or its key is rendered by mock t()
    // If "Links Úteis" itself was translated, we'd use its key.
    // Given the current Footer, "Links Úteis" is hardcoded.
    expect(screen.getByText('Links Úteis')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument(); // This is a Link
  });

  it('renders social media icons', () => {
    render(<Footer />);
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
  });


  // Test with a different "language" to see if the mock behaves as expected
  it('renders translated copyright text correctly when i18n.language changes (simulated by mock)', () => {
    (useTranslation as jest.Mock).mockImplementationOnce(() => ({
      t: (key, options) => {
        // Simulate a different language's translation, e.g., by appending lang code
        return `${key}_${options.currentYear}_es`;
      },
      i18n: {
        language: 'es', // Simulate Spanish
        changeLanguage: jest.fn(),
        isInitialized: true,
      },
    }));

    render(<Footer />);
    const expectedText = `footer.copyright_${currentYear}_es`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
