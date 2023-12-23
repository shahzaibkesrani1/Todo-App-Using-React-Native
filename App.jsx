import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
  };

  const handleUpdateTask = (updatedTask) => {
    const newTasks = [...tasks];
    newTasks[editingIndex] = updatedTask;
    setTasks(newTasks);
    setEditingIndex(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>To-Do App</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <AddTask onAdd={handleAddTask} />
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
          editingIndex={editingIndex}
          onUpdate={handleUpdateTask}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed by Shahzaib Kesrani</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
