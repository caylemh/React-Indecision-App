// Instructors Solution
/*
let visible = false;

const changeText = () => {
    visible = !visible;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeText}>
                {visible ? "Hide Details" : "Show Details"}
            </button>
            {visible && (
                <div>
                    <p>Hey. Here is some details you can now see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
*/

// Challenge - Converting program to use React Components

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        //Setting up states
        this.state = {
            visible: false
        };
    }

    handleToggleVisibility() {
       this.setState((prevState) => {
           return {
               visible: !prevState.visible
           };
       });
    }

    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Here are some details that were hidden!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// My Challenge attempt
/*
let msg = "Show Details";
let msgDisplay = "";

const changeText = () => {
    if (msg === "Show Details") {
        msg = "Hide Details";
        msgDisplay="Here are some more details!";
        render();
    } else {
        msg="Show Details";
        msgDisplay = " ";
        render();
    };
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeText}>{msg}</button>
            <p>{msgDisplay}</p>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));   
};

render();
*/



