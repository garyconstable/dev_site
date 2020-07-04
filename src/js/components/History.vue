<template>
    <div class="mt-5">
        <h4 class="bold-title display-4">History</h4>
        <div v-for="item in items" class="row history-item">
            <div class="col-lg-4 mt-3">
                <h5 class="title">{{item.title}}</h5>
                <p class="date">{{item.dateString}}</p>
            </div>
            <div class="col-lg-8 mt-3">
                <div class="description">
                    <p>{{item.description}}</p>
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
                        title: 'Magento 2 Developer, Pixie Media',
                        dateString: 'Feb 2020 — Present',
                        description: 'I build themes, extensions and customise a number of Magento stores.'
                    },
                    {
                        title: 'Laravel Developer, Optix Solutions (Contract)',
                        dateString: 'Jul 2019 — Feb 2020',
                        description: 'I currently develop Websites and Web Applications using Laravel & Vue.js while maintaining legacy php systems.'
                    },
                    {
                        title: 'Magento 2 Developer, Kodal',
                        dateString: 'Nov 2018 — Jul 2019',
                        description: 'Duties Include PHP development using:\n' +
                            '+ Magento 2 + Craft CMS\n' +
                            '+ Python Scripting + HTML & CSS\n' +
                            '+ jQuery & VueJs'
                    },
                    {
                        title: 'LAMP Developer, Bigwave media',
                        dateString: 'Sep 2017 — Nov 2018',
                        description: 'As a senior developer / team leader the work at Bigwave media would include:\n' +
                            '+ Wordpress Development\n' +
                            '+ Joomla Development (Maintaining old websites) + Laravel Development\n' +
                            '+ Vue Js\n' +
                            '+ Project Estimation\n' +
                            '+ Scrum Story Pointing\n' +
                            '+ Using JIRA\n' +
                            '+ Server Administration (WHM & CPanel)\n' +
                            '+ Mentoring Junior Developers\n' +
                            '+ Mobile App Development with Xamarin'
                    },
                    {
                        title: 'Web Developer, Yello Studio',
                        dateString: 'Jul 2014 — Jul 2017',
                        description: 'Duties include:\n' +
                            '+ Writing object oriented PHP with MySQL databases\n' +
                            '+ Mobile App Development with IONIC / PhoneGap\n' +
                            '+ Developing CMS Modules / Addons / Plugins\n' +
                            '+ Working with MVC frameworks / Craft / Wordpress\n' +
                            '+ Developing e-commerce systems with Prestashop / Opencart + Version control, GIT\n' +
                            '+ Automated Deployment with Mina\n' +
                            '+ Front end technologies HTML5, CSS3, Javascript / jQuery\n' +
                            '+ Javascript Frame works, Angular JS\n' +
                            '+ Google Maps / Distance Matrix Integrations\n' +
                            '+ Integration with various payment APIs including Stripe and Paypal\n' +
                            '+ An understanding of search engine optimisation\n' +
                            '+ Liaising with clients to produce solutions to their requirements\n' +
                            '+ Awareness and compliance with up to date web standards and practices + Linux servers & LAMP stack\n' +
                            '+ Working to a deadline'
                    },
                    {
                        title: 'Web Developer, AB UK',
                        dateString: 'Apr 2012 — Jul 2014',
                        description: 'Frontend and PHP Web development with MODX and custom CMS.'
                    },
                    {
                        title: 'Frontend Developer, Accord Group LTD',
                        dateString: 'Aug 2011 — Apr 2012',
                        description: 'Frontend and PHP Web development, PSD to HTML'
                    }
                ]
            };
        },
    };
</script>
