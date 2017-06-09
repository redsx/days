import React,{ Component, PropTypes } from 'react';
import { 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import Util from '../../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let { location, temp, tempState} = this.props.info;
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerLocation}>{location}</Text>
                <Text style={styles.headerTempState}>{tempState}</Text>
                <Text style={styles.headerTemp}>{temp}</Text>
                <Text style={styles.headerUnit}>°</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Util.size.width,
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingTop: 65,
        paddingBottom: 80,
        position: 'relative',
    },
    headerLocation: {
        color: '#fff',
        fontSize: 25,
    },
    headerTempState: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 10,
    },
    headerTemp: {
        color: '#fff',
        fontSize: 80,
        fontWeight: '100',
    },
    headerUnit: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '200',
        position: 'absolute',
        bottom: 140,
        right: 135,
    },
});