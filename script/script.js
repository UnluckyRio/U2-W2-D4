// Script per mostrare/nascondere la sezione Saldi
document.getElementById("toggleSaldi").addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.getElementById("saldiSection");
  if (section.style.display === "none") {
    section.style.display = "";
    this.textContent = "Nascondi sezione";
  } else {
    section.style.display = "none";
    this.textContent = "Mostra sezione";
  }
});
// Script per mostrare/nascondere la sezione Welcome Summer
document.getElementById("toggleSummer").addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.getElementById("summerSection");
  if (section.style.display === "none") {
    section.style.display = "";
    this.textContent = "Nascondi sezione";
  } else {
    section.style.display = "none";
    this.textContent = "Mostra sezione";
  }
});

// Funzione per contare i viaggi (card con bottone 'Prenota') e mostrare il risultato in un alert
// Si attiva al click del bottone 'Conta viaggi'
document.addEventListener("DOMContentLoaded", function () {
  const contaBtn = document.getElementById("contaViaggiBtn");
  if (contaBtn) {
    contaBtn.addEventListener("click", function () {
      // Seleziona tutti i bottoni con testo 'Prenota'
      const prenotaBtns = Array.from(
        document.querySelectorAll("a.btn, button.btn")
      ).filter((btn) => btn.textContent.trim().toLowerCase() === "prenota");
      // Mostra il risultato in un alert
      alert(`Numero di viaggi trovati: ${prenotaBtns.length}`);
    });
  }
});
