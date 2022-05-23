import * as React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { render } from "configs/jest/testUtils";
import ExampleComponent from "src/components/ExampleComponent";

const feature = loadFeature("exampleComponentDefault.feature");

defineFeature(feature, (test) => {
  const onClick = jest.fn();
  let container;

  const giverExampleComponentIsRendered = (given, Component) => {
    given("ExampleComponent component is rendered", () => {
      container = render(Component).container;
    });
  };
});
