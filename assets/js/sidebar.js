(function () {
  const isSubdir = window.location.pathname.includes('/project_pages/');
  const base = isSubdir ? '../' : './';

  const html = `
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="${base}assets/images/personal_image.jpg" alt="Karthik Shaji" width="80">
      </figure>
      <div class="info-content">
        <h1 class="name" title="Karthik Shaji">Karthik Shaji</h1>
        <p class="title">Aerospace/Robotics Engineer</p>
      </div>
      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:kshaji3@gatech.edu" class="contact-link">kshaji3@gatech.edu</a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box"><ion-icon name="logo-linkedin"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">LinkedIn</p>
            <a href="https://www.linkedin.com/in/kshaji3/" class="contact-link">Karthik Shaji</a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box"><ion-icon name="location-outline"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>Atlanta, GA, USA</address>
          </div>
        </li>
      </ul>
    </div>
  </aside>`;

  const placeholder = document.getElementById('sidebar-placeholder');
  if (placeholder) placeholder.outerHTML = html;
})();
