<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessP.svg" alt="" role="presentation" height="275"></p>
    <p>&nbsp;</p>
    <p class="quote plan"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Build a Work Plan</h3>
            <ul>
              <li>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility centre.</li>
              <li>To build a work plan, you review the activities from the previous year's work plan, budget and reports to identify lessons learned and what needs to be carried over in order to identify possible trends.&nbsp;</li>
              <li>Specifically, with input from your team, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Élaborer un plan de travail</h3>
            <ul>
              <li>Un plan de travail est une liste détaillée des activités à exercer, des ressources à utiliser et des résultats à atteindre au cours d’une période d’un an, laquelle correspond habituellement à un exercice financier pour un centre de responsabilité.</li>
              <li>Pour élaborer un plan de travail, vous passez en revue les activités inscrites dans le plan de travail, le budget et les rapports de l’année précédente afin de prendre note des leçons apprises et les mesures à reporter afin de cerner les tendances possibles.&nbsp;</li>
              <li>Plus précisément, avec l’aide de votre équipe, vous définissez et priorisez le travail et les activités de votre unité, attribuez des ressources et des échéanciers à chaque activité, veillez à ce que les activités s’alignent aux priorités organisationnelles et effectuez une évaluation des risques.&nbsp;</li>
            </ul>
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Create a Budget</h3>
            <ul>
              <li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the budget represents how much you forecast to spend to achieve your work plan activities.</li>

              <li>Typically, budgets will include operating and maintenance (O&M) and salary costs. Depending on the mandate of your department, some budgets may also include capital and grants and contributions amounts.</li>

              <li>To create your budget, you must analyze information from various sources, forecast your new budget requirements and submit your new budget for approval to upper management.</li>

            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Créer un budget</h3>
            <ul>
              <li>Essentiellement, les budgets représentent la conversion des plans de travail en termes financiers. En d’autres mots, le budget représente le montant que vous prévoyez dépenser pour réaliser les activités de votre plan de travail.</li>
              <!--
                NOUVELLE VERION? (CSPS-TD)
                <li>Les budgets correspondent essentiellement aux plans de travail exprimés en termes financiers. Autrement dit, le budget représente le montant que vous prévoyez dépenser pour réaliser votre plan.</li>
              -->

              <li>Habituellement, les budgets comprennent les coûts de fonctionnement et d'entretien (F et E) et les coûts salariaux. Selon le mandat de votre ministère, certains budgets peuvent également inclure des montants d'immobilisations et de subventions et contributions.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Pour créer un budget, vous passez en revue le budget de l’année précédente afin de déterminer quels salaires, quelles dépenses de fonctionnement et d’entretien et, dans certains cas, de capital et des subventions et contributions vous devrez conserver, éliminer ou ajouter.</li>
              -->

              <li>Pour créer votre budget, vous devez analyser les informations de diverses sources, prévoir vos nouveaux besoins budgétaires et soumettre votre nouveau budget pour approbation à la direction.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Vous comparez le budget de l’année précédente au nouveau plan de travail en vous assurant que toutes les dépenses liées aux activités sont prises en compte. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des modifications tout au long de l’année à mesure que les activités évoluent.</li>
              -->
            </ul>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('threeSixty')" size=128 iconColor="Scan360Background" :fileSize="$i18n.locale == 'en' ? '118' : '124'" name="threeSixty" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPTemplate')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPLastYear')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '120' : '120'" name="WorkPlan_lastYear" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('budgetLastYear')" size=128  iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '9.96' : '9,62'" name="Budget_lastYear" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('reportsLastYear')" iconColor="reportBackground" size=128 :title="$t('rExample')" :line1="$t('rLine1')" :line2="$t('rLine2')" :lineTag="$t('rExample')" :fileSize="$i18n.locale == 'en' ? '16.6' : '19,4'" name="ReportLast" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('buildWPProcessMap')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '121' : '114'" name="buildWPProcessMap" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('newBudget')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '129' : '131'" name="newBudget" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('cycle')" size=128 iconColor="Scan360Background" :fileSize="$i18n.locale == 'en' ? '61.6' : '62,6'" name="cycle" />
                </b-col>
              </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav planSection" v-else>
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="buildwp" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" type="video" />
      <microlearning size="140" path="createbudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" type="video" />
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <TestTile
  size="140"
  time="15"
  :completion="parseInt($store.getters['plan/getScore'], 10)"
  imagePath="P-Test.svg"
  :text="$t('Test')"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4150&ou=7781

"/>
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
import externalLink from "~/components/externalLink"
import keyMessagesFiles from "~/components/keyMessagesFiles"
import TestTile from "../components/testTile.vue"
export default {
  components: {
    hamburger,
    microlearning,
    download,
    HTMLJobaidLink,
    externalLink,
    keyMessagesFiles,
    TestTile
},
  computed: {
    pageComplete() {
      return this.$store.state.currentPlaying.kmPlan
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  mounted() {
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmPlan', 100), 30000) // sets viewed after 30 secs
  },
  beforeDestroy() {
    clearTimeout(seenKey) // cancel if leaving before 30 secs.
  }
}

</script>
<i18n>
  {
    "en":{
      "keyPlanQuote": " Great planning leads to great performance. ",
      "planSectionBar": "PLAN"
    },
    "fr":{
      "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
      "planSectionBar": "PLANIFICATION" 
    }
  }
</i18n>
<style type="text/css" scoped>
  
p.quote.plan{
  position: relative;
}
  
p.quote.plan:before {
  position: absolute;
  content: " ";
  background-color: #d1dfe1;
  width: 100%;
  height: 32px;
  left: 0;
  top: calc(50% - 9px);
  z-index: -1;
  margin: 0;
}

h3 {
  font-family: "Roboto Condensed";
  font-size: 1.5em;
}

.bigQuote {
  font-size: 36px;
  padding-bottom: 2em;
  font-family: "Roboto", Roboto;
  font-weight: 500;
  color: #608a93;
  /*background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);*/
  background-color: white;
  quotes: """""";
  padding: 1em;
  display: block;
  margin: auto;
  width: 90%;
  line-height: normal;
}
  
@media(max-width: 768px){
  .bigQuote {
    font-size: 30px;
  }
}

[lang=en] .bigQuote {
  position: relative;
  bottom: .75em;
}

.bigQuote:before,
.bigQuote:after {
  font-size: 72px;
  font-family: Times;
  font-weight: bold;
  color: #608a93;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.planSection {
  position: relative;
}

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
