// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu domin
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
const baseSalary = 12_000;
const employees = 38;
console.log("Trabajadores activos:", employees);
const totalPay = baseSalary * employees;
console.log("Pago salario de empleados:", totalPay);
const maxEmployees = 45;
const totalEmployes = maxEmployees - employees;
console.log("Cupos de trabajo disponibles:", totalEmployes);
console.log("Maximo de empleados:", maxEmployees);
console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
let totalPayrole = 0;
totalPayrole += 12_000;
console.log("Salario empleado 1:", totalPayrole);
totalPayrole += 12_000;
console.log("Salario empleado 2:", totalPayrole);
totalPayrole *= 1.1; // bonus del 10%
console.log("Bonus ganado de empleados:", totalPayrole);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con ======");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
const daysAbsent = 2;
const isOnTime = daysAbsent === 0;
console.log("Asistencia perfecta?", isOnTime);
const hasPenalty = daysAbsent > 0;
console.log("Tiene fallas de asistencia?", hasPenalty);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
const isFullTime = true;
const performanceScore = 90;

const qualifiesForBonus = isFullTime && performanceScore >= 85;
console.log("Bonus Aplicable?", qualifiesForBonus);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Pago total de empleados:", totalPay);
console.log("Cupos de trabajo disponible:", totalEmployes);
console.log("Empleado elegido para un bono:", qualifiesForBonus);
// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("");
