   document.addEventListener('DOMContentLoaded', () => {

    window.scrollTo(0, 0);

      // Navbar Hamburger
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
      
      window.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }
      });
     
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        });
      });

      //  Tampilkan Semua Anggota
      const anggotaGrid = document.getElementById('anggota-grid');
      const anggotaCards = anggotaGrid.querySelectorAll('.card');
      const maxAnggotaToShow = 8;

      if (anggotaCards.length > maxAnggotaToShow) {
        for (let i = maxAnggotaToShow; i < anggotaCards.length; i++) {
          anggotaCards[i].style.display = 'none';
        }
      
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Tampilkan Semua Anggota';
        toggleButton.className = 'btn-toggle-anggota';
        anggotaGrid.parentNode.appendChild(toggleButton);

        let isShowingAll = false;
        toggleButton.addEventListener('click', () => {
            isShowingAll = !isShowingAll;
            for (let i = maxAnggotaToShow; i < anggotaCards.length; i++) {
                anggotaCards[i].style.display = isShowingAll ? 'flex' : 'none';
            }
            toggleButton.textContent = isShowingAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Semua Anggota';
        });
      }

      // Sistem Galeri
      const thumbnails = document.querySelectorAll('.thumbnail');
      const featured = document.getElementById('featured');
      const title = document.getElementById('galleryTitle');
      const desc = document.getElementById('galleryDesc');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      let currentIndex = 0;

      function updateGallery(index) {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        const activeThumbnail = thumbnails[index];
        activeThumbnail.classList.add('active');
        featured.style.opacity = '0';
        setTimeout(() => {
            featured.src = activeThumbnail.dataset.img;
            title.textContent = activeThumbnail.dataset.title;
            desc.textContent = activeThumbnail.dataset.desc;
            featured.style.opacity = '1';
        }, 300); 
        currentIndex = index;
      }

      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateGallery(index));
      });

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateGallery(currentIndex);
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateGallery(currentIndex);
      });

     // card jadwal dropdown
      const dropdownCards = document.querySelectorAll('.card-dropdown');

      dropdownCards.forEach(card => {
          card.addEventListener('click', () => {
             
              const isAlreadyActive = card.classList.contains('active');

              dropdownCards.forEach(c => {
                  c.classList.remove('active');
              });

           
              if (!isAlreadyActive) {
                  card.classList.add('active');
              }
          });
      });

    });