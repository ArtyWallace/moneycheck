<template>
  <div class="menu">
    <div class="menu__header">
      Home-CRM
    </div>
    <div class="menu__account">
      <div class="menu__account-img">
        <div
          v-html="require('@/assets/img/user.svg')"
        />
      </div>
      <div class="menu__account-info">
        <div class="menu__account-info-name">Firstname Lastname</div>
        <div class="menu__account-info-email">test@mail.com</div>
      </div>
    </div>
    <div class="menu__nav">
      <router-link
        v-for="(item, index) in navLinks"
        :key="index"
        :to="item.link"
      >
        <div class="menu__nav-item">
          <span
            class="menu__nav-item-img"
            v-html="require(`@/assets/img/icons/${item.img}`)"
          />
          <span
            class="menu__nav-item-title"
          >{{ item.title }}</span>
        </div>
      </router-link>
    </div>
    <div class="menu__logout">
      <router-link to="/login">
        <div
          class="menu__logout-img"
          v-html="require('@/assets/img/icons/logout.svg')"
        />
        <span>Выход</span>
      </router-link>
    </div>
    <div class="menu__nav"></div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    navLinks: [
      {
        title: 'Обзор',
        link: '/',
        img: 'explore.svg'
      },
      {
        title: 'Планирование',
        link: '/planning',
        img: 'money.svg'
      },
      {
        title: 'Детали',
        link: '/details',
        img: 'details.svg'
      },
      {
        title: 'Настройки',
        link: '/settings',
        img: 'settings.svg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.menu {
  max-width: 250px;
  height: 100vh;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  position: relative;
  &__header {
    color: $accent-blue;
    font-weight: 600;
    padding: 17px 24px;
    border-bottom: 1px solid #EBEFF2;
  }
  &__account {
    display: flex;
    align-items: center;
    padding: 24px;
    margin-bottom: 45px;
    &-img {
      width: 46px;
      height: 46px;
      margin-right: 15px;
    }
    &-info {
      &-name {
        color: $black;
        font-size: $main-font;
        font-weight: 500;
        margin-bottom: 2px;
      }
      &-email {
        color: $gray;
        font-size: $small-font;
        font-weight: 500;
      }
    }
  }
  &__nav {
    display: flex;
    flex-direction: column;
    padding: 24px;
    &-item {
      display: flex;
      align-items: center;
      flex-direction: row;
      transition: all .3s ease-in;
      margin-bottom: 20px;
      color: $dark-blue-text;
      font-weight: 500;
      fill: $icon-gray;
      &-img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
      &:hover {
        color: $accent-blue;
        fill: $accent-blue;
      }
    }
  }
  &__logout {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 24px;
    border-top: 1px solid #EBEFF2;
    & a {
      display: flex;
      align-items: center;
      color: $red;
      fill: $red;
      opacity: .7;
      font-size: $title;
      font-weight: 500;
      transition: all .3s ease-in;
      &:hover {
        opacity: 1;
      }
    }
    &-img {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }
  }
}
</style>