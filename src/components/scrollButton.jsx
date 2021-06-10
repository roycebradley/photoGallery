import React from 'react';

function scrollbutton(){
    return(
        <a onScroll={verticalHeight}><img
            id="arrow"
            className="upArrow"
            onScroll={verticalHeight}
            style={{ display: isScrollDown ? 'block' : 'none' }}
            src="/photos/up-arrow.png" alt="hi" />
            </a>
    );
}