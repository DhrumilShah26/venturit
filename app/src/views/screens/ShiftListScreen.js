import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OpenTab from '../../components/OpenTab';
import AppliedTab from '../../components/AppliedTab';
import Accepted from '../../components/AcceptedTab';

const Tab = createBottomTabNavigator();

export default function ShiftListScreen() {

  const [OpenShifts, setOpenShifts] = useState([
    {
      key: '1',
      name: 'General Hospital1',
      startTime: '9:00 AM',
      endTime: '3:00 PM',
      date: "10/10/2019, Thu",
      location: 'Windsor, ON N9A 5H5',
      deptName: 'Surgery Department'
   },
   {
      key: '2',
      name: 'General Hospital2',
      startTime: '10:00 AM',
      endTime: '4:00 PM',
      date: "11/10/2019, Fri",
      location: 'Toronto, ON 60637',
      deptName: 'ICU Department'
   },
   {
    key: '3',
    name: 'General Hospital3',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    date: "12/10/2019, Sat",
    location: 'Montreal, QC K5H 8L6',
    deptName: 'Operation Department'
  },
 {
  key: '4',
  name: 'General Hospital4',
  startTime: '8:00 AM',
  endTime: '2:00 PM',
  date: "13/10/2019, Sun",
  location: 'Vancouver, BC B5C 4H6',
  deptName: 'Medicine Department'
}
  ]);

  const [AppliedShifts, setAppliedShifts] = useState([])

  const handleApply = (key) => {

    const temp = OpenShifts.filter( shift => shift.key == key);

    //pushing open shift to apply shift
    setAppliedShifts(prevShifts => {
      return [
        temp[0],
        ...prevShifts
      ];
    });

    //removing shift from open shift
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
        <Tab.Screen name="Accepted" component={() => <Accepted/>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}