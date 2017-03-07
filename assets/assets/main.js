var React=require('react');
var ReactDOM=require('react-dom');
var User=require('./js/User.js');
ReactDOM.render(
	<div>helloWorld</div>,
	document.getElementById('output')
);

ReactDOM.render(
	<User />,
	document.getElementById('output2')
);