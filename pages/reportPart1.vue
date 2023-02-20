<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ConductPeriodicVarianceReporting')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_qgu8jn1b/flavorId/0_a3zbiwxm/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_wjg0b6iw/flavorId/0_20jqf1w0/name/a.mp4" chapters chapterFile="ReportPart1.vtt" ccFile="ReportPart1_captions.vtt" posterFile="reportPart1_poster.png" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <p><strong>[00:00:01 Title is shown onscreen.]</strong></p>
                        <h2>Module 6. Prepare Financial Situation Reports</h2>
                        <p><strong>[00:00:07 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>1. What Is a Financial Situation Report?</h2>
                        <p><strong>Charlaine Lapointe: </strong>A financial situation report, or FSR, is a document that provides senior management with the most up-to-date financial picture and the best estimates of forecast spending. This document supports them in making informed decisions to properly address budget shortfalls or pressures and reallocate surpluses. Your department may have a different name for this report. Find out what it is.</p>
                        <p><strong>[00:00:39 Text is shown onscreen that reads “Managerial Responsibilities”.]</strong></p>
                        <p>As a manager, you are expected to provide regular updates and forecasts for your responsibility centre throughout the year. You are also required to provide explanations on variances in order to provide accurate information and make sure the financial system is updated.</p>
                        <p>But don’t worry, you won’t be doing this alone! This is usually led by your organization’s Finance section at specific times in the year. They will provide support and send out instructions to provide templates, guidelines, links, due dates, etc. Work with your administrative staff to complete these tasks. </p>
                        <p>Let’s see what you already know about FSRs by doing a quick match-up game!</p>
                        <p><strong>[00:01:17 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:01:21 A pop-up box with “Activity: What Is a Financial Situation Report?” appears onscreen.]</strong></p>
                        <p><strong>[00:01:24 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>2. Key Periods for Financial Situation Reports</h2>
                        <p>The fiscal year starts on April 1 and is divided, by month, into periods. P1 is April, P2 is May, P3 is June, and so forth.</p>
                        <p>Typically, key reporting periods are P6 (September), P9 (December), and a year-end report in P12 (March).</p>
                        <p>Because P6 (September) is midway through the year, it offers senior management a good picture of the organization's finances and allows them to make decisions that will influence year-end results. For example, they could decide to reallocate funds to different priorities.</p>
                        <p>P9 (December) is often the last opportunity to influence year-end results. Departments may ask managers to provide a forecast in P9 that is within a certain percentage of the year-end amount. The Treasury Board of Canada Secretariat uses data from the P9 report to inform the Department of Finance Canada of government-wide planned spending so that they have a holistic view.</p>
                        <p>Year-end data at P12 is used by your department to report their overall financial results. It also forms part of the Departmental Results Report, or DRR.</p>
                        <p><strong>[00:02:46 A pop-up box with “Activity: Key Periods for Financial Situation Reports” appears onscreen.]</strong></p>
                        <p><strong>[00:02:48 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>3. Financial Situation Report Activities</h2>
                        <p>The most important information you will need to provide in the FSR is your forecast. In other words, you’ll need to estimate the amount of money that you are going to spend to complete your activities before the end of the fiscal year.</p>
                        <p>You can request that your administrative professional pull a detailed financial report from the financial system with information on the budget, commitments and actual expenditures. You will compare this to the FSR.</p>
                        <p>Here are some of the things that you can do to get a good sense of where you’re at, which will allow you to make solid estimates for the rest of the year:</p>
                        <p><strong>[00:03:29 Text is shown onscreen that reads “Ensuring Accuracy”.]</strong></p>
                        <ul>
                          <li>Ensure that salary forecasts are accurate and up to date.</li>
                          <li>Account for any incoming or outgoing funding.</li>
                          <li>Follow up on travel claims and outstanding invoices.</li>
                          <li>Ensure journal vouchers are posted: this will correct the data in the financial system.</li>
                          <li>Close commitments that are no longer required and</li>
                          <li>Reconcile your acquisition card statement against commitments.</li>
                        </ul>
                        <p>Now, answer the following questions to the best of your abilities and let’s practise preparing a financial situation report! </p>
                        <p><strong>[00:03:55 Text showing the “Try it!” instruction appears onscreen.] </strong></p>
                        <p><strong>[00:04:02 A pop-up box with “Activity: Financial Situation Report Activities” appears onscreen.]</strong></p>
                        <p><strong>[00:04:04 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>4. Updating the Annual Forecast</h2>
                        <p>Another important task when completing your FSR is to review your salary and O&M forecasts. This will allow you to identify</p>
                        <ul>
                          <li>shortfalls and pressures that may require approval for additional resources</li>
                          <li>or surpluses to signal potential carry forward amounts.</li>
                        </ul>
                        <p>You will have to explain the reasons for any variances and provide mitigation strategies for risks.</p>
                        <p>Let’s practise updating the Annual Forecast!</p>
                        <p><strong>[00:04:32 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:04:34 A pop-up box with “Activity: Updating the Annual Forecast” appears onscreen.]</strong></p>
                        <p><strong>[00:4:35 Text showing “You have completed this section” appears onscreen.]</strong></p>
                        <hr>

                        <h2>5. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <p><strong>[00:05:05 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
                        <h2>Module 6. Préparer les rapports sur la situation financière</h2>
                        <p><strong>[00:00:07 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>1. Qu'est-ce qu'un rapport sur la situation financière?</h2>
                        <p><strong>Charlaine Lapointe : </strong>Un rapport sur la situation financière - ou RSF - est un document qui fournit à la haute direction le portrait financier le plus récent et les meilleures estimations des dépenses prévues. Ce document l’aide à prendre des décisions éclairées pour faire face aux insuffisances ou aux pressions budgétaires et à réaffecter les excédents. Votre ministère peut avoir un nom différent pour ce rapport — renseignez-vous à ce sujet.</p>
                        <p><strong>[00:00:39 : Texte indiquant Les responsabilités de gestion apparaît à l’écran.]</strong></p>
                        <p>En tant que gestionnaire, vous êtes tenu de fournir régulièrement des mises à jour et des prévisions de votre centre de responsabilité tout au long de l’année. Vous devez également fournir des explications sur les écarts afin de fournir des informations précises et vous assurer que le système financier est à jour.</p>
                        <p>Ne vous inquiétez pas, vous ne ferez pas cela tout seul! Généralement, la section des finances de votre organisation dirigera l’exercice à des moments précis de l’année. Elle vous offrira du soutien et vous enverra des instructions pour fournir des gabarits, des lignes directrices, des liens, des dates d’échéance, etc. Travaillez avec votre personnel administratif pour accomplir ces tâches.</p>
                        <p>Voyons ce que vous savez déjà sur les RSF en faisant un petit jeu d’association! </p>
                        <p><strong>[00:01:25 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:01:29 : Une fenêtre contextuelle Activité : Qu’est-ce qu’un rapport sur la situation financière? apparaît à l'écran.]</strong></p>
                        <p><strong>[00:01:30 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>2. Périodes clés pour les rapports sur la situation financière</h2>
                        <p>L'exercice financier commence le 1er avril et est divisé, par mois, en périodes. P1 est avril, P2 est mai, P3 est juin, et ainsi de suite.</p>
                        <p>En règle générale, les périodes-clé de rapport sont P6 (septembre), P9 (décembre), et un rapport de fin d'année en P12 (mars).</p>
                        <p>Parce que P6 (septembre) est au milieu de l'année, il offre à la haute direction une bonne vue d’ensemble de la situation financière de l'organisation et lui permet de prendre des décisions qui influenceront les résultats de fin d'année. Par exemple, ils pourraient décider de réaffecter des fonds à différentes priorités.</p>
                        <p>P9 (décembre) est souvent la dernière occasion d'influencer les résultats de fin d'année. Les ministères peuvent demander aux gestionnaires de fournir une prévision en P9 qui se situe dans un certain pourcentage du montant de fin d'année. Le Secrétariat du Conseil du Trésor du Canada utilise les données du rapport P9 pour informer le ministère des Finances du Canada des dépenses prévues à l'échelle du gouvernement afin qu'il puisse avoir une vision globale.</p>
                        <p>Les données de fin d'exercice, à P12, sont utilisées par votre ministère pour présenter ses résultats financiers globaux. Il fait également partie du Rapport sur les résultats ministériels, ou RRM.</p>
                        <p><strong>[00:03:02 : Une fenêtre contextuelle Activité : Périodes clés pour les rapports sur la situation financière apparaît à l'écran.]</strong></p>
                        <p><strong>[00:03:04 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>3. Activités pour le rapport sur la situation financière</h2>
                        <p>L'information la plus importante que vous devrez fournir dans le RSF est votre prévision budgétaire. En d'autres termes, vous devrez estimer le montant d'argent que vous allez dépenser pour terminer vos activités avant la fin de l'exercice financier.</p>
                        <p>Vous pouvez demander à votre professionnel de l'administration d'extraire du système financier un rapport financier détaillé contenant des informations sur le budget, les engagements et les dépenses réelles. Vous le comparerez au RSF.</p>
                        <p>Voici plusieurs choses que vous pouvez faire pour avoir une bonne idée de votre situation actuelle. Cela vous permettra de faire des estimations solides pour le reste de l'année.</p>
                        <p><strong>[00:03:54 : Un texte apparaît à l'écran : Assurer la précision.]</strong></p>
                        <ul>
                          <li>Vérifier à ce que les prévisions salariales soient exactes et à jour.</li>
                          <li>Rendre compte de tout financement entrant ou sortant.</li>
                          <li>Faire le suivi des demandes de remboursement de frais de voyage et des factures en souffrance.</li>
                          <li>Vérifier que les pièces de journal soient bien comptabilisées : cela corrigera les données dans le système financier.</li>
                          <li>Annuler les engagements qui ne sont plus nécessaires.</li>
                          <li>Et réconcilier votre relevé de carte d'achat avec vos engagements.</li>
                        </ul>
                        <p>Maintenant, répondez aux questions suivantes au mieux de votre capacité afin de vous exercer à préparer un rapport sur la situation financière!</p>
                        <p><strong>[00:04:23 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:04:32 : Une fenêtre contextuelle Activités pour le rapport sur la situation financière apparaît à l'écran.]</strong></p>
                        <p><strong>[00:04:33 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>4. Mise à jour des prévisions annuelles</h2>
                        <p>Une autre tâche importante à faire lorsque vous remplissez votre RSF est d'examiner votre salaire et vos prévisions de F et E. Cela vous permettra d’identifier :</p>
                        <ul>
                          <li>les insuffisances et les pressions qui peuvent nécessiter l'approbation de ressources supplémentaires;</li>
                          <li>ou encore des excédents pour indiquer les reports potentiels de fonds.</li>
                        </ul>
                        <p>Vous devrez expliquer les raisons de tout écart et fournir des stratégies d'atténuation des risques.</p>
                        <p>Pratiquons maintenant la mise à jour des prévisions annuelles!</p>
                        <p><strong>[00:05:06 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:10 : Une fenêtre contextuelle Activité : Mise à jour des prévisions annuelles apparaît à l'écran.]</strong></p>
                        <p><strong>[00:05:11 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
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
      <b-modal no-stacking id="whatIsFSR" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('whatIsFSR')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <whatIsFSR />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="keyPeriods" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('KeyPeriodsFSRTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <keyPeriods />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="FSRActivities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('FSRActivitiesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <FSRActivities />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="UpdatingAnnualForecast" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('UpdatingAnnualForecastTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <UpdatingAnnualForecast />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="reportKey" time="5" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import whatIsFSR from '~/components/slides/report/whatIsFSR'
import UpdatingAnnualForecast from '~/components/slides/report/UpdatingAnnualForecast'
import FSRActivities from '~/components/slides/report/FSRActivities'
import keyPeriods from '~/components/slides/report/keyPeriods'
export default {
  data() {
    return {
      modalArray: ["whatIsFSR", "keyPeriods", "FSRActivities", "UpdatingAnnualForecast"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    whatIsFSR,
    FSRActivities,
    keyPeriods,
    UpdatingAnnualForecast
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart1
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
      this.$store.commit('currentPlaying/setReportPart1_player',e)
    }
  }
}

</script>
<style scoped>
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
<i18n>{
  "en":{
  "KeyPeriodsFSRTitle":"Activity: Key Periods for Financial Situation Reports",
  "whatIsFSR":"Activity: What Is a Financial Situation Report?",
  "FSRActivitiesTitle":"Activity: Financial Situation Report Activities",
  "UpdatingAnnualForecastTitle":"Activity: Updating the Annual Forecast",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "KeyPeriodsFSRTitle":"Activité : Périodes clés pour les rapports sur la situation financière",
  "whatIsFSR":"Activité : Qu’est-ce qu’un rapport sur la situation financière?",
  "FSRActivitiesTitle":"Activité : Activités pour le rapport sur la situation financière",
  "UpdatingAnnualForecastTitle":"Activité : Mise à jour des prévisions annuelles",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
