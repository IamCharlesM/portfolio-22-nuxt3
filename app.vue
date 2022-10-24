<template>
  <div
    class="hero min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black"
  >
    <div class="w-full h-screen">
      <div class="mx-20">
        <div class="text-2xl mt-10">
          <div class="mb-5">
            <span v-for="(page, index) in pages" :key="index">
              import { {{ page.property }} } from '{{ page.property }}'; <br />
            </span>
          </div>

          <div>
            /* Here is some information about me, skills are links to projects.
            */
          </div>
          <span class="text-success"> let my = {</span>
          <div class="text-primary indent-8">
            <p class="">name : "Charles McGregory",<br /></p>
            <p class="">profession : "Full-Stack Developer",<br /></p>
            <p class="">skills : [ <br /></p>
          </div>

          <div class="w-2/3 h-fit ml-16">
            <span
              v-for="(skill, index) in skills"
              :key="index"
              class="link break-normal"
            >
              "{{ skill.name }}"<span class="text-white"> ,</span>
            </span>
          </div>
          <div class="text-primary">
            ],

            <br />
            },
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          property: "home",
          location: "/",
        },
        {
          property: "projects",
          location: "/projects",
        },
      ],
      skills: [
        { name: "Python" },
        { name: "Amazon Web Services" },
        { name: "AWS Lambda" },
        { name: "Nuxt.js" },
        { name: "Full-Stack Development" },
        { name: "AngularJS" },
        { name: "javascript" },
        { name: "DevOps" },
        { name: "Django" },
        { name: "Linux" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Docker" },
      ],
    };
  },
};
</script>
<style lang=""></style>
