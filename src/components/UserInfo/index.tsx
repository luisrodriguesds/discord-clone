import React from 'react'
import { Conteiner, Profile, Avatar, UserInfo, Icons, MicIcon, HeadphoneIcon, SettingIcon } from './style'

const ServerName: React.FC = () =>{
  return (
    <Conteiner>
      
      <Profile>
        <Avatar />
        <UserInfo>
          <strong>Luis Rodrigues</strong>
          <span># 2357</span>
        </UserInfo>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingIcon />
      </Icons>

    </Conteiner>
  )
}

export default ServerName