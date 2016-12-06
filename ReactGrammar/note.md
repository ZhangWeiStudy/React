1.grammar01
  ① htmlAndJs 混合编写
  ② props和省略号语法
  ③ this.props.children


2.grammar02
  ① state和refs
  state （状态机）
   React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
   React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
  // 引入state 来解决双向传递

  refs
   React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
   这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。