import React,{ Component, PropTypes } from 'react';
import { 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import Util from '../../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { time, max, min, icon} = this.props.info;
        return (
            <View style={styles.dayItemContainer}>
                <Text style={styles.dayItemText}>{time}</Text>
                {icon && <Icon name={icon} size={25} color={'#fff'}></Icon>}
                <View style={styles.dayNumContainer}>
                    <Text style={styles.dayItemText}>{max}</Text>
                    <Text style={styles.dayItemText}>{min}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        width: Util.size.width,
    },
    dayNumContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
         paddingTop: 10,
        paddingBottom: 10,
    },
    dayItemText: {
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
});