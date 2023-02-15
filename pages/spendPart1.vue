<template>
  <div>
    <h2 class="pageTitle" v-html="$t('InitiateAuthorizeSpending')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_kuavebpz/flavorId/0_kl36sx20/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_55v2xnk5/flavorId/0_7yp7dcyb/name/a.mp4" chapters chapterFile="SpendPart1.vtt" ccFile="SpendPart1_captions.vtt" posterFile="spendPart1_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
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

                        <h2>1. Check Your Budget</h2>
                        <p>Now that you have your approved budget and are beginning to deliver on your work plan, let’s start spending money! </p>
                        <p>But before initiating and committing any expenditures, you must verify that there are sufficient funds in your budget.</p>
                        <p>This means you need to review what has been spent or committed to date, along with any other planned expenditures.  </p>
                        <p>As the year progresses, you will most likely shuffle unused amounts within your budgeted items to find the funds that you need for expenditures. </p>
                        <p>Don’t forget! The format of your budget may differ from the one used here, depending on where you work.</p>
                        <p>[A Check Your Budget activity pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Delegation of Authority</h2>
                        <p>Did you know that financial authorities are granted to ministers and deputy heads through the <em>Financial Administration Act</em>, the FAA?</p>
                        <p>These individuals then delegate authority to positions identified by title through their organization’s delegation of financial signing authorities chart. </p>
                        <p>To exercise your financial authority, you need to do the following three things: </p>
                        <ol>
                          <li>One, successfully complete this course. </li>
                          <li>Two, submit your signed delegation card to your Finance unit.</li>
                          <li>And three, receive your formal delegation of authority in writing from your Finance unit.</li>
                        </ol>
                        <p>There are several delegated authorities, and managers typically have two.</p>
                        <p>Section 32 is expenditure initiation and commitment authority, and section 34 is certification authority. Section 32 would allow you to order office supplies, while section 34 would allow you to sign off on having received the supplies.</p>
                        <p>And then there’s section 33, which allows the Finance unit to pay for the supplies.</p>
                        <p>In certain situations, for example, temporary help services, you will need to go through a procurement process because it involves a contract. These situations are governed by section 41 of the FAA, and would typically be managed by the Procurement section in your organization.</p>
                        <p>To know what and how much you can authorize, consult your own signed delegation card and your organization’s delegation chart. </p>
                        <p>Again, the format of these documents will differ, depending on where you work.</p>
                        <p>[A Delegation of Authority activity pop-up text box appears.]</p>

                        <hr>

                        <h2>3. Spending Mechanisms</h2>
                        <p>You have the money and you have the delegation. Great! </p>
                        <p>Now you need to determine the best way to get the goods and services in question. </p>
                        <p>The next activity will give you a chance to learn about spending mechanisms!</p>
                        <p>[Onscreen text showing the Try It! instruction for the Spending Mechanisms activity.]</p>

                        <hr>

                        <h2>4. Recording in the Financial System</h2>
                        <p>Once you’ve checked that you have enough money to cover a purchase, you then create either a soft commitment or a hard commitment. </p>
                        <p>A soft commitment is when you reserve funds before the supplier is identified.</p>
                        <p>A hard commitment is when you make an arrangement with a known supplier.</p>
                        <p>Either way, you will need to enter these commitments in the financial system using the department’s unique financial coding.</p>
                        <p>This financial coding is a system that allows us to keep track of the different kinds of transactions throughout the year. It allows us to identify, among other things: </p>
                        <ul>
                          <li>which manager is responsible for the financial transaction,</li>
                          <li>which component of your budget is being used, operating and maintenance, salary, etc.,</li>
                          <li>the nature of the financial transaction, like if it is revenue, an expenditure, an asset, or a liability,</li>
                          <li>details of the transaction, </li>
                          <li>and the activity to which the financial transaction is linked.</li>
                        </ul>
                        <p>The financial coding system allows you to better manage your financial transactions and speak to your budget at any moment throughout the year. </p>
                        <p>Managers often work with administrative professionals or financial officers for this task.</p>
                        <p>[A Recording in the Financial System activity pop-up text box appears.]</p>

                        <hr>

                        <h2>5. Try It!</h2>
                        <p>To wrap up this section, let’s take a look at a practice scenario.</p>
                        <p>[Onscreen text showing the Try It! instruction for the activity.]</p>
                        <hr>
                        <h2>6. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.] </p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Vérifiez votre budget</h2>
                        <p>Maintenant que votre budget est approuvé et que vous avez commencé à mettre en œuvre votre plan de travail, vous pouvez commencer à dépenser!</p>
                        <p>Avant d’engager des dépenses, toutefois, vous devez vous assurer que les fonds disponibles dans votre budget sont suffisants.</p>
                        <p>Pour ce faire, vous devez examiner les dépenses qui ont été engagées, dépensées ou prévues. </p>
                        <p>Au fur et à mesure que l’année avance, vous devrez probablement ajuster votre budget à vos besoins en déplaçant des montants d’un poste budgétaire à un autre au sein même votre budget.</p>
                        <p>N’oubliez pas que le gabarit utilisé dans votre unité peut différer sensiblement de celui que nous vous présentons ici!</p>
                        <p>[Une fenêtre contextuelle Activité : Vérifiez votre budget apparaît.]</p>

                        <hr>

                        <h2>2. Délégation des pouvoirs</h2>
                        <p>Saviez-vous que c’est la <em>Loi sur la gestion des finances publiques</em> (LGFP) qui confère aux ministres et aux administrateurs généraux leurs pouvoirs financiers? </p>
                        <p>Par la suite, ces personnes délèguent, à leur tour, une partie de ces pouvoirs financiers à l’intérieur de leur organisation, par le biais d’un tableau de délégation des pouvoirs de signature en matière financière.</p>
                        <p>Pour exercer votre délégation financière, vous avez besoin de faire ces 3 choses :</p>
                        <ol>
                          <li>Réussir le présent cours</li>
                          <li>Soumettre votre carte de délégation signée à votre service des finances et</li>
                          <li>Obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances </li>
                        </ol>
                        <p>Il existe divers pouvoirs délégués. Les gestionnaires en ont généralement deux. </p>
                        <p>L’article 32 permet à une personne déléguée d’engager des fonds et de dépenser tandis que l’article 34 fait référence à l’autorité de certification. L’article 32 vous permet de commander des articles de bureau, par exemple, puis l’article 34 vous permet de certifier que vous les avez bel et bien reçus.</p>
                        <p>Ensuite, l’article 33 permet à l’unité des finances de payer la facture.</p>
                        <p>Dans certaines situations, par exemple des services d’aide temporaire, vous devrez passer par un processus d’approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe d’Approvisionnement de votre organisation que reviendraient ces démarches, en vertu de l’article 41 de la <em>Loi sur la gestion des finances publiques</em>. </p>
                        <p>Pour savoir ce que vous pouvez engager, vous devez vous fier à votre carte de délégation signée ainsi qu’au tableau de délégation des pouvoirs de signature en matière financière dans votre organisation.</p>
                        <p>Encore une fois, le format de ces documents variera selon l’endroit où vous travaillez. </p>
                        <p>[Une fenêtre contextuelle Activité : Délégation des pouvoirs apparaît.]</p>

                        <hr>

                        <h2>3. Mécanismes de dépense</h2>
                        <p>Vous avez l’argent et vous avez la délégation. Super! </p>
                        <p>Maintenant, vous devez déterminer la meilleure façon d’obtenir les biens et services en question. </p>
                        <p>L’activité suivante vous donnera l’occasion de vous familiariser avec les mécanismes de dépense!</p>
                        <p>[Texte à l’écran indiquant l'instruction Essayez-le! pour l’activité Mécanismes de dépense.]</p>

                        <hr>

                        <h2>4. Enregistrement dans le système financier</h2>
                        <p>Après avoir vérifié que vous avez assez d’argent pour payer un achat, vous créez soit un engagement préalable, soit un engagement ferme.</p>
                        <p>Un engagement préalable est pris lorsque vous réservez des fonds alors que vous n’avez pas encore trouvé le fournisseur. </p>
                        <p>Un engagement ferme est approprié lorsque vous faites affaire avec un fournisseur connu.</p>
                        <p>Dans un cas comme dans l’autre, vous devrez entrer ces engagements dans le système financier en utilisant le codage financier unique de votre organisation.</p>
                        <p>Ce codage financier est un système qui permet de faire le suivi des opérations financières tout au long de l’année. Il permet de déterminer, entre autres : </p>
                        <ul>
                          <li>le  gestionnaire responsable des opérations financières; </li>
                          <li>la composante de votre budget utilisée, par exemple fonctionnement et entretien, salaire, etc.;</li>
                          <li>la nature de l’opération financière, par exemple  dépenses, recettes, actif, passif;</li>
                          <li>les détails de la transaction;</li>
                          <li>et l’activité à laquelle est associée l’opération financière.</li>
                        </ul>
                        <p>Le système de codage financier vous permet de bien gérer vos opérations financières et de bien pouvoir répondre de votre budget à n’importe quel moment au cours de l’année. </p>
                        <p>Les gestionnaires travaillent souvent avec des professionnels de l'administration ou des agents financiers pour cette tâche.</p>
                        <p>[Une fenêtre contextuelle Activité : Enregistrement dans le système financier apparaît.]</p>

                        <hr>

                        <h2>5. Essayons-le!</h2>
                        <p>Afin de conclure cette section, prenons quelques instants pour appliquer le tout à un scénario fictif. </p>
                        <p>[Texte à l’écran indiquant l'instruction Essayez-le! pour l’activité.]</p>

                        <hr>
                        <h2>6. Section complétée</h2>
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
        <b-modal no-stacking id="checkYourBudget" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('checkBudget')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <checkBudget />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="delegAuth" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('delegateAuthority')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <delegAuthority />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="spendMechanisms" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('spendingMechanismsTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <spendMechanisms />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="spendS32tryIt" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('tryItTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <spendS32tryIt />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="RecordingFinancialSystem" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('RecordingTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <RecordingFinancialSystem />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetQuiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning youAreHere path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import checkBudget from '~/components/slides/spend/checkBudget'
import delegAuthority from '~/components/slides/spend/delegAuthority'
import spendMechanisms from '~/components/slides/spend/spendMechanisms'
import RecordingFinancialSystem from '~/components/slides/spend/RecordingFinancialSystem'
import spendS32tryIt from '~/components/slides/spend/spendS32tryIt'
export default {
  data() {
    return {
      modalArray: ["checkYourBudget", "delegAuth", "spendMechanisms", "RecordingFinancialSystem","spendS32tryIt"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    delegAuthority,
    checkBudget,
    spendMechanisms,
    spendS32tryIt,
    RecordingFinancialSystem
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart1
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
      this.$store.commit('currentPlaying/setSpendPart1_player',e)
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start;
  counter-reset: episode;
}
#bar > li {
  list-style-type:none;
}
#bar > li > p {
  display: inline-block;
  height:2.6em;
}
/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 200px;
  height: 171px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #7d677d;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}
.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(episode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  display: inline-block;
  width:58px;
}
.playButton:hover, .activityButton:hover,.playButton:focus, .activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity:0.8;
}
.playButton{
  left: 20px;
}
.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
.spendSection {
  position: relative;
}
.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.spendSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "delegateAuthority":"Activity: Delegation of Authority",
  "checkBudget":"Activity: Check Your Budget",
  "spendingMechanismsTitle":"Activity: Spending Mechanisms",
  "RecordingTitle":"Activity: Recording in the Financial System",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "delegateAuthority":"Activité : Délégation des pouvoirs",
  "checkBudget":"Activité : Vérifiez votre budget",
  "tryItTitle":"Activité : Essayons-le!",
  "spendingMechanismsTitle":"Activité : Mécanismes de dépense",
  "RecordingTitle":"Activité : Enregistrement dans le système financier",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>