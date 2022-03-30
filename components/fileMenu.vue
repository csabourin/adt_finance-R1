<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder style="display: inline-block">
      <fileIcon :title="$t('fileFolder')" width="44" />
    </a>
    <b-modal id="fileFolder" okOnly size="xl">
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          {{$t('fileFolder')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-1 class="fileHead" variant="light"><img :alt="$t('filesAlt')" src="~/assets/FilesIcon.svg" width="50" height="50"> {{$t('files')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-1" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col cols="12">
                    <h4>{{$t('plan')}}</h4>
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('threeSixty')" size=128 iconColor="Scan360Background" :fileSize="this.$i18n.locale == 'en' ? '118' : '124'" name="threeSixty" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('WPTemplate')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('buildWPProcessMap')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '121' : '114'" name="buildWPProcessMap" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('newBudget')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '129' : '131'" name="newBudget" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('cycle')" size=128 iconColor="Scan360Background" :fileSize="this.$i18n.locale == 'en' ? '61.6' : '62,6'" name="cycle" />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <h4>{{$t('spend')}}</h4>
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('procurementInstruments')" size=128 iconColor="spendBackground" :fileSize="this.$i18n.locale == 'en' ? '134' : '139'" name="procurementInstruments" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="this.$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <h4>{{$t('report')}}</h4>
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('FSRRoadmap')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '107' : '111'" name="FSRRoadmap" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('prepareFSR')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '108' : '96,5'" name="prepareFSR" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('extReports')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '138' : '124'" name="extReports" />
                  </b-col>
                </b-row>
                <!-- <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" /> -->
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-2 variant="light"><img :alt="$t('linksAlt')" src="~/assets/LinksIcon.svg" width="50" height="50"> {{$t('links')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-2" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <planLinks />
                <spendLinks />
                <reportLinks />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img :alt="$t('glossaryAlt')" src="~/assets/GlossaryIcon.svg" width="50" height="50"> {{$t('glossary')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <!--<dl>
                    <dt>Coding structure</dt>
                    <dd>It’s a method of classifying transactions that allows an organization to capture financial information. It is the common language that permits accounting and financial data to be identified, aggregated, and reported for planning, resource allocation, management control, and evaluation purposes.</dd>
                  </dl>
                  <dl>
                    <dt>Fund</dt>
                    <dd>A budget made available for a particular purpose; for example, salary, operating, and capital.</dd>
                  </dl>
                  <dl>
                    <dt>General ledger</dt>
                    <dd>It’s the lowest level to which expenditures get coded. </dd>
                  </dl>
                  <dl>
                    <dt>Internal order</dt>
                    <dd>It’s a self-contained mini-project in which you can track expenditures.</dd>
                  </dl>
                  <dl>
                    <dt>Program inventory</dt>
                    <dd>Identifies the programs that contribute to the department’s Core Responsibilities and Results.</dd>
                  </dl>
                  <dl>
                    <dt>Responsibility centre</dt>
                    <dd>It’s an identifier associated with a manager or unit within an organization, to which budget commitments and expenditures can be recorded. </dd>
                  </dl>
                  <dl>
                    <dt>Result</dt>
                    <dd>An external consequence attributed, in part, to an organization, policy, program, or initiative. Results are set within various control areas of the organization.</dd>
                  </dl>
                  <dl>
                    <dt>Target</dt>
                    <dd>A measurable performance or success level that an organization, program, or initiative plans to achieve within a specified time period. Targets can be either quantitative or qualitative.</dd>
                  </dl>-->
                  <dl>
                    <dt>capital budget</dt>
                    <dd>Long term investments like infrastructure and facilities, that are paid off over time.</dd>
                  </dl>
                  <dl>
                    <dt>coding structure </dt>
                    <dd>It’s a method of classifying transactions that allows an organization to capture financial information. It is the common language that permits accounting and financial data to be identified, aggregated, and reported for planning, resource allocation, management control, and evaluation purposes.</dd>
                  </dl>
                  <dl>
                    <dt>delegation of financial authority chart</dt>
                    <dd>Shows your organization’s official spending and financial authorities.</dd>
                  </dl>
                  <dl>
                    <dt>Departmental Results Report</dt>
                    <dd>A report on what was accomplished against what was planned to be done during the fiscal year in terms of priorities and expected results.</dd>
                  </dl>
                  <dl>
                    <dt>discretionary costs</dt>
                    <dd>Costs not directly linked to your activities and less likely to have a negative impact on them. If you are asked to reduce or cut costs, you have a quick snapshot of what you can and cannot cut.</dd>
                  </dl>
                  <dl>
                    <dt>fiscal year</dt>
                    <dd>It starts on April 1 and is divided, by month, into periods. P1 is April, P2 is May, P3 is June, and so forth.</dd>
                  </dl>
                  <dl>
                    <dt>fund </dt>
                    <dd>A budget made available for a particular purpose; for example, salary, operating, and capital.</dd>
                  </dl>
                  <dl>
                    <dt>general ledger </dt>
                    <dd>It’s the lowest level to which expenditures get coded.</dd>
                  </dl>
                  <dl>
                    <dt>grants and contributions budget</dt>
                    <dd>Commonly known as Gs&Cs. Money that is provided to entities outside of the federal government to advance the department’s mandate. Grants are given to the entity whereas with Contributions, the entity is expected to also contribute some money.</dd>
                  </dl>
                  <dl>
                    <dt>expenditure</dt>
                    <dd>An amount charged against a departmental appropriation in the accounting period.</dd>
                  </dl>
                  <dl>
                    <dt>expenditure initiation</dt>
                    <dd>When you decide to obtain goods or services that will result in the eventual spending of funds, such as the decision to hire staff, order supplies, or authorize travel.</dd>
                  </dl>
                  <dl>
                    <dt>financial authorities</dt>
                    <dd>Are granted to ministers and deputy heads through the Financial Administration Act.</dd>
                  </dl>
                  <dl>
                    <dt>financial situation report</dt>
                    <dd>It is a document that provides senior management with the most up-to-date financial picture and the best estimates of forecast spending.</dd>
                  </dl>
                  <dl>
                    <dt>internal audit</dt>
                    <dd>Examines compliance relating to governance, risk management, and control processes and makes recommendations to improve performance, effectiveness, and efficiency of government operations.</dd>
                  </dl>
                  <dl>
                    <dt>internal order </dt>
                    <dd>It’s a self-contained mini-project in which you can track expenditures.</dd>
                  </dl>
                  <dl>
                    <dt>Management Accountability Framework</dt>
                    <dd>An annual assessment of management practices and performance, in areas such as finance, people, and IT.</dd>
                  </dl>
                  <dl>
                    <dt>non-discretionary costs</dt>
                    <dd>Costs essential for delivering on your activities and if cut may result in you not being able to deliver on them.</dd>
                  </dl>
                  <dl>
                    <dt>Payables at Year-End</dt>
                    <dd>It is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received.</dd>
                  </dl>
                  <dl>
                    <dt>performance indicator</dt>
                    <dd>A criterion for measuring success in the achievement of objectives.</dd>
                  </dl>
                  <dl>
                    <dt>proactive disclosure</dt>
                    <dd>Published information on departments’ websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, and grants and contributions</dd>
                  </dl>
                  <dl>
                    <dt>Program Evaluation</dt>
                    <dd>Assesses the performance of programs, initiatives and policies in terms of efficiency, effectiveness, and relevance</dd>
                  </dl>
                  <dl>
                    <dt>program inventory</dt>
                    <dd>Identifies the programs that contribute to the department’s Core Responsibilities and Results.</dd>
                  </dl>
                  <dl>
                    <dt>Public Accounts of Canada </dt>
                    <dd>Contain the annual audited and consolidated financial statements of the Government of Canada and information on spending by organizations.</dd>
                  </dl>
                  <dl>
                    <dt>Quarterly financial report </dt>
                    <dd>A comparison between planned and actual expenditures, published three times a year.</dd>
                  </dl>
                  <dl>
                    <dt>Receivables at Year-End</dt>
                    <dd>It is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</dd>
                  </dl>
                  <dl>
                    <dt>reference levels</dt>
                    <dd>Predetermined budget amounts. Some departments provide reference levels and others don’t.</dd>
                  </dl>
                  <dl>
                    <dt>responsibility centre </dt>
                    <dd>It’s an identifier associated with a manager or unit within an organization, to which budget commitments and expenditures can be recorded.</dd>
                  </dl>
                  <dl>
                    <dt>result</dt>
                    <dd>An external consequence attributed, in part, to an organization, policy, program, or initiative. Results are set within various control areas of the organization.</dd>
                  </dl>
                  <dl>
                    <dt>section 32</dt>
                    <dd>When you commit an expenditure, you are certifying that the money is available. This is known as section 32 of the Financial Administration Act.</dd>
                  </dl>
                  <dl>
                    <dt>section 33</dt>
                    <dd>When your financial department ensures that the payment complies with policy requirements, this is known as section 33 of the Financial Administration Act.</dd>
                  </dl>
                  <dl>
                    <dt>section 34</dt>
                    <dd>When you certify that the work has been performed as required, and services and supplies have been satisfactorily rendered, this is known as section 34 of the Financial Administration Act.</dd>
                  </dl>
                  <dl>
                    <dt>target</dt>
                    <dd>A measurable performance or success level that an organization, program, or initiative plans to achieve within a specified time period. Targets can be either quantitative or qualitative.</dd>
                  </dl>
                  <dl>
                    <dt>trends</dt>
                    <dd>Costs in your budget that are either constant, or show a similar pattern year after year.</dd>
                  </dl>
                  <dl>
                    <dt>variance</dt>
                    <dd>The difference between the budgeted amount and the actual amount spent during the year.</dd>
                  </dl>
                  <dl>
                    <dt>work plan</dt>
                    <dd>It is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility centre.</dd>
                  </dl>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <!--<dl>
                    <dt>Centre de responsabilité</dt>
                    <dd>Il s’agit d’un identificateur associé à un gestionnaire ou à une unité au sein d’une organisation, pour lequel des engagements et des dépenses budgétaires peuvent être enregistrés.</dd>
                  </dl>
                  <dl>
                    <dt>Fonds</dt>
                    <dd>Un budget mis à disposition à des fins particulières. Par exemple : salaires, fonctionnement, capital.</dd>
                  </dl>
                  <dl>
                    <dt>Grand livre général</dt>
                    <dd>C’est le niveau le plus bas auquel les dépenses sont codées. </dd>
                  </dl>
                  <dl>
                    <dt>Inventaire des programmes</dt>
                    <dd>Détermine les programmes qui contribuent aux responsabilités essentielles et aux résultats du ministère.</dd>
                  </dl>
                  <dl>
                    <dt>Objectif</dt>
                    <dd>Performance mesurable ou degré de succès qu’une organisation, un programme ou une initiative prévoit atteindre dans une période de temps donnée. Les objectifs peuvent être quantitatifs ou qualitatifs.</dd>
                  </dl>
                  <dl>
                    <dt>Ordre interne</dt>
                    <dd>Il s’agit d’un mini projet autonome dans lequel vous pouvez suivre les dépenses.</dd>
                  </dl>
                  <dl>
                    <dt>Résultat</dt>
                    <dd>Une conséquence externe, attribuée, en partie, à une organisation, une politique, un programme ou une initiative. Les résultats sont fixés grâce à divers  domaines de contrôle de l’organisation.</dd>
                  </dl>
                  <dl>
                    <dt>Structure de codage</dt>
                    <dd>Il s’agit d’une méthode de classification des transactions qui permet à une organisation de saisir l’information financière. C’est le langage commun qui permet de déterminer, d’agréger et de rapporter les données comptables et financières à des fins de planification, d’affectation des ressources, de contrôle de gestion et d’évaluation.</dd>
                  </dl>-->
                  <dl>
                    <dt>article 32</dt>
                    <dd>Lorsque vous engagez une dépense, vous certifiez que l’argent est disponible. C’est ce à quoi on fait référence lorsqu’on parle de l’article 32 de la Loi sur la gestion des finances publiques.</dd>
                  </dl>
                  <dl>
                    <dt>article 33</dt>
                    <dd>Lorsque votre service financier s’assure que le paiement est conforme aux exigences de la politique, il s’agit de l’article 33 de la Loi sur la gestion des finances publiques.</dd>
                  </dl>
                  <dl>
                    <dt>article 34</dt>
                    <dd>Lorsque vous attestez que les travaux ont été exécutés conformément aux exigences et que les services ont été rendus et les fournitures livrées de façon satisfaisante, il s’agit de l’article 34 de la Loi sur la gestion des finances publiques.</dd>
                  </dl>
                  <dl>
                    <dt>audit interne </dt>
                    <dd>Examine la conformité aux processus de gouvernance, de gestion des risques et de contrôle et formule des recommandations pour améliorer le rendement, l'efficacité et l'efficience des opérations gouvernementales.</dd>
                  </dl>
                  <dl>
                    <dt>budget des subventions et contributions</dt>
                    <dd>Communément connues sous le nom de S et C. L'argent qui est fourni à des entités à l'extérieur du gouvernement fédéral pour faire avancer le mandat du ministère. Les subventions sont accordées à l'entité, tandis que les contributions lui permettent d'apporter une contribution financière.</dd>
                  </dl>
                  <dl>
                    <dt>budget d’investissement</dt>
                    <dd>Des investissements à long terme, comme l'infrastructure et les installations, qui sont amortis au fil du temps.</dd>
                  </dl>
                  <dl>
                    <dt>Cadre de responsabilisation de gestion</dt>
                    <dd>Une évaluation annuelle des pratiques de gestion et du rendement dans des domaines tels que les finances, les ressources humaines et la TI.</dd>
                  </dl>
                  <dl>
                    <dt>centre de responsabilité</dt>
                    <dd>Il s’agit d’un identificateur associé à un gestionnaire ou à une unité au sein d’une organisation, pour lequel des engagements et des dépenses budgétaires peuvent être enregistrés.</dd>
                  </dl>
                  <dl>
                    <dt>Comptes publics du Canada</dt>
                    <dd>Renferment les états financiers vérifiés et consolidés du gouvernement du Canada ainsi que des renseignements sur les dépenses faites par les organisations.</dd>
                  </dl>
                  <dl>
                    <dt>coûts discrétionnaires</dt>
                    <dd>Coûts non directement liés à vos activités et moins susceptibles d'avoir un impact négatif sur celles-ci. Si on vous demande de réduire ou de diminuer les coûts, vous avez un aperçu rapide de ce que vous pouvez et ne pouvez pas réduire.</dd>
                  </dl>
                  <dl>
                    <dt>coûts non discrétionnaires</dt>
                    <dd>Les coûts essentiels à la réalisation de vos activités et, en cas de réduction, vous pourriez ne pas être en mesure de les réaliser.</dd>
                  </dl>
                  <dl>
                    <dt>créditeurs à la fin de l’exercice</dt>
                    <dd>C’est un montant dû pour des biens ou des services fournis dans l’exercice financier précédent, en se servant des fonds de l’exercice financier précédent, mais payés dans le nouvel exercice financier alors qu’on aura reçu la facture du fournisseur.</dd>
                  </dl>
                  <dl>
                    <dt>débiteurs à la fin de l’exercice</dt>
                    <dd>C’est un montant dû d’un autre ministère pour des biens ou des services fournis dans l’exercice financier précédent pour lesquels le paiement sera fait dans le nouvel exercice financier.</dd>
                  </dl>
                  <dl>
                    <dt>dépenses</dt>
                    <dd>Montant imputé à un crédit ministériel au cours de la période comptable.</dd>
                  </dl>
                  <dl>
                    <dt>divulgation proactive</dt>
                    <dd>Publier de l'information sur les sites Web des ministères concernant les voyages, l'accueil, les contrats, les reclassifications de postes, les actes répréhensibles, les subventions et les contributions.</dd>
                  </dl>
                  <dl>
                    <dt>engager une dépense</dt>
                    <dd>Lorsque vous décidez d'obtenir des biens ou des services qui entraîneront une dépense éventuelle, comme l’embauche de personnel, la commande de fournitures ou l’autorisation de voyager.</dd>
                  </dl>
                  <dl>
                    <dt>Évaluation des programmes</dt>
                    <dd>Évalue le rendement des programmes, des initiatives et des politiques en termes d'efficience, d'efficacité et de pertinence.</dd>
                  </dl>
                  <dl>
                    <dt>exercice financier</dt>
                    <dd>Il commence le 1er avril et est divisé, par mois, en périodes. P1 est avril, P2 est mai, P3 est juin, et ainsi de suite.</dd>
                  </dl>
                  <dl>
                    <dt>fonds </dt>
                    <dd>Un budget mis à disposition à des fins particulières. Par exemple : salaires, fonctionnement, capital.</dd>
                  </dl>
                  <dl>
                    <dt>grand livre général </dt>
                    <dd>C’est le niveau le plus bas auquel les dépenses sont codées.</dd>
                  </dl>
                  <dl>
                    <dt>indicateur de rendement </dt>
                    <dd>Un critère pour mesurer le succès dans la réalisation des objectifs.</dd>
                  </dl>
                  <dl>
                    <dt>inventaire des programmes </dt>
                    <dd>Détermine les programmes qui contribuent aux responsabilités essentielles et aux résultats du ministère.</dd>
                  </dl>
                  <dl>
                    <dt>niveaux de référence </dt>
                    <dd>Montants budgétaires prédéterminés. Certains ministères fournissent des niveaux de référence et d'autres non.</dd>
                  </dl>
                  <dl>
                    <dt>objectif</dt>
                    <dd>Performance mesurable ou degré de succès qu’une organisation, un programme ou une initiative prévoit atteindre dans une période de temps donnée. Les objectifs peuvent être quantitatifs ou qualitatifs.</dd>
                  </dl>
                  <dl>
                    <dt>ordre interne</dt>
                    <dd>Il s’agit d’un mini projet autonome dans lequel vous pouvez suivre les dépenses.</dd>
                  </dl>
                  <dl>
                    <dt>plan de travail</dt>
                    <dd>Un plan de travail est une liste détaillée des activités à exercer, des ressources à utiliser et des résultats à atteindre au cours d’une période d’un an, laquelle correspond habituellement à un exercice financier pour un centre de responsabilité.</dd>
                  </dl>
                  <dl>
                    <dt>pouvoirs financiers</dt>
                    <dd>C’est la Loi sur la gestion des finances publiques qui confère aux ministres et aux administrateurs généraux leurs pouvoirs financiers.</dd>
                  </dl>
                  <dl>
                    <dt>Rapport financier trimestriel </dt>
                    <dd>Une comparaison entre les dépenses prévues et les dépenses réelles publiées 3 fois par an.</dd>
                  </dl>
                  <dl>
                    <dt>rapport sur la situation financière </dt>
                    <dd>C’est un document qui fournit à la haute direction le portrait financier le plus récent et les meilleures estimations des dépenses prévues.</dd>
                  </dl>
                  <dl>
                    <dt>Rapport sur les résultats ministériels</dt>
                    <dd>C'est ce qui a été accompli par rapport à ce qui était prévu au cours de l'exercice financier pour ce qui est des priorités et des résultats attendus.</dd>
                  </dl>
                  <dl>
                    <dt>résultat</dt>
                    <dd>Une conséquence externe, attribuée, en partie, à une organisation, une politique, un programme ou une initiative. Les résultats sont fixés grâce à divers domaines de contrôle de l’organisation.</dd>
                  </dl>
                  <dl>
                    <dt>structure de codage </dt>
                    <dd>Il s’agit d’une méthode de classification des transactions qui permet à une organisation de saisir l’information financière. C’est le langage commun qui permet de déterminer, d’agréger et de rapporter les données comptables et financières à des fins de planification, d’affectation des ressources, de contrôle de gestion et d’évaluation.</dd>
                  </dl>
                  <dl>
                    <dt>tableau de délégation des pouvoirs financiers</dt>
                    <dd>Indique les pouvoirs de dépenser et les pouvoirs financiers officiels de votre organisation.</dd>
                  </dl>
                  <dl>
                    <dt>tendances</dt>
                    <dd>Coûts dans votre budget qui sont soit constants, soit semblables d'une année à l'autre.</dd>
                  </dl>
                  <dl>
                    <dt>variance</dt>
                    <dd>La différence entre le montant prévu au budget et le montant réel dépensé au cours de l'exercice.</dd>
                  </dl>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-4 variant="light"><img :alt="$t('helpAlt')" src="~/assets/HelpIcon.svg" width="50" height="50"> {{$t('help')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-4" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <p>This course is organized into three sections: <strong>plan</strong>, <strong>spend</strong> and <strong>report</strong>.</p>
                  <p>You can choose where you want to start the course and how deep you wish to go into the content. Here are a few tips to help orient you.</p>
                  <ul>
                    <li>You can navigate through the sections of the course by using the <strong>menu icon</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">navigation menu icon example</span></span>) in the top left corner of the screen or by using the &ldquo;tiles&rdquo; found on each screen.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/en/nav-example.PNG" alt="&ldquo;tiles&rdquo; example" />
                  <ul>
                    <li>Select the <strong>key messages</strong> to review highlights, for a refresher on each topic.</li>
                    <li>If you’re learning the content for the first time, take the time to <strong>go through each section</strong>. Do the <strong>in-depth learning activities</strong> and review the tools and resources. Each section should take you around 15 to 20 minutes to complete. There are visual cues to show your progress as you move through the course.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/en/progression-example.PNG" alt="visual cues for progression example" />
                  <ul>
                    <li>Select the <strong>video icon</strong> (&nbsp;<img src="~/assets/VideoIcon.svg" alt="video icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to view the videos in each section, the <strong>pencil icon</strong> (&nbsp;<img src="~/assets/ActivityIcon.svg" alt="pencil icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to complete an activity, the <strong>letter i icon</strong> (&nbsp;<img src="~/assets/InfoIcon.svg" alt="letter i icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) for more information, the <strong>document icon</strong> (&nbsp;<img src="~/assets/ReferenceIcon.svg" alt="document icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) for reference materials, the <strong>checkmark icon</strong> (&nbsp;<img src="~/assets/QuizIcon.svg" alt="checkmark icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to jump to the quiz and the <strong>arrow icon</strong> (&nbsp;<img src="~/assets/ContinueIcon.svg" alt="arrow icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to go to the next section.</li>
                    <li>You can jump to the <strong>test</strong> for each section at any time or complete the tests for the <strong>plan</strong>, <strong>spend</strong> and <strong>report</strong> sections in order as you finish each lesson. The passing grade is <strong>80% for each section</strong>. You can access course materials during the test and retake the test as many times as you need to. </li>
                    <li>Access the <strong>home</strong> screen at any time by selecting the (<homebutton :iconWidth="50" iconTitle="home icon example" style="position: relative; top: -5px; left: 0px;" />) icon.</li>
                    <li>Access tools and templates by selecting the <strong>toolbox icon</strong> (&nbsp;<fileIcon title="example of the tool box icon" width="40" />&nbsp;) in the top right corner of your screen.</li>
                  </ul>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <p>Ce cours est organisé en 3 sections : <strong>planification</strong>, <strong>dépenses</strong> et <strong>rapports</strong>. </p>
                  <p>Vous pouvez choisir là où commencer le cours, et décider jusqu'à quel point approfondir le contenu. Voici quelques conseils pour vous orienter&nbsp;:</p>
                  <ul>
                    <li>Vous pouvez naviguer dans les sections du cours en utilisant l’icône du <strong>menu</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">exemple de l'icône du menu de navigation</span></span>) en haut à gauche de l'écran ou en utilisant les «&nbsp;tuiles&nbsp;» sur chaque écran.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/fr/nav-example.PNG" alt="exemple de «&nbsp;tuiles&nbsp;»" />
                  <ul>
                    <li>Choisissez les <strong>messages clés</strong> pour réviser les points saillants, comme rappel sur chaque sujet.</li>
                    <li>Si le contenu est nouveau pour vous, prenez le temps de <strong>parcourir chaque section</strong>. Faites <strong>les activités d'apprentissage en profondeur</strong> et examinez les outils et les ressources. Chaque section devrait vous prendre de 15 à 20 minutes. Des repères visuels s’affichent pour indiquer vos progrès au fur et à mesure que vous avancez dans le cours.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/fr/progression-example.PNG" alt="exemple des indices visuels pour la progression" />
                  <ul></ul>
                  <li>Choisissez l'<strong>icône de la vidéo</strong> (&nbsp;<img src="~/assets/VideoIcon.svg" alt="exemple de l'icône de la vidéo" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour visionner les vidéos de chaque section, l'<strong>icône du crayon</strong> (&nbsp;<img src="~/assets/ActivityIcon.svg" alt="exemple de l'icône du crayon" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour réaliser une activité, l’<strong>icône de la lettre i</strong> (&nbsp;<img src="~/assets/InfoIcon.svg" alt="exemple de l'icône de la lettre i" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour plus d’information, l’<strong>icône des documents</strong> (&nbsp;<img src="~/assets/ReferenceIcon.svg" alt="exemple de l'icône des documents" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour les matériels de référence, l’<strong>icône du crochet</strong> (&nbsp;<img src="~/assets/QuizIcon.svg" alt="exemple de l'icône du crochet" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour sauter au quiz et l’<strong>icône de la flèche</strong> (&nbsp;<img src="~/assets/ContinueIcon.svg" alt="exemple de l'icône de la flèche" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour continuer à la section suivante.</li>
                  <li>Passez au <strong>test</strong> pour chaque section de <strong>planification</strong>, <strong>dépenses</strong> et <strong>rapports</strong> à n'importe quel moment ou faites-les dans l'ordre au fur et à mesure que vous terminez chaque leçon. La note de passage est de <strong>80&nbsp;% pour chacune de ces sections</strong>. Vous pouvez accéder au matériel didactique pendant le test et vous pouvez le reprendre autant de fois que vous le souhaitez.</li>
                  <li>Accédez à l'écran d'<strong>accueil</strong> à n’importe quel moment en choisissant l'icône (<homebutton :iconWidth="50" iconTitle="exemple de l'icône de l'accueil" style="position: relative; top: -5px; left: 0px;" />).</li>
                  <li>Accédez aux outils et aux modèles en choisissant l'icône de la <strong>boîte à outils</strong> (&nbsp;<fileIcon title="exemple de l'icône de la boîte à outils" width="40" />&nbsp;) en haut à droite de l’écran.</li>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
  import fileIcon from '~/components/icons/FileIcon'
  import download from "~/components/fileDownload"
  import HTMLJobaidLink from "~/components/HTMLJobaidLink"
  import planLinks from "~/components/plan_links"
  import spendLinks from "~/components/spend_links"
  import reportLinks from "~/components/report_links"
  import homebutton from "~/components/icons/home_icon"
  export default {
    components: {
      fileIcon,
      download,
      planLinks,
      spendLinks,
      reportLinks,
      homebutton,
      HTMLJobaidLink
    }
  }

</script>
<style type="text/css" scoped>
  .card-header a.btn-light {
    text-transform: uppercase;
    color: #4d4d4d;
    font-weight: 500;
    font-size: 28px;
    text-align: left
  }

  .hamburger-example {
    top: 0em;
    width: 50px;
    height: 26px;
    border: none;
    position: relative;
    background: linear-gradient(to bottom, #4D4D4D, #4D4D4D);
    background-size: 100% 20%;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-size 0.2s 0.25s ease;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
  }

  .hamburger-example:before,
  .hamburger-example:after {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #4D4D4D;
    content: '';
    transition: transform 0.3s ease;
  }

  .hamburger-example:before {
    top: 0;
    transform-origin: 91% 150%;
  }

  .hamburger-example:after {
    bottom: 0;
    transform-origin: 84% -50%;
  }

  header .btn:hover,
  header .btn:focus {
    text-decoration: none;
  }

</style>
