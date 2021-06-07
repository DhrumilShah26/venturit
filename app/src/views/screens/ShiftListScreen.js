import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Icon } from 'react-native-elements'
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import OpenTab from '../../components/OpenTab';
import AppliedTab from '../../components/AppliedTab';

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


function Open() {

  return (
    <View style={{ flex: 1 }}>
      {/*
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
    */}
    
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

export default function ShiftListScreen() {

  const [OpenShifts, setOpenShifts] = useState([
    {
      key: '1',
      name: 'General Hospital1',
      startTime: '9:00 AM',
      endTime: '3:00 PM',
      date: "10/10/2019, Thu",
      location: 'Chicago, IL 60637',
      deptName: 'Surgery Department'
   },
   {
      key: '2',
      name: 'General Hospital2',
      startTime: '9:00 AM',
      endTime: '3:00 PM',
      date: "10/10/2019, Thu",
      location: 'Chicago, IL 60637',
      deptName: 'Surgery Department'
   }
  ]);

  const [AppliedShifts, setAppliedShifts] = useState([])

  const handleApply = (key) => {

    const temp = OpenShifts.filter( shift => shift.key == key);

    setAppliedShifts(prevShifts => {
      return [
        temp[0],
        ...prevShifts
      ];
    });

    setOpenShifts(prevShifts => {
      return prevShifts.filter(shift => shift.key != key);
    });
    
  }

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Open" component={()=><OpenTab shifts={OpenShifts} handleApply={handleApply}/>} />
        <Tab.Screen name="Applied" component={()=><AppliedTab shifts={AppliedShifts}/>} />
        <Tab.Screen name="Accepted" component={Accepted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}