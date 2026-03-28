// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const companyName = "Workday HCM";           // TODO: nombre del elemento (string)
const elementStatus = "active";         // TODO: estado actual (string: "active", "inactive", etc.)
const baseSalary = 1500;          // TODO: valor numérico para clasificar (ocupación, stock, puntaje…)
const rolEmployees = "Empleados";           // TODO: tipo o categoría (string)
const employees = null;           // TODO: objeto con información adicional opcional (puede ser null)

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
 let bono ;
 if (baseSalary >= 1500) {
   bono =("No necesita bono");
 } else if (baseSalary >= 1000) {
   bono =("Tiene un bono de 5%");
 } else {
   bono =("Tiene un bono de 10%");
 }

console.log(`Su salario es de $${baseSalary} ->${bono}`)

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = elementStatus === "active" ? "Activo ✅" : "Inactivo ⚠️";
console.log(`Estado de la empresa: ${statusLabel}`);
;// TODO: implementar con ternario

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }
switch(rolEmployees){
  case "Empleados":
    console.log("Gestion empleados");
    break;
  case "Administrativos":
    console.log("Gestion administrativa");
    break;
  case "Directivos":
    console.log("Gestion administrativa")
    break;
    default:
      console.log("Categoria desconocida")
}



// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const elementName = "";      // TODO: elementName ?? "Sin nombre"
const elementInfo = "";       // TODO: elementInfo?.detail ?? "Sin información adicional"

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin informaciòn adicional";
// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = elementInfo?.location ?? "Ubicaciòn no especificada"; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
 console.log(`Nombre: ${displayName}`);
 console.log(`Estado: ${statusLabel}`);
 console.log(`Salario: $${baseSalary} -> ${bono}`);
 console.log(`Tipo: ${rolEmployees}`);
 console.log(`Detalle: ${infoDetail}`);
 console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));