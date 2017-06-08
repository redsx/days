import React, { Component, PropTypes } from 'react';
import { 
    Platform,
    ListView,
    StyleSheet,
    StatusBar,
    Text,
    TouchableHighlight,
    View 
} from 'react-native';
import Util from '../utils/util';

const lab = {
    START: '启动',
    RESET: '复位',
    STOP: '停止',
    COUNT: '计次',
}
function getFigureStr(figure){
    if(figure > 9){
        return figure;
    }
    return `0${figure}`;
}
function getTimeStr(time){
    time = Math.round(time/10);
    const mill = time % 100;
    let sec = time === 0 ? 0 : parseInt(time/100);
    const min = time === 0 ? 0 : parseInt(sec/60);
    sec = sec - min*60;
    return `${getFigureStr(min)}:${getFigureStr(sec)}:${getFigureStr(mill)}`
}

class WatchFace extends Component {
    static propTypes = {
        sectionTime: PropTypes.number.isRequired,
        totalTime: PropTypes.number.isRequired,
    }
    constructor(props){
        super(props);
    }
    render(){
        const { sectionTime, totalTime } = this.props;
        return (
            <View style = {styles.watchFace}>
                <Text style = {styles.watchFaceSectionTime}>{getTimeStr(sectionTime)}</Text>
                <Text style = {styles.watchFaceTotalTime}>{getTimeStr(totalTime)}</Text>
            </View>
        );
    }
}
class WatchBtn extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
    }
    render(){
        const style = StyleSheet.flatten([styles.watchBtnText,{color: this.props.color}])
        return (
            <TouchableHighlight style = {styles.watchBtn} onPress = {this.props.handleClick} underlayColor='#f5f5f5'>
                <Text style = {style}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}
class WatchCtrl extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnLeft: lab.COUNT,
            btnRight: lab.START,
        }
    }
    _handleLeftClick() {
        if(this.state.btnLeft === lab.COUNT){ 
            this.props.handleRecord();
        } else {
            this.props.handleReset();
            this.setState({
                btnLeft: lab.COUNT,
                btnRight: lab.START,
            });
        }
    }
    _handleRightClick() {
        if(this.state.btnRight === lab.STOP){
            this.props.handleStop();
            this.setState({
                btnRight: lab.START,
                btnLeft: lab.RESET,
            });
        } else {
            this.props.handleStart();
            this.setState({btnRight: lab.STOP});
        }
    }
    _selectColor(text) {
        switch(text) {
            case lab.START: return '#599824';
            case lab.STOP: return '#bd3b21';
            default: return '#555';
        }
    }
    render(){
        const {btnLeft, btnRight} = this.state;
        return (
            <View style = {styles.watchCtrl}>
                <WatchBtn 
                    label = {btnLeft} 
                    handleClick = {() => this._handleLeftClick()} 
                    color = {this._selectColor(btnLeft)}
                />
                <WatchBtn 
                    label = {btnRight} 
                    handleClick = {() => this._handleRightClick()}
                    color = {this._selectColor(btnRight)}
                />
            </View>
        );
    }
}
class WatchRecord extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props);
    }
    render() {
        const _ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const ds = _ds.cloneWithRows(this.props.data);
        return (
            <ListView
                dataSource = {ds}
                enableEmptySections = {true}
                renderRow = {(row) =>
                    <View style = {styles.watchRecordItem}>
                        <Text>{`${lab.COUNT}${row.num}`}</Text>
                        <Text>{getTimeStr(row.time)}</Text>
                    </View>
                }
            ></ListView>
        );
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionTime: 0,
            totalTime: 0,
            data: [],
        }
        this.timer = null;
        this.count = 0;
    }
    _handleStart() {
        this.timestamp = Date.now();
        this.timer = setInterval(()=>{
            const { totalTime, sectionTime } = this.state;
            const timestamp = Date.now();
            const added = timestamp - this.timestamp;
            this.setState({
                totalTime:  totalTime + added,
                sectionTime: sectionTime + added,
            });
            this.timestamp = timestamp;
        },10);
    }
    _handleReset() {
        this.timer && clearInterval(this.timer);
        this.setState({
            sectionTime: 0,
            totalTime: 0,
            data: [],
        })
        this.count = 0;
    }
    _handleStop() {
        clearInterval(this.timer);
        this.timer = null;
    }
    _handleRecord() {
        if(this.timer){
            this.count++;
            this.state.data.push({
                num: this.count,
                time: this.state.totalTime,
            })
            this.setState({sectionTime: 0});
        }
    }
    render() {
        // this._handleStart();
        const { sectionTime, totalTime, data } = this.state;
        return (
            <View style = {styles.watchContainer}>
                <WatchFace  sectionTime = {sectionTime} totalTime = {totalTime}/>
                <WatchCtrl 
                    handleRecord = {()=>this._handleRecord()}
                    handleStart = {()=>this._handleStart()}
                    handleStop = {()=>this._handleStop()}
                    handleReset = {()=>this._handleReset()}
                />
                <WatchRecord data = {data}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    watchContainer: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    watchFace: {
        width: Util.size.width,
        height: 170,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottomWidth: 1, 
        borderBottomColor:"#ddd",
    },
    watchFaceSectionTime: {
        fontSize: 20,
        position: 'absolute',
        top: 20,
        right: 50,
        color: '#888',
    },
    watchFaceTotalTime: {
        fontSize: 70,
        color: '#222',
    },
    watchCtrl: {
        width: Util.size.width,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    watchBtn: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    watchBtnText: {
        fontSize: 14,
        color: '#555',
        backgroundColor:"transparent",
    },
    watchRecordItem: {
        width: Util.size.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1, 
        borderBottomColor:"#ddd",
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 15,
        paddingBottom: 8,
    },
})