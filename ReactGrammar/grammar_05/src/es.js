import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//待增强的类
class MyTest extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<button onClick={this.show.bind(this,this.props)}>click</button>);
    }
}
//修饰函数，将类作为参数传入。
let IntervalEnhance = myComponent => {
//声明一个内部类。
// 注意，这个内部类不能有render方法，否则会将原类中的render覆盖。
    class ES6_Mixin extends myComponent {
        componentWillMount() {
            console.log("渲染前");
            this.timer = setInterval(function(){
                console.log('不断打印中.....');
            },500);
        }
       componentWillUnmount(){ 
             console.log("销毁啦！");
             clearInterval(this.timer);
       }
        show(obj){
            console.log(obj);
        }
    }
//修饰后返回
return ES6_Mixin;
};
var EnhancedTest = IntervalEnhance(MyTest);
ReactDOM.render(<EnhancedTest myname={"zhangwei"} />,document.getElementById('app'));
//10s后销毁
setTimeout(function(){
    ReactDOM.unmountComponentAtNode(document.getElementById("app"));
},10000);