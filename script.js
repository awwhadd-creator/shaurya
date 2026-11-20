// Set your portfolio URL here. If left empty, the "View portfolio" button is hidden.
const PORTFOLIO_URL = "";

const link = document.getElementById("portfolio-link");
if (link) {
  if (PORTFOLIO_URL) link.href = PORTFOLIO_URL;
  else link.hidden = true;
}
const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();
