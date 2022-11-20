import {useTheme} from '@rneui/themed';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Container({children}) {
  const {theme} = useTheme();

  return (
    <>
      <SafeAreaProvider
        style={{flex: 1, backgroundColor: theme.colors.background}}>
        <StatusBar backgroundColor={theme.colors.background} />
        {children}
      </SafeAreaProvider>
    </>
  );
}
