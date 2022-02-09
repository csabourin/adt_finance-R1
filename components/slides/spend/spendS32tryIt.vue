<template>
  <div>
    <span v-if="$i18n.locale=='en'">
      <p>To deliver on your work plan, one of your activities requires the purchase of 10 microscopes for your team. Each microscope costs $200.</p>
      <p>First, let’s check your budget.</p>
      <table border='1'>
        <thead>
          <tr style="background-color: #7D677D; color: white;">
            <th id="1" scope="col">
              <p>Budget</p>
            </th>
            <th id="2" scope="col">
              <p>Commitment</p>
            </th>
            <th id="3" scope="col">
              <p>Year-to-Date Actuals</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="1">
              <p class="text-right">$44,900</p>
            </td>
            <td headers="2">
              <p class="text-right">$15,000</p>
            </td>
            <td headers="3">
              <p class="text-right">$29,000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
    <span v-if="$i18n.locale=='fr'">
      <p>Pour réaliser votre plan de travail, l’une de vos activités exige que vous achetiez 10 microscopes pour votre équipe. Chaque microscope coûte 200&nbsp;$.</p>
      <p>D’abord, vérifions votre budget.</p>
      <table border='1'>
        <thead>
          <tr style="background-color: #7D677D; color: white;">
            <th id="1" scope="col">
              <p>Budget</p>
            </th>
            <th id="2" scope="col">
              <p>Engagements </p>
            </th>
            <th id="3" scope="col">
              <p>Dépenses réelles à ce jour</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="1">
              <p class="text-right">44&nbsp;900 $</p>
            </td>
            <td headers="2">
              <p class="text-right">15&nbsp;000 $</p>
            </td>
            <td headers="3">
              <p class="text-right">29&nbsp;000 $</p>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
    <b-card>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
          <!--<br>
          <br>
          <SignatureCard />-->
          <windowPortal :open="openCard" @close="openCard = false">
            <b-container style="margin-top: 25px; margin-bottom: 25px;">
              <b-row>
                <b-col>
                  <signatureCard />
                </b-col>
              </b-row>
            </b-container>
          </windowPortal>
          <p><b-button @click="openCard = true">{{$t('openCard')}}</b-button></p>
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
      </b-tabs>
        <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>
<script type="text/javascript">
  
  import checkboxQuiz from "~/components/checkboxQuiz"
  import radioQuiz from "~/components/radioQuiz"
  import SignatureCard from "~/components/delegationChart/signatureCard"
  import windowPortal from "~/components/newWindow"
  
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
      SignatureCard,
      windowPortal
    },
    data(){
      return {
        tabIndex:0,
        openCard: false
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

<style scoped>

  th, td{
    padding: 0.5em;
  }

</style>

<i18n>
  {
    "en": {
      "openCard": "Open the specimen signature card",
      "q1": {
        "text": "Do you have enough funds to cover the cost of the microscopes?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Out of a $44,900 budget, you have committed $15,000 and spent $29,000. So $44,000 is already accounted for. This means there is only $900 left in your budget."
      },
      "q2": {
        "text": "Look at the specimen delegation card provided. If there had been enough funds in the budget, would the manager have the required delegated authority to initiate and commit the funds?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-right' /> <strong>Correct!</strong>",
          "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
        },
        "conclusion": "The manager has the authority to initiate and commit the funds needed for the microscopes."
      },
      "q3": {
        "text": "What is the best spending mechanism to use to purchase the microscopes?",
        "options": {
          "1": "Acquisition card",
          "2": "Competitive contract",
          "3": "Supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-right' /> <strong>Correct!</strong>",
          "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
        },
        "conclusion": "Given that it is only $2,000 for 10 microscopes, the acquisition card is the best spending mechanism."
      },
      "q4": {
        "text": "Assuming that you are able to purchase the microscopes, what is the nature of this financial transaction?",
        "options": {
          "1": "Revenue ",
          "2": "Expenditure",
          "3": "Asset",
          "4": "Liability"
        },
        "feedback": {
          "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "2": "<span class='v-right' /> <strong>Correct!</strong>",
          "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
        },
        "conclusion": "Given that it is only $2,000 for 10 microscopes, it is an expenditure. If you had purchased more microscopes or at a higher unit price, it could have been considered an asset. Consult your department to find out your limits."
      },
      "q5": {
        "text": "A training course is required on how to use the new microscopes. Can you approve your own training course expense?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "2": "<span class='v-right' /> <strong>Correct!</strong>"
        },
        "conclusion": "Since the purchase can be perceived as a personal benefit, you will have to ask your direct supervisor to approve the training course expense."
      }
    },
    "fr": {
      "openCard": "Ouvrir le spécimen de carte de signature",
      "q1": {
        "text": "Avez-vous assez d’argent pour payer les microscopes?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "De votre budget de 44&nbsp;900&nbsp;$, vous avez déjà engagé 15&nbsp;000&nbsp;$ et dépensé 29&nbsp;000&nbsp;$. Donc, 44&nbsp;000&nbsp;$ sont déjà comptabilisés, ce qui signifie qu’il ne reste que 900 $ dans votre budget."
      },
      "q2": {
        "text": "Examinez la carte de délégation fournie. S’il y a suffisamment de fonds dans le budget, le gestionnaire a-t-il le pouvoir délégué nécessaire pour engager les fonds?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Le gestionnaire a l’autorité d’initier et d’engager les fonds nécessaires pour les microscopes."
      },
      "q3": {
        "text": "Quel est le meilleur mécanisme de dépense à utiliser pour acheter les microscopes?",
        "options": {
          "1": "Carte d’achat",
          "2": "Contrat concurrentiel",
          "3": "Arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-right' /> <strong>Correct!</strong>",
          "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
        },
        "conclusion": "Étant donné qu’il ne s’agit que de 2&nbsp;000&nbsp;$ pour 10 microscopes, la carte d’achat est le meilleur mécanisme de dépense."
      },
      "q4": {
        "text": "En supposant que vous êtes en mesure d’acheter les microscopes, quelle est la nature de cette transaction financière?",
        "options": {
          "1": "Revenu",
          "2": "Dépense",
          "3": "Actif",
          "4": "Passif"
        },
        "feedback": {
          "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "2": "<span class='v-right' /> <strong>Correct!</strong>",
          "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
        },
        "conclusion": "Étant donné qu’il ne s’agit que de 2&nbsp;000&nbsp;$ pour 10 microscopes, c’est une dépense. Si vous aviez acheté davantage de microscopes ou si vous les aviez achetés à un prix unitaire plus élevé, cela aurait pu être considéré comme un actif. Consultez votre ministère pour connaître vos limites."
      },
      "q5": {
        "text": "Un cours de formation est nécessaire sur la façon d'utiliser les nouveaux microscopes. Pouvez-vous approuver vos propres frais de formation?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
          "2": "<span class='v-right' /> <strong>Correct!</strong>"
        },
        "conclusion": "Comme l'achat peut être perçu comme un avantage personnel, vous devrez demander à votre supérieur direct d'approuver la dépense du cours de formation."
      }
    }
  }
</i18n>