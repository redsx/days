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
        return (
            <View style={styles.dayListContainer}>
                <Text style={styles.text}>{this.props.info}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayListContainer: {
        width: Util.size.width,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        lineHeight: 16,
        color: '#fff',
    }
});