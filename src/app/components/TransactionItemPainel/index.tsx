import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../../styles/GlobalStyles';

function TransactionItemPainel() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="trash" size={20} color={GlobalStyles.colors.dark} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="pencil" size={20} color={GlobalStyles.colors.dark} />
      </TouchableOpacity>
    </View>
  );
}

export default TransactionItemPainel;
