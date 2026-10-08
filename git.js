// ==========================================================================
// 1. DYNAMIC PROJECTS DATA & RENDERING
// ==========================================================================
const projectsData = [
  {
    title: "Student Portfolio Website",
    tags: ["HTML/CSS", "JavaScript"],
    description: "A personal portfolio website showcasing academic background, skills, and projects with a responsive CSS grid system and custom dropdown animations.",
    link: "https://github.com/Mjardio22",
    icon: "💻 Web App"
  },
  {
    title: "Android Utility Application",
    tags: ["MIT App Inventor", "Mobile"],
    description: "A mobile application built using block-based programming designed to solve daily student productivity tasks and simplify utility management.",
    link: "https://github.com/Mjardio22",
    icon: "📱 Mobile App"
  },
  {
    title: "Interactive Dashboard",
    tags: ["React.js", "REST API"],
    description: "A dynamic frontend web application powered by React components and live external API integrations for real-time data visual displays.",
    link: "https://github.com/Mjardio22",
    icon: "⚡ React App"
  }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project) => `
    <article class="project-card">
      <div class="project-image-wrapper">
        <div class="project-placeholder">${project.icon}</div>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-links">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-btn">GitHub Code</a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

// ==========================================================================
// 2. INTERACTIVE MENU & NAVIGATION BEHAVIOR
// ==========================================================================
function setupMenuInteractions() {
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Visual tap/click feedback animation
      link.style.transform = "scale(0.97)";
      setTimeout(() => {
        link.style.transform = "none";
      }, 150);

      // Smooth scrolling
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
}

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupMenuInteractions();
});