/**
 * ============================================
 * PROYECTO SEMANA 02 - GESTOR DE COLECCIÓN
 * Archivo inicial para el aprendiz
 * ============================================
 *
 * INSTRUCCIONES:
 * 1. Lee el README.md del proyecto para entender los requisitos
 * 2. Adapta TODOS los TODOs a tu dominio asignado por el instructor
 * 3. Usa SOLO características ES2023 aprendidas esta semana:
 *    - Spread operator (...) para copiar arrays/objetos
 *    - Rest parameters (...args) en funciones
 *    - Default parameters
 *    - Array methods: map, filter, reduce, find
 *    - Object enhancements (shorthand, computed properties)
 * 4. NUNCA mutes el estado directamente - usa inmutabilidad
 * 5. Los comentarios deben estar en español
 * 6. La nomenclatura técnica (variables, funciones) en inglés
 *
 * NOTA IMPORTANTE:
 * Este archivo es una PLANTILLA GENÉRICA.
 * Debes adaptarlo completamente a tu dominio asignado.
 * NO copies la implementación de otro compañero.
 *
 * EJEMPLO DE REFERENCIA (NO es un dominio asignable):
 * Planetario - Gestión de cuerpos celestes
 *
 * ============================================
 */

// ============================================
// ESTADO GLOBAL
// ============================================

// Array que almacena todos los elementos de tu colección
let items = [];

// ID del elemento que se está editando (null si es nuevo)
let editingItemId = null;

// ============================================
// TODO 1: DEFINIR CATEGORÍAS DE TU DOMINIO
// ============================================
// Define las categorías específicas de tu dominio.
// Cada categoría debe tener un emoji representativo.
//
// EJEMPLO (Planetario - NO es un dominio asignable):
// const CATEGORIES = {
//   planet: { name: 'Planeta', emoji: '🪐' },
//   star: { name: 'Estrella', emoji: '⭐' },
//   asteroid: { name: 'Asteroide', emoji: '☄️' },
//   comet: { name: 'Cometa', emoji: '💫' },
//   moon: { name: 'Luna', emoji: '🌙' }
// };

const CATEGORIES = {
  it: { name: "Tecnología", emoji: "💻" },
  hr: { name: "Recursos Humanos", emoji: "🧑‍💼" },
  finance: { name: "Finanzas", emoji: "💰" },
  marketing: { name: "Marketing", emoji: "📢" },
  operations: { name: "Operaciones", emoji: "🏭" },
};

const getCategoryEmoji = (category) => {
  return CATEGORIES[category]?.emoji ?? "🏢";
};

// Prioridades genéricas (adapta los nombres si es necesario)
const PRIORITIES = {
  high: { name: "Alta", color: "#ef4444" },
  medium: { name: "Media", color: "#f59e0b" },
  low: { name: "Baja", color: "#22c55e" },
};

// ============================================
// TODO 2: PERSISTENCIA (LocalStorage)
// ============================================

/**
 * Carga los elementos desde LocalStorage
 * @returns {Array} Array de elementos guardados, o array vacío
 */
const loadItems = () => {
  return JSON.parse(localStorage.getItem("employees") ?? "[]");
};

const saveItems = (itemsToSave) => {
  localStorage.setItem("employees", JSON.stringify(itemsToSave));
};

// ============================================
// TODO 3: CRUD - CREAR ELEMENTO
// ============================================

/**
 * Crea un nuevo elemento con los datos proporcionados
 * @param {Object} itemData - Datos del nuevo elemento
 * @returns {Array} Nuevo array de elementos (sin mutar el original)
 */
const createItem = (itemData = {}) => {
  const newItem = {
    id: Date.now(),
    name: itemData.name ?? "",
    description: itemData.description ?? "",
    category: itemData.category ?? "it",
    priority: itemData.priority ?? "medium",
    position: itemData.position ?? "",
    salary: itemData.salary ?? 0,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    ...itemData,
  };

  const newItems = [...items, newItem];
  saveItems(newItems);
  return newItems;
};
// ============================================
// TODO 4: CRUD - ACTUALIZAR ELEMENTO
// ============================================

/**
 * Actualiza un elemento existente
 * @param {Number} id - ID del elemento a actualizar
 * @param {Object} updates - Propiedades a actualizar
 * @returns {Array} Nuevo array con el elemento actualizado
 */
