const typography = {
  htmlFontSize: 16,
  h1: {
    fontSize: '2.5rem',
  },
  h2: {
    fontSize: '1.7rem',
  },
  h3: {
    fontSize: '1.4rem',
  },
  h4: {
    fontSize: '1.2rem',
  },
  h5: {
    fontSize: '1rem',
  },
  body1: {
    fontSize: '0.9rem',
  },
  body2: {
    fontSize: '0.75rem',
  }
};

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#1e6091ff',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  typography,
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#D9ED92',
      contrastText: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography,
};
