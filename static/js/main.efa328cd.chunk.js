(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),s=n(6),l=n(1),i=n(2),m=n(4),u=n(3),d=n(5),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={todo:""},n.inputRef=o.a.createRef(),n.submitHandler=function(e){e.preventDefault(),n.props.addTodoItem(n.state.todo),n.setState({todo:""})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.submitHandler},o.a.createElement("div",{className:"control"},o.a.createElement("input",{type:"text",className:"input",value:this.state.todo,onChange:function(t){return e.setState({todo:t.target.value})},ref:this.inputRef,placeholder:"Add todo item..."})))}}]),t}(a.Component),f=function(e){var t=e.items,n=e.remove,r=e.toggleCompleted,c=o.a.createElement("div",{className:"content"},o.a.createElement("ul",{style:{listStyle:"none"}},t.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",onChange:function(){return r(e.id,e.todo)}})," \xa0",o.a.createElement("span",{className:"is-size-5",style:{textDecoration:e.completed?"line-through":"none"}},e.todo)),o.a.createElement("button",{className:"button is-danger is-small is-rounded is-outlined",style:{marginLeft:".5rem"},onClick:function(){return n(e.id)}},"Delete \xd7"))})));return 0===t.length&&(c=o.a.createElement("div",{className:"section"},"Your todo list is empty.")),o.a.createElement(a.Fragment,null,c)},h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todoItems:[],serialNum:0},n.addTodoItem=function(e){var t=[].concat(Object(s.a)(n.state.todoItems),[{id:n.state.serialNum+1,todo:e,completed:!1}]);n.setState(function(e){return{todoItems:t,serialNum:e.serialNum+1}})},n.removeTodoItem=function(e){var t=Object(s.a)(n.state.todoItems).filter(function(t){return t.id!==e});n.setState({todoItems:t})},n.toggleCompleted=function(e){n.setState({todoItems:n.state.todoItems.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},"Todo List"),o.a.createElement(p,{addTodoItem:this.addTodoItem}),o.a.createElement(f,{items:this.state.todoItems,remove:this.removeTodoItem,toggleCompleted:this.toggleCompleted})))}}]),t}(a.Component);c.a.render(o.a.createElement(h,null),document.querySelector("#root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.efa328cd.chunk.js.map