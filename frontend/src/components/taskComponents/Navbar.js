import "../views/SideBar";
import "../views/SideBar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navBG sticky-top navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          Task Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-nav d-flex collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active sideBarTextColor">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                login
              </a>
            </li>
            <li className="nav-item" onClick={() => localStorage.clear()}>
              <a className="nav-link" href="/logout">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
