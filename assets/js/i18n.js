(function () {
  'use strict';

  var STORE_KEY = 'cya-site-lang';
  var DEFAULT_LANG = 'fr';

  var MESSAGES = {
    fr: {
      'lang.en.label': 'Passer en anglais',
      'lang.fr.label': 'Passer en français',

      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.projects': 'Projets',
      'nav.experience': 'Expérience',
      'nav.teaching': 'Enseignement',
      'nav.education': 'Formation',
      'nav.contact': 'Contact',

      'hero.title': 'Charmaine Yebadokpo - Ingénieure IA &amp; Consultante en Computer Vision',
      'hero.tagline1': "L'IA qui résout des problèmes concrets,",
      'hero.tagline2': 'et qui forme la prochaine génération à les construire.',
      'hero.btn.projects': 'Voir mes projets',
      'hero.btn.contact': 'Me contacter',
      'hero.btn.cv': 'Télécharger mon CV',

      'footer.bio': ' : ingénieure IA et consultante en computer vision, je conçois des solutions concrètes et je forme la prochaine génération à les construire.',
      'footer.copyright': 'Copyright',
      'footer.rights': 'Tous droits réservés',

      'about.title': 'À propos - Charmaine Yebadokpo',
      'about.meta': "Ingénieure IA et consultante en computer vision basée au Bénin, formée à l'AMMI/AIMS Sénégal. Je conçois des solutions IA concrètes et je forme la prochaine génération.",
      'about.heading': "Ingénieure IA et consultante en computer vision, basée au Bénin et formée en partie au Sénégal. Un parcours qui relie recherche technique, ingénierie logicielle et éducation en IA.",
      'about.headingTitle': 'À propos',
      'about.portraitAlt': 'Portrait de Charmaine Yebadokpo',
      'about.h2': 'Je conçois des solutions IA concrètes, que je rends accessibles.',
      'about.p1': "Je suis Charmaine Yebadokpo, ingénieure IA basée au Bénin, formée en partie au Sénégal. Mon parcours relie deux ambitions : utiliser l'IA pour des problèmes concrets, et transmettre ces compétences à la prochaine génération.",
      'about.p2': "Après un Bachelor à l'IMSP Bénin (2018-2019), j'ai obtenu un Master en ICT (2019-2021) avec une thèse sur la génération d'interfaces web à partir de croquis dessinés à la main, avec 94% de précision en classification grâce à des CNN. J'ai ensuite poursuivi à l'AIMS/AMMI Sénégal avec un Master en Sciences Mathématiques (2022-2023, travaux sur les graceful and cordial graph labelings), puis le Master en Machine Intelligence (2023-2024) : computer vision, kernel methods, NLP et MLOps. Trois formations, trois bourses d'excellence complètes.",
      'about.p3': "En génie logiciel, j'ai construit des microservices en Golang, Python et C# chez Dataincube (plateforme Atlas Core, CI/CD, Docker) et Sensor6ty (C#/Python/MongoDB/Flask, sécurité API OAuth2/JWT). En computer vision appliquée : segmentation de tumeurs cérébrales sur IRM (U-Net), génération de rapports radiologiques et classification de maladies du manioc (compétition Kaggle).",
      'about.p4': "En parallèle, je m'engage dans l'éducation en IA : mentorat pour l'Olympiade Internationale d'IA (IOAI), IndabaX Bénin et le projet EducAI, une plateforme d'apprentissage personnalisé pour les élèves béninois.",
      'about.languages.title': 'Langues :',
      'about.languages.value': 'Goun et Fon (natives), français (C1), anglais (B2).',

      'portfolio.title': 'Projets - Charmaine Yebadokpo',
      'portfolio.meta': 'Projets de computer vision : génération de rapports radiologiques, segmentation de tumeurs cérébrales (U-Net), classification de maladies de plantes, génération d\u2019interfaces à partir de croquis, et EducAI.',
      'portfolio.heading': "La même idée traverse tout mon travail : mettre la vision par ordinateur et l'IA au service de problèmes réels : santé, agriculture, éducation, génie logiciel.",
      'portfolio.headingTitle': 'Projets',
      'portfolio.p1.tag': 'Computer Vision · NLP',
      'portfolio.p1.title': 'Rapports radiologiques automatiques',
      'portfolio.p1.desc': "La lecture des radios pulmonaires prend du temps aux radiologues ; un rapport préliminaire généré automatiquement pouvait l'accélérer. J'ai construit un pipeline autour du modèle pré-entraîné Generate-CXR (Hugging Face) qui produit un texte descriptif en langage naturel à partir d'une radiographie thoracique. L'apprentissage clé : les modèles de domaine médical permettent de prototyper vite, mais leur sortie doit rester validée par un humain.",
      'portfolio.p2.tag': 'Deep Learning · Segmentation',
      'portfolio.p2.title': 'Segmentation de tumeurs cérébrales (IRM)',
      'portfolio.p2.desc': "Localiser précisément une tumeur dans une image médicale est un défi d'annotation et de précision. J'ai entraîné un modèle de deep learning basé sur l'architecture U-Net pour segmenter les tumeurs cérébrales sur des volumes IRM, en décidant pour chaque voxel s'il appartient ou non à la tumeur. L'apprentissage clé : la préparation des données (normalisation, classes déséquilibrées) compte souvent davantage que des moyens de calcul importants.",
      'portfolio.p3.tag': 'Kaggle · Classification',
      'portfolio.p3.title': 'Classification des maladies du manioc',
      'portfolio.p3.desc': "Le diagnostic visuel des maladies du manioc est crucial pour les petits agriculteurs, mais rarement accessible sur le terrain. J'ai participé à une compétition Kaggle avec un modèle classifiant des photos de feuilles en 5 catégories (sain ou 4 maladies), en concaténant les features de deux CNN pré-entraînés, resnext101_32x8d et efficientnet_b0. L'apprentissage clé : combiner des représentations d'architectures complémentaires améliore nettement la robustesse aux variations d'images.",
      'portfolio.p4.tag': 'Thèse de Master · IMSP Bénin 2021',
      'portfolio.p4.title': "Générateur d'interfaces web à partir de croquis",
      'portfolio.p4.desc': "Passer du papier au code est un goulot d'étranglement du développement ; l'idée était de générer automatiquement une interface web à partir d'un croquis dessiné à la main. J'ai entraîné des CNN pour la segmentation et la classification des éléments d'interface, sur un dataset custom d'environ 400 instances par classe. Le système atteint 94% de précision en classification, une démonstration concrète de l'automatisation du génie logiciel par la vision par ordinateur.",
      'portfolio.p5.tag': 'Recherche en cours · Éducation',
      'portfolio.p5.title': 'EducAI : apprentissage personnalisé par IA',
      'portfolio.p5.desc': "Au Bénin, l'échec scolaire et le manque d'inclusion numérique touchent des milliers d'élèves sans accès à un suivi personnalisé. EducAI explore une plateforme d'apprentissage basée sur l'IA générative : systèmes de recommandation, chatbot, analyse des interactions des élèves et gamification pour maintenir la motivation. L'objectif : donner aux enseignants des outils adaptatifs et réduire les taux d'échec scolaire. Un projet de recherche en cours, sans résultat définitif à ce stade.",

      'experience.title': 'Expérience - Charmaine Yebadokpo',
      'experience.meta': "Expérience professionnelle de Charmaine Yebadokpo : microservices Golang/Python et C#, IA appliquée, sécurité API, chez Dataincube, Sensor6ty et X-AFS.",
      'experience.heading': "Trois stages qui ont traduit mes compétences en IA et en ingénierie logicielle en produits concrets : microservices, sécurité API et intégration d'algorithmes en production.",
      'experience.headingTitle': 'Expérience',
      'experience.item1.title': 'Stage : Développement logiciel &amp; IA appliquée',
      'experience.item1.date': 'Mai 2025 · Bénin',
      'experience.item1.l1': 'Développé et documenté des microservices Golang/Python pour la plateforme Atlas Core, en prenant en charge les sous-systèmes carrière et hackathon.',
      'experience.item1.l2': "Intégré des algorithmes d'IA dans des microservices et applications logicielles, reliant le prototypage machine learning à une base de production.",
      'experience.item1.l3': "Évolué dans un environnement DevOps (GitHub, GitHub Actions CI/CD, Docker), avec revues de code, documentation technique et sessions de formation internes.",
      'experience.item2.title': 'Stage : Big Data, IA ou Cybersécurité',
      'experience.item2.date': 'Août 2023 – Mars 2024 · À distance',
      'experience.item2.l1': 'Construit des microservices en C#, Python, MongoDB et Flask.',
      'experience.item2.l2': 'Mis en place la sécurité des APIs avec OAuth2 et JWT.',
      'experience.item2.l3': 'Suivi une formation intensive avec un architecte de solutions .NET : construction de microservices, Docker et documentation API avec Swagger.',
      'experience.item3.title': 'Stage : Développement web',
      'experience.item3.date': 'Février 2022 – Mai 2022 · À distance',
      'experience.item3.l1': 'Développé des scripts d\u2019automatisation de tâches X-AFS en Golang et Python, en télétravail.',

      'teaching.title': 'Enseignement &amp; Mentorat - Charmaine Yebadokpo',
      'teaching.meta': "Charmaine Yebadokpo transmet l'IA : mentorat IOAI, Writing Team Lead IndabaX Bénin, tutoriel Federated Learning et curriculum de littératie numérique pour les élèves du secondaire.",
      'teaching.heading': "Si l'IA doit résoudre des problèmes concrets, encore faut-il que les prochaines générations sachent la comprendre, la questionner et la construire. C'est ce que je fais au Bénin.",
      'teaching.headingTitle': 'Enseignement &amp; Mentorat',
      'teaching.t1.tag': 'Mentorat · IOAI',
      'teaching.t1.title': "Préparation à l'Olympiade Internationale d'IA",
      'teaching.t1.desc': "J'accompagne des élèves du secondaire au Bénin dans leur préparation à l'Olympiade Internationale d'IA (IOAI). L'enjeu n'est pas seulement technique : il s'agit de donner à ces jeunes une première représentation de ce qu'est l'IA, de ses usages et de ses limites, et de les entraîner à raisonner sur des problèmes concrets.",
      'teaching.t2.tag': 'IndabaX Bénin 2026',
      'teaching.t2.title': 'Writing Team Lead',
      'teaching.t2.desc': "Je coordonne la production de contenu d'IndabaX Bénin 2026 en tant que Writing Team Lead, en veillant à ce qu'il soit bilingue (français/anglais) et accessible. Un travail collaboratif mené avec Ghilth Gbaguidi, Jeremiah Olamijuwonlo et Praise Amonye.",
      'teaching.t3.tag': 'DeepLearning IndabaX Bénin · Déc. 2025',
      'teaching.t3.title': 'Tutoriel hands-on sur le Federated Learning',
      'teaching.t3.desc': "J'ai facilité un tutoriel pratique sur le Federated Learning. Concrètement, il s'agissait de traduire un concept complexe, tel que l'entraînement de modèles sans centraliser les données, en exercices que les participants pouvaient exécuter et modifier eux-mêmes.",
      'teaching.t4.tag': 'Supervision',
      'teaching.t4.title': 'Encadrement d\u2019étudiants de premier cycle',
      'teaching.t4.desc': "J'ai aussi encadré des étudiants de premier cycle en informatique sur leurs projets web et IA : PHP, JavaScript et traitement du langage naturel. Une expérience qui m'a appris, autant qu'aux étudiants, la différence entre savoir et savoir l'expliquer.",
      'teaching.t5.tag': 'Mentorat · CotonouAI Academy',
      'teaching.t5.title': 'CotonouAI Academy',
      'teaching.t5.desc': "Mentore et formatrice au sein de CotonouAI Academy, où je contribue à démocratiser l'accès aux compétences en intelligence artificielle et à accompagner les participants dans le développement de leurs capacités techniques et leur posture d'innovation. J'ai également coaché l'équipe gagnante, en l'aidant à transformer son idée en une proposition structurée, convaincante et porteuse d'impact.",
      'teaching.t6.tag': 'Mentorat &amp; jury · PitchLab 2025',
      'teaching.t6.title': 'PitchLab',
      'teaching.t6.desc': "Mentore et membre du jury de l'édition 2025 de PitchLab, un concours d'art oratoire et de présentation de projets qui révèle les talents de demain. J'y ai contribué à développer chez les participants la capacité à communiquer des idées innovantes, à porter une vision avec assurance et à mettre en valeur l'impact potentiel de leurs projets, à l'intersection de l'innovation, du leadership et de l'entrepreneuriat.",

      'education.title': 'Formation, Publications &amp; Prix - Charmaine Yebadokpo',
      'education.meta': "Parcours académique de Charmaine Yebadokpo : Masters AMMI/AIMS Sénégal et IMSP Bénin, communications BWAI et JSTIM, prix et bourses d'excellence.",
      'education.heading': "Trois masters entre l'IMSP Bénin et l'AIMS/AMMI Sénégal, chacun financé par une bourse d'excellence, complétés par des communications et des reconnaissances qui jalonnent mon parcours.",
      'education.headingTitle': 'Formation',
      'education.block1.title': 'Éducation',
      'education.block1.l1.title': 'Master en Machine Intelligence (AMMI)',
      'education.block1.l1.value': "AIMS Sénégal, 2023-2024 : bourse d'excellence complète",
      'education.block1.l2.title': 'Master en Sciences Mathématiques et Applications',
      'education.block1.l2.value': "AIMS Sénégal, 2022-2023 : bourse d'excellence complète",
      'education.block1.l3.title': 'Master en ICT',
      'education.block1.l3.value': "IMSP Bénin, 2019-2021 : bourse d'excellence",
      'education.block1.l4.title': 'Bachelor',
      'education.block1.l4.value': 'IMSP Bénin, 2018-2019',
      'education.block1.l5.title': 'Business et data analytics',
      'education.block1.l5.value': 'Industry Immersion Africa (iiAfrica) avec ESMT Berlin, juil.-sept. 2024',
      'education.block2.title': 'Communications &amp; ateliers',
      'education.block2.l1.title': 'Benin Workshop on Artificial Intelligence (BWAI)',
      'education.block2.l1.value': 'Mai 2024 : communication « On graceful and cordial graph labelings »',
      'education.block2.l2.title': 'Journée des Sciences, Technologies, Ingénierie et Mathématiques (JSTIM)',
      'education.block2.l2.value': 'Déc. 2023 : même communication',
      'education.block2.l3.title': 'FRIARE Workshop on Data Quality (FWDQ)',
      'education.block2.l3.value': 'Epitech Cotonou, août 2024',
      'education.block3.title': 'Prix &amp; reconnaissances',
      'education.block3.l1.title': 'Deep Learning Indaba (DLI 2025)',
      'education.block3.l1.value': 'Participante financée intégralement, DLI 2025 au Rwanda',
      'education.block3.l2.title': "Bourses d'excellence complètes",
      'education.block3.l2.value': 'AMMI (2024), AIMS (2022-2023), IMSP (2019-2020)',

      'contact.title': 'Contact - Charmaine Yebadokpo',
      'contact.meta': "Contactez Charmaine Yebadokpo pour des opportunités en computer vision, IA pour l'éducation ou consulting technique. Basée au Bénin, disponible à distance.",
      'contact.heading': "Une opportunité en computer vision, en IA pour l'éducation ou en consulting technique ? Écrivons-nous, je suis basée au Bénin et disponible pour collaborer à distance ou sur place.",
      'contact.headingTitle': 'Contact',
      'contact.info.location.title': 'Localisation',
      'contact.info.location.value': 'Bénin',
      'contact.info.phone.title': 'Appelez-moi',
      'contact.info.email.title': 'Email',
      'contact.info.social.title': 'Réseaux sociaux',
      'contact.form.name': 'Votre nom',
      'contact.form.email': 'Votre email',
      'contact.form.subject': 'Sujet',
      'contact.form.message': 'Votre message',
      'contact.form.submit': 'Envoyer le message'
    },

    en: {
      'lang.en.label': 'Switch to English',
      'lang.fr.label': 'Switch to French',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.teaching': 'Teaching',
      'nav.education': 'Education',
      'nav.contact': 'Contact',

      'hero.title': 'Charmaine Yebadokpo - AI Engineer &amp; Computer Vision Consultant',
      'hero.tagline1': 'AI that solves real-world problems,',
      'hero.tagline2': 'and trains the next generation to build them.',
      'hero.btn.projects': 'See my projects',
      'hero.btn.contact': 'Contact me',
      'hero.btn.cv': 'Download my CV',

      'footer.bio': ' : AI engineer and computer vision consultant. I design practical solutions and train the next generation to build them.',
      'footer.copyright': 'Copyright',
      'footer.rights': 'All Rights Reserved',

      'about.title': 'About - Charmaine Yebadokpo',
      'about.meta': 'AI engineer and computer vision consultant based in Benin, trained at AMMI/AIMS Senegal. I build practical AI solutions and train the next generation.',
      'about.heading': 'AI engineer and computer vision consultant, based in Benin and partly trained in Senegal. A journey that connects technical research, software engineering and AI education.',
      'about.headingTitle': 'About',
      'about.portraitAlt': 'Portrait of Charmaine Yebadokpo',
      'about.h2': 'I build practical AI solutions and make them accessible.',
      'about.p1': 'I am Charmaine Yebadokpo, an AI engineer based in Benin, partly trained in Senegal. My journey connects two ambitions: using AI for real-world problems, and passing these skills on to the next generation.',
      'about.p2': "After a Bachelor's degree at IMSP Benin (2018-2019), I earned an MSc in ICT (2019-2021) with a thesis on generating web interfaces from hand-drawn sketches, reaching 94% classification accuracy with CNNs. I then continued at AIMS/AMMI Senegal with an MSc in Mathematical Sciences (2022-2023, work on graceful and cordial graph labelings), followed by the MSc in Machine Intelligence (2023-2024): computer vision, kernel methods, NLP and MLOps. Three degrees, three full excellence scholarships.",
      'about.p3': 'In software engineering, I built microservices in Golang, Python and C# at Dataincube (Atlas Core platform, CI/CD, Docker) and Sensor6ty (C#/Python/MongoDB/Flask, OAuth2/JWT API security). In applied computer vision: brain tumour segmentation on MRI (U-Net), automated radiology report generation and cassava disease classification (Kaggle competition).',
      'about.p4': 'In parallel, I am committed to AI education: mentoring for the International Olympiad in Artificial Intelligence (IOAI), IndabaX Benin and the EducAI project, a personalised learning platform for Beninese students.',
      'about.languages.title': 'Languages:',
      'about.languages.value': 'Goun and Fon (native), French (C1), English (B2).',

      'portfolio.title': 'Projects - Charmaine Yebadokpo',
      'portfolio.meta': 'Computer vision projects: automated radiology reports, brain tumour segmentation (U-Net), plant disease classification, sketch-to-interface generation, and EducAI.',
      'portfolio.heading': 'One idea runs through all of my work: putting computer vision and AI at the service of real-world problems — health, agriculture, education, software engineering.',
      'portfolio.headingTitle': 'Projects',
      'portfolio.p1.tag': 'Computer Vision · NLP',
      'portfolio.p1.title': 'Automated radiology reports',
      'portfolio.p1.desc': "Reading chest X-rays takes radiologists a lot of time; an automatically generated preliminary report could speed it up. I built a pipeline around the pre-trained Generate-CXR model (Hugging Face) that produces a descriptive natural-language text from a chest radiograph. The key lesson: medical-domain models allow fast prototyping, but their output must still be reviewed by a human.",
      'portfolio.p2.tag': 'Deep Learning · Segmentation',
      'portfolio.p2.title': 'Brain tumour segmentation (MRI)',
      'portfolio.p2.desc': "Precisely locating a tumour in a medical image is a challenge of annotation and accuracy. I trained a deep learning model based on the U-Net architecture to segment brain tumours on MRI volumes, deciding for each voxel whether it belongs to the tumour or not. The key lesson: data preparation (normalisation, imbalanced classes) often matters more than large computing resources.",
      'portfolio.p3.tag': 'Kaggle · Classification',
      'portfolio.p3.title': 'Cassava disease classification',
      'portfolio.p3.desc': "Visual diagnosis of cassava diseases is crucial for smallholder farmers, yet rarely available in the field. I took part in a Kaggle competition with a model classifying leaf photos into 5 categories (healthy or 4 diseases), concatenating features from two pre-trained CNNs, resnext101_32x8d and efficientnet_b0. The key lesson: combining representations from complementary architectures significantly improves robustness to image variations.",
      'portfolio.p4.tag': "Master's thesis · IMSP Benin 2021",
      'portfolio.p4.title': 'Sketch-to-web-interface generator',
      'portfolio.p4.desc': "Going from paper to code is a bottleneck in development; the idea was to automatically generate a web interface from a hand-drawn sketch. I trained CNNs for the segmentation and classification of interface elements on a custom dataset of about 400 instances per class. The system reaches 94% classification accuracy — a concrete demonstration of automating software engineering through computer vision.",
      'portfolio.p5.tag': 'Ongoing research · Education',
      'portfolio.p5.title': 'EducAI: personalised AI learning',
      'portfolio.p5.desc': "In Benin, school failure and the lack of digital inclusion affect thousands of students who have no access to personalised support. EducAI explores a learning platform based on generative AI: recommendation systems, chatbot, analysis of student interactions and gamification to sustain motivation. The goal: give teachers adaptive tools and reduce school failure rates. An ongoing research project, with no final results at this stage.",

      'experience.title': 'Experience - Charmaine Yebadokpo',
      'experience.meta': "Charmaine Yebadokpo's professional experience: Golang/Python and C# microservices, applied AI, API security, at Dataincube, Sensor6ty and X-AFS.",
      'experience.heading': 'Three internships that turned my skills in AI and software engineering into concrete products: microservices, API security and shipping ML algorithms to production.',
      'experience.headingTitle': 'Experience',
      'experience.item1.title': 'Internship: Software Development &amp; Applied AI',
      'experience.item1.date': 'May 2025 · Benin',
      'experience.item1.l1': 'Developed and documented Golang/Python microservices for the Atlas Core platform, owning the career and hackathon subsystems.',
      'experience.item1.l2': 'Integrated AI algorithms into microservices and software applications, bridging machine learning prototyping and a production codebase.',
      'experience.item1.l3': 'Worked in a DevOps environment (GitHub, GitHub Actions CI/CD, Docker), with code reviews, technical documentation and internal training sessions.',
      'experience.item2.title': 'Internship: Big Data, AI or Cybersecurity',
      'experience.item2.date': 'Aug 2023 – Mar 2024 · Remote',
      'experience.item2.l1': 'Built microservices in C#, Python, MongoDB and Flask.',
      'experience.item2.l2': 'Implemented API security with OAuth2 and JWT.',
      'experience.item2.l3': 'Followed intensive training with a .NET solutions architect: microservices, Docker and API documentation with Swagger.',
      'experience.item3.title': 'Internship: Web Development',
      'experience.item3.date': 'Feb 2022 – May 2022 · Remote',
      'experience.item3.l1': 'Developed X-AFS task automation scripts in Golang and Python, working remotely.',

      'teaching.title': 'Teaching &amp; Mentoring - Charmaine Yebadokpo',
      'teaching.meta': "Charmaine Yebadokpo shares AI: IOAI mentoring, Writing Team Lead at IndabaX Benin, a Federated Learning tutorial and a digital literacy curriculum for secondary-school students.",
      'teaching.heading': 'If AI is to solve real-world problems, the next generations must first learn to understand it, question it and build it. That is what I do in Benin.',
      'teaching.headingTitle': 'Teaching &amp; Mentoring',
      'teaching.t1.tag': 'Mentoring · IOAI',
      'teaching.t1.title': 'Preparing students for the International AI Olympiad',
      'teaching.t1.desc': "I support secondary-school students in Benin as they prepare for the International Olympiad in Artificial Intelligence (IOAI). The stake is not only technical: it is about giving these young people a first picture of what AI is, its uses and its limits, and training them to reason about concrete problems.",
      'teaching.t2.tag': 'IndabaX Bénin 2026',
      'teaching.t2.title': 'Writing Team Lead',
      'teaching.t2.desc': "As Writing Team Lead of IndabaX Benin 2026, I coordinate content production, making sure it is bilingual (French/English) and accessible. A collaborative effort with Ghilth Gbaguidi, Jeremiah Olamijuwonlo and Praise Amonye.",
      'teaching.t3.tag': 'DeepLearning IndabaX Bénin · Dec. 2025',
      'teaching.t3.title': 'Hands-on Federated Learning tutorial',
      'teaching.t3.desc': "I facilitated a practical tutorial on Federated Learning. Concretely, it was about translating a complex concept — such as training models without centralising data — into exercises participants could run and modify themselves.",
      'teaching.t4.tag': 'Supervision',
      'teaching.t4.title': 'Supervising undergraduate students',
      'teaching.t4.desc': "I also supervised undergraduate computer-science students on their web and AI projects: PHP, JavaScript and natural-language processing. An experience that taught me, as much as the students, the difference between knowing and knowing how to explain.",
      'teaching.t5.tag': 'Mentoring · CotonouAI Academy',
      'teaching.t5.title': 'CotonouAI Academy',
      'teaching.t5.desc': "Mentor and trainer at CotonouAI Academy, where I help democratise access to AI skills and support participants in developing their technical abilities and their innovation mindset. I also coached the winning team, helping it turn its idea into a structured, compelling and impactful proposal.",
      'teaching.t6.tag': 'Mentoring &amp; jury · PitchLab 2025',
      'teaching.t6.title': 'PitchLab',
      'teaching.t6.desc': "Mentor and jury member for the 2025 edition of PitchLab, a public-speaking and project-presentation competition that reveals tomorrow's talents. I helped participants develop the ability to communicate innovative ideas, carry a vision with confidence and highlight the potential impact of their projects, at the intersection of innovation, leadership and entrepreneurship.",

      'education.title': 'Education, Publications &amp; Awards - Charmaine Yebadokpo',
      'education.meta': "Charmaine Yebadokpo's academic journey: Masters at AMMI/AIMS Senegal and IMSP Benin, BWAI and JSTIM talks, awards and excellence scholarships.",
      'education.heading': 'Three Masters between IMSP Benin and AIMS/AMMI Senegal, each funded by an excellence scholarship, alongside talks and recognition that mark my journey.',
      'education.headingTitle': 'Education',
      'education.block1.title': 'Education',
      'education.block1.l1.title': 'MSc in Machine Intelligence (AMMI)',
      'education.block1.l1.value': 'AIMS Senegal, 2023-2024: full excellence scholarship',
      'education.block1.l2.title': 'MSc in Mathematical Sciences and Applications',
      'education.block1.l2.value': 'AIMS Senegal, 2022-2023: full excellence scholarship',
      'education.block1.l3.title': 'MSc in ICT',
      'education.block1.l3.value': 'IMSP Benin, 2019-2021: excellence scholarship',
      'education.block1.l4.title': 'Bachelor',
      'education.block1.l4.value': 'IMSP Benin, 2018-2019',
      'education.block1.l5.title': 'Business and data analytics',
      'education.block1.l5.value': 'Industry Immersion Africa (iiAfrica) with ESMT Berlin, Jul.-Sep. 2024',
      'education.block2.title': 'Communications &amp; workshops',
      'education.block2.l1.title': 'Benin Workshop on Artificial Intelligence (BWAI)',
      'education.block2.l1.value': 'May 2024: talk on « On graceful and cordial graph labelings »',
      'education.block2.l2.title': 'Science, Technology, Engineering and Mathematics Day (JSTIM)',
      'education.block2.l2.value': 'Dec. 2023: same talk',
      'education.block2.l3.title': 'FRIARE Workshop on Data Quality (FWDQ)',
      'education.block2.l3.value': 'Epitech Cotonou, August 2024',
      'education.block3.title': 'Awards &amp; recognition',
      'education.block3.l1.title': 'Deep Learning Indaba (DLI 2025)',
      'education.block3.l1.value': 'Fully funded participant, DLI 2025 in Rwanda',
      'education.block3.l2.title': 'Full excellence scholarships',
      'education.block3.l2.value': 'AMMI (2024), AIMS (2022-2023), IMSP (2019-2020)',

      'contact.title': 'Contact - Charmaine Yebadokpo',
      'contact.meta': 'Contact Charmaine Yebadokpo for opportunities in computer vision, AI for education or technical consulting. Based in Benin, available remotely.',
      'contact.heading': 'An opportunity in computer vision, AI for education or technical consulting? Let\u2019s get in touch — I\u2019m based in Benin and available to collaborate remotely or on-site.',
      'contact.headingTitle': 'Contact',
      'contact.info.location.title': 'Location',
      'contact.info.location.value': 'Benin',
      'contact.info.phone.title': 'Call me',
      'contact.info.email.title': 'Email',
      'contact.info.social.title': 'Social media',
      'contact.form.name': 'Your name',
      'contact.form.email': 'Your email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Your message',
      'contact.form.submit': 'Send message'
    }
  };

  function currentLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORE_KEY);
    } catch (e) {}
    return (saved === 'fr' || saved === 'en') ? saved : DEFAULT_LANG;
  }

  function translate(key, lang) {
    var bag = MESSAGES[lang] || MESSAGES[DEFAULT_LANG];
    return Object.prototype.hasOwnProperty.call(bag, key) ? bag[key] : key;
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = translate(el.getAttribute('data-i18n'), lang);
      if (el.tagName === 'META') {
        el.setAttribute('content', value);
      } else if (el.tagName === 'TITLE') {
        document.title = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', translate(el.getAttribute('data-i18n-placeholder'), lang));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', translate(el.getAttribute('data-i18n-alt'), lang));
    });

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      var next = lang === 'fr' ? 'en' : 'fr';
      toggle.textContent = next.toUpperCase();
      toggle.setAttribute('aria-label', translate('lang.' + next + '.label', lang));
    }
  }

  function init() {
    apply(currentLang());

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var next = document.documentElement.lang === 'fr' ? 'en' : 'fr';
        try {
          localStorage.setItem(STORE_KEY, next);
        } catch (err) {}
        apply(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();