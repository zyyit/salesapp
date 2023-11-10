import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export const eventTest3 = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    const newComponent = <Text key={components.length}>New Component</Text>;
    setComponents([...components, newComponent]);
  };

  return (
    <View style={{ width: 200, height: 200, marginTop: 100 }}>
      <Button
        title="Add Component"
        onPress={addComponent}
        style={{ width: 200, height: 200, marginTop: 100 }}
      />
      {components.map(component => component)}
    </View>
  );
};
