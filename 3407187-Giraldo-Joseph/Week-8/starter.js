// ============================================
// SEMANA 08 — PROYECTO: Gestión de Recursos Humanos
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "usuarios", "empleados", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Gestion Recursos Humanos"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "Usuarios";                 // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tus usuarios
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del usuario
//   - [propiedad numérica]: salario, puntuación, etc.
//   - [propiedad booleana]: active
//   - [otras 2+ propiedades relevantes a tu dominio]

const items = [
  { id: 1, name: "Miguel Torres", category: "Desarrollador Backend", salary: 4700, active: true, department: "TI" },
  { id: 2, name: "Sofía Martínez", category: "Diseñador UX/UI", salary: 4200, active: true, department: "Diseño" },
  { id: 3, name: "Ana Gómez", category: "Desarrollador Frontend", salary: 4500, active: true, department: "TI" },
  { id: 4, name: "Carlos Pérez", category: "Analista RRHH", salary: 3800, active: false, department: "RRHH" },
  { id: 5, name: "Laura Rodríguez", category: "Gerente de Proyecto", salary: 6000, active: true, department: "Gestión" },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo usuario
 * @param {Object} newUser - Usuario a agregar
 */
const addItem = (newUser) => {
  items.push(newUser);
  console.log(`Agregado: ${newUser.name}`);
};

/**
 * Elimina el último usuario
 * @returns {Object} El usuario eliminado
 */
const removeLastItem = () => {
  const removed = items.pop();
  if (removed) console.log(`Eliminado último usuario: ${removed.name}`);
  return removed;
};

/**
 * Agrega un usuario prioritario al inicio
 * @param {Object} priorityUser - Usuario a agregar con prioridad
 */
const addPriorityItem = (priorityUser) => {
  items.unshift(priorityUser);
  console.log(`Usuario prioritario agregado: ${priorityUser.name}`);
};

/**
 * Elimina un usuario por su posición (índice)
 * @param {number} index - Posición del usuario a eliminar
 */
const removeByIndex = (index) => {
  if (index >= 0 && index < items.length) {
    const removed = items.splice(index, 1)[0];
    console.log(`Eliminado usuario en índice ${index}: ${removed.name}`);
  }
};

/**
 * Obtiene todos los usuarios activos
 * @returns {Array} Array de usuarios activos
 */
const getActiveItems = () => {
  return items.filter((item) => item.active);
};

/**
 * Busca un usuario por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El usuario encontrado o undefined
 */
const findByName = (name) => {
  return items.find((item) => item.name === name);
};

/**
 * Formatea un usuario para mostrar en el reporte
 * @param {Object} user - Usuario a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (user) => {
  return `[${user.id}] ${user.name} - Cargo: ${user.category} - Salario: $${user.salary} - Activo: ${user.active ? "Sí" : "No"} - Departamento: ${user.department}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Lista de usuarios inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((user) => console.log(`  ${formatItem(user)}`));

console.log("\n--- Operaciones de mutación ---\n");

// Agregar un nuevo usuario
addItem({ id: 6, name: "Pedro Sánchez", category: "Soporte Técnico", salary: 3900, active: true, department: "TI" });

// Agregar usuario prioritario
addPriorityItem({ id: 0, name: "Directora General", category: "Directora", salary: 9000, active: true, department: "Gestión" });

// Eliminar un usuario del medio
removeByIndex(3);

// Eliminar el último usuario
removeLastItem();

console.log("\n--- Lista de usuarios después de mutaciones ---\n");
items.forEach((user) => console.log(`  ${formatItem(user)}`));

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar un usuario específico
const searchName = "Laura Rodríguez";
const found = findByName(searchName);
console.log(found ? `🔍 Encontrado: ${formatItem(found)}` : `🔍 ${searchName} no encontrado`);

// Mostrar usuarios activos
const activeUsers = getActiveItems();
console.log(`\nUsuarios activos (${activeUsers.length}):`);
activeUsers.forEach((user) => console.log(`  ${formatItem(user)}`));

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Nuevo Contratado", category: "Practicante", salary: 2500, active: true, department: "RRHH" }];
console.log("\nSnapshot inmutable con nuevo usuario agregado:");
snapshot.forEach((user) => console.log(`  ${formatItem(user)}`));

console.log("\n--- Transformación con map ---\n");

// Array con solo los nombres
const names = items.map((user) => user.name);
console.log("Nombres de usuarios:", names.join(", "));

// Array con salarios aumentados 10%
const salaryIncrease = items.map((user) => ({ ...user, salary: +(user.salary * 1.1).toFixed(2) }));
console.log("\nSalarios con aumento del 10%:");
salaryIncrease.forEach((user) => console.log(`  ${user.name}: $${user.salary}`));

console.log("\n--- Resumen final ---\n");
console.log(`Total de usuarios: ${items.length}`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);