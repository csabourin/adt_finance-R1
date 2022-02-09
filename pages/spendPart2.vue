<template>
  <div>
    <h1 class="pageTitle" v-html="$t('ExerciseFinancialAuthority')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_d6fi3b4p/flavorId/0_fqnpevih/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_cd1vdsky/flavorId/0_3z2qwwf8/name/a.mp4" chapters chapterFile="SpendPart2.vtt" ccFile="SpendPart2_captions.vtt" posterFile="spendPart2_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart2" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalParts') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">
                        <!-- 
                        <p>Slide 1: Certification Authority <br />***</p>
                        <p>&ldquo;In general, no invoice should be paid until all goods are received or services performed.</p>
                        <p>Exercising your certification authority under Section 34 essentially means that you pause to attest that the goods and services that you received match the invoice to be paid.</p>
                        <p>While perhaps other people on your team may be able to make that assessment, it is you, as the delegated manager, who bears the weight of the accountability. As such, you need to make sure that the invoice is accurate, that the financial coding is also accurate.</p>
                        <p>Of course, you can only do this if you have the proper authority to make that assessment so be sure to check that too!</p>
                        <p>***</p>
                        <p>Slide 2: Accuracy of Invoice</p>
                        <p>***</p>
                        <p>Before signing off on an invoice to attest of its accuracy, the manager, usually with the help of their administrative staff, verifies the accuracy of the invoice or claim by looking at the following elements:</p>
                        <p>* The date issued: verify that the invoice was issued on or after the order date. Or, in the case of a contract, that it was issued during the contract period<br />* Quantities: confirm that the items claimed line up with items ordered <br />* Taxes: validate that the amount for taxes is accurate<br />* Supplier or payee: make sure that their information is accurate and that the supplier or payee is eligible for payment<br />* Status: Verify that the invoice has not already been paid</p>
                        <p>You may need to go back to the supplier to correct the invoice before you can sign section 34.</p>
                        <p>Invoices must be paid within 30 days from the time the department receives the invoice to avoid interest charges.</p>
                        <p>***</p>
                        <p><br />Slide 3: Processing the Invoice</p>
                        <p>***</p>
                        <p>Once the invoice is validated, the manager verifies the financial coding and approves section 34. This approval is done either via a signature on paper or electronically, depending on the practices in your department.</p>
                        <p>The approved invoice is then sent to the finance unit, who will pay the invoice, pursuant to section 33.</p>
                        <p>Keep in mind that you</p>
                        <p>* may not authorize sections 33 and 34 for the same transaction or invoice; a financial officer will perform section 33; <br />* may not authorize section 41 for a contract and section 34 related to the same contract; a procurement officer will perform section 41; <br />* may not authorize any transaction for which they may be perceived as having a personal benefit.</p>
                        <p>&nbsp;</p> -->

                        <h2>1. Certification Authority</h2>
                        <p>In general, no invoice should be paid until all goods are received or services performed.</p>
                        <p>Exercising your certification authority under section 34 of the <em>Financial Administration Act</em> essentially means that you pause to attest that the goods and services you received match the invoice.</p>
                        <p>While other people on your team may be able to make that assessment, it is you, as the delegated manager, who bears the weight of the accountability. As such, you need to make sure that the invoice is accurate—and that the financial coding is also accurate.</p>
                        <p>Of course, you can only do this if you have the proper authority to make that assessment. So be sure to check that too!</p>
                        <p>[A Certification Authority activity pop-up text box appears.]</p>

                        <hr>

                        <h2>2. Accuracy of Invoice</h2>
                        <p>Before signing off on an invoice, the manager, usually with the help of their administrative staff, verifies the accuracy of an invoice or claim by looking at the following elements:</p>
                        <ul>
                          <li>The date issued – verify that the invoice was issued on or after the order date; or, in the case of a contract, that it was issued during the contract period.</li>
                          <li>Quantities – confirm that the items claimed line up with the items ordered. </li>
                          <li>Taxes – validate that the amount for taxes is accurate and has appropriate GST or PST numbers.</li>
                          <li>Supplier or payee – make sure that their information is  accurate and that the supplier or payee is eligible for payment.</li>
                          <li>And status – verify that the invoice has not already been paid.</li>
                        </ul>
                        <p>You may need to go back to the supplier to correct the invoice before you can sign section 34.</p>
                        <p>Invoices must be paid within 30 days from the time the department receives the invoice to avoid interest charges.</p>
                        <p>[An Accuracy of Invoice activity pop-up text box appears.]</p>

                        <hr>

                        <h2>3. Processing the Invoice</h2>
                        <p>Once the invoice is validated, the manager verifies the financial coding and approves section 34. This approval is done with a signature either on paper or electronically, depending on the practices of your department. </p>
                        <p>The approved invoice is then sent to the Finance unit, who will pay the invoice pursuant to section 33. </p>
                        <p>Keep in mind:</p>
                        <ul>
                          <li>You are not allowed to authorize sections 33 and 34 for the same transaction or invoice; a financial officer will perform section 33. </li>
                          <li>You are not allowed to authorize section 41 for a contract and section 34 related to the same contract; a procurement officer will perform section 41. </li>
                          <li>You are not allowed to authorize any transaction for which you may be perceived as having a personal benefit.</li>
                        </ul>
                        <p>[A Processing the Invoice activity pop-up text box appears.]</p>
                        <hr>
                        <h2>4. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <!-- <h3>Autorité de certification</h3>
                        <p>De mani&egrave;re générale, aucune facture ne doit &ecirc;tre payée tant que les biens n’ait été re&ccedil;us ou que les services n’aient été rendus.</p>
                        <p>Exercer votre autorité de certification en vertu de l’article 34 de la LGFP signifie, essentiellement, que vous devez prendre un moment pour attester que les biens et services que vous avez re&ccedil;us correspondent bien à la facture à payer.</p>
                        <p>Bien qu’en principe d’autres personnes de votre équipe pourraient faire cette évaluation, c’est à vous, en tant que gestionnaire délégué que revient le poids de cette responsabilité.</p>
                        <p>Bien entendu, vous ne pouvez faire cette attestation que si vous avez bel et bien la délégation de la faire. Assurez-vous de vérifier que c’est bien le cas!</p>
                        <h3>Exactitude de la facture</h3>
                        <p>Avant d’attester de l’exactitude d’une facture, le gestionnaire, habituellement avec l’aide de son personnel administratif, vérifie l’exactitude de la facture ou de la réclamation des éléments suivants:</p>
                        <ul>
                        <li>La date d’émission: on s’assure que la facture a été émise à la date de commande ou apr&egrave;s celle-ci. Ou encore, s’il s’agit d’un contrat, on doit vérifier que la facture a bel et bien été émise pendant la durée du contrat.</li>
                        <li>Les quantités: on vérifie à ce que le nombre d’article réclamés corresponde bien aux articles commandés</li>
                        <li>Les taxes: on valide que le montant pour les taxes est exact</li>
                        <li>Le fournisseur ou le bénéficiaire : on s’assure que l’information est exacte et que le fournisseur ou le bénéficiaire est admissible au paiement</li>
                        <li>Statut: on vérifie que la facture n’a pas déjà été payée</li>
                        </ul>
                        <p>Il se peut que vous deviez retourner au fournisseur pour faire corriger la facture avant de signer l’article 34.</p>
                        <p>Les factures doivent &ecirc;tre payées dans les 30 jours suivant la réception de la facture par le minist&egrave;re afin d’éviter les frais d’intér&ecirc;t.</p>
                        <h3>Traitement de la facture</h3>
                        <p><br />Une fois la facture validée, le gestionnaire vérifie le codage financier et approuve l’article 34. L’approbation se fait soit sur papier ou encore par voie électronique, selon les pratiques habituelles dans votre minist&egrave;re.</p>
                        <p>La facture approuvée est ensuite envoyée au service des finances qui paiera la facture, conformément à l’article 33.</p>
                        <p>Gardez à l’esprit les éléments suivants:</p>
                        <ul>
                        <li>vous ne pouvez pas autoriser les articles 33 et 34 pour la m&ecirc;me transaction ou facture; un agent financier exécutera l’article 33 ;</li>
                        <li>vous ne pouvez pas autoriser l’application de l’article 41 pour un marché et de l’article 34 lié au m&ecirc;me marché; un agent d’approvisionnement exécutera l’article 41;</li>
                        <li>vous ne pouvez autoriser aucune transaction pour laquelle vous pouvez &ecirc;tre per&ccedil;u comme ayant un avantage personnel.</li>
                        </ul> -->

                        <h2>1. Autorité de certification</h2>
                        <p>De manière générale, aucune facture ne doit être payée tant que les biens n’ont pas été reçus ou que les services n’ont été rendus.</p>
                        <p>Exercer votre autorité de certification en vertu de l'article 34 sur la <em>Loi sur la gestion des finances publiques</em> (LGFP) signifie, essentiellement, que vous devez prendre un moment pour attester que les biens et services que vous avez reçus correspondent bien à la facture. </p>
                        <p>Bien que d’autres personnes de votre équipe pourraient faire cette évaluation, c’est à vous, en tant que gestionnaire délégué que revient le poids de cette responsabilité. Vous devez donc vous assurer que la facture et le codage financier sont exacts. </p>
                        <p>Bien entendu, vous ne pouvez faire cette attestation que si vous avez bel et bien reçu la délégation pour le faire. Vérifiez que c’est bien le cas! </p>
                        <p>[Une fenêtre contextuelle Activité : Autorité de certification apparaît.]</p>

                        <hr>

                        <h2>2. Exactitude de la facture</h2>
                        <p>Avant de signer une facture, le gestionnaire, habituellement avec l'aide de son personnel administratif, vérifie l'exactitude de la facture ou de la réclamation en examinant les éléments suivants :  </p>
                        <ul>
                          <li>La date d'émission : on s’assure que la facture a été émise à la date de commande ou après celle-ci. Ou encore, s’il s’agit d’un contrat, on doit vérifier que la facture a bel et bien été émise pendant la durée du contrat. </li>
                          <li>Les quantités : on vérifie que le nombre d’articles réclamés corresponde bien aux articles commandés.</li>
                          <li>Les taxes : on valide que le montant indiqué pour les taxes est exact et que le bon numéro de TPS ou de TVH est inscrit.</li>
                          <li>Le fournisseur ou le bénéficiaire : on s’assure que l’information est exacte et que le fournisseur ou le bénéficiaire sont admissibles au paiement.</li>
                          <li>Et le statut : on vérifie que la facture n'a pas déjà été payée.</li>
                        </ul>
                        <p>Il se peut que vous deviez retourner voir le fournisseur pour faire corriger la facture avant de signer l'article 34.</p>
                        <p>Les factures doivent être payées dans les 30 jours suivant la réception de la facture par le ministère afin d'éviter de payer des intérêts.</p>
                        <p>[Une fenêtre contextuelle Activité : Exactitude de la facture apparaît.]</p>

                        <hr>

                        <h2>3. Traitement de la facture</h2>
                        <p>Une fois la facture validée, le gestionnaire vérifie le codage financier et approuve l'article 34. L’approbation se fait soit sur papier ou encore par voie électronique, selon les pratiques habituelles dans votre ministère.</p>
                        <p>La facture approuvée est ensuite envoyée au service des finances qui paiera la facture, conformément à l'article 33. </p>
                        <p>Gardez à l'esprit les éléments suivants : </p>
                        <ul>
                          <li>vous ne pouvez pas autoriser les articles 33 et 34 pour la même transaction ou facture; un agent financier exécutera l'article 33; </li>
                          <li>vous ne pouvez pas autoriser l'application de l'article 41 pour un contrat et l'article 34 lié au même contrat; un agent d'approvisionnement exécutera l'article 41;</li>
                          <li>et vous ne pouvez autoriser aucune transaction pour laquelle vous pouvez être considéré comme profiter d’un avantage personnel.</li>
                        </ul>
                        <p>[Une fenêtre contextuelle Activité : Traitement de la facture apparaît.]</p>

                        <hr>
                        <h2>4. Section complétée</h2>
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
        <b-modal no-stacking id="CertificationAuthority" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CertAuthorityTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <CertificationAuthority />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="AccuracyOfInvoice" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AccuracyInvoiceTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <AccuracyInvoice />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="ProcessingInvoice" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('ProcessInvoiceTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <ProcessInvoice />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning youAreHere path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
  import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import CertificationAuthority from '~/components/slides/spend/Spend2CertificationAuthority'
import AccuracyInvoice from '~/components/slides/spend/Spend2AccuracyInvoice'
import ProcessInvoice from '~/components/slides/spend/spendPart2ProcessInvoice'
export default {
  data() {
    return {
      modalArray: ["CertificationAuthority", "AccuracyOfInvoice", "ProcessingInvoice"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    AccuracyInvoice,
    CertificationAuthority,
    ProcessInvoice
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart2
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
      this.$store.commit('currentPlaying/setSpendPart2_player',e)
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
  "AccuracyInvoiceTitle":"Activity: Accuracy of Invoice",
  "CertAuthorityTitle":"Activity: Certification Authority",
  "ProcessInvoiceTitle":"Activity: Processing the Invoice",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "CertAuthorityTitle":"Activité : Autorité de certification",
  "ProcessInvoiceTitle":"Activité : Traitement de la facture",
  "AccuracyInvoiceTitle":"Activité : Exactitude de la facture",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>