/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ExampleComplexeComponent from "src/components/ExampleComplexeComponent";

export default {
  title: "Components/ExampleComplexeComponent",
  component: ExampleComplexeComponent,
};

const Template = (args) => <ExampleComplexeComponent {...args} />;

export const Default = Template.bind({});
Default.args = { ...EXAMPLE_COMPLEXE_COMPONENT_DATA };

export const Disabled = Template.bind({});
Disabled.args = { ...EXAMPLE__COMPLEXE_COMPONENT_DATA_DISABLED };
