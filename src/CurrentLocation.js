import React, { Component } from 'react'
import { View, Text, Platform, SafeAreaView, StyleSheet } from 'react-native'

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoibmFtbG9uZ21vYmlsZSIsImEiOiJjazRsYmsyY2cwZnRuM2pvajluMDJvbjlzIn0.HYVfIvcuXzWqGyv5KQXnnA');

const IS_ANDROID = Platform.OS === 'android';


class CurrentLocation extends Component {
    async UNSAFE_componentWillMount() {
        if (IS_ANDROID) {
            const isGranted = await MapboxGL.requestAndroidLocationPermissions();
            this.setState({
                isAndroidPermissionGranted: isGranted,
                isFetchingAndroidPermission: false
            })
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            isAndroidPermissionGranted: false,
            isFetchingAndroidPermission: IS_ANDROID,
            coordinates: [[-122.084990, 37.426929]],
            showUserLocation: true,
            location: [-122.084990, 37.426929]
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <MapboxGL.MapView
                        ref={c => (this._map = c)}
                        zoomLevel={14}
                        centerCoordinate={this.state.coordinates[0]}
                        showUserLocation={true}
                        style={styles.container}
                        userTrackingMode={this.state.userSelectedUserTrackingMode}
                    >
                        <MapboxGL.Camera
                            zoomLevel={16}
                            animationMode={'flyTo'}
                            animationDuration={0}
                            ref={c => (this.camera = c)}
                            centerCoordinate={this.state.location}
                        >
                        </MapboxGL.Camera>
                        <MapboxGL.UserLocation>
                        </MapboxGL.UserLocation>
                    </MapboxGL.MapView>
                </View>
            </SafeAreaView>
        )
    }
}
export default CurrentLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
