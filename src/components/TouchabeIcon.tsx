import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
}

const TouchabeIcon = ({name}: Props) => {
  const {changeFavIcon} = useContext(AuthContext);

  return (
    <Icon
      name={name}
      size={50}
      color="#900"
      onPress={() => changeFavIcon(name)}
    />
  );
};

export default TouchabeIcon;
