import {Icon, useTheme} from '@rneui/themed';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

export default function ButtonKeyboard({
  size,
  icon,
  operator,
  text,
  feature,
  onPress,
}) {
  const width = Dimensions.get('screen').width / 4;

  const {theme} = useTheme();

  return (
    <>
      <TouchableOpacity
        onPress={() => (feature || operator ? onPress() : onPress(text))}
        style={{
          width: size ? width * size : width,
          height: width,
          backgroundColor: operator
            ? theme.colors.warning
            : feature
            ? theme.colors.grey4
            : theme.colors.grey0,
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
