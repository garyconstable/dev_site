<template>
    <div class="circle-contact">

        <a class="link" @click="show">Contact me</a>

        <modal name="contact">

            <span @click="hide" class="modal-close">
                <icon :icon="['fa', 'times-circle']"></icon>
            </span>

            <form v-if="show_thanks == false"
                  v-on:submit="submit"
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
                            v-model="name"
                            required
                    />
                </div>
                <div class="form-group w-75">
                    <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="name"
                            v-model="email"
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
                      v-model="message"
                      required
              ></textarea>
                </div>

                <button type="submit" class="btn btn-submit btn-info w-75">
                    Submit
                    <img src="/assets/images/ajax-loader.gif" v-if="show_loading == true" />
                </button>
            </form>

            <div v-if="show_thanks == true"
                 class="contact-thanks">
                <form>
                    <div class="form-group w-75">
                        <h3 style="color:white">Thanks</h3>
                        <p>I will be in contact soon, if you have asked me to do so.</p>
                    </div>
                </form>
            </div>

        </modal>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                name: "",
                email: "",
                message: "",
                show_thanks: false,
                show_loading: false
            };
        },

        methods:{
            reset(){
                this.name = "";
                this.email = "";
                this.message = "";
                this.show_thanks = false;
                this.show_loading = false;
            },
            show () {
                this.$modal.show('contact');
                return false;
            },
            hide () {
                this.$modal.hide('contact');
                this.reset();
                return false;
            },
            submit(event) {
                event.preventDefault();

                let _this = this;
                let data = new FormData();

                _this.show_loading = true;

                data.append('name', this.name);
                data.append('email', this.email);
                data.append('message', this.message);

                axios.post('/mail.php', data)
                .then(function (response) {
                    if(typeof response.data.success != "undefined" && response.data.success == true){
                        _this.show_thanks = true;
                    }
                    _this.show_loading = false;
                })
                .catch(function (error) {
                    _this.show_loading = false;
                });
            },
        }
    };
</script>
