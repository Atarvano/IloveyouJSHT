// --- LATIHAN TOOLING (AST) ---

// Bayangkan kamu sedang membuat plugin Babel.
// Kamu punya AST (Abstract Syntax Tree) sederhana dari kode: "const a = 5;"

const astNode = {
  type: "VariableDeclaration",
  kind: "const", // Ini mau kita ubah jadi "var"
  declarations: [
    {
      type: "VariableDeclarator",
      id: { type: "Identifier", name: "a" },
      init: { type: "Literal", value: 5 }
    }
  ]
};

// TUGAS:
// Buat fungsi 'transform(node)' yang menerima AST node.
// Jika node.kind adalah "const", ubah menjadi "var".
// Ini adalah simulasi transpiler ES6 ke ES5!

function transform(node) {
  // Tulis kodemu di sini
}

transform(astNode);
console.log(astNode.kind); // Harusnya "var"
