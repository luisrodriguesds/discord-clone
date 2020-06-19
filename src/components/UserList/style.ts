import styled from 'styled-components'

export const Conteiner = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  
  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }

`;
export const Role = styled.h1`
  font-size: 12px;
  font-weight: 500;
  
  margin-top: 12px;
  color: var(--white);

  opacity: 0.45;
  
  text-transform: uppercase;
  
`;
export const User = styled.div`
  margin-top: 7px;
  padding: 5px;

  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  background: transparent;
  transition: background 0.2s;

  &:hover{
    background: rgba(255, 255, 255, 0.2);
  }

  > strong {
    margin-left: 13px;
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    
    /* Cortar o nome caso passe */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;

    background: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  
  width: 32px;
  height: 32px;
  
  border-radius: 50%;
  background-color: var(--primary);

  &.bot{
    background-color: var(--mention-detail);
  }
`;