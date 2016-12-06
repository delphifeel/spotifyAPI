import React, {PropTypes} from "react";

const getItemClassName = (isActive) => {
    let className = "component-selector-item";

    if (isActive) {
        className += " active";
    }

    return className;
};

const ComponentSelectorItem = ({id, isActive, onClick}) => {
    return (
        <div className={getItemClassName(isActive)} onClick={() => onClick(id)}>
            <span className="id">
                {id}
            </span>
        </div>
    );
};

const {string, bool, func} = PropTypes;

ComponentSelectorItem.propTypes = {
    id: string.isRequired,
    isActive: bool.isRequired,
    onClick: func.isRequired
};

export default ComponentSelectorItem;