<template>
  <div
    class="hero min-h-screen max-w-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black sticky overflow-x-clip"
  >
    <div class="w-screen min-h-screen my-5">
      <div class="mx-5 lg:mx-20">
        <!-- ANCHOR Main content -->
        <div class="text-sm md:text-xl lg:text-xl md:mb-10 mb-1">
          <div class="text-yellow-600 mb-5">
            <span class="text-white"> import {</span>
            <span v-for="(page, index) in pages" :key="index">
              <nuxtLink
                :to="page.to"
                class="btn btn-sm btn-ghost px-1 md:text-xl lg:text-xl link"
                >"{{ page.property }}"<span
                  class="text-white hover:bg-transparent"
                >
                  ,</span
                ></nuxtLink
              >
            </span>
            <a
              href="https://docs.google.com/document/d/1iU0btnTA44hugqX1iixqxUWb-Nl92XZbhwmcqvL32aQ/edit#heading=h.rlsx4o5b4mpo"
              target="_blank"
            >
              <span class="btn btn-sm btn-ghost md:text-xl lg:text-xl link"
                >"Resume"<span class="text-white hover:bg-transparent">
                  ,</span
                ></span
              ></a
            >
            <a
              href="https://calendly.com/d/44j-vwq-mtv/30-minute-meeting"
              target="_blank"
            >
              <span class="btn btn-sm btn-ghost md:text-xl lg:text-xl link"
                >"Work with me"</span
              ></a
            >
            <span class="text-white">} from links; </span>
          </div>

          <div class="text-yellow-600 mb-5 md:mb-5">
            /* A Full-stack Software Developer with 3+ years of industry
            experience */
          </div>
          <span class="text-white">let </span
          ><span class="text-primary">my = {</span>
          <div class="text-primary indent-8">
            <p class="">
              name: <span class="text-yellow-600"> "Charles McGregory"</span
              ><span class="text-white">,</span>
            </p>
            <p class="">
              profession:
              <span class="text-yellow-600">
                "Full-stack Software Developer"</span
              ><span class="text-white">,</span>
            </p>
            <p class="">skills: <span class="text-info">[</span></p>
          </div>

          <!-- ANCHOR Skills loop -->
          <div class="md:w-2/3 lg:w-2/3 md:ml-16 lg:ml-16">
            <span v-for="(tag, index) in data.tags" :key="index">
              <span
                v-if="tag.name != '#projects'"
                class="btn btn-sm pr-0 btn-ghost hover:bg-transparent hover:animate-pulse md:text-xl lg:text-xl text-yellow-600 link normal-case"
                >"{{ tag.name }}"</span
              ><span class="text-white hover:bg-transparent"
                ><span v-if="tag.name != '#projects'">,</span></span
              >
            </span>
          </div>

          <div class="indent-6 text-info">],</div>
          <div class="text-primary">},</div>
        </div>

        <div class="md:text-xl lg:text-xl text-white">
          <p class="text-yellow-600">// Network with me</p>
          <div class="flex flex-row">
            <div
              v-for="(social, index) in socials"
              :key="index"
              class="md:text-xl lg:text-xl mr-2 link"
            >
              <a
                :href="social.link"
                class="btn btn-sm btn-ghost bg-slate-800 my-5 md:text-xl lg:text-xl"
              >
                <Icon :icon="social.icon" />
                {{ social.name }}
              </a>
            </div>
          </div>
          <div class="flex flex-col space-y-5 overflow-auto">
            <div class="flex flex-row space-x-5">
              <p class="text-yellow-600">// Most recent posts</p>
              <span class="text-yellow-600 lg:hidden">Swipe 👉🏿</span>
            </div>

            <Posts
              class="flex flex-row space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const { data, pending } = useFetch(
  "https://content.charlesisa.dev/ghost/api/content/tags/?key=5d8b3cdb92a539dede4ee744a0"
);

const pages = ref([
  {
    property: "home",
    to: "/",
  },
  {
    property: "projects",
    to: "/project",
  },
]);

const socials = ref([
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/forcharles/",
    icon: "mdi:linkedin",
  },
  {
    name: "Github",
    link: "https://github.com/IamCharlesM/",
    icon: "mdi:github",
  },
]);
</script>
