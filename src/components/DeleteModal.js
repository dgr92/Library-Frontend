import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { deleteModalStyle } from './styles/deleteModalStyle';

export const DeleteModal = ({ visible, onCancel, onDelete }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onCancel}>
      <View style={deleteModalStyle.centered}>
        <View style={deleteModalStyle.modal}>
          <Text style={deleteModalStyle.text}>¿Estás seguro de que deseas eliminar el libro?</Text>
          <View style={deleteModalStyle.buttons}>
            <Button title="Cancelar" onPress={onCancel} />
            <Button title="Eliminar" onPress={onDelete} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
