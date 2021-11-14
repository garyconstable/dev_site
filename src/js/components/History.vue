<template>
  <div class="mt-5">
    <h4 class="bold-title display-4">Work history</h4>
    <div v-for="item in items" :key="item.idx" class="row history-item">
      <div class="col-lg-4 mt-3">
        <h5 class="title" v-html="item.title"></h5>
        <p class="date">{{ item.dateString }}</p>
      </div>
      <div class="col-lg-8 mt-3">
        <div class="description">
          <span v-html="item.description"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          idx: 0,
          title: "Magento 2 Developer, Pixie Media",
          dateString: "Feb 2020 — Present",
          description: `<p>As a magento 2 developer I mainly work with the frontend developing:</p>
          <ul>
          <li>Themes</li>
          <li>Extensions</li>
          <li>Bug fixing &amp; customizing a number of Magento 2 stores.</li>
          <li>Adobe Commerce - Cloud.</li>
          <li>PHP, CSS, jQuery, XML</li>
          </ul>`
        },
        {
          idx: 1,
          title: "Laravel Developer, Optix Solutions (Contract)",
          dateString: "Jul 2019 — Feb 2020",
          description: `<p>As a contracted php web developer :</p>
          <ul>
          <li>I helped to develop Laravel & Vue.js web applications while maintaining legacy php systems.</li>
          </ul>
          `
        },
        {
          idx: 2,
          title: "Magento 2 Developer, Kodal",
          dateString: "Nov 2018 — Jul 2019",
          description: `
            <p>My duties would include web development using:</p>
            <ul>
            <li>Magento 2</li>
            <li>Craft CMS</li>
            <li>HTML & CSS</li>
            <li>jQuery</li>
            <li>VueJs</li>
            </ul>
            `
        },
        {
          idx: 3,
          title: `PHP Developer,<br><small>Bigwave media</small>`,
          dateString: "Sep 2017 — Nov 2018",
          description: `<p>As a senior developer / team leader the work at Bigwave media would include:</p>
            <ul>
            <li>Wordpress, theme and plugin development</li>
            <li>Vue Js</li>
            <li>Project Estimation</li>
            <li>Scrum Story Pointing</li>
            <!--<li>Using JIRA</li>-->
            <li>Server Administration (WHM, CPanel & Terminal)</li>
            <li>Mentoring Junior Developers</li>
            <li>Mobile App Development with Xamarin</li>
            </ul>
            `
        },
        {
          idx: 4,
          title: "Frontend Developer<br><small>Yello Studio</small>",
          dateString: "Jul 2014 — Jul 2017",
          description: `
            <p>As a frontend developer my duties would include:</p>
            <ul>
            <li>Writing object oriented PHP with MySQL databases</li>
            <li>Mobile App Development with IONIC / PhoneGap</li>
            <li>Developing CMS Modules / Addons / Plugins</li>
            <li>Working with MVC frameworks / Craft / Wordpress</li>
            <li>Developing e-commerce systems with Prestashop / Opencart + Version control, GIT</li>
            <li>Automated Deployment with Mina</li>
            <li>Front end technologies HTML5, CSS3, Javascript / jQuery</li>
            <li>Templating with Twig</li>
            <li>Javascript Frame works, Angular JS (Version 1)</li>
            <li>Google Maps / Distance Matrix Integrations</li>
            <li>Integration with various payment APIs including Stripe and Paypal</li>
            <li>An understanding of search engine optimisation</li>
            <li>Liaising with clients to produce solutions to their requirements</li>
            <li>Awareness and compliance with up to date web standards and practices + Linux servers & LAMP stack</li>
            <li>Working to a deadline</li>
            </ul>
            `
        },
        {
          idx: 5,
          title: "Web Developer<br><small>AB UK</small>",
          dateString: "Apr 2012 — Jul 2014",
          description: `<p>As a developer at Ab my duties would include:</p>
          <ul>
          <li>Frontend & PHP Web devlopment</li>
          <li>Wesbite development with MODX and custom inhouse CMS</li>
          <li>PSD to HTML</li>
          </ul>
          `
        },
        {
          idx: 6,
          title: "Frontend Developer<br><small>Accord Group LTD</small>",
          dateString: "Aug 2011 — Apr 2012",
          description: `<p>Fresh out of uni, my duties would include:</p>
          <ul>
          <li>PSD to HTML</li>
          <li>HTML Emails</li>
          <li>Bug fixing PHP</li>
          <li>Adding new features to websites</li>
          </ul>
          `
        }
      ]
    };
  }
};
</script>
