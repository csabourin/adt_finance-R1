<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <br>
    <p><img src="~/assets/KeyMessR.svg" alt="" role="presentation" width="250px"></p>
    <p>&nbsp;</p>
    <p class="quote report"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg xl="5"><span v-if="$i18n.locale=='en'">
            <h3>Prepare the financial situation report</h3>
            <ul>
              <li>Financial situation reports:
              <ul>
                <li>provide the most current financial picture of the organization’s finances on a given date</li>
                <li>are tools for managers to regularly identify current financials, risks, potential surpluses and/or shortfalls in their budgets</li>
                <li>are initiated and led by the Chief Financial Officer</li>
                <li>allow the Chief Financial Officer to make recommendations to senior leaders on the financial resources needed to achieve results</li>
              </ul>
              </li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3><strong>Préparer le rapport sur la situation financi&egrave;re</strong></h3>
            <ul>
              <li>Les rapports sur la situation financi&egrave;re :
              <ul>
                  <li>fournissent le portrait financier le plus récent des finances de l'organisme à une date donnée;</li>
                  <li>sont des outils permettant aux gestionnaires de vérifier régulièrement les finances courantes, les risques, les excédents ou les déficits potentiels dans leurs budgets;</li>
                  <li>sont lancés et dirigés par le dirigeant principal des finances;</li>
                  <li>permettent au dirigeant principal des finances de faire des recommandations aux cadres supérieurs sur les ressources financi&egrave;res nécessaires pour obtenir des résultats.</li>
              </ul>
              </li>
            </ul>
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-xl-block"></b-col>
        <b-col cols="12" lg xl="5"><span v-if="$i18n.locale=='en'">
            <h3>Contribute to external reporting</h3>
            <ul>
              <li>The finances and results of government services and programs are reported regularly to Parliament and Canadians through a variety of reports:&nbsp;
              <ul>
                <li>Public Accounts of Canada</li>
                <li>Departmental Plan</li>
                <li>Departmental Results Report (DRR)</li>
                <li>Quarterly Financial Reporting (QFR)</li>
                <li>Proactive disclosure&nbsp;</li>
                <li>Management Accountability Framework (MAF)</li>
                <li>Internal audit and evaluation reports</li>
              </ul>
              </li>
              <li>Managers contribute to these government reports by providing information on the performance outcomes and results of their activities.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <h3><strong>Contribuer à l’établissement de rapports externes</strong></h3>
            <ul>
              <li>Les finances et les résultats des services et des programmes gouvernementaux font l'objet de rapports réguliers au Parlement et à la population canadienne dans divers rapports :&nbsp;
                <ul>
                    <li>Comptes publics du Canada</li>
                    <li>Plan ministériel</li>
                    <li>Rapport sur les résultats ministériels (RRM)</li>
                    <li>Rapports financiers trimestriels (RFT)</li>
                    <li>Divulgation proactive&nbsp;</li>
                    <li>Cadre de responsabilisation de gestion (CRG)</li>
                    <li>Rapports de vérification interne et d’évaluation</li>
                </ul>
              </li>
              <li>Les gestionnaires contribuent à ces rapports gouvernementaux en fournissant de l'information sur les résultats de rendement et les résultats de leurs activités.</li>
            </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('FSRRoadmap')" size=128 iconColor="reportBackground" :fileSize="$i18n.locale == 'en' ? '107' : '111'" name="FSRRoadmap" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('prepareFSR')" size=128 iconColor="reportBackground" :fileSize="$i18n.locale == 'en' ? '108' : '96,5'" name="prepareFSR" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('extReports')" size=128 iconColor="reportBackground" :fileSize="$i18n.locale == 'en' ? '138' : '124'" name="extReports" />
                </b-col>
             </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span></p> -->
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav reportSection" v-else>
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" youAreHere path="reportKey" time="5" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <TestTile
  :completion="parseInt($store.getters['report/getScore'], 10)"
  path="exam3"
  size="140"
  time="15"
  imagePath="R-Test.svg"
  :text="$t('Test')"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4151&ou=7781

"
/>

    </div>
  </div>
</template>
<script type="text/javascript">
  var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import microlearning from "~/components/microlearning"
  import keyMessagesFiles from "~/components/keyMessagesFiles"
import TestTile from "../components/testTile.vue"
export default {
  components: {
    microlearning,
    download,
    HTMLJobaidLink,
    keyMessagesFiles,
    TestTile
},
  computed:{
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  mounted(){
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmReport',100),30000)
  },
  beforeDestroy(){
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": " Reports should tell the public the story of our performance. ",
  "reportSectionBar": "SPEND"
  },
  "fr":
  {
  "keyPlanQuote": " Les rapports devraient faire part de notre performance au public.",
  "reportSectionBar": "DÉPENSES"
  }
  }</i18n>
<style type="text/css" scoped>

p.quote.report{
  position: relative;
}
  
p.quote.report:before {
  position: absolute;
  content: " ";
  background-color: #e5dddc;
  width: 100%;
  height: 32px;
  left: 0;
  top: calc(50% - 9px);
  z-index: -1;
  margin: 0;
}

@media(max-width: 768px){
  .bigQuote {
    font-size: 30px;
  }
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
  color: #865f56;
  /*background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);*/
  background-color: white;
  quotes: """""";
  padding: 1em;
  display: block;
  margin: auto;
  width: 90%;
  line-height: normal;
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
  color: #865f56;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.reportSection {
  position: relative;
}

.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
