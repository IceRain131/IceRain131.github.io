/** @jsx React.DOM */
var TimerExample = React.createClass({

    getInitialState: function(){
        return { elapsed: 0 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {       
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);    
        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
});


React.renderComponent(
    <TimerExample start={Date.now()} />,
    document.body
);