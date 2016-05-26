import React, {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'

// Create a react Component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
})

// Style the React Component
var styles = StyleSheet.create({
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
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
})
