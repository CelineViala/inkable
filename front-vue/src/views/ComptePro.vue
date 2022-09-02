<template>

    <section class="border-bottom pb-3 mb-3 gradient-custom">
        <div class="container py-5 h-10">

            <div class="row d-flex justify-content-center align-items-center h-100">

                <div class="col-8">

                    <div class="card bg-dark text-white" style="border-radius: 1rem;">

                        <div class="card-body p-4 text-center">

                            <div class="flex-shrink-0">
                                <img :src="this.editPro.profile_picture_path_pro" alt="Generic placeholder image"
                                    class="img-fluid" style="width: 180px; border-radius: 10px;" />
                            </div>

                            <h3>{{ this.editPro.studio_name }}</h3>

                            <h3>{{ this.editPro.city }}</h3>

                        </div>

                        <h4>Modifier mes informations</h4>

                        <div class="card-body p-4 text-center">

                            <form>

                                <div class="mb-3">
                                    <label for="studioName" class="form-label">Nouveau nom de studio</label>
                                    <input v-model="editPro.studio_name" type="text" class="form-control"
                                        id="studioName">
                                </div>

                                <div class="mb-3">
                                    <label for="city" class="form-label">Nouvelle ville</label>
                                    <input v-model="editPro.city" type="text" class="form-control" id="city">
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Nouvel Email</label>
                                    <input v-model="editPro.email" type="email" class="form-control" id="email">
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="form-label">Nouveau mot de passe</label>
                                    <input v-model="editPro.password" type="password" class="form-control"
                                        id="password">
                                </div>

                                <div class="mb-3">
                                    <label for="confirmPassword" class="form-label">Confirmer le nouveau mot de
                                        passe</label>
                                    <input v-model="editPro.passwordConfirm" type="password" class="form-control"
                                        id="confirmPassword">
                                </div>

                                <div class="mb-3">
                                    <label for="file" class="form-label">Selectionner une nouvelle photo de
                                        profil</label>
                                    <input @change="handleFile" class="form-control" type="file" id="formFile">
                                </div>

                                <div class="mb-3">
                                    <label for="description" class="form-label">Une courte description de votre
                                        salon</label>
                                    <textarea v-model="editPro.description" class="form-control"
                                        id="description"></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="instagram" class="form-label">Nouveau compte Instagram</label>
                                    <input v-model="editPro.instagram" type="text" class="form-control" id="instagram">
                                </div>

                                <!-- Colroation des tatouages -->
                                <div class="mb-3">

                                    <h4>Coloration des tatouages</h4>

                                    <div class="form-outline form-white mb-4 form-check-inline">
                                        <input v-model="editPro.color" class="form-check-input" type="checkbox"
                                            value="color" id="color">
                                        <label class="form-check-label-inline" for="color">
                                            Tatouages couleur
                                        </label>
                                    </div>

                                    <div class="form-outline form-white mb-4 form-check-inline">
                                        <input v-model="editPro.black_and_white" class="form-check-input"
                                            type="checkbox" value="bAndW" id="bAndW">
                                        <label class="form-check-label-inline" for="bAndW">
                                            Tatouages noir et blanc
                                        </label>
                                    </div>

                                </div>

                                <!-- Style des tatouages -->
                                <div class="mb-3">

                                    <h4>Styles de tatouages</h4>
                                    <div v-for="style in this.$store.state.styles"
                                        class="form-outline form-white mb-4 form-check-inline">
                                        <input v-model="editPro.styles" class="form-check-input" type="checkbox"
                                            :value="style" :id="style">
                                        <label class="form-check-label-inline" :for="style">
                                            {{ style }}
                                        </label>
                                    </div>
                                </div>


                                <button @click="editProfile" type="submit" class="btn btn-primary">Modifier mes
                                    informations</button>

                            </form>

                        </div>

                        <!-- Bouton supprimer -->
                        <div class="card-body p-4 text-center">
                            <button type="button" class="btn btn-danger">Supprimer mon compte</button>
                        </div>

                        <p class="text-success">{{ this.successMessage }}</p>
                        <p class="text-danger">{{ this.errorMessage }}</p>

                    </div>


                </div>


            </div>
            <!--Message de contact  -->
            <div class="card-body p-4 text-center text-white">
                <p>Pour signaler tout problèmes de comportement, images inappropriées ou bug technique, merci de nous
                    contacter à : superequipe@onestcool.com</p>
            </div>

        </div>
    </section>


</template>

<script>
export default {
    name: 'ComptePro',
    data() {
        return {
            mail: null,
            picture: false,
            editPro: {
                styles: [],
                color: false,
                black_and_white: false
            },
            pro: {},
            successMessage: null,
            errorMessage: null
        }
    },
    async created() {



        this.axios
            .get(`http://localhost:3000/api/pro/${this.$store.state.user.id}`)
            .then((response) => {
                console.log(response.data)

                this.editPro.studio_name = response.data.studio_name;
                this.editPro.black_and_white = response.data.black_and_white;
                this.editPro.color = response.data.color;
                this.editPro.city = response.data.city;
                // this.editPro.password=response.data.password;
                // this.editPro.passwordConfirm=this.editPro.password;
                this.editPro.email = response.data.email;
                this.mail = response.data.email;
                this.editPro.description = response.data.description;
                this.editPro.instagram = response.data.instagram;
                this.editPro.profile_picture_path_pro = response.data.profile_picture_path_pro;
                this.editPro.styles = response.data.styles.map((item) => item.name)


            })
            .catch((err) => {
                console.log(err);
                return
            })

    },
    methods: {
        addInputPicture: function () {
            const parentElm = this.$refs.containerInputs;
            const inputElm = document.createElement('input');
            inputElm.setAttribute("type", "file");
            inputElm.classList.add("form-control");
            inputElm.addEventListener("change", this.handleFile);
            parentElm.appendChild(inputElm);


        },
        handleFile: async function (e) {
            this.$store.dispatch('createRequestObjForCloudinary', e);

            this.picture = true
        },
        async editProfile(e) {
            e.preventDefault();
            console.log(this.editPro);
            if (this.editPro.password === '')
                delete this.editPro.password;
            if (this.editPro.passwordConfirm === '')
                delete this.editPro.passwordConfirm;
            if (this.editPro.password !== undefined && this.editPro.passwordConfirm === undefined) {
                this.errorMessage = " Vous devez  confirmer votre mot de passe"
            }
            else {
                // si le mail n'a pas été modifié il faut supprimer la donnée car sinon on aura une erreur d'utilisateur déjà existant côté back
                if (this.editPro.email === this.mail)
                    delete this.editPro.email;
                else
                    this.mail=this.editPro.email;
                if (this.picture) {
                    try {
                        let img = await this.$store.dispatch('handleUploadToCloudinary')
                        this.editPro.profile_picture_path_pro = img.url;
                    } catch (error) {
                        console.log(error)
                    }
                }
                this.axios
                    .patch(`http://localhost:3000/api/pro/${this.$store.state.user.id}`, this.editPro)
                    .then((response) => {
                        console.log(response.data);
                        this.errorMessage = null;
                        this.successMessage = "Vos informations ont bien été modifiées.";
                        this.picture = false;
                        this.editPro.email = this.mail;
                        setTimeout(() => {
                            this.successMessage = null;
                        }, 2000);

                    })
                    .catch((err) => {
                        console.log(err);
                        console.log(this.mail)
                        this.editPro.email = this.mail;
                        this.errorMessage = err.response.data.message;

                    })
            }
        }
    }
}


</script>