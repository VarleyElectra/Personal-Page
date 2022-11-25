<template>
    <header class="header">
      <div class="container header__container">
        <div class="header__logo">
          <svg class="header__svg" width="100%" height="100%" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z" fill="#80EEC0"/>
            <path d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z" fill="#00DC82"/>
          </svg>
        </div>
        <nav ref="nav" class="header__menu">
          <ul ref="menu" @click="changeMenuLink" class="menu__list">
            <li class="menu__item"><a href="#home" class="menu__link">Home</a></li>
            <li class="menu__item"><a href="#tools" class="menu__link">Tools</a></li>
            <li class="menu__item"><a href="#work" class="menu__link">Works</a></li>
            <li class="menu__item"><a href="#about" class="menu__link">About</a></li>
          </ul>
        </nav>
        <div ref="menuBtn" @click="menuToggle" class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
  const menuBtn = ref(null);
  const menu = ref(null);
  const nav = ref(null);

  function menuToggle() {
    menuBtn.value.classList.toggle('active')
    menu.value.classList.toggle('active')
  }

  function changeMenuLink(event) {
    if (event.target.classList.contains('menu__link')) {
      menuToggle()
    }
  }

  onMounted(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    const root = document.querySelector('#__nuxt')

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

    root.querySelectorAll('.observe').forEach(section => {
      new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nav.value.querySelectorAll('a').forEach(link => link.classList.remove('active'))
            let id = entry.target.getAttribute('id');
            nav.value.querySelector(`a[href="#${id}"]`).classList.add('active');
          }
        })
      }, {
        threshold: 0.5,
      }).observe(section);
    })
  })
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

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 64px;
  }

  &__svg path:nth-child(1) {
    fill: $primaryColor;
  }

  &__svg path:nth-child(2) {
    fill: $subColor;
  }
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