import React from 'react'
import { Conteiner, HashtagIcon, InviteIcon, SettingIcon } from './style'

interface Props {
  channelName: String
  selected?: boolean
}

const ChannelButton: React.FC<Props> = ({channelName, selected}) =>{
  return (
    <Conteiner className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div className="channel-button-icons">
        <InviteIcon />
        <SettingIcon />
      </div>
    </Conteiner>
  )
}

export default ChannelButton