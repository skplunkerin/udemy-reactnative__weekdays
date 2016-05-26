import React, {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Moment from 'moment'
import DayItem from './components/day-item'

// Create a react Component
class Weekdays extends React.Component{
  days() {
    let days = []
    for (let i=0; i<7; i++){
      let day = Moment().add(i, 'days').format('dddd')
      days.push(
        <DayItem key={i} day={day} daysUntil={i} />
      )
    }
    return days
  }

  render() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  }
}

// Style the React Component
const styles = StyleSheet.create({
  container: {
    flex: 1, // fill screen as much as possible, someting like width: 100%; height: 100%;
    // flexDirection: 'row', // swaps justifyContent to be width, alignItems to height
    // Weird way to center X/Y
    justifyContent: 'center', // move on Y axis (height)
    // justifyContent: 'flex-end', // bottom of height
    alignItems: 'center' // move on X axis (width)
    // alignItems: 'flex-end' // right of width
  }
})

// Show the react Component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays)