const updateItem = (id, updates) => {
  const updatedItems = items.map((item) =>
    item.id === id
      ? { ...item, ...updates, updatedAt: new Date().toISOString() }
      : item,
  );

  saveItems(updatedItems);
  return updatedItems;
};

// ============================================
// TODO 5: CRUD - ELIMINAR ELEMENTO
// ============================================

/**
 * Elimina un elemento por su ID
 * @param {Number} id - ID del elemento a eliminar
 * @returns {Array} Nuevo array sin el elemento eliminado
 */
const deleteItem = (id) => {
  const filteredItems = items.filter((item) => item.id !== id);
  saveItems(filteredItems);
  return filteredItems;
};

// ============================================
// TODO 6: CRUD - TOGGLE ESTADO ACTIVO
// ============================================

/**
 * Alterna el estado activo/inactivo de un elemento
 * @param {Number} id - ID del elemento
 * @returns {Array} Nuevo array con el estado actualizado
 */
const toggleItemActive = (id) => {
  const updatedItems = items.map((item) =>
    item.id === id
      ? { ...item, active: !item.active, updatedAt: new Date().toISOString() }
      : item,
  );

  saveItems(updatedItems);
  return updatedItems;
};

const clearInactive = () => {
  const activeItems = items.filter((item) => item.active);
  saveItems(activeItems);
  return activeItems;
};

// ============================================
// TODO 7: FILTROS Y BÚSQUEDA
// ============================================

/**
 * Filtra elementos por estado (activo/inactivo)
 * @param {Array} itemsToFilter - Array de elementos
 * @param {String} status - 'all' | 'active' | 'inactive'
 * @returns {Array} Elementos filtrados
 */
const filterByStatus = (itemsToFilter, status = "all") => {
  if (status === "all") return itemsToFilter;
  if (status === "active") return itemsToFilter.filter((item) => item.active);
  if (status === "inactive")
    return itemsToFilter.filter((item) => !item.active);
  return itemsToFilter;
};

const filterByCategory = (itemsToFilter, category = "all") => {
  if (category === "all") return itemsToFilter;
  return itemsToFilter.filter((item) => item.category === category);
};

const filterByPriority = (itemsToFilter, priority = "all") => {
  if (priority === "all") return itemsToFilter;
  return itemsToFilter.filter((item) => item.priority === priority);
};

const searchItems = (itemsToFilter, query) => {
  if (!query || query.trim() === "") return itemsToFilter;

  const searchTerm = query.toLowerCase();

  return itemsToFilter.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      (item.description ?? "").toLowerCase().includes(searchTerm),
  );
};

const applyFilters = (itemsToFilter, filters = {}) => {
  const {
    status = "all",
    category = "all",
    priority = "all",
    search = "",
  } = filters;

  let result = filterByStatus(itemsToFilter, status);
  result = filterByCategory(result, category);
  result = filterByPriority(result, priority);
  result = searchItems(result, search);

  return result;
};

// ============================================
// TODO 8: ESTADÍSTICAS
// ============================================

const getStats = (itemsToAnalyze = []) => {
  const total = itemsToAnalyze.length;
  const active = itemsToAnalyze.filter((item) => item.active).length;
  const inactive = total - active;

  const byCategory = itemsToAnalyze.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});

  const byPriority = itemsToAnalyze.reduce((acc, item) => {
    acc[item.priority] = (acc[item.priority] ?? 0) + 1;
    return acc;
  }, {});

  return { total, active, inactive, byCategory, byPriority };
};

/**
 * Formatea una fecha ISO a formato legible
 * @param {String} dateString - Fecha en formato ISO
 * @returns {String} Fecha formateada
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/**
 * Renderiza un elemento individual como HTML
 * @param {Object} item - Objeto del elemento
 * @returns {String} HTML del elemento
 */
