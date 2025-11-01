
if (document.getElementById('resumeInput')) {
  const rewriteBtn = document.getElementById("rewriteBtn");
  if (rewriteBtn) {
    rewriteBtn.addEventListener("click", () => {
      const getVal = (id) => {
        const el = document.getElementById(id);
        return el && typeof el.value !== 'undefined' ? el.value : "";
      };

      const data = {
        name: getVal("nameInput"),
        title: getVal("titleInput"),
        email: getVal("emailInput"),
        linkedin: getVal("linkedinInput"),
        portfolio: getVal("portfolioInput"),
        skills: getVal("skillsInput"),
        resume: getVal("resumeInput")
      };

      if (!data.resume.trim()) {
        alert("Paste your résumé first.");
        return;
      }

      try {
        localStorage.setItem("resumeData", JSON.stringify(data));
      } catch (e) {
        console.warn("Could not save resume data to localStorage:", e);
      }

      // Navigate to result page
      window.location.href = "result.html";
    });
  } else {
    console.warn("Rewrite button not found on index page: cannot attach click handler.");
  }
}



function createOrb(parent, opts = {}) {
  const orb = document.createElement('div');
  orb.className = 'futuristic-orb';
  const size = opts.size || (20 + Math.random() * 160);
  orb.style.width = size + 'px';
  orb.style.height = size + 'px';
  orb.style.left = (opts.x || Math.random() * 100) + '%';
  orb.style.top = (opts.y || Math.random() * 100) + '%';
  orb.style.animationDelay = (Math.random() * 6) + 's';
  orb.style.opacity = (0.25 + Math.random() * 0.75).toString();
  if (opts.color) orb.style.setProperty('--orb-color', opts.color);
  parent.appendChild(orb);
  return orb;
}

function initFuturisticEffects(count = 6) {
 
  if (document.querySelector('.effects-layer')) return;

  const layer = document.createElement('div');
  layer.className = 'effects-layer';
  document.body.appendChild(layer);

  
  const palette = ['#7a5cff', '#00d4ff', '#ff6b9a', '#00ffb3'];
  for (let i = 0; i < count; i++) {
    createOrb(layer, { color: palette[i % palette.length] });
  }

 
  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    layer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
}

try { initFuturisticEffects(); } catch (e) {}

