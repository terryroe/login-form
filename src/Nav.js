// A simple Nav element based on bootstrap's NavBar.

const Nav = () => {
  return (
    <header className="navbar bg-info position-fixed vw-100">
      <nav className="container bg-info">
        <a href="/" className="navbar-brand me-auto">
          Week 13
        </a>
        <a className="nav-link me-3" href="/">
          Home
        </a>
        <a className="nav-link me-3" href="#">
          Profile
        </a>
        <a className="nav-link" tabIndex="0" href="#">
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Nav;
