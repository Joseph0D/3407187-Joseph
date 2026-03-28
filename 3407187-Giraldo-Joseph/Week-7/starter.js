// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Gestion Recursos Humanos]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor



 // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";
const DOMAIN_NAME = "Gestion Recursos Humanos";
const VALUE_LABEL = "Pago"; // Ej: "precio", "cantidad", "duración"

// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
 const users = [

   { id: 1, name: "Miguel Torres", category: "Desarrollador Backend", value: 4700, active: true },
   { id: 2, name: "Sofía Martínez", category: "Diseñador UX/UI", value: 4200, active: false },
   { id: 3, name: "Ana Gómez",   category: "Desarrollador Frontend", value: 4500, active: true},
   { id: 4, name: "Carlos Pérez", category: "Analista de Recursos Humanos", value: 3800, active: true },
   { id: 5, name: "Laura Rodríguez", category: "Gerente de Proyecto", value: 6000, active: true },

 ];

  // TODO: Agrega tus elementos aquí

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

const formatUser = (user) => {
  // TODO: Implementar usando template literals
  // 1. Incluir el nombre del elemento
  // 2. Incluir la categoría o tipo
  // 3. Incluir el valor numérico relevante
  return ` ${user.name} - Cargo: ${user.category} - ${VALUE_LABEL} $${user.value}`; // TODO: Expandir este template
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

const calculateValue = (value, quantity = 1, adjustmentcPct = 0) => {
  // value: sueldo base del empleado
  // quantity: número de unidades relevantes (días, meses, horas, etc.)
  // adjustmentPct: porcentaje de ajuste (bonificación o descuento)
  // TODO: Implementar el cálculo relevante para tu dominio
  return value * quantity * (1 + adjustmentcPct / 100);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

const isValid = (user) => user.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;

const formatWithDefault = (value, label = VALUE_LABEL, currency = "USD", bonus = 0) => {
  const total = value + bonus;
    // TODO: Implementar con parámetros por defecto relevantes al dominio
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================
console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (users.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const user of users) {
    console.log(`  ${lineNumber}. ${formatUser(user)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const user of users) {
    if (isValid(user)) validCount++;
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${users.length}`);
 
  // --- Cálculo ---
  let totalValue = 0;
  for (const user of users) {
    totalValue += calculateValue(user.value ?? 0);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`, "USD"));

  // --- Promedio opcional ---
  const averageValue = totalValue / users.length;
  console.log(formatWithDefault(averageValue, `Promedio ${VALUE_LABEL}`, "USD"));
}

console.log(`\n${"═".repeat(45)}\n`);