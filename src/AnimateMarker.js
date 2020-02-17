// import React, { Component } from 'react'
// import {
//     StyleSheet,
//     View,
//     Platform,
//     Dimensions,
//     SafeAreaView
// } from "react-native";
// import MapView, { Marker, AnimatedRegion } from "react-native-maps";
// import PubNubReact from "pubnub-react";

// const { width, height } = Dimensions.get("window");

// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// class AnimateMarker extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             latitude: LATITUDE,
//             longitude: LONGITUDE,
//             coordinate: new AnimatedRegion({
//                 latitude: LATITUDE,
//                 longitude: LONGITUDE,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0
//             })
//         }
//         this.pubnub = new PubNubReact({
//             publishKey: "X",
//             subscribeKey: "X"
//         });
//         this.pubnub.init(this);
//     }
//     componentDidMount() {
//         this.watchLocation();
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.props.latitude !== prevState.latitude) {
//             this.pubnub.publish({
//                 message: {
//                     latitude: this.state.latitude,
//                     longitude: this.state.longitude
//                 },
//                 channel: "location"
//             });
//         }
//     }
//     render() {

//         return (
//             <View>

//             </View>
//         )
//     }
// }

// export default AnimateMarker;