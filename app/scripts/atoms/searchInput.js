import React, {Component, PropTypes} from "react";

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.inputChange.bind(this);

        this.defaultConfig = {
            placeholder: "Start typing to search"
        };
    }

    inputChange(event) {
        const {value} = event.target;

        const {search} = this.props;

        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
        }

        this.timeoutHandler = setTimeout(
            () => search(value),
            200
        );
    }

    render() {
        const placeholder = this.props.placeholder || this.defaultConfig.placeholder;

        return (
            <div className="search-input">
                <input onChange={this.onInputChange} placeholder={placeholder}/>
            </div>
        );
    }
}

const {func, string} = PropTypes;

SearchInput.propTypes = {
    search: func.isRequired,
    placeholder: string
};



export default SearchInput;