<template>
  <span>
    <div>
      <b-card>
        <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          
          <div class="tableScrollLTS" v-if="$i18n.locale=='fr'">
            <p>Votre budget comprend le poste de dépense suivant :</p>
            <table border="1" class="qTable">
              <thead>
                <tr>
                  <th id="1" scope="col">&nbsp;</th>
                  <th id="2" scope="col">
                    <p><strong>Budget</strong></p>
                  </th>
                  <th id="3" scope="col">
                    <p><strong>Engagement</strong></p>
                  </th>
                  <th id="4" scope="col">
                    <p><strong>Dépenses réelles à ce jour</strong></p>
                  </th>
                  <th id="5" scope="col">
                    <p><strong>Dépenses annuelles prévues&nbsp;</strong></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th id="6" scope="row" headers="1">
                    <p>Salaire</p>
                  </th>
                  <td headers="2 6" class="dollarAlign">
                    <p>60&nbsp;000&nbsp;$</p>
                  </td>
                  <td headers="3 6" class="dollarAlign">
                    <p>20&nbsp;000&nbsp;$</p>
                  </td>
                  <td headers="4 6" class="dollarAlign">
                    <p>40&nbsp;000&nbsp;$</p>
                  </td>
                  <td headers="5 6" class="dollarAlign">
                    <p>60&nbsp;000&nbsp;$</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Your budget contains the following line item:</p>
          <div class="tableScrollLTS" v-if="$i18n.locale=='en'">
            <table border="1" class="qTable">
              <thead>
                <tr>
                  <th id="1" scope="col">&nbsp;</th>
                  <th id="2" scope="col">
                    <p><strong>Budget</strong></p>
                  </th>
                  <th id="3" scope="col">
                    <p><strong>Commitments</strong></p>
                  </th>
                  <th id="4" scope="col">
                    <p><strong>Year-to-Date Actuals</strong></p>
                  </th>
                  <th id="5" scope="col">
                    <p><strong>Annual Forecasted Expenditures</strong></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th id="6" scope="row" headers="1">
                    <p>Salary</p>
                  </th>
                  <td headers="2 6" class="dollarAlign">
                    <p>$60,000</p>
                  </td>
                  <td headers="3 6" class="dollarAlign">
                    <p>$20,000</p>
                  </td>
                  <td headers="4 6" class="dollarAlign">
                    <p>$40,000</p>
                  </td>
                  <td headers="5 6" class="dollarAlign">
                    <p>$60,000</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          
          <div class="tableScrollLTS" v-if="$i18n.locale=='fr'">
            <p>Votre budget comprend les postes de dépenses suivants :</p>
            <table border="1" class="qTable">
              <thead>
                <tr>
                  <th id="7" scope="col">&nbsp;</th>
                  <th id="8" scope="col">
                    <p><strong>Budget</strong></p>
                  </th>
                  <th id="9" scope="col">
                    <p><strong>Engagement</strong></p>
                  </th>
                  <th id="10" scope="col">
                    <p><strong>Dépenses réelles à ce jour</strong></p>
                  </th>
                  <th id="11" scope="col">
                    <p><strong>Dépenses annuelles prévues&nbsp;</strong></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th id="12" scope="row" headers="7">
                    <p>Formation</p>
                  </th>
                  <td header="8 12" class="dollarAlign">
                    <p>8&nbsp;400&nbsp;$</p>
                  </td>
                  <td header="9 12" class="dollarAlign">
                    <p>0$</p>
                  </td>
                  <td header="10 12" class="dollarAlign">
                    <p>2&nbsp;400&nbsp;$</p>
                  </td>
                  <td header="11 12" class="dollarAlign">
                    <p>8&nbsp;400&nbsp;$</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="tableScrollLTS" v-if="$i18n.locale=='en'">
            <p>Your budget contains the following line item:</p>
            <table border="1" class="qTable">
              <thead>
                <tr>
                  <th id="7" scope="col">&nbsp;</th>
                  <th id="8" scope="col">
                    <p><strong>Budget</strong></p>
                  </th>
                  <th id="9" scope="col">
                    <p><strong>Commitments</strong></p>
                  </th>
                  <th id="10" scope="col">
                    <p><strong>Year-to-Date Actuals</strong></p>
                  </th>
                  <th id="11" scope="col">
                    <p><strong>Annual Forecasted Expenditures</strong></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th id="12" scope="row" headers="7">
                    <p>Training</p>
                  </th>
                  <td headers="8 12" class="dollarAlign">
                    <p>$8,400</p>
                  </td>
                  <td headers="9 12" class="dollarAlign">
                    <p>$0</p>
                  </td>
                  <td headers="10 12" class="dollarAlign">
                    <p>$2,400</p>
                  </td>
                  <td headers="11 12" class="dollarAlign">
                    <p>$8,400</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
      </b-tabs>
      </b-card>
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
      "text": "You just remembered that an employee has gone on leave without pay for one month. His yearly salary is $60,000. Where would you change the amount to $55,000?",
      "options": {
        "1": "Under Budget",
        "2": "Under Commitments",
        "3": "Under Year-to-Date Actuals",
        "4": "Under Annual Forecasted Expenditures"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to reduce the budget as you may need this budget to pay overtime or to hire a casual. You would change the amount under Annual Forecasted Expenditures to $55,000.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Although you could decrease your commitments, you would only reduce it by $5,000. $20,000 - ($60,000 &divide; 12 months&nbsp;&times;&nbsp;1 month) = $15,000. You would change the amount under Annual Forecasted Expenditures to $55,000.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to adjust the actuals because the employee did not get paid yet. You would change the amount under Annual Forecasted Expenditures to $55,000.",
        "4": "<span class='v-right' /><strong>Correct!</strong> You need to reduce your Annual Forecasted Expenditures by one month. $60,000 &divide; 12 months&nbsp;&times;&nbsp;11 months = $55,000. "
      },
      "conclusion": ""
    },
    "q2": {
      "text": "In addition to the existing forecasted training, you approved a $1,500 learning plan for a new employee. Looking at the line item provided, which information must be updated?",
      "options": {
        "1": "Increase Commitments and Budget",
        "2": "Increase Commitments and Year-to-Date Actual",
        "3": "Increase Commitments and Annual Forecasted Expenditures"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to increase or decrease the budget. You would change the amount under Commitments to $1,500, to record a soft commitment, and increase the amount of your Annual Forecasted Expenditures by $1,500.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> You would not increase or decrease the Year-to-Date Actuals because you have not yet paid for the course. You would change the amount under Commitments, to $1,500, to record a soft commitment, and increase the amount of your Annual Forecasted Expenditures by $1,500.",
        "3": "<span class='v-right' /><strong>Correct!</strong> You would change the amount under Commitments to $1,500, to record a soft commitment, and increase the amount of your Annual Forecasted Expenditures by $1,500."
      },
      "conclusion": ""
    }
  },
  "fr": {
    "q1": {
      "text": "Vous venez de vous rappeler qu'un employé est en congé sans solde depuis un mois. Son salaire annuel est de 60&nbsp;000&nbsp;$. Où changeriez-vous le montant à 55&nbsp;000&nbsp;$?",
      "options": {
        "1": "Sous « Budget »",
        "2": "Sous « Engagements »",
        "3": "Sous « Dépenses réelles à ce jour »",
        "4": "Sous « Dépenses annuelles prévues »"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Il n’est pas nécessaire de réduire le budget, car vous pourriez en avoir besoin pour payer des heures supplémentaires ou pour embaucher un employé occasionnel. Vous changeriez le montant sous « Dépenses annuelles prévues » pour 55&nbsp;000&nbsp;$.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Même si vous pouviez réduire vos engagements, vous ne les réduiriez que de 5&nbsp;000&nbsp;$. 20&nbsp;000&nbsp;$ - (60&nbsp;000&nbsp;$ &divide; 12 mois&nbsp;X&nbsp;1 mois) = 15&nbsp;000&nbsp;$. Vous changeriez le montant sous « Dépenses annuelles prévues » pour 55&nbsp;000&nbsp;$.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Il n'est pas nécessaire d'ajuster les dépenses réelles parce que l'employé n'a pas encore été payé. Vous changeriez le montant sous « Dépenses annuelles prévues » pour  55 000 $.",
        "4": "<span class='v-right' /><strong>Correct!</strong> Vous devez réduire vos dépenses annuelles prévues d'un mois. 60 000 $ ÷ 12 mois X 11 mois = 55 000 $."
      },
      "conclusion": ""
    },
    "q2": {
      "text": "En plus des formations prévues actuelles, vous avez approuvé un plan d'apprentissage de 1&nbsp;500&nbsp;$ pour un nouvel employé. En examinant le poste de dépenses fourni, quelle information doit être mise à jour?",
      "options": {
        "1": "Augmenter « Engagements » et « Budget »",
        "2": "Augmenter « Engagements » et « Dépenses réelles à ce jour »",
        "3": "Augmenter « Engagements » et « Dépenses annuelles prévues »"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Il n'est pas nécessaire d'augmenter ou de diminuer le budget. Vous changeriez le montant sous « Engagements » pour 1 500 $ afin d’enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues » de 1 500 $.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous n'augmenteriez pas ou ne diminueriez pas les « Dépenses réelles à ce jour » parce que vous n'avez pas payé le cours. Vous changeriez le montant sous « Engagements » pour 1&nbsp;500&nbsp;$ afin d’enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues » de 1&nbsp;500&nbsp;$.",
        "3": "<span class='v-right' /><strong>Correct!</strong> Vous changeriez le montant sous  « Engagements » pour   1&nbsp;500&nbsp;$ afin d’enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues »  de 1&nbsp;500&nbsp;$."
      },
      "conclusion": ""
    }
  }
}</i18n>
<style type="text/css" scoped>
  /*Using a scoped 'deep' selector*/
 .qTable td, .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
 .qTable th[scope="col"]{
  background-color: #7d677d;
  color:#fff;
}

.dollarAlign{
  text-align: right;
}
</style>
