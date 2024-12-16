import { getVariables } from "../modules/css-variables";

// Selector for the theme toggle button
const themeToggleSelector = ".js-theme-toggle";

// Name of the theme setting used in local storage
const bootstrapThemeSettingName = "bsTheme";
const sidebarThemeSettingName = "sidebarTheme";

// Key used to store theme setting in local storage
const localStorageKey = "appstack-config-theme";

// Retrieving the theme toggle button element
const themeToggle = document.querySelector(themeToggleSelector);

if(themeToggle) {
  // Adding click event listener to the theme toggle button
  themeToggle.addEventListener("click", function() {
      // Retrieving the current theme from local storage
      const currentTheme = localStorage.getItem(localStorageKey);

      // Toggling between "dark" and "default" themes
      const newTheme = currentTheme === "dark" ? "default" : "dark";

      // Setting the new theme in the HTML dataset
      document.documentElement.dataset[bootstrapThemeSettingName] = newTheme;
      document.documentElement.dataset[sidebarThemeSettingName] = newTheme;

      // Saving the new theme setting to local storage
      localStorage.setItem(localStorageKey, newTheme);

      // Refreshing CSS variables
      window.cssVariables = getVariables();
      
      // Dispatching a custom event to re-render components
      window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
      }));
  });
}