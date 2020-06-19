import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
    
  }

  > div span {
    font-size: 15px;
    color: var(--senary)
  }

  &:hover, &.active{
    background-color: var(--quinary);

    > div span{
      color: var(--white)
    }

    > .channel-button-icons svg {
      display: inline;
    }
  }

  > .channel-button-icons svg{
    display: none;
    
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  
  margin: 0 5px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  cursor: pointer;
  transition: color 0.2s;
  
  &:hover{
    color: var(--white);
  }
`;

export const SettingIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  margin-left: 5px;

  cursor: pointer;
  transition: color 0.2s;

  &:hover{
    color: var(--white);
  }
`;
