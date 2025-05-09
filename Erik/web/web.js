const equipos = [
    // España
    { nombre: "Real Madrid", pais: "España", imagen: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
    { nombre: "FC Barcelona", pais: "España", imagen: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" },
    { nombre: "Atlético de Madrid", pais: "España", imagen: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg" },
  
    // Inglaterra
    { nombre: "Manchester United", pais: "Inglaterra", imagen: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" },
    { nombre: "Manchester City", pais: "Inglaterra", imagen: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
    { nombre: "Liverpool", pais: "Inglaterra", imagen: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
  
    // Alemania
    { nombre: "Bayern Múnich", pais: "Alemania", imagen: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg" },
    { nombre: "Borussia Dortmund", pais: "Alemania", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg" },
  
    // Francia
    { nombre: "Paris Saint-Germain", pais: "Francia", imagen: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" },
    { nombre: "Olympique Lyonnais", pais: "Francia", imagen: "https://upload.wikimedia.org/wikipedia/en/c/c6/Olympique_Lyonnais.svg" },
  
    // Italia
    { nombre: "Juventus", pais: "Italia", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg" },
    { nombre: "AC Milan", pais: "Italia", imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg" },
    { nombre: "Inter de Milán", pais: "Italia", imagen: "https://upload.wikimedia.org/wikipedia/en/0/05/Inter_Milan.svg" },
  
    // Sudamérica
    { nombre: "River Plate", pais: "Argentina", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Escudo_del_Club_Atlético_River_Plate.svg" },
    { nombre: "Boca Juniors", pais: "Argentina", imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Boca_Juniors_logo18.svg" },
    { nombre: "Flamengo", pais: "Brasil", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/15/Clube_de_Regatas_do_Flamengo_logo.svg" },
    { nombre: "Palmeiras", pais: "Brasil", imagen: "https://upload.wikimedia.org/wikipedia/en/6/60/Palmeiras_logo.svg" },
  
    // EE.UU. y otros
    { nombre: "LA Galaxy", pais: "Estados Unidos", imagen: "https://upload.wikimedia.org/wikipedia/en/2/2d/Los_Angeles_Galaxy_logo.svg" },
    { nombre: "Toronto FC", pais: "Canadá", imagen: "https://upload.wikimedia.org/wikipedia/en/4/4d/Toronto_FC_2010_logo.svg" },
  ];
  
  const teamList = document.getElementById('teamList');
  const searchInput = document.getElementById('searchInput');
  
  function mostrarEquipos(lista) {
    teamList.innerHTML = '';
    lista.forEach(team => {
      const div = document.createElement('div');
      div.className = 'team-card';
      div.innerHTML = `
        <img src="${team.imagen}" alt="${team.nombre}" class="team-logo" />
        <div class="team-info">
          <div class="team-name">${team.nombre}</div>
          <div class="country">País: ${team.pais}</div>
        </div>
      `;
      teamList.appendChild(div);
    });
  }
  
  searchInput.addEventListener('input', () => {
    const filtro = searchInput.value.toLowerCase();
    const filtrados = equipos.filter(equipo =>
      equipo.nombre.toLowerCase().includes(filtro) ||
      equipo.pais.toLowerCase().includes(filtro)
    );
    mostrarEquipos(filtrados);
  });
  
  // Mostrar todos al principio
  mostrarEquipos(equipos);
    