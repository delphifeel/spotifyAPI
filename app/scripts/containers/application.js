import React, {Component, PropTypes} from "react";

class Application extends Component {
    render() {
        return (
            <div className="application">
                {this.props.children}
            </div>
        );
    }
}

const {element} = PropTypes;

Application.propTypes = {
    children: element
};

export default Application;