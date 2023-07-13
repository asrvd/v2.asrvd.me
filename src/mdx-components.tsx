import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
} from 'react'

const BlogLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, children }) => {
  if (href) {
    if (href.startsWith('#')) return <a href={href}>{children}</a>
    else if (href.startsWith('/')) return <Link href={href}>{children}</Link>
  }

  return (
    <a target='_blank' rel='noreferrer' href={href}>
      {children}
    </a>
  )
}

const components = { a: BlogLink }
type MdxProps = { code: string }

const MDX: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components }} />
}

export default MDX