/* ---------------------------------------------------------------------------
   Source unique de vérité de la page de vente.
   Tout ce qui change d'une cohorte à l'autre (prix, dates, lien de paiement)
   est ici : la page n'écrit aucune de ces valeurs en dur.

   ⚠️ À CONFIRMER avant mise en ligne — repérés par « À CONFIRMER » :
   le prix, l'identifiant de l'offre Podia et les dates des lives sont
   repris/déduits de la cohorte 2025-2026 et doivent être validés.
--------------------------------------------------------------------------- */

export const cohorte = {
  label: 'Cohorte 2026 / 2027',
  annees: '2026-2027',
  // Fenêtre de la promotion en lives. Sert au schema.org Course.
  debut: '2026-09-29',
  fin: '2027-03-02',
};

export const offre = {
  // À CONFIRMER : tarif repris de la cohorte 2025-2026.
  prixComptant: 1800,
  prixDevise: 'EUR',
  prixMensuel: 180,
  nbMensualites: 10,
  // Les montants affichés sont toutes taxes comprises. La mention doit
  // apparaître partout où un prix est écrit (obligation d'information du
  // consommateur, art. L112-1 du code de la consommation).
  mentionTva: 'TTC',
  // À CONFIRMER : Podia — récupérer l'offer_id de la nouvelle offre 2026-2027
  // (celui de 2025-2026 était 2963419).
  checkoutUrl:
    'https://www.decoincesducrayon.com/academie-des-decoinces-du-crayon-2026-2027/buy',
  // Lien secondaire pour les demandes de devis employeur / OPCO.
  emailDevis: 'nicolas.verdot@gmail.com',
};

export const chiffres = [
  { valeur: '1', label: "module d'embarquement" },
  { valeur: '10', label: 'modules de formation' },
  { valeur: '9', label: 'laboratoires avancés' },
  { valeur: '7', label: 'lives avec Nicolas' },
  { valeur: '∞', label: 'accès à vie, mises à jour incluses' },
];

/* --- Frictions : écrites pour des consultants, formateurs et coachs ------- */

export const frictions = [
  {
    titre: 'Tu dessines bien, tu ne sais pas quoi dessiner',
    texte:
      "Le trait, le sketchnote, la captation : tu maîtrises. Mais devant un groupe qui doit trancher une vraie question, tu ne sais pas quel support va réellement l'aider à avancer.",
  },
  {
    titre: 'Le cadrage se fait au feeling',
    texte:
      "Un client décrit vaguement son besoin, tu dis oui, tu chiffres à la louche. Le jour J, tu découvres que l'objectif réel n'était pas celui-là.",
  },
  {
    titre: "L'atelier s'effondre après le déjeuner",
    texte:
      "Le matin tenait la route. À 14h30 l'énergie retombe, deux personnes monopolisent la parole, et tu hésites à reprendre la main devant le commanditaire.",
  },
  {
    titre: "C'est beau, ça ne change rien",
    texte:
      'Tout le monde photographie la fresque en partant. Trois semaines plus tard, personne ne sait qui fait quoi et rien n\'a bougé.',
  },
  {
    titre: 'Tu bricoles ta méthode dans ton coin',
    texte:
      "Un icebreaker vu sur LinkedIn, un canevas récupéré sur Miro, un déroulé refait à zéro à chaque mission. Rien de reproductible, rien qui soit vraiment à toi.",
  },
  {
    titre: 'Tu n\'oses pas facturer ta vraie valeur',
    texte:
      "Sans méthode à montrer, tu vends une prestation de dessin. Avec un processus assumé, tu vends l'accompagnement d'une décision — ce n'est pas le même métier ni le même prix.",
  },
];

/* --- Ce que tu sauras faire ---------------------------------------------- */

export const competences = [
  {
    titre: 'Cadrer une demande',
    texte:
      "Mener l'entretien de commande, reformuler visuellement le besoin devant le client, identifier les grandes étapes de l'agenda et chiffrer sans oublier ce qui coûte vraiment.",
  },
  {
    titre: 'Concevoir la session',
    texte:
      "Construire un déroulé qui tient debout : rythme, alternance des formats, place laissée au groupe, et assez de souplesse pour absorber l'imprévu du jour J.",
  },
  {
    titre: 'Préparer et ouvrir',
    texte:
      "Choisir l'agencement de la salle et le matériel, préparer le commanditaire à ouvrir la séance, poser un cadre qui donne au groupe l'autorisation de se lancer.",
  },
  {
    titre: 'Tenir le groupe',
    texte:
      'Faire parler sans laisser un seul profil occuper tout l\'espace, mener la divergence puis la convergence, et savoir quoi faire quand la discussion tourne en rond.',
  },
  {
    titre: 'Faire atterrir',
    texte:
      "Transformer un mur d'idées en plan d'action que le collectif s'approprie, puis clôturer en ancrant ce qui a été appris plutôt qu'en distribuant des tâches.",
  },
  {
    titre: 'Rester solide',
    texte:
      "Repérer tes propres moments de bascule — ceux où tu perds tes moyens face au groupe — et retrouver un état de sécurité en pleine séance, grâce aux apports de la théorie polyvagale.",
  },
];

