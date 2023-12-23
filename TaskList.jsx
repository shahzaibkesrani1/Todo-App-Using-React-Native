import React from 'react';
import { FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onEdit, editingIndex, onUpdate }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Task
          task={item}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
          isEditing={editingIndex === index}
          onUpdate={(updatedTask) => onUpdate(updatedTask)}
        />
      )}
    />
  );
};

export default TaskList;
