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

function Avatar(props){
    let { handlePress, uri, size } = props;
    size = size || 50;
    return (
        <View>
            <TouchableOpacity onPress={handlePress} activeOpacity={1}>
                <Image 
                    source={uri} 
                    style={[
                        styles.avatar,
                        {
                            width: size,
                            minWidth: size,
                            height: size,
                            borderRadius: size/2,
                        }
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        ...Styles.layout('center'),
    },
});

export default Avatar;