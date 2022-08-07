import { useState } from 'react'
import Image from 'next/image'

import { buildUrl } from 'cloudinary-build-url'
import clsx from 'clsx'
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'

export const CustomImage = ({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  preview,
  style,
  aspect,
  mdx,
  noStyle,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'dyc1seeg9',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
    },
    quality: 1,
    rawTransformation: aspect ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}` : undefined,
  })

  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'dyc1seeg9',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  })

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined

  const LoadingIndicator = () => (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="flex animate-pulse space-x-2">
        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
      </div>
    </div>
  )

  return (
    <figure
      className={clsx(className, {
        'overflow-hidden rounded shadow-sm dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && width <= 800,
      })}
      style={{
        ...(mdx && width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio ? `${aspectRatio * 100}%` : `${(+height / +width) * 100}%`,
          cursor: preview ? 'zoom-in' : 'default',
        }}
        className="img-blur image-overlay"
        onClick={preview ? () => setIsOpen(true) : undefined}
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className="absolute top-0 left-0">
          <Image src={url} width={width} height={height} alt={alt} title={title || alt} />
        </div>
      </div>
      {isOpen && (
        <Lightbox imageTitle={alt} mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </figure>
  )
}

export default CustomImage
