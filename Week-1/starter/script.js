// Datos de la empresa real de sistema de gestión de recursos humanos
const entityData = {
  name: "TechCorp HR Management",
  description:
    "Sistema integral para gestionar empleados, nómina, desempeño, asistencia y reclutamiento.",
  identifier: "HRMS,2026,001",
  contact: {
    email: "v.martinez@techcorp.com",
    phone: "+57 300 456 7890",
    location: "Sede Central, Medellín (Piso 4)",
  },
  items: [
    { name: "JavaScript ES2023", level: 95, category: "Técnica" },
    { name: "Liderazgo Ágil", level: 88, category: "Blanda" },
    { name: "Arquitectura Cloud", level: 82, category: "Técnica" },
    { name: "Comunicación Asertiva", level: 90, category: "Blanda" },
  ],
  links: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/workday/",
      icon: "bi-linkedin",
    },
    {
      platform: "Sitio oficial de Workday",
      url: "https://www.workday.com/",
      icon: "bi-workday",
    },
  ],
  stats: {
    employees: 350,
    activeProjects: 25,
    clientSatisfaction: 4.8,
    annualRevenue: "12M USD",
    yearsInBusiness: 10,
  },
};

// Referencias a elementos DOM
const entityName = document.getElementById("userName");
const entityDescription = document.getElementById("userBio");
const itemsList = document.getElementById("skillsList");
const statsContainer = document.getElementById("stats");
const themeToggle = document.getElementById("themeToggle");
const copyBtn = document.getElementById("copyEmailBtn");
const toggleItemsBtn = document.getElementById("toggleSkills");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// Renderiza la información básica
const renderBasicInfo = () => {
  const {
    name,
    description,
    contact: { email, phone, location },
  } = entityData;
  entityName.textContent = name;
  entityDescription.innerHTML = `
    ${description}
    <br /><strong>Contacto:</strong> ${email} | ${phone} | ${location}
  `;
};

// Renderiza la lista de items (habilidades)
const renderItems = (showAll = false) => {
  const { items } = entityData;
  const itemsToShow = showAll ? items : items.slice(0, 4);
  const itemsHtml = itemsToShow
    .map(
      ({ name, level }) => `
    <div class="skill-item">
      <div class="skill-name">${name}</div>
      <div class="skill-level">
        <span>${level}%</span>
        <div class="skill-bar">
          <div class="skill-bar-fill" style="width: ${level}%;"></div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  itemsList.innerHTML = itemsHtml;
};

// Renderiza los enlaces sociales
const renderLinks = () => {
  const { links } = entityData;
  const socialLinksContainer = document.getElementById("socialLinks");
  const linksHtml = links
    .map(
      ({ platform, url }) => `
    <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link">${platform}</a>
  `,
    )
    .join("");
  socialLinksContainer.innerHTML = linksHtml;
};

// Renderiza estadísticas
const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: "Empleados", value: stats.employees },
    { label: "Proyectos Activos", value: stats.activeProjects },
    { label: "Satisfacción del Cliente", value: stats.clientSatisfaction },
    { label: "Ingresos Anuales", value: stats.annualRevenue },
    { label: "Años en el Mercado", value: stats.yearsInBusiness },
  ];

  const statsHtml = statsArray
    .map(
      (stat) => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `,
    )
    .join("");

  statsContainer.innerHTML = statsHtml;
};

// Toggle tema claro/oscuro
const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
};

// Copiar información al portapapeles
const copyInfo = () => {
  const { name, description, contact } = entityData;
  const infoText = `
${name}
${description}
Contacto: ${contact.email} | Teléfono: ${contact.phone}
  `.trim();

  navigator.clipboard
    .writeText(infoText)
    .then(() => showToast("¡Información copiada al portapapeles!"))
    .catch(() => showToast("Error al copiar la información"));
};

// Mostrar notificación toast
const showToast = (message) => {
  toastMessage.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

// Mostrar / ocultar items (habilidades)
let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleItemsBtn.textContent = showingAllItems
    ? "Mostrar menos"
    : "Mostrar más";
};

// Event listeners
themeToggle.addEventListener("click", toggleTheme);
copyBtn.addEventListener("click", copyInfo);
toggleItemsBtn.addEventListener("click", handleToggleItems);

// Inicializar app
const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log("✅ Aplicación inicializada correctamente");
};

document.addEventListener("DOMContentLoaded", init);
