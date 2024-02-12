import styled, { css } from 'styled-components'

const StyledFillGapsOption = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 12px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0.5em  0em;
  padding: 0.5em 1em;
  box-shadow: 3px 3px 3px 0px rgba(194,194,194,1);


  ${props =>
    props.$primary &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`
export { StyledFillGapsOption };
