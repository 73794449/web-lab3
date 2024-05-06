<template>
  <div>
    <footer class="my-5 pt-5 text-muted text-center text-small darker">
      <p class="mb-1">{{ companyInfo }}</p>
      <ul class="list-inline-item">
          <a href="" @click="goToLink">{{ link.text }}</a>
      </ul>
    </footer>
  </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        companyInfo: '@t3ry444y company 2024',
        link: 
          {
            id: 1,
            text: 'About',
          },
        
      };
    },
    methods: {
      goToLink()
      {
        this.$router.push({name: 'About page'});
      }
    }
  };
  </script>