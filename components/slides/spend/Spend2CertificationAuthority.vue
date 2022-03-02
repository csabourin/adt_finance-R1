<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <p><strong>{{ $t('instruction') }}</strong></p>
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
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-col>
        <!--<b-col>
          <signatureCard />
        </b-col>-->
      </b-row>
    </b-container>
  </div>
</template>
<script type="text/javascript">
  
  import checkboxQuiz from "~/components/checkboxQuiz"
  import radioQuiz from "~/components/radioQuiz"
  import signatureCard from "~/components/delegationChart/signatureCard"
  import windowPortal from "~/components/newWindow"
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
      signatureCard,
      windowPortal
    },
    data(){
      return{
        openCard: false
      }
      
    }
  }

</script>
<i18n>
  
  {
    "en": {
      "instruction": "Take a look at the specimen signature card.",
      "openCard": "Open the specimen signature card",
      "q1": {
        "text": "Looking at the specimen signature card provided , what is the maximum amount that a manager could approve under section 34 to certify the granting of an award?",
        "options": {
          "1": "$0",
          "2": "$300",
          "3": "$10,000",
          "4": "Full"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "As per the Certification – Section 34 column in the specimen signature card, the manager has full certification authority for salaries and all other expenditures."
      }
    },
    "fr": {
      "instruction": "Veuillez consulter le spécimen de carte de signature.",
      "openCard": "Ouvrir le spécimen de carte de signature",
      "q1": {
        "text": "En examinant la carte de signature fournie, quel est le montant maximal qu'un gestionnaire pourrait approuver pour attester l’attribution d’un prix en vertu de l’article 34?",
        "options": {
          "1": "0&nbsp;$",
          "2": "300&nbsp;$",
          "3": "10&nbsp;000&nbsp;$",
          "4": "Plein"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": " Conformément à la colonne Attestation - Article 34 de la carte de spécimen de signature, le gestionnaire a le plein pouvoir d’attestation pour le salaire et toutes les autres dépenses."
      }
    }
  }

</i18n>
<style type="text/css" scoped>
.scrollMe {
  width: 50%;
  white-space: nowrap;
  overflow-x: auto;
}

</style>
