/* ============================================
   PROYECTO SEMANA 04
   Dominio: Gestión de Recursos Humanos - Workday
   ============================================ */

// ============================================
// 1. DATOS DEL PROYECTO (STRINGS)
// ============================================

const projectName = "   Reclutamiento de Talento TI   ";
const category = "Recursos Humanos";
const description =
  "Proyecto para optimizar la gestión de contratación y onboarding de empleados en Workday.";
const projectCode = "HR-WD-101";
const status = "En progreso";

// ============================================
// 2. USO DE MÉTODOS DE STRING
// ============================================

// trim() → eliminar espacios innecesarios
const cleanName = projectName.trim();

// toUpperCase()
const nameUpper = cleanName.toUpperCase();

// toLowerCase()
const categoryLower = category.toLowerCase();

// includes() → validar contenido
const hasHR = category.includes("Recursos");

// startsWith()
const startsWithHR = projectCode.startsWith("HR");

// endsWith()
const endsWith101 = projectCode.endsWith("101");

// slice()
const shortDescription = description.slice(0, 50);

// replace()
const newDescription = description.replace("optimizar", "mejorar");

// repeat()
const separator = "=".repeat(50);

// ============================================
// 3. TARJETA / FICHA MULTILÍNEA
// ============================================

const projectCard = `
${separator}
💼  GESTIÓN DE RECURSOS HUMANOS — 3407187
${separator}

Nombre del proyecto: ${nameUpper}
Categoría:          ${categoryLower}
Código del proyecto: ${projectCode}
Estado:             ${status}

Descripción:
${newDescription}

--- Validaciones ---
¿Es RR.HH.?: ${hasHR}
¿Código inicia con HR?: ${startsWithHR}
¿Código termina en 101?: ${endsWith101}

--- Información adicional ---
Resumen: ${shortDescription}...
${separator}
`;

console.log(projectCard);

// ============================================
// 4. MENSAJE CORTO (NOTIFICACIÓN)
// ============================================

const notification = `
📢 Nuevo proyecto de RR.HH. registrado: ${cleanName} (${projectCode})
`;

console.log(notification);

// ============================================
// FIN
// ============================================

console.log("✅ Generador de mensajes de RR.HH. ejecutado correctamente");
