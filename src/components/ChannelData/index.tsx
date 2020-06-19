import React from 'react'
import { Conteiner, Messages, InputWrapper, Input, InputIcon } from './style'
import ChannelMessage  from '../ChannelMessage'

const ServerName: React.FC = () =>{
  return (
    <Conteiner>
      <Messages>
        <ChannelMessage 
          author="Luis Rodrigues" 
          date="19/06/20"
          content="Olá, tudo bem com vocês??"
        />

        <ChannelMessage 
          author="Diego Fernandes" 
          date="19/06/20"
          content="Tudo top!!"
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
      
    </Conteiner>
  )
}

export default ServerName