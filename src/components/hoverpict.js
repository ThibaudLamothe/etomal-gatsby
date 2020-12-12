import React from "react"

function getPicturePath(imgName) {
    const images = require.context('../images/', true);
    return images('./networks/' + imgName)
  }

const HoverPict = ({ pictBack, pictFront, url, width=30}) => (
    <a href={url}>
        <img alt={pictBack}
            className="m-2"   
            width={width + 'px'}
            src= {getPicturePath(pictBack)} 
            // onMouseOver = {e => (e.currentTarget.src = getPicturePath(pictFront) )}
            // onMouseOut  = {e => (e.currentTarget.src = getPicturePath(pictBack ) )}
            // onFocus=""
            // onBlur=""
        /> 
    </a>
)

export default HoverPict
