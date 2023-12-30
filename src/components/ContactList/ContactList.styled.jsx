import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;

export const ButtonDelete = styled.button`
  max-width: 100px;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 10px;
  margin-left: 20px;

  &:hover {
    background-color: gold;
  }
`;
