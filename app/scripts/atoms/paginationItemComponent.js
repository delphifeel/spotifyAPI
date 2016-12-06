import React, {PropTypes} from "react";

const PaginationItemComponent = ({pageNumber, isActive, onClick}) => {
    let className = "pagination-item-component";
    if (isActive) {
        className += " active";
    }

    return (
        <li onClick={onClick} className={className}>
            {pageNumber}
        </li>
    );
};

const {number, bool, func} = PropTypes;

PaginationItemComponent.propTypes = {
    pageNumber: number.isRequired,
    isActive: bool.isRequired,
    onClick: func
};

export default PaginationItemComponent;