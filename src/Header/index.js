import "./style.css";

function Header() {
  return (
    <header className="banner">
      <div className="head-content gutters">
        <div className="head-title">
          <h1>Contacts</h1>
        </div>
        <div className="head-search">
          <input placeholder="Search" type="text" />
        </div>
      </div>
    </header>
  );
}

export default Header;
