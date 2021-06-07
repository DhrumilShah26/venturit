import React from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'
import COLORS from '../consts/color';
import STYLES from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AppliedTab({shifts}) {
    console.log(shifts)
    return (
        
        <View style={{ flex: 1 }}>
        {
            
        shifts.map((shift, index) => {
            return(
                <Card key={index}>
                    <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>{shift.name}</Text>
                    <Text style={{marginBottom:5}}>
                        <Icon
                        name="access-time"
                        color={COLORS.light}
                        size={20}
                        />
                          {shift.startTime} - {shift.endTime} - {shift.date}</Text>
                    <Text style={{marginBottom:5}}>
                        <Icon
                        name="location-pin"
                        color={COLORS.light}
                        size={20}
                        style={STYLES.inputIcon}
                        />
                        {shift.location}</Text>
                    <Text style={{marginBottom:5}}>
                        <Icon
                        name="local-hospital"
                        color={COLORS.light}
                        size={20}
                        style={STYLES.inputIcon}
                        />{shift.deptName}</Text>
                </Card>
            )
        })
      }
        
      </View>
    )
}