/* --- Qualification ------------------------------------------------------- */

export const pourQui = {
  oui: [
    "Tu es consultant·e, formateur·rice ou coach et tu veux animer des collectifs, pas seulement des individus.",
    "Tu pratiques déjà le sketchnote, la captation ou la facilitation graphique, et il te manque le processus de facilitation autour du dessin.",
    "Tu animes déjà des ateliers et tu veux remplacer ton bricolage par une méthode complète et reproductible.",
    "Tu es indépendant·e et tu veux élargir ton offre avec une prestation que peu de gens savent tenir de bout en bout.",
    "Tu es manager, chef·fe de projet, Scrum Master ou RTE et tu veux faire de tes réunions autre chose qu'un tour de table.",
  ],
  non: [
    "Tu cherches uniquement un cours de dessin. Les laboratoires t'y aideront, mais le cœur de l'Académie c'est la facilitation.",
    "Tu attends une certification finançable par le CPF ou un OPCO : l'Académie n'est pas encore éligible (le financement direct par l'employeur, lui, est possible).",
    "Tu ne peux pas dégager environ 1h30 par semaine pendant la saison des lives.",
  ],
};

/* --- Programme ----------------------------------------------------------- */

export const modules = [
  {
    numero: 'Embarquement',
    titre: 'Poser tes objectifs et ton cap',
    intro:
      "Le premier module sert à te repérer : comment l'Académie fonctionne, ce qui fait réussir les personnes qui la suivent jusqu'au bout, et ce que tu viens précisément y chercher.",
    points: [
      'Les 3 facteurs clés de réussite du parcours',
      'Les 6 écueils à éviter',
      "L'écosystème de l'Académie et la feuille de route de la formation",
      'Le calendrier des lives et ton premier défi',
    ],
  },
  {
    numero: '01',
    titre: 'Facilitation et facilitation graphique',
    intro:
      "Ce que recouvre vraiment le métier, et où se situe le dessin dedans. Un facilitateur crée les conditions pour que l'intelligence collective apparaisse ; le crayon est un moyen, pas la finalité.",
    points: [
      "Ce que signifie être facilitateur, et ce que ça n'est pas",
      'Le rôle spécifique du facilitateur graphique',
      'Sketchnoting, captation graphique, scribing : qui fait quoi',
      'Les compétences et qualités à développer',
      'Le bilan de ta situation actuelle et tes axes de progression',
    ],
  },
  {
    numero: '02',
    titre: 'Ton principal outil, toi',
    intro:
      "Avant les feutres, les couleurs et les processus : toi. Ce module explore comment rester en état de sécurité face à un groupe, et pourquoi c'est la condition de tout le reste.",
    points: [
      'Les fondements de la théorie polyvagale, appliqués à l\'animation',
      'La carte du monde qui t\'habite et ce qu\'elle te fait voir',
      'Identifier tes moments de rupture, ceux qui te font basculer',
      'Développer tes ressources pour revenir à un état de sécurité',
    ],
  },
  {
    numero: '03',
    titre: 'Cadrer une demande',
    intro:
      "La réussite d'une facilitation se joue en grande partie avant le jour J. Ce module porte sur l'entretien de commande et la proposition que tu en tires.",
    points: [
      'Interroger visuellement ton client pendant le cadrage',
      'Synthétiser sa demande devant lui',
      "Identifier les grandes étapes de l'agenda",
      'Ce qu\'il ne faut surtout pas négliger dans la tarification',
      'Un défi de mise en pratique sur une demande réelle',
    ],
  },
  {
    numero: '04',
    titre: "Design d'une session",
    intro:
      "Ton plan de route. Assis ou debout ? Qui prend les notes ? Des post-it ou pas ? Chaque choix de design produit une expérience différente — encore faut-il savoir laquelle tu vises.",
    points: [
      'Les grands principes d\'un processus collaboratif efficace',
      'La gestion des contraintes qui tombent au dernier moment',
      'Le poids de l\'environnement dans la conception',
      "Construire l'agenda comme un électrocardiogramme pour tenir le rythme",
      'Des outils pour débloquer ta créativité de concepteur',
    ],
  },
  {
    numero: '05',
    titre: "Préparer l'espace de rencontre",
    intro:
      "La manière dont tu installes la salle décide d'une partie de ce qui va s'y passer. Ce module traite du matériel et de l'agencement.",
    points: [
      'Créer les conditions matérielles favorables au groupe',
      'Choisir et disposer le matériel',
      "Les différents types d'agencement et ce qu'ils produisent",
    ],
  },
  {
    numero: '06',
    titre: 'Démarrer la séance',
    intro:
      "L'ouverture donne le ton de la journée entière. Elle se prépare à deux : le commanditaire et toi.",
    points: [
      'Préparer le commanditaire à ouvrir la session',
      'Te préparer toi-même et transmettre ton état de sécurité au groupe',
      'Les panneaux Agenda, Rôles, Objectifs et Résultats',
      'Poser un cadre solide et répartir les rôles',
    ],
  },
  {
    numero: '07',
    titre: 'Face au groupe, faire parler',
    intro:
      "Certains veulent agir tout de suite, d'autres ont besoin de tous les faits avant de se prononcer. Faciliter, c'est faire tenir ces façons de fonctionner dans la même salle.",
    points: [
      'Créer un dialogue réellement constructif',
      'Les techniques de divergence et de brainstorming',
      "Mener la convergence jusqu'à l'engagement individuel",
    ],
  },
  {
    numero: '08',
    titre: 'Engager le collectif dans un plan d\'action',
    intro:
      "Un plan d'action n'est pas une liste de tâches : c'est le moment où le groupe se projette et trouve l'énergie de faire ce qu'il vient de décider.",
    points: [
      "Les étapes essentielles d'un processus de plan d'action",
      'Ta posture : être présent tout en laissant de la place',
      'Formuler des consignes que le groupe comprend du premier coup',
    ],
  },
  {
    numero: '09',
    titre: "Fermer une session d'intelligence collective",
    intro:
      "La clôture fait prendre conscience du chemin parcouru et ancre ce qui a été vécu. Bâclée, elle efface une partie du travail de la journée.",
    points: [
      'Clôturer en engageant le collectif pour la suite',
      'Récolter un feedback qui te serve vraiment',
    ],
  },
  {
    numero: '10',
    titre: 'Amélioration continue',
    intro:
      "Ce que tu fais entre deux missions décide de ta progression. Ce module installe une pratique de relecture de tes propres animations.",
    points: [
      'Prendre du recul sur ta pratique de facilitation',
      'Repérer les moments où tu as ressenti de l\'insécurité',
      'Planifier tes prochaines expérimentations',
    ],
  },
];

