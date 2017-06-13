import React,{ Component } from 'react';
import { 
    Platform,
    Image,
    StyleSheet,
    StatusBar,
    Text,
    TouchableHighlight,
    PanResponder,
    View,
    processColor,
} from 'react-native';
import Util from '../utils/util';
import Styles from '../utils/styles';
import Swipeout from 'react-native-swipeout';
import ListItem from './components/ListItem';

const { width, height } = Util.size;

class SwipeItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const swipeoutBtns = [
            {
                text: '设为正宫',
                backgroundColor: '#ec971f',
            },
            {
                text: '分手',
                backgroundColor: '#c9302c',
            }
        ];
        return (
            <View>
                <Swipeout 
                    style={styles.swipeContaier}
                    right= {swipeoutBtns}
                >
                    <ListItem
                        isSelect={true} 
                        secondary={'test'}
                        time={'3:53 pm'}
                        name={'zz的小女朋友1'}
                        unreadCount={100}
                        avatar = {require('../img/avatar0.png')}
                    />
                </Swipeout>
                <Swipeout 
                    style={styles.swipeContaier}
                    right= {swipeoutBtns}
                >
                    <ListItem
                        isSelect={false} 
                        secondary={'zz的小女朋友zz的小女朋友zz的小女朋友zz的小女朋友zz的小女朋友zz的小女'}
                        time={'3:53 pm'}
                        name={'zz的小女朋友2'}
                        unreadCount={59}
                        avatar = {require('../img/avatar7.png')}
                    />
                </Swipeout>
                <Swipeout 
                    style={styles.swipeContaier}
                    right= {swipeoutBtns}
                >
                    <ListItem
                        isSelect={false} 
                        secondary={'zz的小女朋友zz的小女朋友zz的小女朋友zz的小女朋友zz的小女朋友zz的小女'}
                        time={'3:53 pm'}
                        name={'zz的小女朋友3'}
                        unreadCount={10}
                        avatar = {require('../img/avatar7.png')}
                    />
                </Swipeout>
            </View> 
        );
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.listContainer}>
                <SwipeItem />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        ...Styles.layout('flex-start','flex-start'),
        width,
        height,
        marginTop: 50,
    },
    swipeContaier: {
        ...Styles.layout('center'),
    },
});