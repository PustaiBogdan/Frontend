import DomURL from "domurl";
import settingsTemplate from "./template";
import { getVariables } from "../modules/css-variables";

let isInitialized = false;

const url = new DomURL();

const settingsPrefix = "appstack-config-";
const settingsClassName = ".js-settings";
const settingsToggleClassName = ".js-settings-toggle";

const defaultOptions = {
  theme: "default",
  layout: "fluid",
  sidebarPosition: "left",
  sidebarBehavior: "sticky"
}

const options = {
  theme: {
    default: {
      bsTheme: "light",
      sidebarTheme: "dark"
    },
    colored: {
      bsTheme: "light",
      sidebarTheme: "colored"
    },
    light: {
      bsTheme: "light",
      sidebarTheme: "light"
    },
    dark: {
      bsTheme: "dark",
      sidebarTheme: "dark"
    },
  },
  layout: {
    fluid: {
      layout: "fluid",
    },
    boxed: {
      layout: "boxed",
    }
  },
  sidebarPosition: {
    left: {
      sidebarPosition: "left",
    },
    right: {
      sidebarPosition: "right",
    }
  },
  sidebarBehavior: {
    sticky: {
      sidebarBehavior: "sticky",
    },
    fixed: {
      sidebarBehavior: "fixed",
    },
    compact: {
      sidebarBehavior: "compact",
    }
  },
};

const createElement = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
}

const initialize = () => {
  // If query parameters are passed (e.g. ?layout=fluid)
  if(Object.keys(url.query).length > 0) {
    // Reset current stored config
    resetStoredConfig();

    Object.entries(url.query).forEach(([key, value]) => {
      if (options[key] && options[key][value]) {
        // Set DOM elements
        setDomElements(key, value);
        // Save to local storage
        setStoredConfig(key, value);
      }
    });
  }
  else {
    setDomElementsByConfigs();
  }
}

const initializeElements = () => {
  if (!isInitialized) {
    document.body.appendChild(createElement(settingsTemplate));

    bindSidebarEvents();
    
    bindConfigEvents();
    
    setSelectedRadios();

    openSidebarOnFirstVisit();

    isInitialized = true;
  }
}

const bindSidebarEvents = () => {
  const settingsElement = document.querySelector(settingsClassName);
  const settingsToggleElements = document.querySelectorAll(settingsToggleClassName);

  settingsToggleElements.forEach(element => {
    element.onclick = e => {
      e.preventDefault();
      settingsElement.classList.toggle("open");
      setSelectedRadios();
    };
  })

  document.body.onclick = e => {
    if (!settingsElement.contains(e.target)){
      settingsElement.classList.remove("open");
    }
  }
}

const bindConfigEvents = () => {
  const settingsElement = document.querySelector(settingsClassName);
  const radioElements = settingsElement.querySelectorAll("input[type=radio]");

  radioElements.forEach(element => {
    element.addEventListener("change", e => {
      // Set DOM elements
      setDomElements(e.target.name, e.target.value);
      // Save to local storage
      setStoredConfig(e.target.name, e.target.value);

      // Set cssVariables and re-render components whenever `theme` is changed
      if(e.target.name === "theme") {
        window.cssVariables = getVariables();
        
        window.document.dispatchEvent(new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true
        }));
      }
    });
  })
}

const setSelectedRadios = () => {
  for (let [key, value] of Object.entries(getConfigs())) {
    const _value = value ? value : defaultOptions[key];

    const element = document.querySelector(`input[name="${key}"][value="${_value}"]`);
    element.checked = true;
  }
}

const openSidebarOnFirstVisit = () => {
  setTimeout(() => {
    if(!getStoredConfig("visited")){
      const settingsElement = document.querySelector(settingsClassName);
      settingsElement.classList.toggle("open");
      setStoredConfig("visited", true)
    }
  }, 1000);
}

const setDomElementsByConfigs = () => {
  for (let [key, value] of Object.entries(getConfigs())) {
    const _value = value ? value : defaultOptions[key];
    setDomElements(key, _value);
  }
}

const setDomElements = (name, value) => {
  // Set data attributes on html element
  for (let [_name, _value] of Object.entries(options[name][value])) {
    document.documentElement.dataset[_name] = _value;
  }
}

const getConfigs = () => ({
  theme: getStoredConfig("theme"),
  layout: getStoredConfig("layout"),
  sidebarPosition: getStoredConfig("sidebarPosition"),
  sidebarBehavior: getStoredConfig("sidebarBehavior"),
})

const resetStoredConfig = () => {
  removeStoredConfig("theme");
  removeStoredConfig("layout");
  removeStoredConfig("sidebarPosition");
  removeStoredConfig("sidebarBehavior");
}

const getStoredConfig = (name) => {
  return localStorage.getItem(`${settingsPrefix}${name}`);
}

const setStoredConfig = (name, value) => {
  localStorage.setItem(`${settingsPrefix}${name}`, value);
}

const removeStoredConfig = (name) => {
  localStorage.removeItem(`${settingsPrefix}${name}`);
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => initializeElements());

// Apply settings (from localstorage) once html-element is available
const observer = new MutationObserver(function() {
  if (document.documentElement) {
    initialize();

    observer.disconnect();
  }
});
observer.observe(document.documentElement, { childList: true });