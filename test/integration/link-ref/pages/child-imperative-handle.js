import React from 'react'
import Link from 'next/link'

const Child = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}))

  return <a {...props} />
})

const Component = ({ href, ...rest }) => (
  <Link href={href}>
    <Child href={href} {...rest} />
  </Link>
)

export default function Home() {
  return <Component href="Somewhere">Click</Component>
}
