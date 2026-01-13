import styled from "styled-components"
import { Props } from "."

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) =>
    props.tipo === "principal"
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-weight: 22px;
  margin-bottom: 16px;
`
