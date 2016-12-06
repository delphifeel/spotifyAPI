import React, {Component, PropTypes} from "react";
import ComponentSelectorItem from "scripts/molecules/componentSelectorItem";

const isItemActive = (itemId, activeItemId) => itemId === activeItemId;

class ComponentSelector extends Component {
    constructor(props) {
        super(props);

        if (props.values.length < 2) {
            console.error("Minimum 2 values required");
        }

        this.state = {
            activeIndex: 0
        };
    }

    onItemClick(itemId) {
        const {values} = this.props;
        const activeIndex = values.findIndex(value => value.id === itemId);

        this.setState({
            activeIndex
        });
    }

    render() {
        const onItemClick = this.onItemClick.bind(this);
        const {values} = this.props;
        const activeValue = values[this.state.activeIndex];
        const {id, component} = activeValue;

        return (
            <div className="component-selector">
                <div className="items">
                    {
                        values.map(value =>
                            <ComponentSelectorItem
                                key={value.id}
                                id={value.id}
                                isActive={isItemActive(value.id, id)}
                                onClick={onItemClick}/>)
                    }
                </div>

                <div className="container">
                    {component}
                </div>
            </div>
        );
    }
}

const {arrayOf, element, string, shape} = PropTypes;

ComponentSelector.propTypes = {
    values: arrayOf(
        shape({
            id: string.isRequired,
            component: element.isRequired
        })
    ).isRequired
};

export default ComponentSelector;