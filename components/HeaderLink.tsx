import Link from 'next/link'

type HeaderLinkProps = {
  label: string;
  href: string;
}

const HeaderLink = (props: HeaderLinkProps) => {
  const {label, href} = props;
  return <Link className="text-3xl mx-3" href={href}>{label}</Link>
}

export default HeaderLink;