<template lang="">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <!-- ANCHOR Mobile items -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="(page, index) in pages" :key="index">
            <nuxtLink :to="page.to" class="">{{ page.property }}</nuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- ANCHOR Desktop items -->
    <div class="navbar-center hidden lg:flex">
      <ul
        class="menu menu-horizontal px-1"
        v-for="(page, index) in pages"
        :key="index"
      >
        <li>
          <nuxtLink :to="page.to" class="">{{ page.property }}</nuxtLink>
        </li>
        <li>
          <a
            href="https://calendly.com/d/44j-vwq-mtv/30-minute-meeting"
            target="_blank"
            class=""
            >Work with me</a
          >
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1iU0btnTA44hugqX1iixqxUWb-Nl92XZbhwmcqvL32aQ/edit#heading=h.rlsx4o5b4mpo"
            target="_blank"
            class=""
            >Resume</a
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>

<script setup>
const pages = [
  {
    property: "home",
    to: "/",
  },
  {
    property: "projects",
    to: "/project",
  },
];
</script>
