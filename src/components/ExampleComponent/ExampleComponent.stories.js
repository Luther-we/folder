/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ExampleComponent from "src/components/ExampleComponent";

export default {
  title: "Components/ExampleComponent",
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = { ...EXAMPLE_COMPONENT_DATA };
