<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ContributeReporting')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u5d1t3f4/flavorId/0_i0r0o0lc/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_rvohbyn6/flavorId/0_e3qt7rpb/name/a.mp4" chapters chapterFile="ReportPart2.vtt" ccFile="ReportPart2_captions.vtt" posterFile="reportPart2_poster.png" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <h2>1. External Government Reports</h2>
                        <p>The Government of Canada regularly publishes reports to keep Canadians informed on its spending and on the results it achieves using public funds.</p>
                        <p>As a manager, it’s unlikely that you will be required to write these reports yourself. However, the work you do may be included in these reports. For example, you may be asked to report on how well your programs achieved their intended results. As such, you must continuously track your performance and results and compare them with what was planned.</p>
                        <p>Let’s do a quick activity to get more familiar with the terminology!</p>
                        <p>[Onscreen text showing the Try It! instruction for the External Government Reports activity.]</p>

                        <hr>
                        <h2>2. Identify Results</h2>
                        <p>Fiscal year-end is when reporting closes the loop on work plans within the organization, and when we present, globally, the results we achieved in the Departmental Results Report. As the fiscal year is a cycle, last year’s results will inform planning for the next fiscal year.</p>
                        <p>You need to demonstrate how your performance compares with what you set out in your work plan, and explain any variances. In most departments, your Planning or Finance section will reach out to you to request this information.</p>
                        <p>Demonstrating your performance means showing whether you met the indicators as set out in the PIPs, the performance information profiles. These identify more concretely each program’s core responsibility and results to be achieved. Some departments review performance information profiles throughout the year to see if the targets are on track or at risk of not being achieved.</p>
                        <p>In the next activity, you will have the opportunity to practise reporting on whether your targets were met.</p>
                        <p>[Onscreen text showing the Try It! instruction for the Identify Results activity.]</p>

                        <hr>
                        <h2>3. In Real Life</h2>
                        <p>Let’s take what you have learned into real life. Look up your organization’s performance information profiles and its external reports, such as the Departmental Results Report.</p>
                        <p>Your organization will have their own ways of doing financial situation reports, and reporting on spending and results. Talk to your Finance or Planning section and your director. Ask them:</p>
                        <ul>
                          <li>What do we call our financial situation reports, and what do they look like? Where can I find them?</li>
                          <li>How frequently do we prepare them?</li>
                          <li>Do we complete these reports in the financial system or in a spreadsheet?</li>
                          <li>What is my role? </li>
                          <li>And what information will I provide to feed into external reports?</li>
                        </ul>
                        <p>[An In Real Life pop-up text box appears.]</p>
                        
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>Let’s try this quiz to see what you remember from the Report section. </p>
                        <p>[Onscreen text showing the Take the Quiz! instruction for the Quiz activity.]</p>
                        <hr>
                        <h2>5. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Rapports externes du gouvernement</h2>
                        <p>Le gouvernement du Canada publie régulièrement des rapports pour tenir les Canadiens au courant de ses dépenses et des résultats qu’il a obtenus grâce aux fonds publics. </p>
                        <p>En tant que gestionnaire, il est peu probable que vous ayez à rédiger ces rapports vous-même. Cependant, le travail que vous faites peut être inclus dans ces rapports. Par exemple, on vous demandera peut-être d'indiquer dans quelle mesure vos programmes ont atteint les résultats visés à l’origine. Pour ce faire, vous devez effectuer un suivi continu de votre rendement et de vos résultats par rapport à ce qui avait été planifié.</p>
                        <p>Voici une petite activité pour vous familiariser avec la terminologie nécessaire!</p>
                        <p>[Texte à l’écran indiquant l'instruction Essayez-le! pour l’activité Rapports externes du gouvernement.]</p>
                        <hr>
                        <h2>2. Démontrer les résultats</h2>
                        <p>La fin de l'exercice financier est le moment où la production de rapports ferme la boucle des plans de travail de l’organisation et permet de présenter, de manière globale, les résultats de l’année dans le Rapport sur les résultats ministériels. Comme l’exercice financier est un cycle, les résultats de l’an dernier permettront la planification de l’année qui vient.</p>
                        <p>Vous devrez faire état de votre rendement par rapport à ce qui avait été prévu dans votre plan de travail et justifier tout écart. Dans la plupart des ministères, la section de la Planification ou des Finances communiquera avec vous pour vous demander ces renseignements.</p>
                        <p>Démontrer votre rendement signifie démontrer si vous avez atteint les indicateurs établis dans le PIR -  les profils de l’information sur le rendement. Celles-ci déterminent de façon plus concrète la responsabilité fondamentale de chaque programme et les résultats à atteindre. Certains ministères examinent les profils de l'information sur le rendement tout au long de l'année pour voir si les chiffres cibles sont en bonne voie d’être atteints ou s’ils risquent de ne pas l’être</p>
                        <p>L’activité suivante vous permettra de vous exercer à rapporter si les objectifs ont été atteints.</p>
                        <p>[Texte à l’écran indiquant l'instruction Essayez-le! pour l’activité Démontrer les résultats.]</p>
                        <hr>
                        <h2>3. Dans la vraie vie</h2>
                        <p>Appliquons ce que vous avez appris dans la vraie vie. Cherchez les profils de l'information sur le rendement de votre organisation et ses rapports externes, comme le Rapport sur les résultats ministériels.</p>
                        <p>Votre organisation aura sa propre façon de produire des rapports sur la situation financière et de rendre compte de ses dépenses et de ses résultats. Parlez-en à votre section des Finances ou de la Planification et à votre directeur. Demandez-leur :</p>
                        <ul>
                          <li>Comment s’appellent nos rapports sur la situation financière et à quoi ressemblent-ils? À quel endroit puis-je les trouver?</li>
                          <li>À quelle fréquence préparons-nous des rapports sur la situation financière?</li>
                          <li>Doit-on remplir ces rapports dans le système financier ou dans un tableur?</li>
                          <li>Quel est mon rôle?</li>
                          <li>Et quelles informations vais-je fournir pour alimenter les rapports externes?</li>
                        </ul>
                        <p>[Une fenêtre contextuelle Dans la vraie vie apparaît.]</p>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>Essayez ce quiz pour voir ce dont vous vous souvenez dans la section Rapport!</p>
                        <p>[Texte à l’écran indiquant l’instruction Répondez au quiz pour l’activité Quiz.]</p>
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
      <b-modal no-stacking id="externalGovtReports" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('externalGovtReports')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <externalGovtReports />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="identifyResults" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('IdentifyResultsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <identifyResults />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="inRealLife" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <img src="~/assets/R-Contribute.svg" class="img-real_Life" alt="">
        <div v-if="$i18n.locale=='en'">
          <p>Look up your organization’s Performance Information Profiles and its external reports, such as the Departmental Results Report.&nbsp;</p>
          <p>Your organization will have their own ways of doing financial situation reports, and reporting on spending and results. Talk to your finance or planning section and director. Ask them:</p>
          <ul>
            <li>What do we call our financial situation reports and what do they look like? Where can I find them?</li>
            <li>How frequently do we prepare financial situation reports?&nbsp;</li>
            <li>Do we complete these reports in the financial system or in a spreadsheet?</li>
            <li>What is my role?</li>
            <li>What information will I provide to feed into external reports?</li>
          </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Faites une recherche afin de localiser les profils d’information sur le rendement de votre organisation et ses rapports externes, comme le Rapport ministériel sur les résultats.&nbsp;</p>
          <p>Votre organisation aura sa propre fa&ccedil;on de produire des rapports sur la situation financi&egrave;re et de rendre compte de ses dépenses et de ses résultats. Parlez-en à votre section des finances ou de la planification et à votre directeur. Demandez-leur :</p>
          <ul>
            <li>Comment appelons-nous nos rapports sur la situation financi&egrave;re et à quoi ressemblent-ils ? &Agrave; quel endroit puis-je les trouver?</li>
            <li>&Agrave; quelle fréquence préparons-nous des rapports sur la situation financi&egrave;re?&nbsp;</li>
            <li>Doit-on remplir ces rapports dans le syst&egrave;me financier ou dans un tableur?</li>
            <li>Quel est mon r&ocirc;le?</li>
            <li>Quelles informations vais-je fournir pour alimenter les rapports externes?</li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="reportQuiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <reportQuiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" type="video" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="reportKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import externalGovtReports from '~/components/slides/report/externalGovtReports'
import identifyResults from '~/components/slides/report/identifyResults'
import reportQuiz from '~/components/slides/report/reportQuiz'
export default {
  data() {
    return {
      modalArray: ["externalGovtReports", "identifyResults", "inRealLife", "reportQuiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    externalGovtReports,
    identifyResults,
    reportQuiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart2
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
    updatePercent(e) {
      this.$store.commit('currentPlaying/setReportPart2_player', e)
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

.img-real_Life{
  width:265px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<i18n>{
  "en":{
  "externalGovtReports":"Activity: External Government Reports",
  "IdentifyResultsTitle":"Activity: Identify Results",
  "inRealLifeTitle":"Activity: In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "externalGovtReports":"Activité : Rapports externes du gouvernement",
  "IdentifyResultsTitle":"Activité : Démontrer les résultats",
  "inRealLifeTitle":"Activité : Dans la vraie vie",
  "TakeTheQuiz":"Répondez au questionnaire",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
