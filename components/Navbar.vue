<template lang="">
  <div class="navbar mb-10 bg-base-100">
    <div class="navbar-start">
      <NuxtLink to="/" class="navbar-brand hidden lg:block">
        <img class="h-20" src="../public/logo.webp" alt="logo" />
      </NuxtLink>
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
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li v-for="(page, index) in pages" :key="index">
            <NuxtLink :to="page.to" class="">{{ page.property }}</NuxtLink>
          </li>
          <li>
            <a
              href="https://calendly.com/because-e2g/30min"
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
          <li>
            <a
              href="https://calendly.com/because-e2g/30min"
              target="_blank"
              class=""
              ><button class="btn btn-primary btn-sm lg:hidden">
                Hire me
              </button></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- ANCHOR Desktop items -->
    <div class="navbar-center">
      <NuxtLink to="/" class="navbar-brand lg:hidden">
        <img class="h-20" src="../public/logo.webp" alt="logo" />
      </NuxtLink>
      <ul class="menu menu-horizontal hidden px-1 lg:flex">
        <li v-for="(page, index) in pages" :key="index">
          <NuxtLink :to="page.to" class="">{{ page.property }}</NuxtLink>
        </li>
        <li>
          <a
            href="https://calendly.com/because-e2g/30min"
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
    <div class="navbar-end">
      <a href="https://calendly.com/because-e2g/30min" target="_blank" class="">
        <button class="btn btn-primary hidden lg:flex">Hire me</button>
      </a>
    </div>
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
