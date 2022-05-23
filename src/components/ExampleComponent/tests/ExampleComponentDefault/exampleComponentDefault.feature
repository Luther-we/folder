Feature: ExampleComponent default

  Background: Component is well mounted
    Given ExampleComponent component is rendered
    And required elements are mounted
    And unrequired elements are not mounted
    And default style is applied

  Scenario: OnClick callback is active
    When onClick on button is called
    Then onClick callback should be call
