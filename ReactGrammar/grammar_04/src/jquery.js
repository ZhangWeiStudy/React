import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Mock from 'mockjs';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', age: '' };
    }
    //组件加载完毕后执行              
    componentDidMount() {
        $.getJSON(this.props.url, function (res) {
            this.setState({
                username: res['myName'],
                age: res['myAge']
            });
        }.bind(this));
    }
    render() {
        return (
            <div>
                {this.state.username}==={this.state.age}
            </div>
        );
    }
}

//------------------------------------Mock------------------------------------
//造数据
// @name：会自动拼接字符串造人名,非常便利！
// |1-100：表示这个范围的随机整数，121表示是数字类型，只要随便给一个数字就ok
Mock.mock('http://ajax.data.com', {
    'myName': 'zhangwei',
    'myAge|1-100': 121
});
//----------------------------------------------------------------------------

ReactDOM.render(
    <UserList url="http://ajax.data.com" />, document.getElementById('app')
);