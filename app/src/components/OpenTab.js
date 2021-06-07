import React from 'react'
import { Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function OpenTab({shifts, handleApply}) {
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
                    <Button title="Apply" onPress={()=>handleApply(shift.key)}></Button>
                </Card>
            )
        })
      }

      </View>
    )
}