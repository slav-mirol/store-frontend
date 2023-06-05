import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo1";
import Navigation from "../../components/navigation/navigation";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import "./profile.css";

const Profile = ({
    _profile,
    setUser
}) => {
    const [isEdit, setEdit] = useState(false);
    const [profile, setProfile] = useState({});
    useEffect(()=>{
        setProfile(_profile);
    }, [])
    return (
        <div className="scr-profile">
            <Logo/>
            <Navigation/>
            <p className='prom-text'> new arrivals </p>
            <p className='prom-text'> collection </p>
            <ProfileNavigation where="profile"/>
                <div className="profile-info">
                    <p className="profile-info-text">Имя: {_profile["first_name"]}</p>
                    <p className="profile-info-text">Фамилия: {_profile["last_name"]}</p>
                    <p className="profile-info-text">Адрес: {_profile["adress"]}</p>
                    <p className="profile-info-text">Номер: {_profile["phone"]}</p>
                    <Link to='/'>
                        <button className="profile-btn-edit" onClick={()=>{setUser(undefined);}}>
                            <p className="btn-edit-text">Выйти</p>
                        </button>
                    </Link>
                </div>
            
        </div>
    )
}

export default Profile;

const PropsOfProfile = ({
    titleParam,
    inpPlaceholder,
    inpValue,
    parametr,
    setFormState
  }) => {
    return (
      <div className="params" >
        <p className="title-param">{titleParam}</p>
        <input
          name={parametr}
          className="inp-param"
          placeholder={inpPlaceholder}
          value={inpValue}
          onChange={(e) => {
            setFormState((prevState) => ({...prevState, [e.target.name]: e.target.value}));
          }}
        />
      </div>
    );
  }