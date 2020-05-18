<template>
    <div class="circle-contact">
        <a class="link" href="#" @click="show">Contact me</a>

        <modal name="contact">

            <span @click="hide" class="modal-close">
                <icon :icon="['fa', 'times-circle']"></icon>
            </span>

            <form v-on:submit="submit"
                    class="contact-form d-flex flex-column align-items-center"
                    action="/"
                    method="POST"
                    id="signup-form"
            >

                <h1>Get in touch</h1>

                <div class="form-group w-75">
                    <input
                            type="name"
                            class="form-control"
                            placeholder="Name"
                            name="name"
                            required
                    />
                </div>
                <div class="form-group w-75">
                    <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="name"
                            required
                    />
                </div>

                <div class="form-group w-75">
              <textarea
                      class="form-control"
                      type="text"
                      placeholder="Message"
                      rows="7"
                      name="name"
                      required
              ></textarea>
                </div>

                <button type="submit" class="btn btn-submit btn-info w-75">Submit</button>
            </form>



        </modal>

    </div>
</template>

<script>
    export default {

        // mounted() {
        //     const signupForm = document.getElementById('signup-form');
        //     signupForm.addEventListener('submit', this.processSignupForm()) ;
        // },

        methods:{
            show () {
                this.$modal.show('contact');
            },
            hide () {
                this.$modal.hide('contact');
            },
            submit(event) {
                event.preventDefault();
                console.log('submit');

                /*
                this.errors = {};
                axios.post('/submit', this.fields).then(response => {
                    alert('Message sent!');
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
                */
            },
        }
    };
</script>
