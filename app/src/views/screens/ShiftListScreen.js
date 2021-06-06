import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import COLORS from '../../consts/color';
import STYLES from '../../styles';

const OpenShifts = [
    {
       name: 'General Hospital',
       startTime: '9:00 AM',
       endTime: '3:00 PM',
       date: "10/10/2019, Thu",
       location: 'Chicago, IL 60637',
       deptName: 'Surgery Department'
    },
    {
       name: 'General Hospital',
       startTime: '9:00 AM',
       endTime: '3:00 PM',
       date: "10/10/2019, Thu",
       location: 'Chicago, IL 60637',
       deptName: 'Surgery Department'
    }
    
   ]

const AppliedShifts = []

const handleApply = (index) => {
    var temp = OpenShifts[index]
    AppliedShifts.push(temp)
    OpenShifts.splice(index,1)
}

function Open() {
  return (
    <View style={{ flex: 1 }}>
      {
      OpenShifts.map((shift, index) => {
          return(
              <Card key={index}>
                  <Card.Title>{shift.name}</Card.Title>
                  <Text>{shift.startTime} - {shift.endTime} - {shift.date}</Text>
                  <Text>{shift.location}</Text>
                  <Text>{shift.deptName}</Text>
                  <Button title="Apply" onPress={()=>handleApply(index)}></Button>
              </Card>
          )
      })
      }
    </View>
  );
}

function Applied() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
      AppliedShifts.map((shift, index) => {
          return(
              <Card key={index}>
                  <Card.Title>{shift.name}</Card.Title>
                  <Text>{shift.startTime} - {shift.endTime} - {shift.date}</Text>
                  <Text>{shift.location}</Text>
                  <Text>{shift.deptName}</Text>
              </Card>
          )
      })
      }
    </View>
  );
}

function Accepted() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Accepted Shifts!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function ShiftListScreen({ navigation }) {
    /**useEffect(async()=>{
      try {
        await AsyncStorage.multiSet(
          [['1', {
            name: 'General Hospital',
            startTime: '9:00 AM',
            endTime: '3:00 PM',
            date: "10/10/2019, Thu",
            location: 'Chicago, IL 60637',
            deptName: 'Surgery Department'
         }], ['2', {
          name: 'Modern Hospital',
          startTime: '9:00 AM',
          endTime: '3:00 PM',
          date: "10/10/2019, Thu",
          location: 'Chicago, IL 60637',
          deptName: 'Surgery Department'
       }]], (errors) => {
         console.log(errors)
       }
        );
      } catch (error) {
        // Error saving data
      }
    })*/
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Open" component={Open} />
        <Tab.Screen name="Applied" component={Applied} />
        <Tab.Screen name="Accepted" component={Accepted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}