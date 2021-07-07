/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { motion } from 'framer-motion'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-purple-500" {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
