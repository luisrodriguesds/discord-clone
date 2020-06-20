import React, { useRef, useEffect } from 'react'
import { Conteiner, Messages, InputWrapper, Input, InputIcon } from './style'
import ChannelMessage, { Mention }  from '../ChannelMessage'

const ChannelData: React.FC = () =>{
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(()=> {
    const div = messageRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Conteiner>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage 
              key={n}
              author="Luis Rodrigues" 
              date="19/06/20"
              content="Olá, tudo bem com vocês??"
            />

        ))}

        <ChannelMessage 
          author="Diego Fernandes" 
          date="19/06/20"
          content={
            <>
              <Mention>@Luis Rodrigues</Mention>, me carrega no lol CS 
            </>
          }
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

export default ChannelData