import React from "react";

const PageButton = ({jumpTo, page, currentPage}) => {

    let button;
    if (page === currentPage) {
        button = <button disabled>{page}</button>
    } else {
        button = <button onClick={() => jumpTo(page)} className="active-button">{page}</button>
    }

    return (
        <div>
        {button}
        </div>
    )
}

export default PageButton;
