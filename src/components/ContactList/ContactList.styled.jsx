import styled from 'styled-components';

export const ContactItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactInfo = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: #edca9f;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const ContactBtn = styled.button`
  font-size: 18px;
  margin-left: 15px;
  border: none;
  background-color: #cfe9ca;
  border-radius: 20px;
  height: 40px;
  width: 70px;
  cursor: pointer;
  :hover {
    background-color: #edca9f;
    transform: scale(1.2);
    transition: 500ms;
  }
`;
