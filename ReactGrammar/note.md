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


3.grammar03
  生命周期
  很多语言中都讲了关于生命周期。这可是决定生命的周始，有没有存在感的关键啊。
  生命周期，有生有死，有始有终，因果轮回，循环往复。（说多了）
  react中，主要说明的是 一个组件的生命周期。简单来讲就是：

  初始化 →  渲染  →  更新  →   （渲染）  →   销毁  。。。

  最常用的三个生命周期   
    1. componentWillMount
       相当于初始化，在render渲染动作执行前要干的事。
    2. componentDidMount
       在render渲染动作执行后马上要干的事。
    3. componentWillUnmount
       销毁，在组件从页面dom中移除时要干的事。


    1. componentWillUpdate
    2. componentDidUpdate
    存在期处于组件运行后的阶段，在组件更新时触发。

    存在期在组件创建时并未触发，而是在更新state时就会触发，从而更新视图。
    执行顺序是：更新前->渲染中->更新后。
    每次更新state，都会执行一遍这样的顺序，从而保证视图是最新的。