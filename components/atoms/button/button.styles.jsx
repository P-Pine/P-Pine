import styled from "styled-components";

const buttonBackground = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary;

  // Dynamically determine the background colour based on props
  let colour;
  switch (props.variant) {
    case "primary":
      colour = props.theme.primary;
      break;
    case "secondary":
      colour = props.theme.secondary;
      break;
    case "tertiary":
      colour = props.theme.tertiary;
      break;
    default:
      colour = props.theme.primary;
      break;
  }

  return colour;
};

const buttonHoverBackground = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary;

  // Dynamically determine the background colour based on props
  let colour;
  switch (props.variant) {
    case "primary":
      colour = props.theme.primaryHover;
      break;
    case "secondary":
      colour = props.theme.secondaryHover;
      break;
    case "tertiary":
      colour = props.theme.tertiaryHover;
      break;
    default:
      colour = props.theme.primary;
      break;
  }

  return colour;
};

export const StyledButton = styled.button`
  display: inline-flex;
  min-width: 144px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${(props) => buttonBackground(props)};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: white;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  border-radius: ${({ round }) => (round ? "25px" : "8px")};
  letter-spacing: normal;
  .button__icon {
    display: flex;
    margin-right: 6px;
    height: 16px;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: ${(props) => buttonHoverBackground(props)};
  }
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })`
  text-decoration: none;
`;

export default StyledButton;
