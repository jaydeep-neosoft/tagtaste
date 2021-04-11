import React, { useState, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { logoutFn } from "../../components/Layouts/utils";
import "./header.css";

const Header = () => {
  const history = useHistory();
  const avatarRef = useRef();

  const [avatarMenuShow, setShowAvatarMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (!avatarRef.current.contains(e.target)) {
      setShowAvatarMenu(false);
      return;
    }
  };

  return (
    <header>
      <Link to="/">
        <img src="/logo.png" id="logo_header" alt="logo" className="logo" />
      </Link>
      <div className="avatar-div" ref={avatarRef}>
        <img
          src="/avatar.jpg"
          id="avatar_header"
          alt="avatar"
          onClick={() => setShowAvatarMenu((preVal) => !preVal)}
        />
        <div className={avatarMenuShow ? "avatar-menu" : "d-none"}>
          <div className="user-logout" onClick={() => logoutFn(history)}>
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
