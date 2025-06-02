import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';

// Mock react-world-flags
jest.mock('react-world-flags', () => ({
  __esModule: true,
  default: ({ code, className }) => <img data-testid={`flag-${code}`} alt={`flag-${code}`} className={className} />,
}));

// The mock for next-i18next is in __mocks__/next-i18next.js
// We can spy on i18n.changeLanguage from the mock

describe('LanguageSwitcher', () => {
  const mockChangeLanguage = jest.fn();

  beforeEach(() => {
    // Reset the mock before each test
    mockChangeLanguage.mockClear();
    // Ensure our mock implementation is used
    (useTranslation as jest.Mock).mockImplementation(() => ({
      t: (key) => key,
      i18n: {
        language: 'en',
        changeLanguage: mockChangeLanguage,
        isInitialized: true,
      },
    }));
  });

  it('renders the current language flag and allows opening the dropdown', () => {
    render(<LanguageSwitcher />);
    // Initial language is 'en' (from mock)
    expect(screen.getByTestId('flag-US')).toBeInTheDocument(); // English flag (US)

    // Open dropdown
    const button = screen.getByRole('button', { name: /selecionar idioma/i });
    fireEvent.click(button);

    expect(screen.getByText('English')).toBeVisible();
    expect(screen.getByText('Español')).toBeVisible();
  });

  it('calls i18n.changeLanguage with the correct code when a language is selected', () => {
    render(<LanguageSwitcher />);

    const button = screen.getByRole('button', { name: /selecionar idioma/i });
    fireEvent.click(button); // Open dropdown

    // Select Spanish
    const spanishOption = screen.getByRole('button', { name: /Español/i });
    fireEvent.click(spanishOption);

    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
  });

  // Make the test function async
  it('updates the displayed flag when a language is selected and i18n state updates', async () => {
    // Initial state of the mock
    (useTranslation as jest.Mock).mockImplementation(() => ({
      t: (key) => key,
      i18n: {
        language: 'en', // Initial language
        changeLanguage: (langCode) => {
          // Simulate i18next changing language: update the mock for subsequent calls
          mockChangeLanguage(langCode); // Call the spy
          (useTranslation as jest.Mock).mockImplementation(() => ({
            t: (key) => key,
            i18n: {
              language: langCode, // language is now the new one
              changeLanguage: mockChangeLanguage, // this inner changeLanguage could also be the same self-updating one
              isInitialized: true,
            },
          }));
        },
        isInitialized: true,
      },
    }));

    const { rerender } = render(<LanguageSwitcher />);
    expect(screen.getByTestId('flag-US')).toBeInTheDocument(); // Initial flag is US

    const button = screen.getByRole('button', { name: /selecionar idioma/i });
    fireEvent.click(button); // Open dropdown

    // Select Spanish
    const spanishOption = screen.getByRole('button', { name: /Español/i });
    fireEvent.click(spanishOption); // This calls i18n.changeLanguage which updates the mock

    expect(mockChangeLanguage).toHaveBeenCalledWith('es');

    // Rerender the component to allow useEffect to pick up the new i18n.language from the updated mock
    rerender(<LanguageSwitcher />);

    await waitFor(() => {
      expect(screen.getByTestId('flag-ES')).toBeInTheDocument();
    });
  });

  it('synchronizes selected language if i18n.language changes externally', async () => {
    const initialMockI18n = {
      language: 'en',
      changeLanguage: mockChangeLanguage,
      isInitialized: true,
    };
    (useTranslation as jest.Mock).mockReturnValue({ t: key => key, i18n: initialMockI18n });

    const { rerender } = render(<LanguageSwitcher />);
    expect(screen.getByTestId('flag-US')).toBeInTheDocument(); // Initial: English

    // Simulate external change (e.g. language changed in another component)
    const updatedMockI18n = {
      language: 'pt', // Changed to Portuguese
      changeLanguage: mockChangeLanguage,
      isInitialized: true,
    };
    (useTranslation as jest.Mock).mockReturnValue({ t: key => key, i18n: updatedMockI18n });

    rerender(<LanguageSwitcher />); // Rerender with new i18n context from mock

    // The useEffect should pick up this change and update the flag
    await waitFor(() => {
      expect(screen.getByTestId('flag-BR')).toBeInTheDocument(); // Portuguese flag (BR)
    });
  });
});
