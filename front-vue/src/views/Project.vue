<template>
    <div class="container">
        <h5 class="modal-title">Votre projet de tatouage</h5>
                
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titre du projet</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description du projet</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Zone à tatouer</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Couleur
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Noir et blanc
                        </label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Prendre rendez-vous</button>

                </form>
    </div>
</template>