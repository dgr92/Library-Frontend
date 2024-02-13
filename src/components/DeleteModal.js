import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

export const DeleteModal = ({ visible, onCancel, onDelete }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}>
      <View>
        <Text>¿Estás seguro de que deseas eliminar el libro?</Text>
        <View>
          <Button title="Cancelar" onPress={onCancel} />
          <Button title="Eliminar" onPress={onDelete} />
        </View>
      </View>
    </Modal>
  );
};
