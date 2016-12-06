import React, {PropTypes, Component} from "react";
import PaginationItemComponent from "scripts/atoms/paginationItemComponent";

const MAX_ITEMS = 10;

const prepareActivePages = (activeShift, pagesCount) => {
    let endPage;

    const startPage = activeShift * MAX_ITEMS + 1;
    const end = (activeShift + 1) * MAX_ITEMS;

    endPage = end >= pagesCount ? pagesCount : end;

    let activePages = [];
    for (let i = startPage; i <= endPage; i++) {
        activePages.push(i);
    }

    return activePages;
};

const isToLeftVisible = activeShift => activeShift !== 0;

const isToRightVisible = (activePages, pagesCount) => {
    const lastActivePage = activePages[activePages.length - 1];
    return lastActivePage < pagesCount;
};

const getActiveShiftByPageNumber = (activePageNumber) => {
    const div = (activePageNumber - 1) / MAX_ITEMS;
    return Math.floor(div);
};

class PaginationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePageNumber: props.activePageNumber,
            activeShift: getActiveShiftByPageNumber(props.activePageNumber)
        };
    }

    prepareRenderData(activeShift, pagesCount) {
        this.activePages = prepareActivePages(activeShift, pagesCount);
        this.toLeftVisible = isToLeftVisible(activeShift);
        this.toRightVisible = isToRightVisible(this.activePages, pagesCount);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activePageNumber !== this.props.activePageNumber) {
            this.setState({
                activePageNumber: nextProps.activePageNumber,
                activeShift: getActiveShiftByPageNumber(nextProps.activePageNumber)
            });
        }
    }

    setActivePage(activePageNumber) {
        if (this.state.activePageNumber === activePageNumber) {
            return;
        }

        const {onChange} = this.props;

        if (onChange) {
            onChange(activePageNumber);
        }

        this.setState({
            activePageNumber
        });
    }

    moveToRight() {
        this.setState({
            activeShift: this.state.activeShift + 1
        });
    }

    moveToLeft() {
        this.setState({
            activeShift: this.state.activeShift - 1
        });
    }

    render() {
        if (this.props.pagesCount < 2) {
            return null;
        }

        this.prepareRenderData(this.state.activeShift, this.props.pagesCount);

        return (
            <ul className="pagination-component">
                {
                    this.toLeftVisible &&
                    <li onClick={this.moveToLeft.bind(this)} className="to-left">
                    </li>
                }

                {
                    this.activePages.map((pageNumber) =>
                        <PaginationItemComponent
                            key={pageNumber}
                            pageNumber={pageNumber}
                            onClick={this.setActivePage.bind(this, pageNumber)}
                            isActive={pageNumber === this.state.activePageNumber}
                        />)
                }

                {
                    this.toRightVisible &&
                    <li onClick={this.moveToRight.bind(this)} className="to-right">
                    </li>
                }
            </ul>
        );
    }
}

const {number, func} = PropTypes;

PaginationComponent.propTypes = {
    pagesCount: number.isRequired,
    activePageNumber: number.isRequired,
    onChange: func
};

export default PaginationComponent;