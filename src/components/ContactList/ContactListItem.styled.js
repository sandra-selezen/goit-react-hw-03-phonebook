import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  color: ${p => p.theme.colors.blackColor};
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: ${p => p.theme.borderRadius};
  svg {
    margin-right: 8px;
  }
`;