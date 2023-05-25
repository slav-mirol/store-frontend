import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Logo from "../../components/logo1";
import Navigation from "../../components/navigation/navigation";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import "./profile.css";


const prof = {
    fname: "Никита",
    lname: "Носов",
    adress: "Россия, Самарская область, г. Самара, ул. Аврора, дом 122",
    number: "+79370618611",
}

const Profile = ({
    _profile,
    setUser
}) => {
    const [isEdit, setEdit] = useState(false);
    const [profile, setProfile] = useState({});
    useEffect(()=>{
        setProfile(prof);
    },[])
    console.log(_profile);
    return (
        <div className="scr-profile">
            <Logo/>
            <Navigation/>
            <p className='prom-text'> new arrivals </p>
            <p className='prom-text'> collection </p>
            <ProfileNavigation where="profile"/>
            {(isEdit == true) ?
                <div className="profile-edit">
                    <PropsOfProfile
                        titleParam='Имя'
                        inpPlaceholder="Введите имя"
                        inpValue={_profile.first_name}
                        parametr='fname'
                        setFormState={setProfile}
                    />
                    <button className="profile-btn-edit" onClick={()=>{setEdit(false);}}>
                        <p className="btn-edit-text">Изменить данные</p>
                    </button>
                </div>
            :
                <div className="profile-info">
                    <p className="profile-info-text">Имя: {_profile["first_name"]}</p>
                    <p className="profile-info-text">Фамилия: {_profile["last_name"]}</p>
                    <p className="profile-info-text">Адрес: {profile.adress}</p>
                    <p className="profile-info-text">Номер: {profile.number}</p>
                    <button className="profile-btn-edit" onClick={()=>{setEdit(true);}}>
                        <p className="btn-edit-text">Изменить данные</p>
                    </button>
                </div>
            }
            
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