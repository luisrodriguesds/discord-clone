import React from 'react'
import { Conteiner, Avatar, Message, Header, Content } from './style'
export { Mention } from './style'
export interface Props{
  author: string
  date: string
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean
  isBot?: boolean 
}


const ChannelMessage: React.FC<Props> = ({ author, date, content, hasMention, isBot}) =>{
  return (
    <Conteiner className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Conteiner>
  )
}

export default ChannelMessage