import React from "react"
import Image from 'react-bootstrap/Image'

function getPicturePath(imgName) {
    const images = require.context('../images/', true);
    return images('./networks/' + imgName)
  }

const HoverPict = ({ pictBack, pictFront, url }) => (

    <div className='image'>
        <a href={url}>
            <div className="image__img">
                <Image src={getPicturePath(pictBack)} width="30px" className="mb-3 mt-3" />
            </div>
            <div className="image__overlay">
                <Image src={getPicturePath(pictFront)}   width="30px" className="mb-3 mt-3" />
            </div>
        </a>
    </div>
  
)

export default HoverPict
