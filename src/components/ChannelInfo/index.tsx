import React from 'react'
import { Conteiner, HashtagIcon, Title, Separator, Description } from './style'

const ChannelInfo: React.FC = () =>{
  return (
    <Conteiner>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Conteiner>
  )
}

export default ChannelInfo