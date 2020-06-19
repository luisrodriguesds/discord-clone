import React from 'react'
import { Conteiner, User, Avatar, Role } from './style'

interface PropsUser{
  nickname: String
  isBot?: boolean
}

const UserRow: React.FC<PropsUser> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () =>{
  return (
    <Conteiner>
      <Role>Disponível - 1</Role>  
      <UserRow nickname="Luis Rodrigues" />

      <Role>Offline - 18</Role>  
      <UserRow nickname="Guilherme Rotz" isBot />

      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />
      <UserRow nickname="Fulano tal" />


    </Conteiner>
  )
}

export default UserList