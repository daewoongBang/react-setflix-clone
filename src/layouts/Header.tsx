import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: red;
  font-size: 12px;
`;

const NavCol = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  margin-right: 50px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.li``;

const Header = () => {
  return (
    <NavBar>
      <NavCol>
        <Logo />

        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Tv Shows</NavLink>
        </NavLinks>
      </NavCol>

      <NavCol>
        <button>search</button>
      </NavCol>
    </NavBar>
  );
};

export default Header;
