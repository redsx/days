import React,{ Component, PropTypes } from 'react';
import { 
    Platform,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View 
} from 'react-native';
import Swiper from 'react-native-swiper';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './components/Header';
import DayViwe from './components/DayViwe';
import DayItem from './components/DayItem';
import DayList from './components/DayList';
import TodayInfo from './components/TodayInfo';

export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Swiper
                dot={<View style={styles.dot}/>}
                activeDot={<View style={styles.activeDot}/>}
            >
                {data.map((day, index)=>(
                    <Image source={day.bgImg} style={styles.image} key={index}>
                        <ScrollView>
                            <Header info={day.headerInfo}/>
                            <DayItem info={day.info} />
                            <DayViwe info={day.dayInfo}/>
                            <DayList list={day.dayList}/>
                            <TodayInfo info={day.todayInfo}/>
                        </ScrollView>
                    </Image>
                ))}
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        height: Util.size.height,
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.2)', 
        width: 6, 
        height: 6, 
        borderRadius: 3, 
        marginLeft: 3,
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    },
    activeDot: {
        backgroundColor: 'rgba(255,255,255,0.5)', 
        width: 6, 
        height: 6, 
        borderRadius: 3, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    },
})



const data = [
    {
        bgImg: require('../img/w2.png'),
        headerInfo: { location: '费罗里', temp: '25', tempState: '大部晴朗'},
        info: {time: '星期五  今天', max: '10', min: '14'},
        dayInfo: [
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
        ],
        dayList: [
            {time: '星期五', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期六', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期七', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期一', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期二', max: '10', min: '14', icon: 'ios-cloudy-outline'},
            {time: '星期三', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期四', max: '10', min: '14', icon: 'ios-cloudy-outline'},
            {time: '星期五', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期六', max: '10', min: '14', icon: 'ios-cloudy'},
        ],
        todayInfo: '今天：空气质量指数：简称AQI，是定量描述空气质量状况的无量纲指数。（数据由环保部提供)',
    },
    {
        bgImg: require('../img/w3.png'),
        headerInfo: { location: '北京', temp: '37', tempState: '大部晴朗'},
        info: {time: '星期五  今天', max: '10', min: '14'},
        dayInfo: [
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
        ],
        dayList: [
            {time: '星期五', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期六', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期七', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期一', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期二', max: '10', min: '14', icon: 'ios-cloudy-outline'},
            {time: '星期三', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期四', max: '10', min: '14', icon: 'ios-cloudy-outline'},
            {time: '星期五', max: '10', min: '14', icon: 'ios-cloudy'},
            {time: '星期六', max: '10', min: '14', icon: 'ios-cloudy'},
        ],
        todayInfo: '今天：空气质量指数：简称AQI，是定量描述空气质量状况的无量纲指数。（数据由环保部提供)',
    }
]