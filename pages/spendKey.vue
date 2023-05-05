<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessS.svg" alt="" role="presentation" width="250px"></p>
    <p>&nbsp;</p>
    <p class="quote spend"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q><footer>&mdash; Stephen R. Covey</footer></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Initiate Expenditures and Authorize Commitments</h3>
            <ul>
              <li>When you decide to obtain goods or services that will result in the eventual spending of funds, such as the decision to hire staff, order supplies, or authorize travel, you are initiating an expenditure.</li>
              <li>When you commit an expenditure, you are certifying that the money is available. This is known as section 32 of the <em>Financial Administration Act </em> (<abbr>FAA</abbr>).</li>
              <li>A delegation of financial authority chart shows your organization’s official spending and financial authorities.</li>
              <li>To learn what you can initiate and commit, consult your own signed delegation form. For those expenditures for which you do not have authority, consult your organization’s delegation of financial authority chart.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Engager et autoriser des dépenses</h3>
              <ul>
                <li>Lorsque vous décidez d’obtenir des biens ou des services qui entra&icirc;neront une dépense éventuelle, comme l’embauche de personnel, la commande de fournitures ou l’autorisation de voyager, vous engagez une dépense.</li>
                <li>Lorsque vous engagez une dépense, vous certifiez que l’argent est disponible. C’est ce à quoi on fait référence lorsqu’on parle de l’article 32 de la<em> Loi sur la gestion des finances publiques </em>(<abbr>LGFP</abbr>).</li>
                <li>Un tableau de délégation des pouvoirs financiers indique les pouvoirs de dépenser et les pouvoirs financiers officiels de votre organisation.</li>
                <li>Pour savoir ce que vous pouvez engager comme dépense, consultez votre propre carte de délégation signée. Pour les dépenses pour lesquelles vous n’avez pas d’autorisation, consultez le tableau de délégation des pouvoirs financiers de votre organisation.</li>
              </ul>
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Exercise Financial Authority</h3>
            <ul>
              <li>When you certify that the work has been performed as required, and services and supplies have been satisfactorily rendered, this is known as section 34.</li>
              <li>When your financial department ensures that the payment complies with policy requirements, this is section 33.</li>
            </ul>
            <h3>Monitor and Control Finances</h3>
            <ul>
              <li>To help you track your work plan and budget, you will continually monitor your spending and manage your risks.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Exercer son pouvoir financier</h3>
              <ul>
                <li>Lorsque vous attestez que les travaux ont été exécutés conformément aux exigences et que les services ont été rendus et les fournitures livrées de façon satisfaisante, il s’agit de l’article 34.</li>
                <li>Lorsque votre service financier s’assure que le paiement est conforme aux exigences de la politique, il s’agit de l’article 33.</li>
              </ul>
              <h3>Surveiller et contr&ocirc;ler les finances</h3>
              <ul>
                <li>Pour vous aider à suivre votre plan de travail et votre budget, vous surveillerez continuellement vos dépenses et gérerez vos risques.</li>
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
                  <download :texts="$t('procurementInstruments')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '134' : '139'" name="procurementInstruments" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
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
      <microlearning path="spendKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="spendPart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
       <microlearning time="5" youAreHere path="spendKey" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
       <TestTile
  path="exam2"
  size="140"
  time="15"
  imagePath="S-Test.svg"
  :text="$t('Test')"
  :completion="parseInt($store.getters['spend/getScore'], 10)"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4152&ou=7781

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
  mounted() {
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmSpend', 100), 30000)
  },
  beforeDestroy() {
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": "Accountability breeds response-ability.",
  "spendSectionBar": "SPEND"
  },
  "fr":
  {
  "keyPlanQuote": "La responsabilité engendre l’habileté.",
  "spendSectionBar": "DÉPENSES"
  }
  }</i18n>
<style type="text/css" scoped>

p.quote.spend{
  position: relative;
}
  
p.quote.spend:before {
  position: absolute;
  content: " ";
  background-color: #cac1ca;
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
  color: #7d677d;
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
  color: #7d677d;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}
footer {
  display:inline;
}
</style>
