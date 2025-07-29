document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const result = document.getElementById("result");
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  const teamLogos = {
    "chelsea": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    "barcelona": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    "man-city": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
  };

  function updateLogos() {
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    logo1.src = teamLogos[team1];
    logo2.src = teamLogos[team2];
  }

  document.getElementById("team1").addEventListener("change", updateLogos);
  document.getElementById("team2").addEventListener("change", updateLogos);

  button.addEventListener("click", function () {
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    const goals1 = parseFloat(document.getElementById("team1Goals").value);
    const goals2 = parseFloat(document.getElementById("team2Goals").value);

    if (isNaN(goals1) || isNaN(goals2)) {
      result.textContent = "Please enter average goals for both teams.";
      return;
    }

    if (team1 === team2) {
      result.textContent = "Choose two different teams!";
      return;
    }

    if (goals1 > goals2) {
      result.textContent = `${team1} is more likely to win! 🏆`;
    } else if (goals2 > goals1) {
      result.textContent = `${team2} is more likely to win! 🏆`;
    } else {
      result.textContent = "It might be a draw! ⚖";
    }
  });

  updateLogos(); // Set initial logos
});