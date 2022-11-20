import {createTheme, ThemeProvider} from '@rneui/themed';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