export const laboratoires = [
  { titre: 'Décoince ton crayon', texte: 'Le vocabulaire graphique de base, personnages compris, pour qui sait tracer des traits et des ronds.' },
  { titre: "Cahier d'exercices", texte: 'De quoi pratiquer seul·e, à ton rythme, entre deux modules.' },
  { titre: 'Faciliter en musique', texte: "Se servir du son pour installer un rythme et des transitions dans la journée." },
  { titre: 'Le pouvoir des métaphores', texte: 'Trouver l\'image qui fait comprendre en une seconde ce qu\'un paragraphe explique mal.' },
  { titre: 'Les icebreakers', texte: 'Un répertoire de démarrages, et surtout le critère pour choisir le bon.' },
  { titre: 'Facilitation à distance', texte: 'Tenir un groupe en visio quand les caméras sont éteintes.' },
  { titre: 'La boîte à outils du facilitateur graphique', texte: 'Feutres, supports, formats : ce qui vaut vraiment son prix.' },
  { titre: 'Travailler avec les couleurs', texte: 'Une palette qui structure la lecture au lieu de la décorer.' },
  { titre: 'Décoince ton iPad', texte: 'Passer au numérique sans perdre ce qui fait la force du papier.' },
];

// À CONFIRMER : dates calées sur des mardis, sur le même schéma que la
// cohorte 2025-2026 (1 live par mois, de septembre à mars, 18h30 heure de Paris).
export const lives = [
  { date: '2026-09-29', libelle: 'Mardi 29 septembre 2026', note: 'Live de lancement' },
  { date: '2026-10-13', libelle: 'Mardi 13 octobre 2026', note: '' },
  { date: '2026-11-03', libelle: 'Mardi 3 novembre 2026', note: '' },
  { date: '2026-12-08', libelle: 'Mardi 8 décembre 2026', note: '' },
  { date: '2027-01-05', libelle: 'Mardi 5 janvier 2027', note: '' },
  { date: '2027-02-02', libelle: 'Mardi 2 février 2027', note: '' },
  { date: '2027-03-02', libelle: 'Mardi 2 mars 2027', note: 'Dernier live de la saison' },
];

