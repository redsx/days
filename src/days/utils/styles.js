const styles =  (function(){
    function _border(direction = '') {
        return (width = 0, style = 'hidden', color = 'black') => {
            const styles = {};
            const borderWidth = `border${direction}Width`,
                borderColor = `border${direction}Color`,
                borderStyle = 'borderStyle';
            styles[borderWidth] = width;
            styles[borderColor] = color;
            styles[borderStyle] = style;
            return styles;
        }
    }
    function _setModel(start='', end='') {
        const _attr = ['Top','Left','Bottom','Right'];
        const attr = _attr.map(a => `${start}${start ? a : a.toLowerCase()}${end}`);
        return function(width = 0) {
            const style = {};
            let label = 0;
            for(let i=0; i<4; ++i){
                let val = arguments[label];
                if(!val){
                    label = 0;
                    val = arguments[label];
                }
                label++;
                style[attr[i]] = val;
            }
            return style;
        }
    }
    function layout(col='center',row='center'){
        return {
            alignItems: col,
            justifyContent: row,
        }
    }
    return {
        border: _border(),
        borderLeft: _border('Left'),
        borderRight: _border('Right'),
        borderTop: _border('Top'),
        borderBottom: _border('Bottom'),
        borderWidth: _setModel('border','Width'),
        padding: _setModel('padding'),
        margin: _setModel('margin'),
        layout: layout,
    }
})()

export default styles;