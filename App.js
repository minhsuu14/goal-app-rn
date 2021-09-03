import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddNew, setIsAddNew] =useState(false);

  const onPressButton = (enterGoal) => {
      setGoals([...goals, {id : Math.random().toString(), value : enterGoal}]);
      setIsAddNew(false);
  }
  const pressDelete = (goalId) => {
    return setGoals((goals) => goals.filter(goal => {
      return goal.id !== goalId
    }));
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={()=> setIsAddNew(true)} />
      <GoalInput onPressButton={onPressButton} visible={isAddNew} onPressCancel={()=>setIsAddNew(false)} />
      <FlatList 
        keyExtractor={goals.id}
        data={goals} 
        renderItem={(itemData)=>{
          return(<GoalItem itemData={itemData} id={itemData.item.id} pressDelete={pressDelete}/>);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    padding : 40
  },
})