/* --- Preuve -------------------------------------------------------------- */

export const temoignages = [
  {
    nom: 'Chloé Régnier',
    role: 'Coach professionnelle certifiée, gaia-perspectives.com',
    avant:
      "J'accompagnais des jeunes managers en coaching individuel. Ma frustration, c'était de ne pas oser me lancer dans l'accompagnement des équipes : il me manquait des outils et une approche qui me ressemble.",
    apres:
      "J'ai découvert la facilitation graphique avec une méthodologie, des process, des outils. Je me sens beaucoup plus légitime et confiante. Je ne me présente d'ailleurs plus comme coach, mais comme facilitatrice.",
  },
  {
    nom: 'Leila Blal',
    role: 'Formatrice, mindmappons.com',
    avant:
      "J'avais déjà suivi des formations de facilitation graphique, mais il me manquait le côté fonctionnel et concret : le traitement d'une demande client et tous les aspects liés à l'animation d'ateliers.",
    apres:
      "Maintenant je sais cadrer une demande et mener un atelier du début à la fin. C'est une formation pratico-pratique, avec des apports directement transposables. Je facilite en confiance parce que j'ai les bonnes armes.",
  },
  {
    nom: 'Christiane Amici Raboud',
    role: 'Facilitatrice et formatrice, CYC Partenaires',
    avant:
      "J'admirais les personnes qui dessinaient en séance, et j'étais navrée de ne pas savoir représenter une idée. J'écrivais mes programmes au flip chart sous forme de texte, sans aucune valeur ajoutée.",
    apres:
      "J'ai appris à représenter des personnages, des sensations, des situations. Du moment où vous savez tracer des traits et des ronds, vous pouvez y arriver. J'ai des retours réguliers sur la mémorisation que ça permet.",
  },
  {
    nom: 'Hélène Poulain',
    role: "Cheffe de projet amélioration continue",
    avant:
      "Les trucs et astuces glanés sur internet ne couvraient ni tout le processus de facilitation, ni la position du facilitateur.",
    apres:
      "J'ai de quoi introduire la facilitation graphique dans mes animations. J'ai travaillé mon répertoire d'icebreakers et d'ateliers selon l'objectif visé. Je me sens prête.",
  },
];

/* --- FAQ (alimente aussi le schema.org FAQPage) --------------------------- */

export const faq = [
  {
    question: 'Combien de temps faut-il y consacrer ?',
    reponse:
      "C'est la question qui revient le plus souvent. Compte environ 1h30 par semaine de travail individuel, plus 1h de live par module. Si tu n'es pas disponible pendant un live, le replay est déposé sur ta plateforme et tu peux poser tes questions à l'écrit.",
  },
  {
    question: "Je ne sais pas dessiner. C'est un problème ?",
    reponse:
      "Non. Le cœur de l'Académie, c'est la facilitation : cadrer, concevoir, tenir un groupe, faire atterrir. Le laboratoire « Décoince ton crayon » et les cahiers d'exercices sont là pour le geste graphique, et ils partent du niveau trait-et-rond. Plusieurs anciens élèves sont arrivés en disant « je ne sais pas dessiner ».",
  },
  {
    question: "Pendant combien de temps ai-je accès aux contenus ?",
    reponse:
      "À vie. Tous les modules sont disponibles dès ton inscription, tu avances à ton rythme, et tu bénéficies automatiquement des mises à jour et des nouveaux contenus ajoutés par la suite.",
  },
  {
    question: 'Comment se passent les lives ?',
    reponse:
      "Les lives ont lieu le mardi à partir de 18h30 (heure de Paris), sur Zoom, à raison d'un par mois entre septembre et mars. Ce sont des moments de questions ouvertes, pas des cours magistraux. Tout est enregistré et déposé sur ton espace de formation. Ils sont ouverts aux anciennes cohortes comme aux nouvelles, quel que soit ton avancement.",
  },
  {
    question: "Et si j'ai des questions entre deux lives ?",
    reponse:
      "Sous chaque capsule vidéo de ton espace de formation, tu peux poser tes questions et obtenir des réponses de Nicolas, des autres élèves et des anciens diplômés. C'est l'un des intérêts d'une communauté qui accumule les cohortes plutôt que de les cloisonner.",
  },
  {
    question: 'À quoi ressemble la communauté ?',
    reponse:
      "Un groupe LinkedIn privé où l'on dépose ses demandes d'aide, ses fresques pour avoir des retours, ses questions de métier. Il en sort régulièrement des partenariats, des échanges de services, des masterminds et des rencontres régionales entre élèves.",
  },
  {
    question: "Puis-je financer l'Académie avec mon CPF ?",
    reponse:
      "Non. L'Académie des Décoincés du Crayon n'est éligible ni au CPF ni à une prise en charge OPCO à ce jour. C'est un choix assumé de format — un parcours qui vit toute l'année et se met à jour en continu — mais autant le dire franchement avant que tu t'inscrives.",
  },
  {
    question: "Je suis salarié·e : mon entreprise peut-elle payer ?",
    reponse:
      "Oui, c'est très fréquent. Envoie le nom et l'adresse de ton entreprise à nicolas.verdot@gmail.com et tu recevras un devis à faire valider en interne.",
  },
];

