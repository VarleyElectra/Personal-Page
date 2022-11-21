<template>
    <header class="header">
      <div class="container header__container">
        <a href="" class="header__logo"><img src="@/assets/img/logo.svg" alt="logo image"></a>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item"><a href="#home" class="menu__link">Home</a></li>
            <li class="menu__item"><a href="#tools" class="menu__link">Tools</a></li>
            <li class="menu__item"><a href="#work" class="menu__link">Works</a></li>
            <li class="menu__item"><a href="#about" class="menu__link">About</a></li>
          </ul>
        </nav>
        <div class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "TheHeader",
  mounted() {
    const menuBtn = document.querySelector('.menu__icon');
    const menu = document.querySelector('.menu__list');
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })

    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
      })

      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menuBtn.classList.toggle('active')
          menu.classList.toggle('active')
        })
      })
    }

    const root = document.querySelector('#__nuxt')
    const nav = root.querySelector('nav');

    root.querySelectorAll('.observe').forEach(section => {
      new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
            let id = entry.target.getAttribute('id');
            nav.querySelector(`a[href="#${id}"]`).classList.add('active');
          }
        })
      }, {
        threshold: 0.5,
      }).observe(section);
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 35px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #010208;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  width: 64px;
}
.menu__list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 32px;
}
.menu__list.active {
  transform: translateX(0);
}
.menu__link.active {
  @include main-gradient;
  @include text-gradient;
}
.menu__link.active::before {
  opacity: 1;
  visibility: visible;
}
.menu__link:hover{
  @include main-gradient;
  @include text-gradient;
}
.menu__link:hover::before {
  opacity: 1;
  visibility: visible;
  transition: 1s;
}
.menu__link {
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: $textSubColor;
  text-decoration: none;
  position: relative;
}
.menu__link::before {
  content: '';
  width: 100%;
  height: 3px;
  border-radius: 15px;
  @include main-gradient;
  position: absolute;
  bottom: -8px;
  opacity: 0;
  visibility: hidden;
}
.menu__icon {
  display: none;
  width: 30px;
  height: 18px;
  position: relative;
  z-index: 5;
  cursor: pointer;
}
.menu__icon span {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 100%;
  height: 2px;
  background-color: $textSubColor;
  transition: all .2s;
}
.menu__icon span:first-child {
  top: 0;
}
.menu__icon span:last-child {
  top: auto;
  bottom: 0;
}
.menu__icon.active span {
  transform: scale(0);
}
.menu__icon.active span:first-child {
  transform: rotate(-45deg);
  top: calc(50% - 1px);
}
.menu__icon.active span:last-child {
  transform: rotate(45deg);
  bottom: calc(50% - 1px);
}

@media (max-width: 768px) {
  .header {
    padding: 15px 15px;
  }
}

@media (max-width: 576px) {
  .menu__icon {
    display: block;
  }
  .menu__list {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $mainBgColor;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
  }
  .menu__link {
    font-size: 30px;
  }
}
</style>