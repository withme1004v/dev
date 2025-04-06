import React from "react";
import styled from "styled-components"; // styled-components import
const StyledButton = styled.button`
background-color: green;
color: white;
padding: 10px 20px;
border: none;
cursor: pointer;
border-radius: 5px;
`;
function Button() {
return <StyledButton>Click Me</StyledButton>;
}
export default Button;