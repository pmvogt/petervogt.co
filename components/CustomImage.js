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

  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'dyc1seeg9',
    },
    fetch_format: 'auto',
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  })

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined

  const LoadingIndicator = () => (
    <div className="min-w-screen flex min-h-screen items-center justify-center rounded-sm bg-slate-900 p-8">
      <div className="flex animate-pulse space-x-4">
        <div className="h-6 w-6 rounded-full bg-rose-500"></div>
        <div className="h-6 w-6 rounded-full bg-mint-500"></div>
        <div className="h-6 w-6 rounded-full bg-rose-500"></div>
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
        onClick={preview ? () => setIsOpen(true) : undefined}
      >
        <div className="absolute left-0 top-0">
          <Image src={url} width={width} height={height} alt={alt} title={title || alt} />
        </div>
      </div>
      {isOpen && (
        <Lightbox
          loader={<LoadingIndicator />}
          imageTitle={alt}
          mainSrc={url}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </figure>
  )
}

export default CustomImage
