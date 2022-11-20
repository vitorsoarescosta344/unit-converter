import {Icon, useTheme} from '@rneui/themed';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

export default function Button({size, icon, operator, text, feature, onPress}) {
  const width = Dimensions.get('screen').width / 4;

  const {theme} = useTheme();

  return (
    <>
      <TouchableOpacity
        onPress={() => (feature || operator ? onPress() : onPress(text))}
        style={{
          width: width,
          height: width * 2,
          backgroundColor: theme.colors.warning,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon !== undefined && (
          <Icon
            type="material-community"
            size={35}
            color={feature ? theme.colors.black : theme.colors.white}
            name={icon}
          />
        )}
        {text !== undefined && (
          <Text
            style={{
              fontSize: 35,
              color: feature ? theme.colors.black : theme.colors.white,
            }}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}
