<template>
  <div>
    <h1 class="pageTitle" v-html="$t('MonitorControlFinances')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_mg1mled1/flavorId/0_0jrrhyl9/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0rk3xq64/flavorId/0_pj54ikc4/name/a.mp4"  chapters chapterFile="SpendPart3.vtt" ccFile="SpendPart3_captions.vtt" posterFile="spendPart3_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">
                        <p><strong>[00:00:00 Title is shown onscreen.]</strong></p>
                        <h2>Module 5: Monitor and Control Finances</h2>
                        <p><strong>[00:00:07 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>1. Continuous Monitoring</h2>
                        <p><strong>Charlaine Lapointe: </strong>As a manager, you are responsible for ensuring that all commitments and expenditures are monitored throughout the year and that they are accurately recorded in the financial system.</p>
                        <p>This monitoring is both at a transactional level and at a strategic level. Depending on the situation, it may involve one or more of the following actions:</p>
                        <p><strong>[00:00:31 Text is shown onscreen that reads “Possible Actions”.]</strong></p>
                        <ul>
                          <li>Closing commitments that are no longer required.</li>
                          <li>Amending contracts for scope, time, and amount.</li>
                          <li>Updating the salary forecast to reflect your current and planned staffing needs. </li>
                          <li>Planning for potential budget shortfalls or pressures.</li>
                          <li>Flagging budget surpluses to senior management.</li>
                          <li>And making expenditure adjustments.</li>
                        </ul>
                        <p>Let’s play with a few examples.</p>
                        <p><strong>[00:00:59 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:01:01 A pop-up box with “Activity: Continuous Monitoring” appears onscreen.]</strong></p>
                        <p><strong>[00:01:03 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>2. Data Comparison</h2>
                        <p>Taking care of your budget is really important because the decisions you make within your budget may influence your sector, your branch, or even your department.</p>
                        <p>At the end of the fiscal year, you will need to justify any deficits or surpluses. Depending on your department, you may need to be within a certain percentage of your forecasts.</p>
                        <p>On one hand, overspending can cause a deficit, which puts a lot of pressure on senior management to find additional sources of funds to compensate.</p>
                        <p>On the other hand, a surplus should be flagged as early as possible so that your unit doesn’t miss an opportunity to reallocate unused funds to another activity, or another unit.</p>
                        <p>Monthly reports help you track your financials. They are sometimes called “financial situation reports” or FSRs and are usually produced by the Finance team within your organization.</p>
                        <p>What is in the FSR needs to match what is actually going on in your unit. If it doesn’t, then you need to take appropriate action to resolve the discrepancy. </p>
                        <p>In the next activity, you will have a chance to review and adjust your financial situation according to new information.</p>
                        <p><strong>[00:02:12 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:02:19 A pop-up box with “Activity: Data Comparison” appears onscreen.]</strong></p>
                        <p><strong>[00:02:21 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>3. Year-End Procedures</h2>
                        <p>Since most budgets are allocated by Parliament on an annual basis and must be used within the fiscal year, goods and services must be received on or before March 31.</p>
                        <p>However, you will most likely have a number of outstanding expenditures that you will not be able to pay before the end of the fiscal year for goods that are in your possession. To help with that, the Finance unit will establish Payables at Year-End or Receivables at Year-End in the financial system after receiving your list of outstanding payables.</p>
                        <p>A P-A-Y-E is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received.</p>
                        <p>An R-A-Y-E is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</p>
                        <p>Usually, again depending on the practices within your department—Finance will send out year-end instructions about how to establish a P-A-Y-E or an  R-A-Y-E. These instructions will also include specific requirements with respect to the minimum dollar amount and the timeline. </p>
                        <p>Contracts can be a bit tricky when we are close to the end of the fiscal year. Here are a couple of things to keep in mind:</p>
                        <p><strong>[00:03:56 Text is shown onscreen that reads “Contracts at Year End”.]</strong></p>
                        <ol>
                          <li>Pay attention to the deadlines set by Procurement. You may not be able to create a purchase order as you approach year-end. </li>
                          <li>Follow up with suppliers to make sure that the goods or services will be delivered before year-end. If it’s not possible before March 31, the expenditures will have to be paid using new year funding. Talk to Procurement about possible steps. </li>
                        </ol>
                        <p><strong>[00:04:23 A pop-up box with “Activity: Year-End Procedures” appears onscreen.]</strong></p>
                        <p><strong>[00:04:25 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>So now that you know how to initiate expenditures, authorize commitments, exercise financial authority and monitor and control finances, let’s see what you remember by taking this short quiz.</p>
                        <p><strong>[00:04:42 A “Take the Quiz” pop-up box appears onscreen.]</strong></p>
                        <p><strong>[00:04:43 Text showing “You have completed this section” appears onscreen.]</strong></p>
                        <hr>

                        <h2>5. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <p><strong>[00:00:00 : Un titre apparaît à l'écran.]</strong></p>
                        <h2>Module 5. Surveillance et contrôle des finances</h2>
                        <p><strong>[00:00:07 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>1. Suivi continu </h2>
                        <p><strong>Charlaine Lapointe :</strong>En tant que gestionnaire, vous avez la responsabilité de veiller à ce que les engagements et les dépenses soient suivis tout au long de l'année et qu’ils soient enregistrés avec exactitude dans le système financier.</p>
                        <p>Ce suivi se fait à la fois au niveau transactionnel et au niveau stratégique. Selon la situation, cela se traduit par l’une ou l’autre des actions suivantes :</p>
                        <p><strong>[00:00:35 : Un texte apparaît à l'écran : Actions possibles.]</strong></p>
                        <ul>
                          <li>annuler les engagements qui ne sont plus nécessaires; </li>
                          <li>modifier les contrats en fonction de leur portée, de leur durée et des montants qui leur sont alloués;</li>
                          <li>mettre à jour les prévisions salariales pour tenir compte de vos besoins actuels et futurs en matière de dotation; </li>
                          <li>planifier pour les insuffisances ou les pressions budgétaires;</li>
                          <li>signaler les excédents budgétaires à la haute direction;</li>
                          <li>et apporter des ajustements aux dépenses.</li>
                        </ul>
                        <p>Amusons-nous maintenant avec quelques exemples.</p>
                        <p><strong>[00:01:06 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:01:07 : Une fenêtre contextuelle Activité : Suivi continu apparaît à l’écran.]</strong></p>
                        <p><strong>[00:01:09 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>2. Comparaison des données</h2>
                        <p>Il est essentiel de porter une attention particulière et soutenue à votre budget parce que les décisions que vous prenez peuvent avoir une incidence sur votre secteur, votre direction générale, ou même votre ministère. </p>
                        <p>À la fin de l’exercice financier, vous devez justifier tout déficit ou surplus. Selon le ministère pour lequel vous travaillez, vous pourriez devoir demeurer à l’intérieur d’une marge d’un certain pourcentage de vos prévisions.</p>
                        <p>D’une part, le fait de dépasser votre budget pourrait causer un déficit, ce qui met beaucoup de pression sur la haute direction pour trouver d'autres sources de financement en compensation.</p>
                        <p>D’autre part, un surplus devrait être signalé le plus tôt possible sans quoi on pourrait manquer l’occasion de réaffecter les fonds inutilisés à une autre activité ou à une autre unité.</p>
                        <p>Les rapports mensuels vous aident à suivre vos dépenses. On les appelle parfois « Rapports sur la situation financière » - ou RSF - et sont habituellement produits par l’unité des Finances de votre organisation. </p>
                        <p>Ce qui se trouve dans votre RSF doit refléter ce qui se passe dans votre unité. Si ce n’est pas le cas, vous devez faire un suivi afin de résoudre cet écart.</p>
                        <p>Dans l’activité suivante, vous aurez l’occasion de réviser et d’ajuster vos données financières selon les nouvelles informations. </p>
                        <p><strong>[00:02:35 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:02:39 : Une fenêtre contextuelle Activité : Comparaison des données apparaît à l’écran.]</strong></p>
                        <p><strong>[00:02:41 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>3. Procédures de fin d’année</h2>
                        <p>Étant donné que la plupart des budgets sont établis par le Parlement chaque année et qu’ils doivent être utilisés au cours de l'exercice financier, les biens et services doivent être reçus au plus tard le 31 mars.</p>
                        <p>Il est toutefois fort probable que vous ne soyez pas en mesure de payer le reste de vos dépenses avant la fin de l'exercice financier pour les biens qui sont en votre possession. C'est pourquoi l’unité des Finances établira des créditeurs à la fin de l'exercice (CAFE) ou des débiteurs à la fin de l'exercice (DAFE) après avoir reçu votre liste de payables non réglés.</p>
                        <p>Un CAFE est un montant dû pour des biens ou des services fournis dans l’exercice financier précédent, en se servant des fonds de l’exercice financier précédent, mais payés dans le nouvel exercice financier alors qu’on aura reçu la facture du fournisseur.</p>
                        <p>Un DAFE est un montant dû d’un autre ministère pour des biens ou des services fournis dans l’exercice financier précédent pour lesquels le paiement sera fait dans le nouvel exercice financier. </p>
                        <p>D’habitude, encore une fois selon les pratiques courantes dans votre ministère, vous recevrez des instructions de fin d'année pour l’établissement des CAFE et des DAFE. Ces instructions incluront aussi les critères quant au montant minimal exigé et à l'échéancier.</p>
                        <p>Lorsqu’on s’approche de la fin de l’exercice financier, les choses peuvent se compliquer un peu en ce qui a trait aux contrats. Voici deux choses à tenir à l’esprit.</p>
                        <p><strong>[00:04:18 : Un texte apparaît à l'écran : Les contrats à la fin de l’exercice financier.]</strong></p>
                        <ol>
                          <li>Portez attention aux délais fixés par le service d’approvisionnement. Il se peut que vous ne puissiez pas créer de commande d'achat en fin d'année.</li>
                          <li>Faites un suivi auprès des fournisseurs pour vous assurer que les biens ou services seront livrés avant la fin de l'année. Si ce n'est pas possible avant le 31 mars, les dépenses devront être payées en utilisant les fonds de la nouvelle année. Discutez des étapes possibles avec Approvisionnement.</li>
                        </ol>
                        <p><strong>[00:04:44 : Une fenêtre contextuelle Activité : Procédures de fin d’année apparaît à l’écran.]</strong></p>
                        <p><strong>[00:04:45 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>Maintenant que vous savez comment engager et autoriser des dépenses, exercer des pouvoirs financiers, et surveiller et contrôler les finances, voyons ce dont vous vous souvenez en répondant à ce petit quiz!</p>
                        <p><strong>[00:05:04 : Une fenêtre contextuelle Répondez au quiz apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:05 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
                        <hr>
                        <h2>5. Section complétée</h2>
                        <p>[Texte à l’écran indiquant l’instruction Section complétée.]</p>
                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
      <b-modal no-stacking id="ContinuousMonitoring" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('ContinuousMonitoringTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <ContinuousMonitoring />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="DataComparison" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('DataComparisonTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <DataComparison />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="YearEndProcedures" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('YearEndProceduresTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <YearEndProcedures />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="spendQuizModal" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <spendQuiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning youAreHere path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import ContinuousMonitoring from '~/components/slides/spend/spendPart3ContinuousMonitoring'
import DataComparison from '~/components/slides/spend/spendPart3DataComparison'
import YearEndProcedures from '~/components/slides/spend/spendPart3YearEnd'
import spendQuiz from '~/components/slides/spend/spendPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["ContinuousMonitoring", "DataComparison", "YearEndProcedures", "spendQuizModal"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    ContinuousMonitoring,
    DataComparison,
    YearEndProcedures,
    spendQuiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart3_player',e)
    }
  }
}

</script>
<style scoped>
.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "DataComparisonTitle":"Activity: Data Comparison",
  "ContinuousMonitoringTitle":"Activity: Continuous Monitoring",
  "YearEndProceduresTitle":"Activity: Year-End Procedures",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "DataComparisonTitle":"Activité : Comparaison des données",
  "ContinuousMonitoringTitle":"Activité : Suivi continu",
  "YearEndProceduresTitle":"Activité : Procédures de fin d’année",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>
