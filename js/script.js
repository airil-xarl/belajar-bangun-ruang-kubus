// LATIHAN SCAFFOLDING
let percobaan = 0;

function cekLatihan() {
  let jawaban = document.getElementById("jawaban").value;
  let feedback = document.getElementById("feedback");
  let hint = document.getElementById("hint");

  if (jawaban == 64) {
    feedback.innerHTML = "Selamat! Jawaban kamu benar 🎉";
    hint.innerHTML = "";
  } else {
    percobaan++;

    feedback.innerHTML = "Coba lagi ❌";

    if (percobaan == 1) {
      hint.innerHTML = "Hint: Gunakan rumus volume kubus (s³)";
    } else if (percobaan == 2) {
      hint.innerHTML = "Hint: 4 × 4 × 4 = ?";
    } else {
      hint.innerHTML = "Jawaban: 64";
    }
  }
}

// UJIAN
function hitungSkor() {
  let skor = 0;

  if (document.getElementById("q1").value == 27) skor++;
  if (document.getElementById("q2").value == 24) skor++;

  let hasil = document.getElementById("hasil");

  if (skor == 2) {
    hasil.innerHTML = "🎉 Skor 100! Kamu sudah paham!";
  } else if (skor == 1) {
    hasil.innerHTML = "👍 Skor 50! Lumayan, tingkatkan lagi!";
  } else {
    hasil.innerHTML = "😢 Skor 0! Yuk belajar lagi!";
  }
}