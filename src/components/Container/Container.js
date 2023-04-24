import styled from "styled-components";

export const Container = styled.div`
  ${'' /* width: 400px; */}
  padding: 2.5rem 1.5rem;
  margin: 0 auto;
  position: relative;
  ${'' /* display: flex;
  align-items: center;
  flex-direction: column; */}
  background-color: hsla(0, 0%, 10%, 0.1);
  border: 2px solid ${p => p.theme.colors.whiteColor};
  border-radius: 1rem;
  backdrop-filter: blur(8px);
`;
