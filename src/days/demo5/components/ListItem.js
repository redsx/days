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
    TouchableOpacity,
} from 'react-native';
import Util from '../../utils/util';
import Styles from '../../utils/styles';
import Avatar from './Avatar';

function ListItem(props){
    const { 
        isSelect, 
        secondary, 
        time, 
        avatar,
        name,
        handleClick, 
        unreadCount,
    } = props;
    return (
        <View>
            <TouchableHighlight  onPress={handleClick} underlayColor='#f6fafb'>
                <View
                    style={[
                        styles.listItemContainer,
                        {backgroundColor: isSelect ? '#f6fafb' : '#fff'}
                    ]}
                >
                    <Avatar uri={avatar}/>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemNameText} numberOfLines={1}>{name}</Text>
                        <Text style={styles.listItemSecText} numberOfLines={1}>{secondary}</Text>
                    </View>
                    <View style={styles.listItemTime}>
                        <Text style={styles.listItemSecText}>{time}</Text>
                        <View style={styles.listItemUnread}>
                            <Text style={styles.listItemUnreadText}>{ unreadCount>99 ? 'n' : unreadCount }</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        ...Styles.layout('center'),
        ...Styles.padding(8, 10),
        ...Styles.borderBottom(1,'solid','#f3f3f3'),
        width: Util.size.width,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    listItemContent: {
        flex: 1,
        paddingLeft: 10,
        flexGrow: 1,
        flexDirection: 'column',
    },
    listItemTime: {
        ...Styles.layout('flex-end','center'),
    },
    listItemUnread: {
        ...Styles.layout('center'),
        backgroundColor: '#20b4da',
        marginTop: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        bottom: 0,
        right: 0,
    },
    listItemNameText: {
        color: 'black',
        lineHeight: 25,
        fontSize: 16,
    },
    listItemSecText: {
        color: '#666',
        fontSize: 14,
    },
   listItemUnreadText: {
       color: '#fff',
        fontSize: 12,
   }
});

export default ListItem;