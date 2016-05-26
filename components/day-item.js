// Import some code we need
import React, {
  Text,
  StyleSheet
} from 'react-native'

// Create our Component
class DayItem extends React.Component {
  // Style our Component
  fontSize() {
    return ( 60 - 6 * this.props.daysUntil )
  }
  fontWeight() {
    let weight = ( 8 - this.props.daysUntil )
    return ( weight * 100 ).toString()
  }
  lineHeight() {
    return ( 70 - 4 * this.props.daysUntil )
  }
  color() {
    let opacity = ( 1 / this.props.daysUntil )
    return `rgba(0, 0, 0, ${opacity})`
  }
  style() {
    return {
      fontSize: this.fontSize(),
      fontWeight: this.fontWeight(),
      lineHeight: this.lineHeight(),
      color: this.color()
    }
  }

  render() {
    return <Text style={this.style()}>
      { this.props.day }
    </Text>
  }
}

// Make this code available elsewhere
export default DayItem
