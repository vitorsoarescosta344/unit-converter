import {useState} from 'react';
import {Text, View} from 'react-native';
import ButtonKeyboard from '../../components/ButtonKeyboard';
import ButtonSpecial from '../../components/ButtonSpecial';
//import Button from '../../components/Button';
import Container from '../../layout/Container';

export default function HomeScreen() {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [operation, setOperation] = useState('');

  function onKeyboardPress(value) {
    if (firstValue === '0' && operation === '') {
      setFirstValue(value);
    } else if (firstValue !== '0' && operation === '') {
      setFirstValue(old => setFirstValue(old + value));
    } else if (secondValue === '0' && operation !== '') {
      setSecondValue(value);
    } else if (secondValue !== '0' && operation !== '') {
      setSecondValue(old => setSecondValue(old + value));
    }
  }

  function clearHandler() {
    setFirstValue('0');
    setSecondValue('0');
    setOperation('');
  }

  function resultHandler() {
    switch (operation) {
      case '+':
        setFirstValue(parseFloat(firstValue) + parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '-':
        setFirstValue(parseFloat(firstValue) - parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '*':
        setFirstValue(parseFloat(firstValue) * parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '/':
        setFirstValue(parseFloat(firstValue) / parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;

      default:
        break;
    }
  }

  function setOperationHandler(op) {
    if (operation !== '') {
      resultHandler();
    } else {
      setOperation(op);
    }
  }

  return (
    <>
      <Container>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 40, fontWeight: '600'}}>{firstValue}</Text>
          <Text style={{fontSize: 40, fontWeight: '600'}}>{secondValue}</Text>
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
