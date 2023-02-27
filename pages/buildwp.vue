<template>
  <div>
    <h2 class="pageTitle">
      {{ $t('BuildWorkPlan') }}
    </h2>
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp"
            enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_99dima2k/flavorId/0_prkro9x3/name/a.mp4"
            frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_iazbfh85/flavorId/0_j64obzqm/name/a.mp4"
            chapters chapterFile="chapters.vtt" posterFile="buildworkplan.png" ccFile="buildWP_captions.vtt"
            :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{ $t('transcript') }}</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale == 'en'">
                        <h2>Introduction</h2>
                        <p><strong>[00:00:01 Title is shown onscreen.]</strong></p>
                        <h2>Module 1: Build a Work Plan</h2>
                        <p><strong>Charlaine Lapointe: </strong>In this section, you will learn to:</p>
                        <ul>
                          <li>interpret a work plan</li>
                          <li>make a 360 degree scan</li>
                          <li>incorporate Government priorities into a work plan and</li>
                          <li>adjust a work plan according to new information</li>
                        </ul>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <p><strong>[00:00:23 Title is shown onscreen.] </strong></p>
                        <hr>
                        <h2>1. The Purpose of a Work Plan</h2>
                        <p>A work plan is a living document in which you define and prioritize your
                          unit’s activities. Think of it as a to-do list for the upcoming year. It helps you to
                          communicate how you’ll be assigning resources and managing timelines. It’s the cornerstone of
                          your planning process because it supports your budget and reporting activities.</p>
                        <p>Typically, you wouldn’t start from scratch. You would simply review last year's work
                          plan, budget and reports to identify what needs to be kept, added or removed for the new
                          year.</p>
                        <p>But even before putting together your work plan, it’s useful to step out of your role and
                          look at the big picture.</p>
                        <p><strong>[00:01:07 A “Continue to the next segment” pop-up text box appears onscreen.]
                          </strong></p>
                        <p><strong>[00:01:08 Title is shown onscreen.] </strong></p>
                        <hr>
                        <h2>2. Align your Work Plan with Government Priorities</h2>
                        <p>It all starts with the Speech from the Throne, which outlines government
                          priorities.</p>
                        <p>These priorities will cascade down to you as a manager, and will need to be reflected in your
                          work plan.</p>
                        <p>After the Speech from the Throne, the Prime Minister addresses a mandate
                          letter to each department’s minister. </p>
                        <p>In it, the Prime Minister sets out their overall expectations and policy objectives. </p>
                        <p>Every year, there is a federal budget, which sets Canada’s economic agenda
                          for the year. Departments will have priorities and objectives that align to this agenda in
                          addition to other core mandates.</p>
                        <p>The organization’s core responsibilities, results, results indicators, and program inventory
                          are outlined in a Departmental Results Framework or “DRF”.</p>
                        <p>Then there is the Departmental Plan, which outlines, amongst other things,
                          an organization’s expenditure plan for the coming year. It includes in more detail the
                          elements of the DRF, expected results, and associated resourcing requirements, covering a
                          3-year period.</p>
                        <p>Then you may have plans per sector, branch, and directorate.</p>
                        <p>This is where your work plan comes in! You build your work plan around the activities that
                          are the responsibility of your unit and this naturally ties back to the Departmental Plan and
                          DRF.</p>
                        <p><strong>[00:02:35 A “Reference: External Links” pop-up text box appears onscreen.]</strong>
                        </p>
                        <p><strong>[00:02:36 Title is shown onscreen.] </strong></p>
                        <hr>
                        <h2>3. Parts of a Work Plan</h2>
                        <p>At this point, you might be wondering what a work plan looks like. Not all units use the same
                          model. By talking to your colleagues and to folks in corporate planning and finance, you can
                          find out which one is used in your office. Here is a typical work plan structure. Have a look!
                          Also, look in the files section on the top right to find work plan examples.</p>
                        <p>Take a moment now to explore the different sections of a work plan.</p>
                        <p><strong>[00:02:55 Text showing the “Try It!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:03:05 An “Activity: Parts of a work plan” pop-up text box appears onscreen.]
                          </strong></p>
                        <p><strong>[00:03:07 Title is shown onscreen.] </strong></p>
                        <hr>
                        <h2>4. Make a 360° Scan</h2>
                        <p>To build a work plan, it helps to understand the historical and
                          cultural context of your unit by asking yourself a series of questions. This
                          is what we call the 360° scan.</p>
                        <p>Here’s a typical example of last year’s work plan. Try to apply the questions in the 360°
                          scan document to this fictional example.</p>
                        <p>You may access the 360° scan document at any time from the File section at the top right.</p>
                        <p><strong>[00:03:25 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:03:36 An “Apply the 360° scan” pop-up text box appears onscreen.]</strong></p>
                        <p><strong>[00:03:38 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>5. Prepare a Work Plan</h2>
                        <p>At this point, you should understand the context, both historically and culturally, and be in
                          a position to craft this year’s work plan!</p>
                        <p>Imagine that your director shares with you this coming year’s priorities for your
                          directorate: <strong>protect aquatic ecosystems, sustain fisheries and manage the issuing of
                            licences</strong>.</p>
                        <p>Using the drop-down menu, choose the best option for each section of this work plan.</p>
                        <p><strong>[00:03:58 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:04:05 An “Activity: Prepare a Work Plan” pop-up text box appears
                            onscreen.]</strong></p>
                        <p><strong>[00:04:07 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>6. Complete the Work Plan</h2>
                        <p>To help you wrap your mind around how to fill the other sections of the work plan, let’s
                          continue with the same scenario. Looking at your draft, you’ll notice that some items have
                          been dropped into the wrong location or may be missing. Update your draft accordingly.</p>
                        <p><strong>[00:04:20 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:04:22 An “Activity: Complete the work plan” pop-up text box appears
                            onscreen.]</strong></p>
                        <p><strong>[00:04:25 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>7. Adjust the Work Plan </h2>
                        <p>Alright. Your director tells you that they’ve been to a steering committee meeting and that
                          they now have <strong>3 new pieces of information</strong> that should be reflected in your
                          work plan:</p>
                        <ol>
                          <li>there will be new software implementation to speed up the issuing of licences</li>
                          <li>there’s a new policy that now requires licences to be issued in 15 days, not 30 days,
                            starting on November first and</li>
                          <li>there’s been a decision to not replace a retiring employee.</li>
                        </ol>
                        <p><strong>[00:04:59 An “Activity: Adjust the Work Plan” pop-up text box appears.]</strong></p>
                        <p><strong>[00:05:01 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>8. In Real Life</h2>
                        <p>Let’s take what you’ve learned into real life. Your organization will have their own ways of
                          doing things. Take a time out now from the course to scan your intranet and see which
                          templates are used. Connect with your colleagues, your director, your financial officer to
                          have a chat about work plans.</p>
                        <p><strong>[00:05:21 An “In Real Life” pop-up text box appears onscreen.]</strong></p>
                        <p><strong>[00:05:22 Title is shown onscreen.]</strong></p>
                        <hr>
                        <h2>9. Quiz</h2>
                        <p>So now that you know how to examine, prepare and adjust a work plan, let’s see what you
                          remember by taking this short quiz.</p>
                        <p><strong>[00:05:29 Text showing the “Take the Quiz!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:05:30 A “Take the quiz” pop-up text box appears onscreen.]</strong></p>
                        <p><strong>[00:05:32 Text showing “You have completed this section” appears onscreen.]</strong></p>
                        <hr>
                        <h2>10. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                        <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                      </span>
                      <span v-if="$i18n.locale == 'fr'">
                        <h2>Introduction</h2>
                        <p><strong>[00:00:00 : Un titre apparaît à l'écran.]</strong></p>
                        <h2>Module 1 : Élaborer un plan de travail</h2>
                        <p><strong>Charlaine Lapointe : </strong>Dans la présente section, vous apprendrez ce qui suit&nbsp;:</p>
                        <ul>
                          <li>interpréter un plan de travail; </li>
                          <li>effectuer un aperçu à 360 degrés;</li>
                          <li>intégrer les priorités du gouvernement à un plan de travail; et</li>
                          <li>ajuster un plan de travail en fonction des nouveaux renseignements.</li>
                        </ul>
                        <p>Il vous faudra environ 20 minutes pour compléter cette section.</p>
                        <p><strong>[00:00:28 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>1. Le but d’un plan de travail</h2>
                        <p>Un plan de travail est un document évolutif dans lequel vous définissez et
                          priorisez les activités de votre unité. Considérez-le comme une liste de choses à faire pour
                          l'année à venir. Il vous aide à communiquer la façon dont vous avez l’intention
                          d’affecter vos ressources et de fixer vos échéances. C'est la pierre
                          angulaire de votre processus de planification, car elle soutient votre budget et vos activités
                          de production de rapports.
                        </p>
                        <p>D'habitude, on ne part pas de rien. Vous examinez simplement le plan de travail, le
                            budget et les rapports de l'année dernière pour déterminer ce qui doit être conservé, ajouté
                            ou supprimé pour la nouvelle année.</p>
                        <p>Mais avant même d'élaborer votre plan de travail, prenons un instant pour sortir de notre
                          rôle de gestionnaire afin de regarder la situation dans son ensemble.</p>
                        <p><strong>[00:01:21 : Une fenêtre contextuelle Passer au segment suivant apparaît à l'écran.]</strong></p>
                        <p><strong>[00:01:22 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>2. Aligner votre plan de travail sur les priorités du gouvernement</h2>
                        <p>Tout commence avec le discours du Trône dans lequel on énonce les priorités du gouvernement.
                        </p>
                        <p>Ces priorités se rendront jusqu'à vous en tant que gestionnaire et devront se refléter dans
                          votre plan de travail.</p>
                        <p>Après le discours du Trône, le premier ministre adresse une lettre de mandat
                          au ministre de chaque ministère.</p>
                        <p>Dans cette lettre, le premier ministre y énonce ses attentes globales et ses
                          objectifs stratégiques.
                        </p>
                        <p>Chaque année, le budget fédéral établit le programme économique du Canada
                          pour la prochaine année. Les ministères vont se voir attribuer des priorités et des objectifs
                          qui s'aligneront sur ce programme en plus de leurs mandats de base. </p>
                        <p>Les responsabilités essentielles, les résultats, les indicateurs de rendement et le
                          répertoire de programmes de l'organisation sont décrits dans le Cadre ministériel des
                            résultats - ou le CMR.</p>
                        <p>Ensuite, il y a le Plan ministériel, qui décrit, entre autres, les plans de
                          dépenses d’une organisation pour l'année à venir. Il comprend plus en détail les éléments du
                          CMR, les résultats escomptés et les besoins connexes en ressources, pour une période de 3 ans.
                        </p>
                        <p>Ensuite, vous pouvez avoir des plans par secteur, par direction
                            générale et par direction.</p>
                        <p>C'est là qu'intervient votre plan de travail! Vous construisez votre plan de travail autour
                          des activités dont vous êtes responsables au sein de votre unité et cela se rattache
                          naturellement au Plan ministériel et le CMR.</p>
                        <p><strong>[00:02:57 : Une fenêtre contextuelle Référence : Liens externes apparaît à l'écran.]</strong></p>
                        <p><strong>[00:02:58 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>3. Les parties d’un plan de travail</h2>
                        <p>À ce stade, vous vous demandez peut-être à quoi ressemble un plan de travail. Toutes les
                          unités n'utilisent pas le même modèle. En parlant à vos collègues et aux gens de la
                          planification d'entreprise et des finances, vous pouvez savoir lequel est utilisé dans votre
                          bureau. Voici une structure de plan de travail typique. Jetez-y un coup d'œil! Aussi, regardez
                          dans la section Fichiers, en haut à droite, pour trouver des exemples de plans de travail.</p>
                        <p>Prenez un moment pour explorer les différentes sections du plan de travail.</p>
                        <p><strong>[00:03:18 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:03:33 : Une fenêtre contextuelle Activité : Parties d’un plan de travail apparaît à l'écran.]</strong></p>
                        <p><strong>[00:03:34 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>4. Effectuer un aperçu à 360 degrés</h2>
                        <p>Pour élaborer un plan de travail, il est utile de comprendre le contexte historique
                            et culturel de votre unité en vous posant une série de questions. C'est ce que nous
                          appellerons l’aperçu à 360 degrés.</p>
                        <p>Voici un exemple fictif du plan de travail, du budget et du rapport de l'an dernier. Essayez
                          d'appliquer les questions du document Aperçu à 360 degrés à cet exemple fictif.</p>
                        <p>Vous pouvez accéder au document d’aperçu à 360 degrés, à tout moment à partir de l'icône
                          Fichier en haut à droite.</p>
                        <p><strong>[00:03:54 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:04:12 : Une fenêtre contextuelle Activité : Préparer un plan de travail apparaît à l'écran.]</strong></p>
                        <p><strong>[00:04:13 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>5. Préparer un plan de travail</h2>
                        <p>À ce stade-ci, vous devriez comprendre le contexte, tant historique que culturel, et être en
                          mesure d'élaborer le plan de travail de cette année!</p>
                        <p>Imaginez que votre directeur partage avec vous les priorités de la prochaine année pour votre
                          direction : protéger les écosystèmes aquatiques, soutenir les pêches et gérer la délivrance
                          des permis.</p>
                        <p>Choisissez la meilleure option pour chaque section de ce plan de travail en utilisant les
                          menus déroulants.</p>
                        <p><strong>[00:04:38 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:04:44 : Une fenêtre contextuelle Activité : Préparer un plan de travail apparaît à l'écran.]</strong></p>
                        <p><strong>[00:04:45 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>6. Compléter le plan de travail</h2>
                        <p>Pour vous aider à remplir les> autres sections du plan de travail, continuons avec le même
                          scénario. En regardant votre brouillon, vous remarquez que certains items ont été placés au
                          mauvais endroit ou sont manquants. Mettez à jour votre brouillon en conséquence.</p>
                        <p><strong>[00:05:02 : Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:03 : Une fenêtre contextuelle Activité : Compléter le plan de travail apparaît à l'écran.]</strong></p>
                        <p><strong>[00:05:04 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>7. Ajuster le plan de travail</h2>
                        <p>Votre directeur vous dit qu'il a participé à une réunion du comité directeur et qu'il dispose
                          maintenant de 3 nouveaux renseignements qui devraient se refléter dans votre plan de travail :
                        </p>
                        <ol>
                          <li>la mise en œuvre d'un nouveau logiciel pour accélérer l'émission des licences;</li>
                          <li>une nouvelle politique qui exige que maintenant les licences soient émises en 15 jours, et
                            non plus en 30 jours, à compter du 1er novembre;</li>
                          <li>une décision de ne pas remplacer un employé qui prend sa retraite.</li>
                        </ol>
                        <p><strong>[00:05:39 : Une fenêtre contextuelle Activité : Ajuster le plan de travail apparaît à l'écran.]</strong></p>
                        <p><strong>[00:05:40 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>8. Dans la vraie vie</h2>
                        <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie! Votre organisation aura sa
                          propre façon de faire les choses. Prenez le temps de consulter votre intranet pour voir quels
                          modèles sont utilisés. Communiquez avec vos collègues, votre directeur ou votre agent
                          financier pour discuter de plans de travail.</p>
                        <p><strong>[00:06:02 : Une fenêtre contextuelle Dans la vraie vie apparaît à l'écran.]</strong></p>
                        <p><strong>[00:06:03 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>9. Quiz</h2>
                        <p>Maintenant que vous savez comment examiner, préparer et ajuster un plan de travail, voyons ce
                          dont vous vous souvenez en répondant à ce petit quiz.</p>
                        <p><strong>[00:06:14 : Texte indiquant l'instruction Répondez au quiz! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:06:15 : Une fenêtre contextuelle Répondez au quiz apparaît à l’écran.]</strong></p>
                        <p><strong>[00:06:18 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
                        <hr>
                        <h2>10. Section complétée</h2>
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
      <b-modal no-stacking id="purpose" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
            {{ $t('gotIt') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
          <b-col cols="12" md="9">
            <img src="~/assets/purposeWP.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>{{ $t('gotItContent') }}</p>
          </b-col>
        </b-row>
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="alignworkplan" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{ $t('activityLinks') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <p>{{ $t('gotoLinks') }}</p>
        <planLinks /><!-- {{ $t('gotIt') }} -->
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="partsofwp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
            {{ $t('partsofWPTitle') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <partsOfWorkPlan />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="threesixty" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">
            {{ $t('scan360Title') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <test360 />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="completedraft" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
            {{ $t('completewpDrafttitle') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <prepareWorkPlan />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="completewp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
            {{ $t('completewptitle') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <completeWorkplan />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="adjustwp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
            {{ $t('adjustwptitle') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <adjustWorkplan />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
            {{ $t('InRealLife') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
          <b-col cols="12" md="9">
            <img src="~/assets/inRealLifeWP.svg" alt="" class="img-fluid"
              style="margin-bottom: 15px; margin-top: 10px;">
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p v-html="$t('IRLText')"></p>
          </b-col>
        </b-row>
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32">
            {{ $t('TakeTheQuiz') }}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <planQuiz />
        <template v-slot:modal-ok>{{ $t('close') }}</template>
      </b-modal>
    </div>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{ $t('planSectionBar') }}</span></div>

      <microlearning path="buildwp" youAreHere imagePath="BuildWP.svg" size="140" time="20"
        :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" type="video" />
      <microlearning size="140" path="createbudget" time="20"
        :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg"
        :text="$t('CreateBudget')" type="video" />
      <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan"
        imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'"
        type="keyMessages" />
      <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'], 10)"
        imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam"
        questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import partsOfWorkPlan from '~/components/slides/plan/parts_workplan'
import planLinks from '~/components/plan_links'
import prepareWorkPlan from '~/components/slides/plan/prepare_workplan'
import completeWorkplan from '~/components/slides/plan/complete_workplan'
import adjustWorkplan from '~/components/slides/plan/adjust_workplan'
import test360 from '~/components/slides/plan/test360'
import planQuiz from '~/components/slides/plan/planQuiz'
import continuePopup from '~/components/continuePopup'
export default {
  data() {
    return {
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty", "completedraft", "completewp", "adjustwp", "reallife", "quiz"]
    }
  },
  components: {
    microlearning,
    videoPlayer,
    planLinks,
    test360,
    partsOfWorkPlan,
    prepareWorkPlan,
    completeWorkplan,
    adjustWorkplan,
    planQuiz,
    continuePopup
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e) {
      this.$store.commit('currentPlaying/setBuildWP_player', e)
    }
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.buildWP
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() {
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  }
}

</script>
<style scoped>
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
<i18n>{
  "en":{
  "gotIt":"Continue to next segment",
  "gotItContent": "Pop-ups will appear throughout the course to indicate what comes next, such as a video, an exercise, a list of links or a job aid.",
  "activityLinks":"Reference: External Links",
  "gotoLinks":"For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "partsofWPTitle":"Activity: Parts of a Work Plan",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work Plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "scan360Title":"Apply the 360° scan",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><p>Your organization will have their own ways of doing things. Take a time-out from the course to scan your intranet to see which templates are used.</p><p>Connect with your colleagues, your director, or financial officer, and chat about work plans.</p> ",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Référence : Liens externes",
  "gotoLinks":"Pour plus d'information, veuillez consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "partsofWPTitle":"Activité : Parties d’un plan de travail",
  "completewpDrafttitle":"Activité : Préparer un plan de travail",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "scan360Title":"Activité : Aperçu à 360 degrés",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>  <p>Votre organisation aura sa propre fa&ccedil;on de faire les choses. Prenez le temps de consulter l’intranet pour voir quels mod&egrave;les sont utilisés.</p>  <p>Communiquez avec vos coll&egrave;gues, votre directeur ou votre agent financier pour discuter des plans de travail. </p>",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>
