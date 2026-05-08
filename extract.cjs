const fs = require('fs');
const vsl = fs.readFileSync('src/pages/VSL.tsx', 'utf8');
const quiz = fs.readFileSync('src/pages/Quiz.tsx', 'utf8');
const sales = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

function extractText(str) {
  let text = str.replace(/<[^>]+>/g, ' ');
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

console.log("=== COPY DA PÁGINA 1 (VSL) ===");
console.log(extractText(vsl));
console.log("\\n=== COPY DO QUIZ ===");
console.log(extractText(quiz));
console.log("\\n=== COPY DA PÁGINA FINAL (VENDAS) ===");
console.log(extractText(sales));
