import React,{ Component, PropTypes } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    View 
} from 'react-native';
import Util from '../../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';

const dayInfo = [
    {time: '1时', icon: 'ios-cloudy', temp: '15°'},
    {time: '2时', icon: 'ios-cloudy', temp: '18°'},
    {time: '3时', icon: 'ios-cloudy-night-outline', temp: '13°'},
    {time: '4时', icon: 'ios-cloudy', temp: '15°'},
    {time: '5时', icon: 'ios-cloudy-outline', temp: '15°'},
    {time: '6时', icon: 'ios-cloudy', temp: '15°'},
    {time: '7时', icon: 'ios-cloudy-night', temp: '16°'},
    {time: '8时', icon: 'ios-cloudy', temp: '17°'},
    {time: '9时', icon: 'ios-cloudy', temp: '15°'},
    {time: '10时', icon: 'ios-cloudy', temp: '12°'},
    {time: '11时', icon: 'ios-cloudy', temp: '13°'},
    {time: '12时', icon: 'ios-cloudy', temp: '14°'},
    {time: '13时', icon: 'ios-cloudy', temp: '15°'},
    {time: '14时', icon: 'ios-cloudy', temp: '16°'},
    {time: '15时', icon: 'ios-cloudy', temp: '13°'},
    {time: '16时', icon: 'ios-cloudy', temp: '12°'},
    {time: '17时', icon: 'ios-cloudy', temp: '10°'},
]

class Item extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { temp, icon, time } = this.props.info;
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{time}</Text>
                <Icon name={icon} size={25} color={'#fff'}></Icon>
                <Text style={styles.itemText}>{temp}</Text>
            </View>
        );
    }
}

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const dayInfo = this.props.info;
        return (
            <View style={styles.dayContainer}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    { dayInfo.map((info) => <Item info={info} key={info.time}/>) }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Util.size.width,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    scrollView: {
        flexDirection: 'row',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemText: {
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 30,
    },
});