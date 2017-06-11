import React, { Component } from 'react';
import { 
    Platform,
    Animated,
    Easing,
    Image,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    TabBarIOS,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View 
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityAnim: new Animated.Value(1),
            scaleAnim: new Animated.Value(1),
            rotateAnim: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(
            this.state.scaleAnim,
            {
                toValue: 50,
                duration: 1200,
                delay: 1000,
                easing: Easing.elastic(2),
            }
        )
        .start();
        Animated.timing(
            this.state.opacityAnim,
            {
                toValue: 0,
                duration: 1800,
                delay: 1200,
                easing: Easing.elastic(1),
            }
        )
        .start();
        Animated.timing(
            this.state.rotateAnim,
            {
                toValue: 1,
                duration: 800,
                delay: 1000,
            }
        )
        .start();
    }

    render(){
        const { opacityAnim, scaleAnim, rotateAnim } = this.state;
        console.log(rotateAnim);
        return (
            <View style={[styles.entranceContainer,{backgroundColor: '#fff'}]}>
            <Animated.View style={[styles.entranceContainer, {opacity: opacityAnim}]}>
                <AnimatedIcon 
                    size={60}  
                    name='logo-twitter' 
                    color='#fff' 
                    style={{
                        transform: [{scale: scaleAnim}],
                    }}
                />
            </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    entranceContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Util.size.width,
        height: Util.size.height,
        backgroundColor: '#1b95e0',
        alignItems: 'center',
        justifyContent: 'center',
    }
});