const renderItem = (item) => {
  const {
    id,
    name,
    description,
    category,
    priority,
    active,
    createdAt,
    position,
    salary,
  } = item;

  return `
    <div class="item ${active ? "" : "inactive"} priority-${priority}" data-item-id="${id}">
      <input type="checkbox" class="item-checkbox" ${active ? "checked" : ""}>
      
      <div class="item-content">
        <h3 class="item-name">${name}</h3>
        <p><strong>Puesto:</strong> ${position}</p>
        <p><strong>Salario:</strong> $${salary}</p>
        ${description ? `<p class="item-description">${description}</p>` : ""}
        
        <div class="item-meta">
          <span class="badge badge-category">
            ${getCategoryEmoji(category)} ${CATEGORIES[category]?.name ?? category}
          </span>
          <span class="badge badge-priority priority-${priority}">
            ${PRIORITIES[priority]?.name ?? priority}
          </span>
          <span class="item-date">
            📅 ${formatDate(createdAt)}
          </span>
        </div>
      </div>

      <div class="item-actions">
        <button class="btn-edit">✏️</button>
        <button class="btn-delete">🗑️</button>
        <button class="btn-inactivate">🚫</button> 
      </div>
    </div>
  `;
};

// ============================================
// TODO 10: RENDERIZADO - LISTA COMPLETA
// ============================================

/**
 * Renderiza la lista completa de elementos
 * @param {Array} itemsToRender - Array de elementos a renderizar
 */
const renderItems = (itemsToRender) => {
  const itemList = document.getElementById("item-list");
  const emptyState = document.getElementById("empty-state");

  if (itemsToRender.length === 0) {
    itemList.innerHTML = "";
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
    itemList.innerHTML = itemsToRender.map(renderItem).join("");
  }
};
/**
 * Renderiza las estadísticas en el DOM
 * @param {Object} stats - Objeto con estadísticas
 */
const renderStats = (stats) => {
  document.getElementById("stat-total").textContent = stats.total;
  document.getElementById("stat-active").textContent = stats.active;
  document.getElementById("stat-inactive").textContent = stats.inactive;

  const categoryStats = Object.entries(stats.byCategory)
    .map(
      ([cat, count]) =>
        `<div class="stat-card">
         <h4>${getCategoryEmoji(cat)} ${CATEGORIES[cat]?.name ?? cat}</h4>
         <p>${count}</p>
       </div>`,
    )
    .join("");

  document.getElementById("stats-details").innerHTML = categoryStats;
};

// ============================================
// TODO 11: EVENT HANDLERS
// ============================================

/**
 * Maneja el envío del formulario (crear/editar)
 * @param {Event} e - Evento del formulario
 */
