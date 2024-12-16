import ApexCharts from "apexcharts";

window.ApexCharts = ApexCharts;

document.addEventListener("DOMContentLoaded", () => {
  window.Apex = {
    colors: [
      window.cssVariables.primary,
      window.cssVariables.success,
      window.cssVariables.warning,
      window.cssVariables.danger,
      window.cssVariables.info
    ],
    chart: {
      foreColor: window.cssVariables.bodyColor
    }
  };

  // Force redraw
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 250);
});