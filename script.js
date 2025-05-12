    
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("resultsContainer");

    function displayResults(results) {
      resultsContainer.innerHTML = "";
      if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
      }
      results.forEach(item => {
        const div = document.createElement("div");
        div.classList.add('result')
        div.className = "result";
        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <a class="links-btn" href="${item.link}" target="_blank">Visit</a><br>
          <span class="tag">${item.tag}</span>
          <span class="category">${item.category}</span>
        `;
        resultsContainer.appendChild(div);
      });
    }

    searchInput.addEventListener("input", function () {
      const q = this.value.toLowerCase();
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
      displayResults(filtered);
    });

    displayResults(data);

    // Theme toggle
    document.getElementById("toggleTheme").onclick = () => {
      document.body.classList.toggle("dark");
    };

    // Join Card Toggle
    const joinBtn = document.getElementById("joinBtn");
    const joinCard = document.querySelector(".join-card");
    const overlay = document.getElementById("overlay");

    joinBtn.addEventListener("click",()=>{ joinCard.classList.toggle("active")
    });

  overlay.addEventListener("click",()=>{ joinCard.classList.toggle("active")
    });