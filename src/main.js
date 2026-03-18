import { roles } from './roles.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const teamSelect = document.getElementById('team-select');
  const btnDraw1 = document.getElementById('btn-draw-1');
  const btnDraw2 = document.getElementById('btn-draw-2');
  const btnDraw3 = document.getElementById('btn-draw-3');
  const resultsContainer = document.getElementById('results');
  const resultsPlaceholder = document.getElementById('results-placeholder');

  // Logic Variables
  let rolesByTeam = {};

  // Initialization
  function init() {
    processRoles();
    populateTeamSelect();
    setupEventListeners();
  }

  // 1. Parse and Group Roles by Team
  function processRoles() {
    rolesByTeam = roles.reduce((acc, role) => {
      const team = role.team;
      if (!acc[team]) {
        acc[team] = [];
      }
      acc[team].push(role);
      return acc;
    }, {});
  }

  // 2. Populate Dropdown
  function populateTeamSelect() {
    // Clear existing options
    teamSelect.innerHTML = '';

    const teams = Object.keys(rolesByTeam).sort();

    teams.forEach(team => {
      const option = document.createElement('option');
      option.value = team;
      // Capitalize the first letter of each word
      option.textContent = team.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

      // Default to "townsfolk"
      if (team.toLowerCase() === 'townsfolk') {
        option.selected = true;
      }
      teamSelect.appendChild(option);
    });

    // Fallback if 'townsfolk' didn't exist in data
    if (!teamSelect.value && teams.length > 0) {
      teamSelect.selectedIndex = 0;
    }
  }

  // 3. Setup Listeners
  function setupEventListeners() {
    btnDraw1.addEventListener('click', () => drawCharacters(1));
    btnDraw2.addEventListener('click', () => drawCharacters(2));
    btnDraw3.addEventListener('click', () => drawCharacters(3));
  }

  // Draw Logic
  function drawCharacters(count) {
    const selectedTeam = teamSelect.value;
    const availableRoles = [...(rolesByTeam[selectedTeam] || [])];

    // Safety check just in case there are fewer available characters than requested
    const actualCount = Math.min(count, availableRoles.length);

    if (actualCount === 0) {
      displayMessage("No characters available in this team.");
      return;
    }

    const selectedRoles = [];

    // Fisher-Yates style random selection
    for (let i = 0; i < actualCount; i++) {
      const randomIndex = Math.floor(Math.random() * availableRoles.length);
      // Remove and push the selected role
      selectedRoles.push(availableRoles.splice(randomIndex, 1)[0]);
    }

    renderCards(selectedRoles);
  }

  function displayMessage(message) {
    if (resultsPlaceholder) {
      resultsPlaceholder.style.display = 'none';
    }
    resultsContainer.innerHTML = `<div class="p-6 text-center text-error font-medium">${message}</div>`;
  }

  // 4. Render the Character Cards
  function renderCards(selectedRoles) {
    // Hide placeholder if it hasn't been removed yet
    if (resultsPlaceholder) {
      resultsPlaceholder.style.display = 'none';
    }

    // Clear previous results
    resultsContainer.innerHTML = '';

    selectedRoles.forEach((role, index) => {
      let alignment = "";
      switch (role.team.toLowerCase()) {
        case "townsfolk":
        case "outsider":
          alignment = "_g";
          break;
        case "minion":
        case "demon":
          alignment = "_e";
          break;
        default:
          alignment = "";
      }

      const imgSrc = `https://script.bloodontheclocktower.com/src/assets/icons/${role.edition}/${role.id}${alignment}.webp`;

      const cardHTML = `
        <div class="role-card select-none card card-side bg-base-100 shadow-xl border border-base-200 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out rounded-3xl cursor-pointer transition-all ring-4 ring-transparent hover:border-primary/50" style="animation-delay: ${index * 75}ms; animation-fill-mode: both;">
          <div class="card-body p-4 sm:p-5 flex-row items-center gap-4 pointer-events-none">
            
            <figure class="w-20 h-20 flex-shrink-0 bg-base-200 rounded-full border border-base-300 p-1">
              <img src="${imgSrc}" alt="${role.name}" class="w-full h-full object-contain rounded-full bg-slate-100/10" 
                onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%236b7280\\'%3E%3Cpath stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M12 4v16m8-8H4\\'%3E%3C/path%3E%3C/svg%3E';" 
              />
            </figure>
            
            <div class="flex-1 min-w-0">
              <h2 class="card-title text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-max max-w-full">${role.name}</h2>
              <p class="text-sm text-base-content/80 mt-1 leading-snug">${role.ability}</p>
            </div>
            
          </div>
        </div>
      `;

      resultsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Add click event listeners to the new cards
    const cards = document.querySelectorAll('.role-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Check if this card is currently selected
        const isSelected = card.classList.contains('ring-primary');

        // Remove highlight from all cards
        cards.forEach(c => {
          c.classList.remove('ring-primary', 'border-primary');
          c.classList.add('ring-transparent', 'border-base-200');
        });

        // If it wasn't selected before, select it now
        if (!isSelected) {
          card.classList.remove('ring-transparent', 'border-base-200');
          card.classList.add('ring-primary', 'border-primary');
        }
      });
    });
  }

  // Run initialization
  init();
});
