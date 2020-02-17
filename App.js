// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container} accessible={true}>
//         <MapView
//           // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//           style={styles.map}
//           initialregion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.015,
//             longitudeDelta: 0.0121,
//           }}
//         >
//         </MapView>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     // height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//     // height: 400,
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//   },
// });

import React, { Component } from 'react';
import CurrentLocation from './src/CurrentLocation'

class App extends Component {
  render() {
    return (
      <CurrentLocation></CurrentLocation>
    )
  }
}
export default App;
