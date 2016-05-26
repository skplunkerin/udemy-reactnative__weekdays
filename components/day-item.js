// Import some code we need
import React, {
  Text,
  StyleSheet
} from 'react-native'

// Create our Component
class DayItem extends React.Component {
  render() {
    return <Text style={styles.day}>
      { this.props.day }
    </Text>
  }
}

// Style our Component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})

// Make this code available elsewhere
export default DayItem
