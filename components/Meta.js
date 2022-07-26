import Head from 'next/head'

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="react native, blog, John Doe, tutorial, react navigation" />
    </Head>
  )
}

export default Meta

Meta.defaultProps = {
  title: 'Peter Vogt - Portfolio & Personal Site',
  bg: '../../public/mesh-portrait-5.svg',
  darkBg: '../../public/mesh-portrait-1.png',
}
