function initialize() {
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
    

      $(document).scroll(function() {
        $(".html").animate({ width: "85%" }, 3000);
        $(".css").animate({ width: "80%" }, 3000);
        $(".js").animate({ width: "75%" }, 3000);
        $(".bootstrap").animate({ width: "70%" }, 3000);
        $(".jquery").animate({ width: "70%" }, 3000);
      });

      let projectContainer = document.querySelector(".project-container");
      for(let i = 0; i < projects.length; i++){
        projectContainer.innerHTML += `
          <div class="project-item" data-aos="flip-left" data-aos-offset="200" data-aos-delay="50" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" data-aos-mirror="true" data-aos-once="false">
            <div class="project-img" style="background-image: url('${projects[i].img}.png')" ></div>
            <div class="project-url">
              <a href="${projects[i].url}" target="_blank">${projects[i].name}</a>
            </div>
          </div>
        `;
      }
  }
