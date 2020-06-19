import styled from 'styled-components'
import { Mic, Headset, Settings } from 'styled-icons/material'

export const Conteiner = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5px;
  

  background-color: var(--quaternary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  margin-right: 5px;
  
  border-radius: 50%;
  
  background-color: var(--gray);

  &::after{
    width: 14px;
    height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 50%;
    
    color: var(--white);
    background: var(--notification);
    
    content: '';
    display: inline;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  
  > strong {
    font-size: 13px;
    color: var(--white);
    font-weight: bold;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
    opacity: 0.7;
    
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  
  > svg:not(:first-child) {
    margin-left: 7px
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;
  
  &:hover{
    opacity: 1;
  }

`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;
  
  &:hover{
    opacity: 1;
  }
`;

export const SettingIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;
  
  &:hover{
    opacity: 1;
  }
`;

