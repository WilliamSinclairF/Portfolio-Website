import Link from 'next/link';
import { SocialLinks } from '../SocialLinks';
import { NavContainer, NavLink, NavListItem } from './NavbarStyles';

const navItems = [
  { name: 'Projects', link: '/#projects' },
  { name: 'Skills', link: '/#skills' },
  { name: 'About me', link: '/#about' },
];

export default function Navbar() {
  return (
    <NavContainer>
      {navItems.map((i) => (
        <NavListItem key={i.name}>
          <Link href={i.link}>
            <NavLink>{i.name}</NavLink>
          </Link>
        </NavListItem>
      ))}
      <SocialLinks />
    </NavContainer>
  );
}
