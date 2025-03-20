//Résérvation :

// validation de formulair

function validateForm() {

    // Récupérer les valeurs des champs

    const nom = document.getElementById('Nom').value.trim();
    const prenom = document.getElementById('Prénom').value.trim();
    const telephone = document.getElementById('Téléphone').value.trim();
    const rendezVous = document.getElementById('Rendez-vous').value.trim();
    const service = document.getElementById('formation').value.trim();

    // Récupérer les éléments d'alerte

    const errorAlert = document.getElementById('errorAlert');
    const successAlert = document.getElementById('successAlert');

    // Vérifier si un champ est vide

    if (!nom || !prenom || !telephone || !rendezVous || !service) {

        // Afficher un message d'erreur

        errorAlert.innerHTML = 'Veuillez remplir tous les champs obligatoires.';
        errorAlert.classList.remove('d-none');
        successAlert.classList.add('d-none'); // Cacher le message de succès
    }
    else {

        // Afficher un message de validation

        successAlert.innerHTML = 'Tous les champs sont remplis. Formulaire validé !';
        successAlert.classList.remove('d-none');
        errorAlert.classList.add('d-none'); // Cacher le message d'erreur

        // Optionnel : Fermer le modal après validation

        const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();
    }
}
