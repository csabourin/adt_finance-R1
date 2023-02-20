<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('CreateBudget')}}
    </h1>
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_38mk4oxi/flavorId/0_1bjvjus2/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_cyj2h9a9/flavorId/0_hyl9pwxo/name/a.mp4" chapters chapterFile="BudgetChapters.vtt" ccFile="CreateBudget_captions.vtt" posterFile="createBudget_poster.png" :restartAt="thatPoint" toResume="setCreateBudget" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- Used to jump to activities<button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">
                        <p><strong>[00:00:00 Title is shown onscreen.]</strong></p>
                        <h2>Module 2. Create a Budget</h2>
                        <p><strong>Charlaine Lapointe: </strong>In this lesson, you will learn how to create a budget that aligns with your work plan. People who have been doing this for a while will tell you that these 2 things—the work plan and the budget—are often done at the same time in a single step. However, in order to help you learn how to do each of these tasks well, we’ve separated them.</p> 
                        <p>Creating a budget involves 3 main tasks: analyzing the available information, forecasting the budget requirements, and submitting your proposed budget.</p>
                        <p><strong>[00:00:35 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>1. Introduction</h2>
                        <p>In this lesson, you will learn how to create a budget that aligns with your work plan. People who have been doing this for a while will tell you that these 2 things—the work plan and the budget—are often done at the same time in a single step. However, in order to help you learn how to do each of these tasks well, we’ve separated them. </p>
                        <p>Creating a budget involves 3 main tasks: analyzing the available information, forecasting the budget requirements, and submitting your proposed budget. </p>
                        <p>Analyzing means taking a good look at last year’s work plan and financial reports. If you have access to previous years, it’s a good idea to look at those, as well as the current financials, new initiatives, context and priorities for your organization.</p>
                        <p>Forecasting means estimating costs and identifying costs that may change significantly over the fiscal year.</p>
                        <p>Once your budget requirements are complete, submit your proposed budget to upper management. It will then be moved up to the departmental level. You may be asked to make adjustments before final approval.</p>
                        <p>Ready to dive further into each of these steps? Great! Just before we do that, though, let’s take a moment to learn how the government financial cycle works, so that you can tie it in with your own work as a manager.</p>
                        <p><strong>[00:01:36 A “Continue to next segment” pop-up box appears onscreen.]</strong></p>
                        <p><strong>[00:01:37 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>2. The Financial Cycle of the Government of Canada</h2>
                        <p>Let’s look at how you create your budget requirements in the larger context of the financial cycle of the Government of Canada.</p>
                        <p>The government fiscal year runs from April 1 to March 31.</p>
                        <p>Some activities exist at both the government-wide level and at the organizational level. Key activities happen in preparation for the next fiscal year, others happen  during the fiscal year, and others occur after the year has ended.</p>
                        <p>As a manager, you’re building your work plan and budget requirements for the next fiscal year in the fall.</p>
                        <p>You could be responsible for a new program being established through a budget proposal or a memorandum to Cabinet. These are discussed in the Standing Committee on Finance pre-budget consultations.</p>
                        <p>When the new program is announced in the federal budget, you would then need to prepare a Treasury Board submission, and seek approval to access the funding.</p>
                        <p>To start off the fiscal year, there’s an interim supply, which provides initial funding to kick off the year. This is usually three twelfths of your budget. You’ll get this while waiting for Parliament to approve the full supply.</p>
                        <p>Now where do you fit in? Your work plan feeds into your organization’s Departmental Plan. And your budget moves up into the main estimates, which present the resources allocated to each organization to fulfill its mandate and cover its priorities for the coming fiscal year. </p>
                        <p>Full supply is based on the main estimates and gets approved around the end of June. From the moment full supply has been approved, starting budgets are made official for each department. Budgets are formalized into departmental financial systems, and business plans are reflected in the performance agreements of managers and employees.</p>
                        <p>Parliament can grant additional spending powers during the year, through supplementary estimates. They have an impact on your department, which may affect your budget.</p>
                        <p>You spend the money in your budget throughout the year. This eventually makes its way, at a higher level, into the Public Accounts of Canada. </p>
                        <p>Towards the end of the year, you will be asked for information on the results you achieved on the activities in your work plan. This becomes part of your organization's Departmental Results Report.</p>
                        <p>And by then, you will already be starting your work plan and budget requirements for the next fiscal year.</p>
                        <p><strong>[00:04:21 A pop-up box with “Reference: Financial Cycle of the Government of Canada” appears onscreen.]</strong></p>
                        <p><strong>[00:04:23 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>3. Analyze a Budget - Key Terms</h2>
                        <p>Now that you have a better sense of the financial cycle of the Government of Canada, and how it relates to your work as a manager, let’s go back to our analyze-forecast-submit workflow to create a budget.</p>
                        <p>The more often you do this, the more accurate your budget will be. Don’t worry, your ability to make precise forecasts will increase with experience. You got this!</p>
                        <p>In the following activity, you will look at the key terms regarding budgets.</p>
                        <p><strong>[00:04:50 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:04:55 A pop-up box with “Activity: Analyze a Budget - Key Terms” appears onscreen.]</strong></p>
                        <p><strong>[00:04:56 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>4. Analyze Available Information</h2>
                        <p>You’re now familiar with the key terms. You will have a chance to create your proposed budget by using information from last year and this year. Click on any question marks you see and a question will appear. Once you’ve answered it, the correct figure will appear in the budget. </p>
                        <p><strong>[00:05:14 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:05:16 A pop-up box with “Activity: Analyze Available Information” appears onscreen].</strong></p>
                        <p><strong>[00:05:17 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>5. Forecast Your Budget Requirements</h2>
                        <p>After getting all the information you can from last year’s and the current year’s budget, you find that you still need to forecast some budget requirements. Let’s continue creating your proposed budget. Click on any question marks you see and a question will appear. Once you’ve answered it, the correct figure will appear in the budget.</p>
                        <p><strong>[00:05:29 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:05:40 A pop-up box with “Activity: Forecast Your Budget Requirements” appears onscreen.]</strong></p>
                        <p><strong>[00:05:41 Title is shown onscreen.]</strong></p>    
                        <hr>

                        <h2>6. Submit Your Proposed Budget and Make Adjustments</h2>
                        <p>Now you’re ready to submit your budget to your director. You may be asked to explain assumptions you made, how your figures were estimated, and how your budget will allow you to fulfil your priorities. Always keep in mind that your expenditures must stay in line with the departmental mandate and priorities.</p>
                        <p>If your director asks about costs, the budget notes in your “back pocket” will remind you how you reached them. You may need to make adjustments before you get final approval.</p>
                        <p>During the meeting, if your director asks you to adjust your budget, you may also need to update your work plan.</p>
                        <p>You may not have enough budget in O&M but find that you could move that amount over from Salary. Though not common, you can convert some funds from Salary to O&M, or vice versa. You just need to factor in the Employee Benefit Plan— or the EBP—amount in your calculations. For example, some departments use 27% for the EBP. This means that $100,000 in Salary equals $127,000 in O&M. Or vice versa. Talk to your financial management advisor if you think that this is something you might need to do.</p>
                        <p>You may also need other funding sources in your budget to cover the priorities in your work plan.</p>
                        <p><strong>[00:07:13 Text is shown that reads “Other sources of funding”.]</strong></p>
                        <p>Here are a few more examples of what you could do.</p>
                        <ul>
                          <li>Get extra money from other managers.</li>
                          <li>Use an untapped surplus your director might have. Depending on the department, some reserves are kept at the DG, ADM or departmental level.</li>
                          <li>Or submit a Treasury Board Submission or memorandum to Cabinet.</li>
                          <li>Depending on your business, tap into an interdepartmental settlement.</li>
                        </ul>
                        <p>A Treasury Board Submission is a document used to seek Treasury Board approval for a program-execution strategy and/or funding authorities for an initiative that the organization would otherwise not be able to undertake or that is outside its delegated authorities. For more information, look in the toolbox.</p>
                        <p>A memorandum to Cabinet is used at any time of the year by ministers who wish to consult with their ministerial colleagues in Cabinet and reach a Cabinet decision. For more information, look in the toolbox.</p>
                        <p>In case you’re wondering what an interdepartmental settlement is, it refers to a transfer of funds between any two departments or agencies that operate within the Consolidated Revenue Fund. Examples are: language testing performed by the Public Service Commission, or translation by the Translation Bureau within the Public Services and Procurement Canada.</p>
                        <p>In the following activity, you will adjust your proposed budget. </p>
                        <p><strong>[00:08:30 Text showing the “Try it!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:08:35 A pop-up box with “Activity: Submit and Adjust your Budget” appears onscreen.]</strong></p>
                        <p><strong>[00:08:36 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>7. In Real Life</h2>

                        <p>Let’s bring what you have learned into real life. Your organization will have their own ways of responding to budget requirements. Take time out from the course and talk to your financial management advisor and director. Ask them the following questions: </p>
                        <ul>
                          <li>Do we have a budget template?</li>
                          <li>What budgets do we have? For example,
                          <ul>
                            <li>Operating budgets, which includes Salary and O&M</li>
                            <li>Grants & Contributions, or Gs&Cs and</li>
                            <li>Capital</li>
                          </ul></li>
                          <li>And finally, ask if the capital budget is managed centrally or by each manager? </li>
                        </ul>
                        <p><strong>[00:09:16 An “In Real Life” pop-up box appears onscreen.]</strong></p>
                        <p><strong>[00:09:17 Title is shown onscreen.]</strong></p>
                        <hr>

                        <h2>8. Quiz</h2>
                        <p>We’re at the end of this lesson on how to create a budget! Take a few moments to answer the following questions to see what you remember! </p>
                        <p><strong>[00:09:26 Text showing the “Take the Quiz!” instruction appears onscreen.]</strong></p>
                        <p><strong>[00:09:29 A “Take the quiz” pop-up text box appears onscreen.]</strong></p>
                        <p><strong>[00:09:30 Text showing “You have completed this section” appears onscreen.]</strong></p>
                        <hr>

                        <h2>9. Section completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <p><strong>[00:00:00 : Un titre apparaît à l'écran.] </strong></p>
                        <h2>Module 2. Créer un budget</h2>
                        <p><strong>Charlaine Lapointe : </strong>Dans cette leçon, vous apprendrez comment créer un budget conforme à votre plan de travail. Les gens qui le font depuis un certain temps vous diront que ces 2 choses — le plan de travail et le budget — se font souvent en même temps en une seule étape. Cependant, afin de vous aider à bien faire chacune de ces tâches, nous les avons séparées.</p> 
                        <p>La création du budget implique 3 tâches principales : analyser les informations disponibles, prévoir vos besoins budgétaires et soumettre votre budget proposé.</p>
                        <p><strong>[00:00:40 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>
                        <h2>1. Introduction</h2>
                        <p>Dans cette leçon, vous apprendrez comment créer un budget conforme à votre plan de travail. Les gens qui le font depuis un certain temps vous diront que ces 2 choses — le plan de travail et le budget — se font souvent en même temps en une seule étape. Cependant, afin de vous aider à bien faire chacune de ces tâches, nous les avons séparées.</p>
                        <p>La création du budget implique 3 tâches principales : analyser les informations disponibles, prévoir vos besoins budgétaires et soumettre votre budget proposé.</p>
                        <p>Analyser, c'est bien examiner le plan de travail et les rapports financiers de l'an dernier. Si vous avez accès aux années antérieures, il est bon de les examiner, ainsi que les finances, nouvelles initiatives, le contexte et les priorités actuels de votre organisation.</p>
                        <p>Prévoir, c'est estimer les coûts et déterminer les coûts qui pourraient changer de façon significative au cours de l'exercice financier.</p>
                        <p>Une fois ces besoins budgétaires établis, vous soumettez votre proposition de budget à la haute direction. Il sera ensuite regroupé au niveau du ministère. Il se peut qu'on vous demande d'apporter des ajustements avant l'approbation finale.</p>
                        <p>Prêt à plonger dans chacune de ces étapes? Super! Mais juste avant, prenons un moment pour en savoir plus sur le fonctionnement du cycle financier du gouvernement afin que vous puissiez le relier à votre propre travail de gestionnaire.</p>
                        <p><strong>[00:01:44 : Une fenêtre contextuelle Continuer au segment suivant apparaît à l’écran.]</strong></p>
                        <p><strong>[00:01:45 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>2. Le cycle financier du gouvernement du Canada</h2>
                        <p>Voyons comment créer vos besoins budgétaires dans le contexte plus large du cycle financier du gouvernement du Canada.</p>
                        <p>L'exercice financier du gouvernement va du 1er avril au 31 mars.</p>
                        <p>Certaines activités se déroulent à la fois à l'échelle du gouvernement et de l'organisation. Des activités clés se préparent pour l’exercice suivant, d'autres se déroulent au cours de l'exercice et d'autres encore après la fin de celui-ci.</p>
                        <p>Comme gestionnaire, vous élaborez à l’automne votre plan de travail et vos besoins budgétaires pour l’exercice financier suivant.</p>
                        <p>Vous pourriez être responsable d'un nouveau programme établi par le biais d'une proposition budgétaire ou d'un mémoire au Cabinet. Ces questions sont discutées lors de consultations prébudgétaires du Comité permanent des finances.</p>
                        <p>Lorsque le nouveau programme sera annoncé dans le budget fédéral, vous devrez alors préparer une présentation au Conseil du Trésor et demander l'autorisation d'accéder au financement.</p>
                        <p>Pour lancer l'année, les crédits provisoires fournissent le financement initial, généralement les trois douzièmes de votre budget, en attendant que le Parlement approuve les crédits intérimaires.</p>
                        <p>Maintenant, où vous situez-vous? Votre plan de travail est intégré au plan ministériel de votre organisation. De plus, votre budget se retrouve dans le Budget principal des dépenses, qui présente les ressources allouées à chaque organisation pour remplir son mandat et couvrir ses priorités pour l'exercice financier suivant.</p>
                        <p>Les crédits complets, fondés sur le Budget principal des dépenses, sont approuvés vers la fin juin. À partir du moment où l'approvisionnement intégral a été approuvé, les budgets de départ sont officialisés pour chaque ministère. Les budgets sont officialisés dans les systèmes financiers ministériels et les plans d'activités sont reflétés dans les ententes de rendement des gestionnaires et des employés.</p>
                        <p>Le Parlement peut accorder des pouvoirs de dépenser supplémentaires au cours de l'exercice, au moyen du Budget supplémentaire des dépenses. Elles peuvent avoir une incidence sur votre ministère, ce qui peut avoir une incidence sur votre budget.</p>
                        <p>Vous dépensez l'argent dans votre budget tout au long de l'année. Cela finit par se retrouver, à un niveau élevé, dans les Comptes publics du Canada. </p>
                        <p>Vers la fin de l'année, on vous demande des renseignements sur les résultats obtenus par rapport aux activités prévues dans votre plan de travail. Cela fait partie du rapport ministériel sur les résultats de votre organisation. </p>
                        <p>Et d'ici là, vous commencez déjà votre plan de travail et les besoins budgétaires pour le prochain exercice financier.</p>
                        <p><strong>[00:04:41 : Une fenêtre contextuelle Référence : Le cycle financier du Gouvernement du Canada apparaît à l’écran.]</strong></p>
                        <p><strong>[00:04:42 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>3. Analyser un budget - Termes clés</h2>
                        <p>Maintenant que vous avez une meilleure idée du cycle financier du gouvernement du Canada et de la façon dont il est relié à votre travail de gestionnaire, revenons à notre processus d'analyse, de prévision et de présentation de budget. </p>
                        <p>Votre budget deviendra de plus en plus précis à force de le faire. Ne vous inquiétez pas, votre aptitude à faire des prévisions précises augmentera avec l'expérience. Vous y arriverez!</p>
                        <p>L'activité suivante vous permettra d'examiner les termes clés des budgets.</p>
                        <p><strong>[00:05:14 Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:17 : Une fenêtre contextuelle Activité : Analyser un budget - Termes clés apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:18 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>4. Analyser l'information disponible</h2>
                        <p>Maintenant, vous connaissez les termes clés. Vous aurez l'occasion de créer votre budget proposé en utilisant l'information de l'année dernière et de cette année. Cliquez sur les points d'interrogation que vous verrez à l’écran et une question apparaîtra. Une fois que vous y aurez répondu, le chiffre exact apparaîtra dans le budget.</p>
                        <p><strong>[00:05:26 Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:44 : Une fenêtre contextuelle Activité : Analyser l’information disponible apparaît à l’écran.]</strong></p>
                        <p><strong>[00:05:45 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>5. Prévoyez vos besoins budgétaires</h2>
                        <p>Après avoir obtenu tous les renseignements que vous pouvez à partir des budgets de l'année dernière et de l'année en cours, vous constatez qu'il vous faut encore prévoir certains besoins budgétaires. Cliquez sur les points d'interrogation que vous voyez à l’écran et une question apparaîtra. Une fois que vous y aurez répondu, le chiffre correct apparaîtra dans le budget.</p>
                        <p><strong>[00:06:02 Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:06:10 Une fenêtre contextuelle Activité Prévoir vos besoins budgétaires apparaît à l’écran.]</strong></p>
                        <p><strong>[00:06:12 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>6. Soumettre votre budget proposé et apporter les ajustements nécessaires</h2>
                        <p>Vous êtes maintenant prêt à soumettre votre budget à votre directeur. On vous demandera peut-être d'expliquer les hypothèses que vous avez utilisées, comment vos chiffres ont été estimés et comment votre budget vous permettra de respecter vos priorités. Gardez toujours à l'esprit que vos dépenses doivent rester conformes au mandat et aux priorités du ministère.</p>
                        <p>Si votre directeur vous pose des questions sur les coûts, les notes budgétaires que vous vous serez gardées vous rappelleront comment vous les avez atteints. Il se peut que vous ayez besoin de faire des ajustements avant d'obtenir l'approbation finale.</p>
                        <p>Si, au cours de la réunion, votre directeur vous demande d'ajuster votre budget, vous devrez peut-être aussi mettre à jour votre plan de travail. </p>
                        <p>Il se peut que vous n'ayez pas assez de budgets de F et E, mais vous constaterez que vous pourriez transférer ce montant de la rubrique Salaires à d'autres postes. Bien que cela se produise rarement, vous pouvez convertir certaines sommes des Salaires en F et E, ou vice versa. Vous devez simplement tenir compte du montant du Régime d'avantages sociaux des employés (RASE) dans vos calculs. Par exemple, certains ministères utilisent 27 % pour le RASE. Cela signifie que la somme de 100 000 $ en salaires équivaut à 127 000 $ en F et E. C'est l'inverse de la conversion du salaire en F et E. Parlez-en à votre conseiller en gestion financière si vous pensez que c'est quelque chose que vous devriez faire.</p>
                        <p>Vous pourriez avoir besoin d'autres sources de financement dans votre budget pour couvrir les priorités de votre plan de travail. Voici quelques autres exemples d'endroits où vous pouvez vous adresser :</p>
                        <p><strong>[00:08:02 : Un texte apparaît à l'écran : Autres sources de financement.]</strong></p>
                        <ul>
                          <li>Obtenez de l'argent supplémentaire d'autres gestionnaires. </li>
                          <li>Utilisez un surplus inexploité que votre administrateur pourrait avoir. Selon le ministère, certaines réserves sont conservées au niveau du DG, du SMA ou du ministère.</li>
                          <li>Ou encore, présentez une demande au Conseil du Trésor ou un mémoire au Cabinet.</li>
                        </ul>
                        <p>La présentation au Conseil du Trésor est un document utilisé pour obtenir l'approbation du Conseil du Trésor pour une stratégie d'exécution de programme ou des autorisations de financement pour une initiative que l'organisation ne serait pas en mesure d'entreprendre autrement ou qui ne relève pas de ses pouvoirs délégués. Pour plus d'informations, consultez la boîte à outils.</p>
                        <p>Un mémoire au Cabinet est utilisé en tout temps de l'année par les ministres qui souhaitent consulter leurs collègues ministériels et prendre une décision du Cabinet. Pour plus d'informations, consultez la boîte à outils.</p>
                        <p>Au cas où vous vous demanderiez ce qu'est un règlement interministériel, il s'agit d'un transfert de sommes entre deux ministères ou organismes qui fonctionnent dans le cadre du Trésor. Par exemple, pensez aux tests linguistiques faits par la Commission de la fonction publique ou encore les services du Bureau de la traduction sous Services publics et Approvisionnements Canada. </p>
                        <p>L'activité qui suit vous permettra d'ajuster votre budget proposé. </p>
                        <p><strong>[00:09:29 Texte indiquant l'instruction Essayez-le! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:09:33 Une fenêtre contextuelle Activité : Soumettre et ajuster votre budget apparaît à l’écran.]</strong></p>
                        <p><strong>[00:09:34 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>7. Dans la vraie vie</h2>
                        <p>Appliquons ce que vous avez appris dans la vraie vie. Votre organisation aura sa propre façon de répondre aux besoins budgétaires. Prenez un moment pour parler à votre conseiller en gestion financière et à votre directeur, posez-leur les questions suivantes : </p>
                        <ul>
                          <li>Avons-nous un modèle de budget?</li>
                          <li>De quel budget disposons-nous? Par exemple,
                          <ul>
                            <li>Fonctionnement, incluant salaires et F et E</li>
                            <li>subventions et contributions</li>
                            <li>et immobilisations</li>
                          </ul></li>
                          <li>Et finalement, le budget d’immobilisations est-il géré de façon centralisée ou individuellement par chaque gestionnaire? </li>
                        </ul>
                        <p><strong>[00:10:13 Une fenêtre contextuelle Dans la vraie vie apparaît à l’écran.]</strong></p>
                        <p><strong>[00:10:14 : Un titre apparaît à l'écran.]</strong></p>

                        <hr>

                        <h2>8. Quiz</h2>
                        <p>Nous sommes à la fin de la leçon sur la façon de créer un budget! Prenez maintenant quelques instants pour répondre aux questions suivantes afin de voir ce que vous avez retenu!</p>
                        <p><strong>[00:10:23 : Texte indiquant l'instruction Répondez au quiz! apparaît à l’écran.] </strong></p>
                        <p><strong>[00:10:29 : Une fenêtre contextuelle Répondez au quiz apparaît à l’écran.]</strong></p>
                        <p><strong>[00:10:30 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
                        <hr>
                        <h2>9. Section complétée</h2>
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
        <continue-popup id="purpose"></continue-popup>
        <b-modal no-stacking id="financialCycle" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('financialCycle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <b-row align-h="center">
              <b-col cols="12" md="4" class="text-center">
                <download :texts="$t('cycle')" size=128 iconColor="Scan360Background" :fileSize="this.$i18n.locale == 'en' ? '61.6' : '62,6'" name="cycle" />
              </b-col>
            </b-row>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="budgetKeyTerms" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AnalyzeBudgetKT')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <AnalyzeBudgetKT />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="budgetAnalyze" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('budgetAnalyzeActivity')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetAnalyzeActivity />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="forecastBudget" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('forecastBudgetTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetForecastActivity />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="submitBudget" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('submitBudgetTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <submitBudget />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
          <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('InRealLife')}}
            </h3>
            <button type="button" aria-label="Close" class="close" @click="close()">×</button>
          </template>
          <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-html="$t('IRLText')"></p>
            </b-col>
          </b-row>
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
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="buildwp" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" type="video" />
      <microlearning youAreHere size="140" path="createbudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" type="video" />
      <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import budgetAnalyzeActivity from '~/components/slides/plan/budgetAnalyseActivity'
import budgetForecastActivity from '~/components/slides/plan/budgetForecastActivity'
import AnalyzeBudgetKT from '~/components/slides/plan/AnalyzeBudgetKT'
import submitBudget from '~/components/slides/plan/submitBudget'
import budgetQuiz from '~/components/slides/plan/budgetQuiz'
import continuePopup from '~/components/continuePopup'
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  data() {
    return {
      modalArray: ["purpose", "financialCycle", "budgetKeyTerms", "budgetAnalyze", "forecastBudget","submitBudget", "reallife", "quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    AnalyzeBudgetKT,
    budgetAnalyzeActivity,
    budgetForecastActivity,
    submitBudget,
    budgetQuiz,
    continuePopup,
    download,
    HTMLJobaidLink
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setCreateBudget_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.createBudget
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
  left:-15px;
  top:38%;
}
.planSectionBar span {
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
  "submitBudgetTitle":"Activity: Submit and Adjust your Budget",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "AnalyzeBudgetKT":"Activity: Analyze a Budget - Key Terms",
  "financialCycle":"Reference: Financial Cycle of the Government of Canada",
  "budgetAnalyzeActivity":"Activity: Analyze Available Information",
  "forecastBudgetTitle":"Activity: Forecast Your Budget Requirements",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Your organization will have their own ways of doing budget requirements. Take time out from the course and talk to your financial management advisor and director. Ask them:&nbsp;</p><ul><li>Do we have a budget template?</li><li>What budgets do we have?</li><ul><li>Operating, which includes Salary and O&amp;M</li><li>Operating and Gs&amp;Cs</li><li>Operating and Capital</li></ul><li>Is the capital budget managed centrally or by each manager?</li></ul>",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "AnalyzeBudgetKT":"Activité : Analyser un budget - Termes clés",
  "financialCycle":"Référence : Le cycle financier",
  "budgetAnalyzeActivity":"Activité : Analyser l’information disponible",
  "submitBudgetTitle":"Activité : Soumettre et ajuster votre budget ",
  "forecastBudgetTitle":"Activité : Prévoyez vos besoins budgétaires",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Votre organisation aura sa propre fa&ccedil;on de faire les exigences budgétaires. Prenez congé du cours et parlez à votre conseiller en gestion financi&egrave;re et à votre directeur. Demandez-leur :&nbsp;</p><ul><li>Avons-nous un mod&egrave;le de budget?</li><li>Quels sont nos budgets?</li><ul><li>Fonctionnement, inclus salaire et F&amp;E</li><li>Fonctionnement et subventions et contributions</li><li>Fonctionnement et immobilisations</li></ul><li>Le budget d’investissement est-il géré de fa&ccedil;on centralisée ou par chaque gestionnaire?</li></ul>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>