import React,{ Component, PropTypes } from 'react';
import { 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import Util from '../../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import DayItem from './DayItem';

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.dayListContainer}>
                {
                    this.props.list.map((item, index)=><DayItem info={item} key={`day-list-${index}`}/>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayListContainer: {
        width: Util.size.width,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    }
});