/* --- Le formateur -------------------------------------------------------- */

export const formateur = {
  nom: 'Nicolas Verdot',
  role: 'Facilitateur graphique et coach certifié',
  accroche:
    "J'ai appris la facilitation avant le dessin. C'est exactement dans cet ordre que je la transmets.",
  bio: [
    "Je facilite des ateliers, des séminaires et des réunions de décision depuis plus de dix ans. Le crayon est arrivé dans ma pratique bien après : d'abord parce que je cherchais un moyen de rendre visible ce qu'un groupe était en train de se dire, ensuite parce que j'ai constaté qu'une idée dessinée se discute autrement qu'une idée écrite en liste.",
    "C'est pour ça que l'Académie ne commence pas par le trait. Beaucoup de personnes qui me rejoignent dessinent déjà très bien — mieux que moi sur certains aspects — et butent pourtant sur le même mur : que faire du groupe qui est en face. Le dessin sans processus produit de jolies fresques dont personne ne fait rien.",
    "J'ai fondé le Sommet des Décoincés du Crayon, devenu l'un des rendez-vous de référence en France sur la pensée visuelle et la facilitation graphique, et j'anime toute l'année la communauté qui s'est constituée autour. L'Académie est née de ce que j'y ai entendu, année après année : des praticiens compétents et isolés, qui n'avaient pas de méthode à eux.",
  ],
};

// Éléments de légitimité, tous vérifiables publiquement.
export const credentials = [
  {
    titre: 'Fondateur du Sommet des Décoincés du Crayon',
    texte:
      "L'événement français de référence sur la pensée visuelle et la facilitation graphique, et la communauté qui le prolonge toute l'année.",
  },
  {
    titre: 'Coach professionnel certifié',
    texte:
      "Une pratique d'accompagnement individuel qui nourrit directement la posture enseignée dans le module « Ton principal outil, toi ».",
  },
  {
    titre: 'Ambassadeur Neuland',
    texte:
      'Partenaire de la marque de référence du matériel de facilitation visuelle, dont le laboratoire « boîte à outils » reprend les usages.',
  },
  {
    titre: 'Engagé à ICA International',
    texte:
      "L'association mondiale de facilitation, ainsi qu'auprès d'ICA Bénin et Côte d'Ivoire pour la transmission des pratiques participatives.",
  },
];

// Organisations pour lesquelles Nicolas facilite. Ce sont ses références de
// praticien, PAS des élèves de l'Académie — la page doit le dire clairement.
export const clients = [
  { nom: 'Air France KLM', logo: '/logos/air-france-klm.png' },
  { nom: 'Louis Vuitton', logo: '/logos/louis-vuitton.svg' },
  { nom: 'PwC', logo: '/logos/pwc.webp' },
  { nom: 'URSSAF', logo: '/logos/urssaf.webp' },
  { nom: 'CEC', logo: '/logos/cec.png' },
  { nom: 'JCI Monaco', logo: '/logos/jci-monaco.png' },
  { nom: 'MG2Mix', logo: '/logos/mg2mix.png' },
  { nom: 'Ressources', logo: '/logos/ressources.png' },
];

export const liens = {
  murTemoignages: 'https://www.decoincesducrayon.com/temoignages',
  linkedin: 'https://www.linkedin.com/in/nicolasverdot/',
  siteMere: 'https://www.decoincesducrayon.com',
};
