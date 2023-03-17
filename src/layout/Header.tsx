import { Link } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { LogoDark } from '../assets';
import { device } from '../mediaQueries';
import { Close, Hamburger } from '../svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const backDropRef = useRef<HTMLDivElement | null>(null);
  const navItems = [
    {
      name: 'Our Company',
      path: '/about',
    },
    {
      name: 'Locations',
      path: '/location',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const handleClickOutside:
    | React.MouseEventHandler<HTMLDivElement>
    | undefined = e => {
    if (e.target === backDropRef.current) {
      setShowMenu(false);
    }
  };

  return (
    <HeaderComponent>
      <Link
        to='/'
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <Logo src={LogoDark} alt='logo' />
      </Link>

      <HeaderList>
        {navItems.map((item, i) => (
          <Link key={i} to={item.path as any}>
            <li>{item.name}</li>
          </Link>
        ))}
      </HeaderList>
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}

      {showMenu && (
        <Backdrop ref={backDropRef} onClick={handleClickOutside}>
          <Menu>
            <NavList>
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path as any}
                  onClick={() => setShowMenu(false)}
                >
                  <NavItem>{item.name}</NavItem>
                </Link>
              ))}
            </NavList>
          </Menu>
        </Backdrop>
      )}
    </HeaderComponent>
  );
};

const HeaderComponent = styled.header`
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 64px 39px;
    height: fit-content;
  }

  @media ${device.laptopL} {
    padding: 64px 165px;
  }
`;
const Logo = styled.img`
  width: 202px;
`;

const HeaderList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    list-style: none;
    column-gap: 42px;
    li {
      color: #333136;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 2px;
    }
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: absolute;
  left: 0;
  top: 96px;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 999;
`;

const Menu = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-color: var(--dark);
  /* z-index: 999; */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 32px;
`;

const NavItem = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  /* identical to box height, or 104% */
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  width: fit-content;
`;

export default Header;