const handleFormSubmit = (e) => {
  e.preventDefault();

  // 1️⃣ Crear objeto con los datos del formulario
  const itemData = {
    name: document.getElementById("item-name").value.trim(),
    description: document.getElementById("item-description").value.trim(),
    category: document.getElementById("item-category").value,
    priority: document.getElementById("item-priority").value,
    position: document.getElementById("item-position").value.trim(),
    salary: Number(document.getElementById("item-salary").value) || 0, // convertir a número
  };

  if (!itemData.name) {
    alert("El nombre del empleado es obligatorio");
    return;
  }

  // 2️⃣ Crear o actualizar
  if (editingItemId) {
    items = updateItem(editingItemId, itemData);
  } else {
    items = createItem(itemData);
  }

  // 3️⃣ Reset y render
  resetForm();
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

/**
 * Maneja el click en checkbox de un elemento
 * @param {Number} itemId - ID del elemento
 */
const handleItemToggle = (itemId) => {
  items = toggleItemActive(itemId); // cambia active true/false
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};
/**
 * Maneja el click en botón editar
 * @param {Number} itemId - ID del elemento a editar
 */
const handleItemEdit = (itemId) => {
  const itemToEdit = items.find((item) => item.id === itemId);
  if (!itemToEdit) return;

  document.getElementById("item-name").value = itemToEdit.name;
  document.getElementById("item-description").value =
    itemToEdit.description ?? "";
  document.getElementById("item-category").value = itemToEdit.category;
  document.getElementById("item-priority").value = itemToEdit.priority;
  document.getElementById("item-position").value = itemToEdit.position ?? "";
  document.getElementById("item-salary").value = itemToEdit.salary ?? "";

  document.getElementById("form-title").textContent = "✏️ Editar Empleado";
  document.getElementById("submit-btn").textContent = "Actualizar";
  document.getElementById("cancel-btn").style.display = "inline-block";

  editingItemId = itemId;
};

/**
 * Maneja el click en botón eliminar
 * @param {Number} itemId - ID del elemento a eliminar
 */
const handleItemDelete = (itemId) => {
  if (!confirm("¿Estás seguro de eliminar este empleado?")) return;

  items = deleteItem(itemId);
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

/**
 * Obtiene los filtros actuales del DOM
 * @returns {Object} Objeto con los valores de los filtros
 */
const getCurrentFilters = () => {
  return {
    status: document.getElementById("filter-status").value,
    category: document.getElementById("filter-category").value,
    priority: document.getElementById("filter-priority").value,
    search: document.getElementById("search-input").value,
  };
};

/**
 * Aplica los filtros actuales y retorna los elementos filtrados
 * @returns {Array} Elementos filtrados
 */
const applyCurrentFilters = () => {
  const filters = getCurrentFilters();
  return applyFilters(items, filters);
};

/**
 * Maneja cambios en los filtros
 */
const handleFilterChange = () => {
  const filteredItems = applyCurrentFilters();
  renderItems(filteredItems);
};

/**
 * Resetea el formulario a su estado inicial
 */
const resetForm = () => {
  document.getElementById("item-form").reset();
  document.getElementById("form-title").textContent = "➕ Nuevo Empleado";
  document.getElementById("submit-btn").textContent = "Crear";
  document.getElementById("cancel-btn").style.display = "none";
  editingItemId = null;
};

// ============================================
// TODO 12: EVENT LISTENERS
// ============================================

/**
 * Adjunta todos los event listeners necesarios
 */
const attachEventListeners = () => {
  document
    .getElementById("item-form")
    .addEventListener("submit", handleFormSubmit);

  document.getElementById("cancel-btn").addEventListener("click", resetForm);

  document
    .getElementById("filter-status")
    .addEventListener("change", handleFilterChange);

  document
    .getElementById("filter-category")
    .addEventListener("change", handleFilterChange);

  document
    .getElementById("filter-priority")
    .addEventListener("change", handleFilterChange);

  document
    .getElementById("search-input")
    .addEventListener("input", handleFilterChange);

  document.getElementById("clear-inactive").addEventListener("click", () => {
    if (confirm("¿Eliminar todos los empleados inactivos?")) {
      items = clearInactive();
      renderItems(applyCurrentFilters());
      renderStats(getStats(items));
    }
  });

  document.getElementById("item-list").addEventListener("click", (e) => {
    const itemElement = e.target.closest(".item");
    if (!itemElement) return;

    const itemId = parseInt(itemElement.dataset.itemId);

    if (e.target.classList.contains("item-checkbox")) {
      handleItemToggle(itemId);
    } else if (e.target.classList.contains("btn-edit")) {
      handleItemEdit(itemId);
    } else if (e.target.classList.contains("btn-delete")) {
      handleItemDelete(itemId);
    } else if (e.target.classList.contains("btn-inactivate")) {
      handleItemToggle(itemId); // reutilizamos la función que alterna activo/inactivo
    }
  });
};

// ============================================
// TODO 13: INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  items = loadItems();
  renderItems(items);
  renderStats(getStats(items));
  attachEventListeners();
  console.log("✅ Sistema de Gestión de RRHH iniciado correctamente");
};

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);

// ============================================
// CHECKLIST DE VERIFICACIÓN
// ============================================
// Después de completar todos los TODOs, verifica:
//
// FUNCIONALIDAD:
// ✓ Puedo crear nuevos elementos
// ✓ Puedo editar elementos existentes
// ✓ Puedo eliminar elementos
// ✓ Puedo marcar como activo/inactivo
// ✓ Los filtros funcionan correctamente
// ✓ La búsqueda funciona en tiempo real
// ✓ Las estadísticas se actualizan
// ✓ Los datos persisten al recargar (localStorage)
//
// CÓDIGO:
// ✓ Uso spread operator para copiar arrays/objetos
// ✓ Uso array methods (map, filter, reduce, find)
// ✓ NUNCA muto el estado directamente
// ✓ Default parameters donde corresponde
// ✓ Destructuring para extraer propiedades
// ✓ Template literals para todo el HTML
// ✓ Comentarios en español
// ✓ Nomenclatura técnica en inglés
//
// DOMINIO:
// ✓ Adaptado completamente a mi dominio asignado
// ✓ Categorías específicas de mi dominio
// ✓ Propiedades adicionales relevantes
// ✓ Emojis y textos coherentes con el dominio
