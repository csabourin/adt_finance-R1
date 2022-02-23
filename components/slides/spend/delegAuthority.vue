<template>
	<div>
    <b-card>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
        <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
        <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" :Answer="['3']"/></b-tab>
        <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
    <!--<p class="scrollMe" v-if="$i18n.locale=='en'"><delegAutorityEn /></p>
    <p class="scrollMe" v-if="$i18n.locale=='fr'"><delegAutorityFr /></p>-->
    <windowPortal :open="openChart" @close="openChart = false">
      <delegAutorityEn v-if="$i18n.locale=='en'" />
      <delegAutorityFr v-if="$i18n.locale=='fr'" />
    </windowPortal>
    <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
	</div>
</template>

<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
  import delegAutorityEn from "~/components/delegationChart/delegchart_en"
  import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
  import windowPortal from "~/components/newWindow"
  import download from "~/components/fileDownload"
  import HTMLJobaidLink from "~/components/HTMLJobaidLink"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      delegAutorityEn,
      delegAutorityFr,
      windowPortal,
      download,
      HTMLJobaidLink
		},
    data(){
      return{
        tabIndex:0,
        openChart: false
      }
    },
    methods:{
      focus(){
        setTimeout(function(){
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
        }, 300);
      },
    }
	}
</script>
<i18n>{
  "en": {
    "openChartButton": "Open the delegation of spending and financial signing authorities chart",
    "q1": {
      "text": "Using the delegation of financial signing authority chart provided, identify the maximum amount that a manager could approve to initiate hospitality (section 32).",
      "options": {
        "1": "$0",
        "2": "$300",
        "3": "$3,000",
        "4": "$10,000"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "As per the delegation of financial signing authority chart, the manager does not have authority to initiate hospitality. So the correct answer is $0. For more information on hospitality, visit the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228' target='_blank'>Directive on Travel, Hospitality, Conference and Event Expenditures</a>."
    },
    "q2": {
      "text": "What is the lowest position that could approve the hospitality?",
      "options": {
        "1": "Director",
        "2": "Director General",
        "3": "Assistant Deputy Minister",
        "4": "Deputy Minister"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> The lowest position that could approve the hospitality is the Director.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position with the authority to approve hospitality according to this delegation chart.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position with the authority to approve hospitality according to this delegation chart.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position with the authority to approve hospitality according to this delegation chart."
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Multiple departmental employees are travelling to an event. Using the departmental delegation of authorities chart provided, who would you ask to approve a $23,000 amount (section 32) made up of travel and event registration costs?",
      "options": {
        "1": "Director",
        "2": "Director General",
        "3": "Assistant Deputy Minister",
        "4": "Deputy Head"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "<p>You would need to consult the Assistant Deputy Minister (<abbr>ADM</abbr>). Only the ADM has the authority to approve departmental costs for an event of more than $20,000, and up to $25,000. Don’t forget to consult with your Director and your Director General before approaching your ADM!</p><p>For more information on events, visit the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228'>Directive on Travel, Hospitality, Conference and Event Expenditures</a>.</p>"
    },
    "q4": {
      "text": "What does “F” or “Full” mean in the chart provided?",
      "options": {
        "1": "The sky's the limit! You may approve any amount you wish.",
        "2": "You can only approve a predefined amount. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "You are limited to the extent of your allocated budget. For more information on the authorities, visit the <a target='_blank' href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32584#'>Guide to Delegating and Applying Spending and Financial Authorities</a>."
    }
  },
  "fr": {
    "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
    "q1": {
      "text": "En vous appuyant sur le tableau de délégation de pouvoirs fourni, identifiez quel est le montant maximal qu’un gestionnaire pourrait approuver pour entreprendre des activités d’accueil (article 32).",
      "options": {
        "1": "0$",
        "2": "300$",
        "3": "3&nbsp;000&nbsp;$",
        "4": "10&nbsp;000&nbsp;$"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Selon le tableau de délégation de pouvoirs, le gestionnaire n’a pas le pouvoir d’entreprendre des activités d’accueil; la bonne réponse est donc 0&nbsp;$. Pour de plus amples renseignements sur l’accueil, visitez la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank'>Directive sur les dépenses de voyages, d’accueil, de conférences et d’événements</a>."
    },
    "q2": {
      "text": "Quel est le poste le moins élevé qui aurait l’autorité d’approuver l’accueil?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint",
        "4": "Sous-ministre"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> Le poste le moins élevé qui aurait l’autorité d’approuver l’accueil est celui de directeur. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>. Le directeur est le poste le moins élevé qui a le pouvoir d’approuver l’accueil conformément à ce tableau de délégation.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>. Le directeur est le poste le moins élevé qui a le pouvoir d’approuver l’accueil conformément à ce tableau de délégation. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>. Le directeur est le poste le moins élevé qui a le pouvoir d’approuver l’accueil conformément à ce tableau de délégation. "
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Plusieurs employés du ministère se déplacent pour assister à un événement. En vous appuyant sur le tableau de délégation financière ministériel fourni, à qui demanderiez-vous d’approuver (article 32) un montant de 23&nbsp;000&nbsp;$ pour des frais de déplacement et d’inscription aux événements?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint ",
        "4": "Administrateur général"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "<p>Vous devriez consulter le sous-ministre adjoint (<abbr>SMA</abbr>). Seul le <abbr>SMA</abbr> a le pouvoir d’approuver les coûts ministériels pour un événement de plus de 20&nbsp;000&nbsp;$ et jusqu’à 25&nbsp;000&nbsp;$. N’oubliez pas de consulter votre directeur et votre directeur général avant d’approcher votre <abbr>SMA</abbr>!</p><p>Pour plus d’information sur les événements, visiter la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank'>Directive sur les dépenses de voyages, d’accueil, de conférences et d’événements</a>.</p>"
    },
    "q4": {
      "text": "Que signifie 'P' ou 'Plein' dans le tableau fourni?",
      "options": {
        "1": "Tout est possible! Vous pouvez approuver le montant de votre choix.",
        "2": "Vous ne pouvez approuver qu’un montant prédéfini. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Vous êtes limité au budget qui vous est alloué. Pour plus d’information sur les autorités, visitez le <a target='_blank' href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584'>Guide de délégation et de mise en œuvre des pouvoirs de dépenser et des pouvoirs financiers</a>"
    }
  }
}</i18n>