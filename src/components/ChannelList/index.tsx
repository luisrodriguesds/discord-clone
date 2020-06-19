import React from 'react'
import { Conteiner, Category, AddCategoryIcon } from './style'
import ChannelButton from '../ChannelButton'

const ServerName: React.FC = () =>{
  return (
    <Conteiner>
      <Category>
        <span>Canais de texto</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </Conteiner>
  )
}

export default ServerName