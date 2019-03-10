import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { Card } from './Card';

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    // position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

export const Confirm = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <Card>
          <CardSection>
            <Text style={styles.textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </Card>
      </View>
    </Modal>
  );
};
