export const getVariables = () => {
  const computedStyles = getComputedStyle(document.documentElement);

  return {
    primary: computedStyles.getPropertyValue('--bs-primary'),
    primarySubtle: computedStyles.getPropertyValue('--bs-primary-subtle'),
    secondary: computedStyles.getPropertyValue('--bs-secondary'),
    success: computedStyles.getPropertyValue('--bs-success'),
    warning: computedStyles.getPropertyValue('--bs-warning'),
    danger: computedStyles.getPropertyValue('--bs-danger'),
    info: computedStyles.getPropertyValue('--bs-info'),

    bodyBg: computedStyles.getPropertyValue('--bs-body-bg'),
    bodyColor: computedStyles.getPropertyValue('--bs-body-color'),
    secondaryBg: computedStyles.getPropertyValue('--bs-secondary-bg'),
    secondaryColor: computedStyles.getPropertyValue('--bs-secondary-color'),
    tertiaryBg: computedStyles.getPropertyValue('--bs-tertiary-bg'),
    tertiaryColor: computedStyles.getPropertyValue('--bs-tertiary-color'),
    quaternaryBg: computedStyles.getPropertyValue('--bs-quaternary-bg'),
    quaternaryColor: computedStyles.getPropertyValue('--bs-quaternary-color'),
  };
};

window.cssVariables = getVariables();