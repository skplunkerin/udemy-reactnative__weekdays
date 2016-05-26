import React, {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'
import DayItem from './components/day-item'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Create a react Component
class Weekdays extends React.Component{
  days() {
    return days.map( (day, key) => { return <DayItem key={key} day={day} /> } )
  }
  render() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
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
