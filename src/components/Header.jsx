const Header = () => {
  return (
    <header>
      <nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#testimonials">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <button id="theme-btn" onClick={function(e) { 
                let newText = (e.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode");
                let oldThemeClass = (e.innerText === "Dark Mode" ? "dark-mode" : "light-mode");
                let newThemeClass = (e.innerText === "Dark Mode" ? "light-mode" : "dark-mode");

                document.getElementById('theme-btn').innerText = newText;

                let elementsToUpdateClass = document.getElementsByClassName(oldThemeClass);
                for(let i = 0; i < elementsToUpdateClass.length; i++) {
                  debugger;
                  elementsToUpdateClass[i].classList.remove(oldThemeClass);
                  elementsToUpdateClass[i].classList.add(newThemeClass);
                }
             }}>theme button</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
