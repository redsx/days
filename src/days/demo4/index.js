import React, { Component, PropTypes } from 'react';
import { 
    Platform,
    StyleSheet,
    StatusBar,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import PhotoView from 'react-native-photo-view';
import Swiper from 'react-native-swiper';
import Util from '../utils/util';

const imgArr = [
    require('../img/tumblr-audio.png'),
    require('../img/tumblr-chat.png'),
    require('../img/tumblr-link.png'),
    require('../img/tumblr-photo.png'),
    require('../img/tumblr-quote.png'),
    require('../img/tumblr-text.png')
]

class ImageSlide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Swiper index={this.props.index}>
                {
                    this.props.imageList.map((img, i) =>  
                    <View style={styles.slideItemContainer} key={i}>
                        <View style={styles.slideBack}>
                            <TouchableOpacity  onPress={this.props.handlePress} >
                            <Text style={styles.slideBackText}>{'< back'}</Text>
                            </TouchableOpacity>
                        </View>
                        <PhotoView
                            source={img}
                            resizeMode='contain'
                            androidScaleType='center'
                            minimumZoomScale={0.5}
                            maximumZoomScale={3}
                            style={styles.slideItem}
                        />
                    </View>
                    )
                }
            </Swiper>
        );
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSlider: true,
            index: 0,
        }
    }
    toggleSlider(state, index=0){
        console.log('showSlider: ', state);
        this.setState({
            showSlider: state,
            index,
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                {
                    this.state.showSlider && <ImageSlide 
                        imageList={imgArr} 
                        index={this.state.index}
                        handlePress={() => this.toggleSlider(false)}
                    />
                    }
                {
                    imgArr.map((img, index) => 
                        <View style={styles.itemContainer} key={`image-${index}`}>
                            <TouchableOpacity onPress={() => this.toggleSlider(true, index)}>
                                <Image source={img} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    )
                }
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    imageContainer: {
        width: Util.size.width,
        height: Util.size.height,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        width: Util.size.width/2,
        height: Util.size.width/2,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Util.size.width/3,
        height: Util.size.width/3,
    },
    slideBack: {
        width: Util.size.width,
        paddingTop: 20,
        paddingLeft: 10,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    slideBackText: {
        color: '#50a0f8',
        fontSize: 16,
    },
    slideItemContainer: {
        width: Util.size.width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    slideItem: {
        width: Util.size.width,
        height: Util.size.height,
    },
});