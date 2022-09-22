import "./style.css";
import id1 from "./1.png";
import id2 from "./2.png";
import id3 from "./3.png";
import id4 from "./4.png";
import id5 from "./5.png";
import id6 from "./6.png";
import id7 from "./7.png";
import id8 from "./8.png";
import id9 from "./9.png";
import id10 from "./10.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";

const imgMap = [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10];

function Card({ user }) {
  return (
    <li>
      <div className="cards-name-tag">
        <div>
          <img src={imgMap[user.id - 1]} alt="avatar" />
        </div>
        <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      </div>
      <div className="icons">
        <div className="specific-icon">
          <MailOutlineIcon />
          <p>{user.email}</p>
        </div>
        <div className="specific-icon">
          <PushPinIcon />
          <p>
            {user.address.suite} {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
        <div className="specific-icon">
          <LocationOnIcon />
          <p>
            {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>
      </div>
      <div className="company">
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
      <div className="icons">
        <div className="specific-icon">
          <PhoneIcon />
          <p>{user.phone}</p>
        </div>
        <div className="specific-icon">
          <PublicIcon />
          <p>{user.website}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
