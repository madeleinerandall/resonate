import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header>
      <div className="head-content gutters">
        <div className="head-title">
          <h1>Contacts</h1>
        </div>
        {/* <div className="head-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
