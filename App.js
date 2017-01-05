/*jshint esversion :6*/

const React = require('react');

const Hello = function (props,context) {
  let instance = Object.create(React.Component.prototype);
  instance.props = props;
  instance.state  = {message : "saiful"};

  instance.click = function () {
    instance.setState({message:"bashar"});
    alert(instance.state.message);

  };

  instance.render = function (){
    return <button onClick={instance.click}>hi {instance.state.message} {instance.props.test} {instance.props.children}</button>
  };
  return instance;
};

export default Hello;
