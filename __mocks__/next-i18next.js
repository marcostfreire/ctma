// __mocks__/next-i18next.js
const actualNextI18Next = jest.requireActual('next-i18next');

// Default mock implementation for i18n.changeLanguage
const mockChangeLanguageDefault = jest.fn((lang) => {
  // console.log(`Default mock i18n.changeLanguage called with: ${lang}`);
  return Promise.resolve();
});

// Create a Jest mock function for useTranslation
const mockUseTranslation = jest.fn((ns = 'common') => {
  // console.log(`Mock useTranslation called with namespace: ${ns}`);
  return {
    t: (key, options) => {
      if (options && typeof options.currentYear !== 'undefined') {
        return `${key}_${options.currentYear}`;
      }
      if (options && Object.keys(options).length > 0) {
        let translation = key;
        for (const optKey in options) {
          // A more robust replacement for {{var}} style placeholders
          const regex = new RegExp(`{{${optKey}}}`, 'g');
          translation = translation.replace(regex, options[optKey]);
        }
        return translation;
      }
      return key;
    },
    i18n: {
      language: 'en', // Default language for tests
      changeLanguage: mockChangeLanguageDefault, // Use the default mock here
      isInitialized: true,
      // Add any other i18n properties or methods your components might use
    },
  };
});

module.exports = {
  ...actualNextI18Next,
  useTranslation: mockUseTranslation, // Export the Jest mock function
  appWithTranslation: (Component) => Component,
  serverSideTranslations: jest.fn(() => Promise.resolve({})),
  // It might be useful to export the changeLanguage mock if tests need to spy on it directly
  // or clear it. However, it's part of the object returned by useTranslation().
  // Tests should get it from there: const { i18n } = useTranslation(); const spy = i18n.changeLanguage;
  // For the LanguageSwitcher test, we pass a fresh mock via mockImplementation.
};
