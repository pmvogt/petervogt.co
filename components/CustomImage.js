import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'

const CustomImage = ({ height, width, alt, title, url }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Image src={url} width={width} height={height} alt={alt} onClick={() => setIsOpen(true)} />
      {isOpen && <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />}
    </div>
  )
}

CustomImage.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.any,
}

export default CustomImage
