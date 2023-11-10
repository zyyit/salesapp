import React, { useState } from 'react';
import { View, Button, Modal } from 'react-native';

export default function MyScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Open Modal" onPress={openModal} />
      <Modal visible={isModalVisible} onRequestClose={closeModal}>
        {/* 模态框的内容 */ '模态内容'}

        <View>{/* 模态框中的其他组件 */}</View>
      </Modal>
    </View>
  );
}
