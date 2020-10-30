import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Button from "./button";
import knobData from "./button.knobs.json";

const { icon, innerText } = knobData;

const buttonClicked = (e) => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => (
  <Button>{text(innerText.label, innerText.default, innerText.group)}</Button>
);
export const secondaryButton = () => (
  <Button variant="secondary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const tertiaryButton = () => (
  <Button variant="tertiary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const iconButton = () => (
  <Button icon={select(icon.label, icon.options, icon.default, icon.group)}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const functionButton = () => (
  <Button onClick={buttonClicked}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const linkedButton = () => (
  <Button href="/route">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);

export const basicRoundButton = () => (
  <Button round>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const secondaryRoundButton = () => (
  <Button round variant="secondary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const tertiaryRoundButton = () => (
  <Button round variant="tertiary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const iconRoundButton = () => (
  <Button
    round
    icon={select(icon.label, icon.options, icon.default, icon.group)}
  >
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const functionRoundButton = () => (
  <Button round onClick={buttonClicked}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const linkedRoundButton = () => (
  <Button round href="/route">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);

export const basicOutlineButton = () => (
  <Button outline>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const secondaryOutlineButton = () => (
  <Button outline variant="secondary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const tertiaryOutlineButton = () => (
  <Button outline variant="tertiary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const iconOutlineButton = () => (
  <Button
    outline
    icon={select(icon.label, icon.options, icon.default, icon.group)}
  >
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const functionOutlineButton = () => (
  <Button outline onClick={buttonClicked}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);
export const linkedOutlineButton = () => (
  <Button outline href="/route">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);

basicButton.story = {
  name: "Basic Button",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/5DExbYWfiOx8UumMD2cmAr/P-Pine-UI-Framework?node-id=12%3A71",
    },
  },
};

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs, withDesign],
};
