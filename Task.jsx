import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ task, onDelete, onEdit, isEditing, onUpdate }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(editedTask);
  };

  return (
    <View style={styles.task}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedTask}
          onChangeText={(text) => setEditedTask(text)}
        />
      ) : (
        <Text>{task}</Text>
      )}
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={isEditing ? handleUpdate : onEdit}>
        <Text style={styles.edit}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
  },
  delete: {
    color: 'red',
    marginLeft: 8,
  },
  edit: {
    color: 'blue',
    marginLeft: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    fontSize: 16,
  },
});

export default Task;
