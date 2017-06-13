export default {
    textOverflow(text, num=10) {
        if(text.length>num){
            return `${text.slice(0,num)}...`;
        }
        return text;
    },
}