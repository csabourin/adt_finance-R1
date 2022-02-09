<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p>&nbsp;</p>
            <div class="tableScrollLTS" v-if="$i18n.locale=='fr'">
              <table class="qTable">
                <thead>
                  <tr>
                    <th id="1" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th id="2" scope="col">
                      <p><strong>Engagements</strong></p>
                    </th>
                    <th id="3" scope="col">
                      <p><strong>Dépenses réelles à ce jour</strong></p>
                    </th>
                    <th id="4" scope="col">
                      <p><strong>Dépenses annuelles prévues&nbsp;</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td headers="1" class="dollarAlign">
                      <p>44&nbsp;900&nbsp;$</p>
                    </td>
                    <td headers="2" class="dollarAlign">
                      <p>15&nbsp;053&nbsp;$</p>
                    </td>
                    <td headers="3" class="dollarAlign">
                      <p>17&nbsp;800&nbsp;$</p>
                    </td>
                    <td headers="4" class="dollarAlign">
                      <p>44&nbsp;100&nbsp;$</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tableScrollLTS" v-if="$i18n.locale=='en'">
              <table class="qTable">
                <thead>
                  <tr>
                    <th id="1" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th id="2" scope="col">
                      <p><strong>Commitments</strong></p>
                    </th>
                    <th id="3" scope="col">
                      <p><strong>Year-to-Date Actuals</strong></p>
                    </th>
                    <th id="4" scope="col">
                      <p><strong>Annual Forecasted Expenditures</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td headers="1" class="dollarAlign">
                      <p>$44,900</p>
                    </td>
                    <td headers="2" class="dollarAlign">
                      <p>$15,053</p>
                    </td>
                    <td headers="3" class="dollarAlign">
                      <p>$17,800</p>
                    </td>
                    <td headers="4" class="dollarAlign">
                      <p>$44,100</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <radioQuiz :question="$t('q1')" qId="1" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
          <b-tab title="Question 3">
            <radioQuiz :question="$t('q3')" qId="3" />
          </b-tab>
          <b-tab title="Question 4">
            <radioQuiz :question="$t('q4')" qId="4" />
          </b-tab>
          <b-tab title="Question 5">
            <radioQuiz :question="$t('q5')" qId="5" />
          </b-tab>
          <b-tab title="Question 6">
            <radioQuiz :question="$t('q6')" qId="6" />
          </b-tab>
          <b-tab title="Question 7">
            <radioQuiz :question="$t('q7')" qId="7" />
          </b-tab>
          <b-tab title="Question 8">
            <radioQuiz :question="$t('q8')" qId="8" />
          </b-tab>
          <b-tab title="Question 9">
            <radioQuiz :question="$t('q9')" qId="9" />
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
  ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0

    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "Looking at the budget provided, do you have enough funds to commit to getting goods for $13,000?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Your budget is $44,900, less your commitments of $15,053, less your year-to-date actuals of $17,800. So you only have $12,047 left, which is not enough to commit to getting goods for $13,000."
  },
  "q2": {
  "text": "In general, can a manager authorize both sections 33 and 34 for the same transaction?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "A manager may not authorize sections 33 and 34 for the same transaction. "
  },
  "q3": {
  "text": "Can a manager authorize their own membership fees?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "A manager cannot authorize any transaction for which they may be perceived as having a personal benefit."
  },
  "q4": {
  "text": "Which of the following statements is <u>incorrect</u>.",
  "options": {
  "1": "Financial authorities are delegated to positions, not to individuals.",
  "2": "Approving expenditure initiation and commitments is known as section 32.",
  "3": "A “coding structure” is a method of classifying transactions.",
  "4": "Managers must check to see if an invoice has already been paid before authorizing payment.",
  "5": "Checking to see if payment complies with policy requirements is known as section 34."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "5": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "In fact, this statement is correct. The incorrect statement is “Checking to see if payment complies with policy requirements is known as section 34.”"
  },
  "q5": {
  "text": "What is the best spending mechanism to use for a major renovation at a regional office that your department owns?",
  "options": {
  "1": "Acquisition card",
  "2": "Competitive contract",
  "3": "Standing offer",
  "4": "Supply arrangement"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": " A competitive contract will ensure fairness by allowing renovation contractors to competitively bid on your project, as well as best value for the government and Canadians."
  },
  "q6": {
  "text": "What is the nature of the major renovation?",
  "options": {
  "1": "Asset",
  "2": "Expenditure",
  "3": "Liability",
  "4": "Revenue"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Since it is a major renovation and you are extending the life of the building, it is an asset."
  },
  "q7": {
  "text": "You notice an invoice is $10 higher than it should be, and it is due today. What do you do?",
  "options": {
  "1": "Process the invoice under section 34.",
  "2": "Send it back to the supplier to correct.",
  "3": "Send it to your director while noting the error."
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": " Invoice errors need to be sent back to suppliers for correction. The 30-day due date starts when the department receives the correct invoice."
  },
  "q8": {
  "text": "You have an employee who has used up all their sick leave. You now have a new medical note that says the employee will be on leave for a month. However, you think the leave will be extended for another six months. What do you do?",
  "options": {
  "1": "Immediately decrease the operating and maintenance forecast for one month",
  "2": "Immediately decrease the salary forecast for one month",
  "3": "Immediately decrease the operating and maintenance forecast for six months",
  "4": "Immediately decrease the salary forecast for six months"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.<p>This is salary, not operating and maintenance. You would not want to decrease your salary for six months as you have yet to receive the medical note. You would want to update the system immediately so that you have an accurate salary forecast at all times.</p>",
  "2": "<span class='v-right' /> <strong>Correct!</strong><p>This is salary, not operating and maintenance. You would not want to decrease your salary for six months as you have yet to receive the medical note. You would want to update the system immediately so that you have an accurate salary forecast at all times. The 6 months is just an assumption.</p>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.<p>This is salary, not operating and maintenance. You would not want to decrease your salary for six months as you have yet to receive the medical note. You would want to update the system immediately so that you have an accurate salary forecast at all times.</p>",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>.<p>This is salary, not operating and maintenance. You would not want to decrease your salary for six months as you have yet to receive the medical note. You would want to update the system immediately so that you have an accurate salary forecast at all times.</p>"
  },
  "conclusion": ""
  },
  "q9": {
  "text": "You received the goods on March 31. You know the supplier will not send the invoice until early May. What do you do?",
  "options": {
  "1": "Create a Payable at Year-End.",
  "2": "Create a Receivable at Year-End.",
  "3": "Create an invoice.",
  "4": "All of the above."
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "You would create a Payable at Year-End because you received the goods on March 31 and you will receive the invoice after Finance closes their year-end."
  }
  },
  "fr": {
  "q1": {
  "text": "Compte tenu du budget prévu, avez-vous suffisamment de fonds pour acheter des biens d’une valeur de 13&nbsp;000&nbsp;$?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": " Votre budget est de 44&nbsp;900&nbsp;$, moins vos engagements de 15&nbsp;053&nbsp;$, moins les dépenses réelles à ce jour de 17&nbsp;800&nbsp;$. Il ne vous reste donc plus que 12&nbsp;047&nbsp;$, ce qui n’est pas suffisant pour acheter des biens d’une valeur de 13&nbsp;000&nbsp;$"
  },
  "q2": {
  "text": "En général, un gestionnaire peut-il donner une autorisation en vertu des articles 33 et 34 pour la même transaction?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Un gestionnaire ne peut pas donner une autorisation en vertu des articles 33 et 34 pour la même opération."
  },
  "q3": {
  "text": "Un gestionnaire peut-il autoriser ses propres frais d’adhésion?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Un gestionnaire ne peut autoriser une transaction pour laquelle il peut être  considéré comme pouvant en tirer un avantage personnel."
  },
  "q4": {
  "text": "Lequel des énoncés suivants est <u>incorrect</u>",
  "options": {
  "1": "Les pouvoirs financiers sont délégués à des postes et non à des personnes.",
  "2": "L’approbation du lancement des dépenses et des engagements est connue sous le nom d’article 32.",
  "3": "Une « structure de codage » est une méthode de classification des transactions.",
  "4": "Les gestionnaires doivent vérifier si une facture a déjà été payée avant d’autoriser le paiement.",
  "5": "La vérification de la conformité des paiements aux exigences de la politique s’appelle l’article 34."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "5": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "En fait, cet énoncé est correct. L’énoncé incorrect est  « La vérification de la conformité des paiements aux exigences de la politique s'appelle l'article 34 »."
  },
  "q5": {
  "text": "Quel est le meilleur mécanisme de dépense à utiliser pour effectuer des rénovations importantes dans un bureau régional appartenant à votre ministère?",
  "options": {
  "1": "Carte d’achat",
  "2": "Contrat concurrentiel",
  "3": "Offre à commandes",
  "4": "Arrangement en matière d’approvisionnement"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Un contrat concurrentiel assurera l’équité en permettant aux entrepreneurs en rénovation de soumissionner de façon concurrentielle pour votre projet et d’assurer la meilleure valeur pour le gouvernement et les Canadiens."
  },
  "q6": {
  "text": "Quelle est la nature des rénovations importantes?",
  "options": {
  "1": "Actif",
  "2": "Dépenses",
  "3": "Passif",
  "4": "Revenu"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Puisqu’il s’agit d’une rénovation importante et que vous prolongez la durée de vie de l’immeuble, c’est un actif."
  },
  "q7": {
  "text": "Vous remarquez qu’une facture est supérieure de 10 $ à ce qu’elle devrait être et qu’elle est exigible aujourd’hui. Que faites-vous?",
  "options": {
  "1": "Traiter la facture en vertu de l’article 34",
  "2": "Renvoyer-la au fournisseur pour qu'il corrige l’erreur.",
  "3": "Envoyer-la à votre directeur en notant l’erreur"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Les erreurs de facturation doivent être renvoyées aux fournisseurs pour correction. La date d’échéance de 30 jours commence lorsque le ministère reçoit la bonne facture."
  },
  "q8": {
  "text": "Vous avez un employé qui a épuisé tous ses congés de maladie. Vous avez maintenant une nouvelle note médicale qui dit qu'il sera en congé pour un mois. Cependant, vous pensez que le congé sera prolongé de 6 mois. Que faites-vous?",
  "options": {
  "1": "Diminuer immédiatement les prévisions de fonctionnement et d’entretien pour un mois.",
  "2": "Diminuer immédiatement les prévisions salariales pour un mois.",
  "3": "Diminuer immédiatement les prévisions de fonctionnement et d’entretien sur 6 mois.",
  "4": "Diminuer immédiatement les prévisions salariales pour 6 mois."
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>. <p>C'est un salaire, pas du fonctionnement et d’entretien. Vous ne voudriez pas diminuer votre salaire pendant 6 mois car vous n'avez pas encore reçu la note médicale. Vous devriez mettre à jour le système immédiatement afin d'avoir une prévision salariale précise en tout temps.</p>",
  "2": "<span class='v-right' /> <strong>Correct!</strong> <p>C'est un salaire, pas du fonctionnement et d’entretien. Vous ne voudriez pas diminuer votre salaire pendant 6 mois, car vous n'avez pas encore reçu la note médicale. Vous devriez mettre à jour le système immédiatement afin d'avoir une prévision salariale précise à tout moment. Le délai de 6 mois n’est qu’une hypothèse.</p>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>. <p>C'est un salaire, pas du fonctionnement et d’entretien. Vous ne voudriez pas diminuer votre salaire pendant 6 mois car vous n'avez pas encore reçu la note médicale. Vous devriez mettre à jour le système immédiatement afin d'avoir une prévision salariale précise en tout temps.</p>",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>. <p>C'est un salaire, pas du fonctionnement et d’entretien. Vous ne voudriez pas diminuer votre salaire pendant 6 mois car vous n'avez pas encore reçu la note médicale. Vous devriez mettre à jour le système immédiatement afin d'avoir une prévision salariale précise en tout temps.</p>"
  },
  "conclusion": ""
  },
  "q9": {
  "text": "Vous avez reçu les marchandises le 31 mars. Vous savez que le fournisseur ne facturera pas avant le début du mois de mai. Que faites-vous?",
  "options": {
  "1": "Créer un créditeur à la fin de l'exercice.",
  "2": "Créer une créance à la fin de l’exercice.",
  "3": "Créer une facture.",
  "4": "Toutes ces réponses."
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong> Vous créeriez un montant à payer à la fin de l'exercice parce que vous avez reçu les biens le 31 mars et vous recevrez la facture après que le ministère des Finances aura terminé la fin de son exercice.",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong> Une créance à la fin de l’exercice est créée pour une créance. Seul le fournisseur peut vous fournir la facture. Vous créeriez un montant à payer à la fin de l’exercice parce que vous avez reçu les biens le 31 mars et que vous recevrez la facture après que le ministère des Finances aura terminé la fin de son exercice.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong> Une créance à la fin de l’exercice est créée pour une créance. Seul le fournisseur peut vous fournir la facture. Vous créeriez un montant à payer à la fin de l’exercice parce que vous avez reçu les biens le 31 mars et que vous recevrez la facture après que le ministère des Finances aura terminé la fin de son exercice.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong> Une créance à la fin de l’exercice est créée pour une créance. Seul le fournisseur peut vous fournir la facture. Vous créeriez un montant à payer à la fin de l’exercice parce que vous avez reçu les biens le 31 mars et que vous recevrez la facture après que le ministère des Finances aura terminé la fin de son exercice."
  }
  }
  }
  }</i18n>
<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
.qTable td,
.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

.qTable th {
  background-color: #7d677d;
  color: #fff;
}

.dollarAlign{
  text-align: right;
}

</style>
