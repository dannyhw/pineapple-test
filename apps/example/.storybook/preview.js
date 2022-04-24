import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export const decorators = [
  (Story) => (
    <NativeBaseProvider config={nativeBaseConfig}>
      <Story />
    </NativeBaseProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
