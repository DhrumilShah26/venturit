import React from 'react'
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements'

export default function AppliedTab({shifts}) {
    console.log(shifts)
    return (
        
        <View style={{ flex: 1 }}>
        {
            
        shifts.map((shift, index) => {
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
    )
}