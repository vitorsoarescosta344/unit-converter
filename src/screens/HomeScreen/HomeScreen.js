import {useState} from 'react';
import {Text, View} from 'react-native';
import ButtonKeyboard from '../../components/ButtonKeyboard';
import ButtonSpecial from '../../components/ButtonSpecial';
//import Button from '../../components/Button';
import {Picker} from '@react-native-picker/picker';
import Container from '../../layout/Container';

export default function HomeScreen() {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [operation, setOperation] = useState('');

  const units = ['km', 'm', 'dm', 'cm', 'mm'];

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
            <Text style={{fontSize: 40, fontWeight: '600'}}>{firstValue}</Text>
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
            <Text style={{fontSize: 40, fontWeight: '600'}}>{secondValue}</Text>
          </View>
        </View>
        {/* <View style={{flexWrap: 'wrap', flexDirection: 'row'}}></View> */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            <ButtonKeyboard text={'7'} />
            <ButtonKeyboard text={'8'} />
            <ButtonKeyboard text={'9'} />
            <ButtonKeyboard text={'4'} />
            <ButtonKeyboard text={'5'} />
            <ButtonKeyboard text={'6'} />
            <ButtonKeyboard text={'1'} />
            <ButtonKeyboard text={'2'} />
            <ButtonKeyboard text={'3'} />
            <ButtonKeyboard size={2} text={'0'} />
            <ButtonKeyboard text={','} />
          </View>
          <View>
            <ButtonSpecial text={`AC`} />
            <ButtonSpecial icon={'backspace'} />
          </View>
        </View>
      </Container>
    </>
  );
}
