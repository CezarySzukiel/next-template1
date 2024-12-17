export default {
  testEnvironment: 'jsdom', // Potrzebne do testowania komponentów React
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Przekształć pliki JS/JSX za pomocą Babel
  },
  extensionsToTreatAsEsm: ['.jsx'], // Traktuj pliki `.jsx` jako moduły ES
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy', // Umożliwia mockowanie CSS
  },
};