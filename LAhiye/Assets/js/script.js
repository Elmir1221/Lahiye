"use strict"
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
(function() {
    document.querySelector('.dropdown > a').addEventListener('click', function(e) {
      if (document.querySelector('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);
  })();
  
