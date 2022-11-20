import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ButtonKeyboard from '../../components/ButtonKeyboard';
import ButtonSpecial from '../../components/ButtonSpecial';
//import Button from '../../components/Button';
import {Picker} from '@react-native-picker/picker';
import Container from '../../layout/Container';
import {useTheme} from '@rneui/themed';

export default function HomeScreen() {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [editingValue, setEditingValue] = useState('first-value');

  const {theme} = useTheme();

  const units = ['km', 'm', 'dm', 'cm', 'mm'];

  function onKeyboardPress(value) {
    if (firstValue === '0' && editingValue === 'first-value') {
      setFirstValue(value);
    } else if (firstValue !== '0' && editingValue === 'first-value') {
      setFirstValue(old => setFirstValue(old + value));
    } else if (secondValue === '0' && editingValue === 'second-value') {
      setSecondValue(value);
    } else if (secondValue !== '0' && editingValue === 'second-value') {
      setSecondValue(old => setSecondValue(old + value));
    }
  }

  function allClear() {
    setFirstValue('0');
    setSecondValue('0');
  }

  return (
    <>
      <Container>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <View style={{width: 150, height: 40}}>
              <Picker
                mode="dropdown"
                selectedValue={'km'}
                onValueChange={v => setPronoum(v)}>
                {units.map((value, index) => (
                  <Picker.Item label={value} value={value} key={index} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity onPress={() => setEditingValue('first-value')}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: '600',
                  color:
                    editingValue === 'first-value'
                      ? theme.colors.warning
                      : theme.colors.black,
                }}>
                {firstValue}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <View style={{width: 150, height: 40}}>
              <Picker
                mode="dropdown"
                selectedValue={'m'}
                onValueChange={v => setPronoum(v)}>
                {units.map((value, index) => (
                  <Picker.Item label={value} value={value} key={index} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity onPress={() => setEditingValue('second-value')}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: '600',
                  color:
                    editingValue === 'second-value'
                      ? theme.colors.warning
                      : theme.colors.black,
                }}>
                {secondValue}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{flexWrap: 'wrap', flexDirection: 'row'}}></View> */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            <ButtonKeyboard
              text={'7'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'8'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'9'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'4'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'5'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'6'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'1'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'2'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'3'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              size={2}
              text={'0'}
              onPress={text => onKeyboardPress(text)}
            />
            <ButtonKeyboard
              text={'.'}
              onPress={text => onKeyboardPress(text)}
            />
          </View>
          <View>
            <ButtonSpecial text={`AC`} onPress={allClear} />
            <ButtonSpecial icon={'backspace'} />
          </View>
        </View>
      </Container>
    </>
  );
}
