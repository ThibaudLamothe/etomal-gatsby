document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".changeNav");
    const navbarBrand = document.querySelector(".navbar-brand");
    const navbarLink = document.querySelectorAll(".nav-link");
    // const navbarHeight = 800;
    const navbarHeight = window.innerHeight;
  
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
  
    if (distanceFromTop >= navbarHeight){
        navbar.classList.add("fixed-topp");
        navbarBrand.classList.add("fixed-topp");
        navbarLink.forEach(function (link) {
            link.classList.add("fixed-topp")
        });
    }
    else {
        navbar.classList.remove("fixed-topp");
        navbarBrand.classList.remove("fixed-topp");
        navbarLink.forEach(function (link) {
            link.classList.remove("fixed-topp")
        });
    }

  });

console.log('SALUT');