//===================================================
// 1. CONTROL DE PESTAÑAS (BOTONES AZULES SUPERIORES)
//===================================================
function openTab(tabId, buttonClicked) {
    // Oculta todos los bloques de contenido
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Quita el estado azul 'active' de todos los botones de pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Muestra el bloque seleccionado y activa su botón en azul
    document.getElementById(tabId).style.display = 'block';
    buttonClicked.classList.add('active');
}

// Al cargar la página por primera vez, abrimos de forma automática la Experiencia
document.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.querySelector('.tab-btn');
    if (firstBtn) firstBtn.click();
});

// =========================================================
// 2. CONTROL DE MODO CLARO / OSCURO (CORREGIDO PARA ICONOS)
// =========================================================
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        // SE ELIMINA EL TEXTCONTENT PARA PROTEGER LOS ICONOS SVG
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        // SE ELIMINA EL TEXTCONTENT PARA PROTEGER LOS ICONOS SVG
    }
});
// ===================================
// 3. FILTRADO INTERACTIVO DE TRABAJOS
// ===================================
function filterJobs(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.job').forEach(job => {
        if (category === 'all' || job.getAttribute('data-cat') === category) {
            job.classList.remove('hidden');
        } else {
            job.classList.add('hidden');
        }
    });
}
// ======================================
// 4. BUSCADOR INTERACTIVO EN TIEMPO REAL
// ======================================
const searchInput = document.getElementById('searchSoftware');
// Usamos event delegation o validación por si el buscador está oculto en otra pestaña
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        document.querySelectorAll('.tech-item').forEach(item => {
            const techData = item.getAttribute('data-tech');
            if (techData.includes(searchText)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}
// ====================================================================
// 5. FUNCIÓN PARA FILTRAR TUS ESTUDIOS (UNIVERSIDAD / TÉCNICA / OTROS)
// ====================================================================
function filterEdus(category, button) {
    // Quita el estado activo de los botones de la sección de educación
    document.querySelectorAll('#educacion .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');

    // Muestra u oculta tus tarjetas de estudio (.edu)
    document.querySelectorAll('.edu').forEach(edu => {
        if (category === 'all' || edu.getAttribute('data-cat') === category) {
            edu.classList.remove('hidden');
        } else {
            edu.classList.add('hidden');
        }
    });
}
function filterTech(category, button) {
    // Quitar clase activa de los botones de informática
    const buttons = button.parentElement.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filtrar las tarjetas
    const cards = document.querySelectorAll('#tech-container .tech');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
            card.style.display = 'block'; // o 'flex' según tus estilos
        } else {
            card.style.display = 'none';
        }
    });
}
function filterTech(category, button) {
    // 1. Quitar clase activa de los botones de esta sección
    const buttons = button.parentElement.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Activar el botón clicado
    button.classList.add('active');

    // 3. Filtrar las tarjetas de tecnología
    const cards = document.querySelectorAll('#tech-container .tech');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
// ======================================================
// 6. FUNCIÓN COMODÍN PARA CAMBIAR EL IDIOMA DE LA PÁGINA
// ======================================================
function changeLanguage(lang) {
    // Ajuste de dirección de lectura (esencial para Árabe)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Traduce buscando por la clave inyectando código HTML interno legítimo
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // <-- Usar innerHTML aquí
        }
    });
}

// Diccionario global de traducciones interactivo
const translations = {
    es: {
        // Interfaz global
        theme_btn: "Cambiar modo de color",
        tab_exp: "Experiencia Profesional",
        tab_edu: "Educación",
        tab_inf: "Informática & Software",
        tab_port: "Portafolio Técnico",

        // Filtros de navegación
        filter_all: "Todos",
        filter_operario: "Operario / Calidad",
        filter_mecanico: "Mecánica / Automoción",
        filter_otros: "Otros",
        filter_uni: "Universidad",
        filter_tec: "Técnica",
        filter_sis: "Sistemas y Programación",
        filter_dis: "Diseño y CAD",
        filter_ges: "Gestión y Ofimática",

        // Tarjeta Perfil Lateral
        title_perfil: "Perfil",
        desc_perfil: "Ingeniero Técnico con una sólida trayectoria que fusiona la gestión analítica, el dominio de software especializado y una profunda experiencia práctica en operaciones industriales. Especializado en optimizar procesos mediante un enfoque resolutivo y competencias multidisciplinares.",
        title_contacto: "Contacto",
        title_idiomas: "Idiomas",
        title_aptitudes: "Aptitudes"
    },
    en: {
        theme_btn: "Change color mode",
        tab_exp: "Professional Experience",
        tab_edu: "Education",
        tab_inf: "IT & Software",
        tab_port: "Technical Portfolio",
        filter_all: "All",
        filter_operario: "Operator / Quality",
        filter_mecanico: "Mechanics / Automotive",
        filter_otros: "Others",
        filter_uni: "University",
        filter_tec: "Technical",
        filter_sis: "Systems & Programming",
        filter_dis: "Design & CAD",
        filter_ges: "Management & Office",
        title_perfil: "Profile",
        desc_perfil: "Technical Engineer with a solid background merging analytical management, expertise in specialized software, and extensive hands-on experience in industrial operations. Specialized in process optimization through a problem-solving approach and multidisciplinary skills.",
        title_contacto: "Contact",
        title_idiomas: "Languages",
        title_aptitudes: "Skills"
    },
    it: {
        theme_btn: "Cambia modalità colore",
        tab_exp: "Esperienza Professionale",
        tab_edu: "Istruzione",
        tab_inf: "Informatica & Software",
        tab_port: "Portfolio Tecnico",
        filter_all: "Tutti",
        filter_operario: "Operaio / Qualità",
        filter_mecanico: "Meccanica / Automobilistico",
        filter_otros: "Altri",
        filter_uni: "Università",
        filter_tec: "Tecnica",
        filter_sis: "Sistemi e Programmazione",
        filter_dis: "Design e CAD",
        filter_ges: "Gestione e Ufficio",
        title_perfil: "Profilo",
        desc_perfil: "Ingegnere Tecnico con una solida traiettoria che unisce gestione analitica, padronanza di software specializzati e una profonda esperienza pratica nelle operazioni industriali. Specializzato nell'ottimizzazione dei processi attraverso un approccio risolutivo.",
        title_contacto: "Contatti",
        title_idiomas: "Lingue",
        title_aptitudes: "Competenze"
    },
    fr: {
        theme_btn: "Changer le mode de couleur",
        tab_exp: "Expérience Professionnelle",
        tab_edu: "Éducation",
        tab_inf: "Informatique & Logiciels",
        tab_port: "Portfolio Technique",
        filter_all: "Tous",
        filter_operario: "Ouvrier / Qualité",
        filter_mecanico: "Mécanique / Automobile",
        filter_otros: "Autres",
        filter_uni: "Université",
        filter_tec: "Technique",
        filter_sis: "Systèmes & Programmation",
        filter_dis: "Design & CAD",
        filter_ges: "Gestion & Bureautique",
        title_perfil: "Profil",
        desc_perfil: "Ingénieur Technologue doté d'un solide parcours fusionnant la gestion analytique, la maîtrise de logiciels spécialisés et une profonde expérience pratique dans les opérations industrielles. Spécialisé dans l'optimisation des processus.",
        title_contacto: "Contact",
        title_idiomas: "Langues",
        title_aptitudes: "Aptitudes"
    },
    pt: {
        theme_btn: "Alterar modo de cor",
        tab_exp: "Experiência Profissional",
        tab_edu: "Educação",
        tab_inf: "Informática & Software",
        tab_port: "Portfólio Técnico",
        filter_all: "Todos",
        filter_operario: "Operário / Qualidade",
        filter_mecanico: "Mecânica / Automotiva",
        filter_otros: "Outros",
        filter_uni: "Universidade",
        filter_tec: "Técnica",
        filter_sis: "Sistemas & Programação",
        filter_dis: "Design & CAD",
        filter_ges: "Gestão & Escritório",
        title_perfil: "Perfil",
        desc_perfil: "Engenheiro Técnico com uma sólida trajetória que une a gestão analítica, o domínio de softwares especializados e uma profunda experiência prática em operações industriais. Especializado na otimização de processos.",
        title_contacto: "Contato",
        title_idiomas: "Idiomas",
        title_aptitudes: "Aptidões"
    },
    de: {
        theme_btn: "Farbmodus ändern",
        tab_exp: "Berufserfahrung",
        tab_edu: "Ausbildung",
        tab_inf: "IT & Software",
        tab_port: "Technisches Portfolio",
        filter_all: "Alle",
        filter_operario: "Arbeiter / Qualität",
        filter_mecanico: "Mechanik / Automobil",
        filter_otros: "Andere",
        filter_uni: "Universität",
        filter_tec: "Technische",
        filter_sis: "Systeme & Programmierung",
        filter_dis: "Design & CAD",
        filter_ges: "Management & Büro",
        title_perfil: "Profil",
        desc_perfil: "Technischer Ingenieur mit einem soliden Hintergrund, der analytisches Management, die Beherrschung spezialisierter Software und fundierte praktische Erfahrung im industriellen Betrieb vereint. Spezialisiert auf die Optimierung von Prozessen.",
        title_contacto: "Kontakt",
        title_idiomas: "Sprachen",
        title_aptitudes: "Fähigkeiten"
    },
    zh: {
        theme_btn: "切换色彩模式",
        tab_exp: "工作经历",
        tab_edu: "教育背景",
        tab_inf: "IT 与专业软件",
        tab_port: "技术项目作品集",
        filter_all: "全部",
        filter_operario: "操作工 / 质量控制",
        filter_mecanico: "机械 / 汽车工程",
        filter_otros: "其他",
        filter_uni: "大学教育",
        filter_tec: "技术/职业教育",
        filter_sis: "系统与计算机编程",
        filter_dis: "三维建模与 CAD",
        filter_ges: "企业管理与办公",
        title_perfil: "个人简介",
        desc_perfil: "技术工程师，拥有扎实的专业背景，融合了数据分析管理、专业软件应用以及深厚的工业运营实操经验。擅长通过解决问题的方法和跨学科的核心能力来优化生产流程。",
        title_contacto: "联系方式",
        title_idiomas: "语言能力",
        title_aptitudes: "核心能力"
    },
    ar: {
        theme_btn: "تغيير وضع الألوان",
        tab_exp: "الخبرات المهنية",
        tab_edu: "التعليم والشهادات",
        tab_inf: "تكنولوجيا المعلومات والبرمجيات",
        tab_port: "معرض المشاريع التقنية",
        filter_all: "الكل",
        filter_operario: "عامل / مراقبة الجودة",
        filter_mecanico: "ميكانيكا / سيارات",
        filter_otros: "أخرى",
        filter_uni: "تعليم جامعي",
        filter_tec: "تعليم فني",
        filter_sis: "الأنظمة والبرمجة",
        filter_dis: "التصميم والهندسة CAD",
        filter_ges: "الإدارة والبرامج المكتبية",
        title_perfil: "الملف الشخصي",
        desc_perfil: "مهندس تقني ذو مسيرة مهنية قوية تجمع بين الإدارة التحليلية وإتقان البرمجيات المتخصصة والخبرة العملية العميقة في العمليات الصناعية. متخصص في تحسين وتطوير العمليات من خلال نهج حل المشكلات.",
        title_contacto: "معلومات الاتصال",
        title_idiomas: "اللغات",
        title_aptitudes: "المهارات"
    }
};
// Extensión del diccionario: Agregar experiencias de trabajo
const expTranslations = {
    es: {
        job1_title: "Ayudante de corte de espuma PU y Operario de control de calidad",
        job2_title: "Operario de carga y organización logística",
        job3_title: "Operario de recolección de residuos sólidos urbanos",
        job4_title: "Mecánico y limpiador de automóviles",
        job5_title: "Vendimiador",
        job6_title: "Mecánico en prácticas"
    },
    en: {
        job1_title: "PU Foam Cutting Assistant and Quality Control Operator",
        job2_title: "Loading and Logistics Organization Operator",
        job3_title: "Municipal Solid Waste Collection Operator",
        job4_title: "Automobile Mechanic and Vehicle Cleaner",
        job5_title: "Grape Harvester",
        job6_title: "Trainee Mechanic"
    },
    it: {
        job1_title: "Assistente al taglio di schiuma poliuretanica e Addetto al controllo qualità",
        job2_title: "Addetto al carico e all'organizzazione logistica",
        job3_title: "Operatore ecologico per la raccolta di rifiuti solidi urbani",
        job4_title: "Meccanico e lavatore di automobili",
        job5_title: "Vendemmiatore",
        job6_title: "Mecánico in tirocinio"
    },
    fr: {
        job1_title: "Assistant de découpe de mousse PU et Opérateur de contrôle qualité",
        job2_title: "Opérateur de chargement et d'organisation logistique",
        job3_title: "Éboueur / Opérateur de collecte des déchets ménagers",
        job4_title: "Mécanicien et nettoyeur d'automobiles",
        job5_title: "Vendangeur",
        job6_title: "Mécanicien stagiaire"
    },
    pt: {
        job1_title: "Ajudante de corte de espuma PU e Operário de controle de qualidade",
        job2_title: "Operário de carga e organização logística",
        job3_title: "Operário de coleta de resíduos sólidos urbanos",
        job4_title: "Mecânico e lavador de automóveis",
        job5_title: "Vendimiador / Ceifeiro",
        job6_title: "Mecânico em estágio prático"
    },
    de: {
        job1_title: "Assistent für PU-Schaumstoffschneiden und Mitarbeiter in der Qualitätskontrolle",
        job2_title: "Mitarbeiter für Verladung und Logistikorganisation",
        job3_title: "Mitarbeiter in der kommunalen Müllentsorgung",
        job4_title: "Kfz-Mechaniker und Fahrzeugpfleger",
        job5_title: "Erntehelfer im Weinbau",
        job6_title: "Praktikant im Bereich Kfz-Mechanik"
    },
    zh: {
        job1_title: "聚氨酯（PU）海绵切割助理及质量控制操作工",
        job2_title: "物流装卸与仓储组织操作工",
        job3_title: "城市固体垃圾清运与回收操作工",
        job4_title: "汽车维修与汽车美容师",
        job5_title: "葡萄采摘工",
        job6_title: "实习汽修工"
    },
    ar: {
        job1_title: "مساعد قطع رغوة البولي يوريثان (PU) وعامل مراقبة الجودة",
        job2_title: "عامل شحن وتنظيم العمليات اللوجستية",
        job3_title: "عامل جمع النفايات الصلبة الحضرية",
        job4_title: "ميكانيكي ومنظف سيارات",
        job5_title: "عامل حصاد العنب",
        job6_title: "ميكانيكي متدرب"
    }
};

// Fusionar automáticamente con el objeto principal
Object.keys(expTranslations).forEach(lang => {
    Object.assign(translations[lang], expTranslations[lang]);
});
// Extensión del diccionario: Agregar certificaciones y títulos académicos
const eduTranslations = {
    es: {
        edu1_title: "Experto en Energías Renovables y Eficiencia Energética",
        edu2_title: "Ingeniería Técnica Agrícola Esp. Explotaciones Agropecuarias",
        edu3_title: "Técnico Superior en Mantenimiento de Vehículos Autopropulsados",
        edu4_title: "Licenciatura en Matemáticas",
        edu5_title: "Bachillerato Ciencias de la Salud",
        edu6_title: "Educación Secundaria Obligatoria",
        edu7_title: "Educación Primaria"
    },
    en: {
        edu1_title: "Expert in Renewable Energies and Energy Efficiency",
        edu2_title: "Agricultural Technical Engineering, specializing in Agricultural and Livestock Operations",
        edu3_title: "Higher Technical Degree in Self-Propelled Vehicle Maintenance",
        edu4_title: "Bachelor's Degree in Mathematics",
        edu5_title: "High School Diploma in Health Sciences",
        edu6_title: "Compulsory Secondary Education",
        edu7_title: "Primary Education"
    },
    it: {
        edu1_title: "Esperto in Energie Rinnovabili e Efficienza Energetica",
        edu2_title: "Laurea Triennale in Ingegneria Agraria, spec. Aziende Agricole e Zootecniche",
        edu3_title: "Tecnico Superiore nella Manutenzione di Veicoli Autopropulsi",
        edu4_title: "Laurea Magistrale in Matematica",
        edu5_title: "Diploma di Scuola Superiore in Scienze della Salute",
        edu6_title: "Istruzione Secondaria Obbligatoria",
        edu7_title: "Istruzione Primaria"
    },
    fr: {
        edu1_title: "Expert en Énergies Renouvelables et Efficacité Énergétique",
        edu2_title: "Licence en Ingénierie Agricole, spéc. Exploitations Agricoles et Élevages",
        edu3_title: "Technicien Supérieur en Maintenance des Véhicules Automoteurs",
        edu4_title: "Licence/Maîtrise en Mathématiques",
        edu5_title: "Baccalauréat en Sciences de la Santé",
        edu6_title: "Enseignement Secondaire Obligatoire",
        edu7_title: "Enseignement Primaire"
    },
    pt: {
        edu1_title: "Especialista em Energias Renováveis e Eficiência Energética",
        edu2_title: "Engenharia Técnica Agrícola, esp. Explorações Agropecuárias",
        edu3_title: "Técnico Superior em Manutenção de Veículos Automotores",
        edu4_title: "Licenciatura em Matemática",
        edu5_title: "Ensino Médio Técnico em Ciências da Saúde",
        edu6_title: "Ensino Secundário Obrigatório",
        edu7_title: "Ensino Fundamental"
    },
    de: {
        edu1_title: "Experte für Erneuerbare Energien und Energieeffizienz",
        edu2_title: "Diplom-Agraringenieur (FH), Fachrichtung Landwirtschaftliche Betriebe",
        edu3_title: "Staatlich geprüfter Techniker für Kraftfahrzeugtechnik",
        edu4_title: "Bachelor-Studium in Mathematik",
        edu5_title: "Abitur mit Schwerpunkt Gesundheitswissenschaften",
        edu6_title: "Realschulabschluss / Sekundarstufe I",
        edu7_title: "Grundschule"
    },
    zh: {
        edu1_title: "可再生能源与建筑能效专家学位",
        edu2_title: "农业技术工程学士（专注于农牧场经营管理）",
        edu3_title: "自驱式车辆维护与检修高级技术员",
        edu4_title: "数学专业本科",
        edu5_title: "健康科学方向高中/预科文凭",
        edu6_title: "义务教育阶段初中",
        edu7_title: "小学教育"
    },
    ar: {
        edu1_title: "خبير في الطاقات المتجددة وكفاءة الطاقة",
        edu2_title: "الهندسة التقنية الزراعية، تخصص إدارة المزارع والإنتاج الحيواني",
        edu3_title: "فني عالي في صيانة مركبات الدفع الذاتي",
        edu4_title: "درجة البكالوريوس في العلوم الرياضية",
        edu5_title: "شهادة البكالوريا في العلوم الصحية",
        edu6_title: "التعليم الثانوي الإلزامي",
        edu7_title: "التعليم الابتدائي"
    }
};

Object.keys(eduTranslations).forEach(lang => {
    Object.assign(translations[lang], eduTranslations[lang]);
});
// EXTEBSIÓN PORTAFOLIO - BLOQUE 1: GEOGRAFÍA E HIDROLOGÍA
const portfolioPart1 = {
    es: {
        proj1_title: "Modelo digital del terreno de la cuenca del Río Águeda en la comarca de Ciudad Rodrigo (Salamanca)",
        proj1_desc: "Con este modelado quería conseguir un gemelo digital en el que poder aplicar capas de datos para realizar cálculos sucesivos y conseguir mapas de riesgos de inundaciones en tiempo real. He utilizado curvas de nivel con equidistancia de 20 m, desarrollando el modelo digital del terreno mediante ArcGIS PRO y añadiéndole imágenes satelitales georeferenciadas.",
        proj2_title: "Caracterización de Recursos Hídricos de la Cuenca del Río Águeda",
        proj2_desc: "Estudio exhaustivo y análisis de caracterización de los recursos hídricos en la cuenca del río Águeda a su paso por la comarca de Ciudad Rodrigo. El compendio incluye memorias técnicas, balances de caudales y mapas de zonificación distribuidos en 9 módulos integrales."
    },
    en: {
        proj1_title: "Digital Terrain Model of the Águeda River Basin in the Region of Ciudad Rodrigo (Salamanca)",
        proj1_desc: "With this modeling, my goal was to create a digital twin capable of overlaying data layers for sequential calculations and real-time flood risk mapping. I utilized contour lines with a 20m interval, developing the digital terrain model using ArcGIS PRO and integrating georeferenced satellite imagery.",
        proj2_title: "Water Resources Characterization of the Águeda River Basin",
        proj2_desc: "Comprehensive study and characterization analysis of water resources in the Águeda river basin through the region of Ciudad Rodrigo. The compilation includes technical reports, flow balances, and zoning maps distributed across 9 integral modules."
    },
    it: {
        proj1_title: "Modello digitale del terreno del bacino del fiume Águeda nella regione di Ciudad Rodrigo (Salamanca)",
        proj1_desc: "Con questa modellazione volevo ottenere un gemello digitale in cui poter applicare strati di dati para eseguire calcoli successivi e ottenere mappe del rischio di alluvione in tempo reale.",
        proj2_title: "Caratterizzazione delle Risorse Idriche del Bacino del Fiume Águeda",
        proj2_desc: "Studio approfondito e analisi della caratterizzazione delle risorse idriche nel bacino del fiume Águeda nella regione di Ciudad Rodrigo. Comprende relazioni tecniche e bilanci idrici."
    },
    fr: {
        proj1_title: "Modèle numérique de terrain du bassin du fleuve Águeda dans la région de Ciudad Rodrigo (Salamanque)",
        proj1_desc: "Avec cette modélisation, je souhaitais obtenir un jumeau numérique sur lequel appliquer des couches de données pour effectuer des calculs successifs y obtenir des cartes de risques d'inondation en temps réel.",
        proj2_title: "Caractérisation des Ressources Hydriques du Bassin du Fleuve Águeda",
        proj2_desc: "Étude exhaustive et analyse de caractérisation des ressources hydriques du bassin du fleuve Águeda. Le recueil comprend des mémoires techniques répartis en 9 modules integrales."
    },
    pt: {
        proj1_title: "Modelo digital do terreno da bacia do Rio Águeda na região de Ciudad Rodrigo (Salamanca)",
        proj1_desc: "Com este modelado queria conseguir um gêmeo digital no qual aplicar camadas de dados para realizar cálculos sucessivos e conseguir mapas de riscos de inundações em tempo real.",
        proj2_title: "Caracterização de Recursos Hídricos da Bacia do Rio Águeda",
        proj2_desc: "Estudo exaustivo e análise de caracterização dos recursos hídricos na bacia do rio Águeda. O compêndio inclui memórias técnicas, balanços de vazões e mapas."
    },
    de: {
        proj1_title: "Digitales Geländemodell des Einzugsgebiets des Flusses Águeda in der Region Ciudad Rodrigo (Salamanca)",
        proj1_desc: "Mit dieser Modellierung wollte ich einen digitalen Zwilling erstellen, auf den Datenschichten für aufeinanderfolgende Berechnungen und Hochwasserrisikokarten in Echtzeit angewendet werden können.",
        proj2_title: "Charakterisierung der Wasserressourcen des Águeda-Flusseinzugsgebiets",
        proj2_desc: "Umfassende Studie und Charakterisierungsanalyse der Wasserressourcen im Einzugsgebiet des Flusses Águeda. Die Zusammenstellung umfasst technische Berichte verteilt auf 9 Module."
    },
    zh: {
        proj1_title: "萨拉曼卡省西德罗德里戈地区阿格达河流域数字高程地形模型",
        proj1_desc: "通过这次建模，我的目标是创建一个数字孪生系统，能够在其中叠加数据层以进行连续计算，并实现实时的洪水风险地图绘制。我利用了20米等高线间距，在 ArcGIS PRO 中开发了数字地形模型，并融合了地理参考卫星图像。",
        proj2_title: "阿格达河流域水资源特征评估",
        proj2_desc: "对西德罗德里戈地区阿格达河流域水资源的综合研究与特征分析。该汇编包括技术报告、流量平衡和划区地图，分布在9个完整模块中。"
    },
    ar: {
        proj1_title: "نموذج التضاريس الرقمي لحوض نهر أغويدا في منطقة ثيوداد رودريغو (سالامانكا)",
        proj1_desc: "من خلال هذه النمذجة، كان هدفي إنشاء توأم رقمي قادر على تطبيق طبقات البيانات لإجراء حسابات متتالية والحصول على خرائط مخاطر الفيضانات في الوقت الفعلي باستخدام ArcGIS PRO.",
        proj2_title: "تحديد خصائص الموارد المائية لحوض نهر أغويدا",
        proj2_desc: "دراسة شاملة وتحليل لخصائص الموارد المائية في حوض نهر أغويدا في منطقة ثيوداد رودريغو. يتضمن المجمع تقارير فنية وموازنات تدفق موزعة على 9 وحدات متكاملة."
    }
};

// Guardar en el diccionario principal
Object.keys(portfolioPart1).forEach(lang => { Object.assign(translations[lang], portfolioPart1[lang]); });
// EXTEBSIÓN PORTAFOLIO - BLOQUE 2: ELECTRÓNICA Y FIRMWARE IOT
const portfolioPart2 = {
    es: {
        proj3_title: "Sistema de Cultivo Automatizado (IoT)",
        proj3_desc: "Diseño e implementación de un sistema inteligente de cultivo hortícola vertical automatizado. El corazón del proyecto utiliza un microcontrolador ESP32 programado en entorno Arduino IDE, encargado de monitorizar sensores de humedad y activar de forma precisa las microbombas de agua para el riego óptimo de las raíces suspendidas."
    },
    en: {
        proj3_title: "Automated Crop System (IoT)",
        proj3_desc: "Design and implementation of an intelligent automated vertical horticultural cultivation system. The core of the project utilizes an ESP32 microcontroller programmed in the Arduino IDE environment, responsible for monitoring humidity sensors and precisely activating water micro-pumps for optimal irrigation of suspended roots."
    },
    it: {
        proj3_title: "Sistema di Coltivazione Automatizzato (IoT)",
        proj3_desc: "Progettazione e implementazione di un sistema intelligente di coltivazione orticola verticale automatizzato basato su microcontrollore ESP32 programmato in Arduino IDE."
    },
    fr: {
        proj3_title: "Système de Culture Automatisé (IoT)",
        proj3_desc: "Conception et mise en œuvre d'un système intelligent de culture maraîchère verticale automatisée. Le cœur du projet utilise un microcontrôleur ESP32 programmé sous Arduino IDE."
    },
    pt: {
        proj3_title: "Sistema de Cultivo Automatizado (IoT)",
        proj3_desc: "Design e implementação de um sistema inteligente de cultivo hortícola vertical automatizado usando um microcontrolador ESP32 programado em ambiente Arduino IDE."
    },
    de: {
        proj3_title: "Automatisiertes Anbausystem (IoT)",
        proj3_desc: "Planung und Implementierung eines intelligenten automatisierten vertikalen Gartenbau-Anbausystems. Das Herzstück des proyects ist ein ESP32-Mikrocontroller, der in der Arduino IDE programmiert wurde."
    },
    zh: {
        proj3_title: "智能化自动垂直耕作系统（物联网）",
        proj3_desc: "设计并实现了智能化自动垂直园艺栽培系统。该项目的核心采用基于 Arduino IDE 环境编写的 ESP32 微控制器，负责监测湿度传感器，并精准启动微型水泵，为悬挂的植物根系提供最佳灌溉。"
    },
    ar: {
        proj3_title: "نظام الزراعة الآلي المعتمد على إنترنت الأشياء (IoT)",
        proj3_desc: "تصميم وتنفيذ نظام ذكي للزراعة العمودية الآلية. يعتمد المشروع على متحكم دقيق من نوع ESP32 مبرمج في بيئة Arduino IDE لمراقبة مستشعرات الرطوبة وتشغيل مضخات المياه بدقة."
    }
};

Object.keys(portfolioPart2).forEach(lang => { Object.assign(translations[lang], portfolioPart2[lang]); });
// EXTEBSIÓN PORTAFOLIO - BLOQUE 3: FASE DE DESARROLLO ACTUAL
const portfolioPart3 = {
    es: {
        proj3_status_title: "⚡ Fase de Desarrollo Actual: Conectividad e Interfaz IoT",
        proj3_status_desc: "El firmware y la electrónica base ya están completamente operativos. Actualmente me encuentro desarrollando la interfaz web HTML nativa y responsive para dispositivos móviles. Aprovechando las tecnologías de conectividad Wi-Fi y Bluetooth integradas en el ESP32, esta aplicación web permitirá visualizar las gráficas de humedad en tiempo real y gobernar las microbombas a distancia desde cualquier lugar."
    },
    en: {
        proj3_status_title: "⚡ Current Development Phase: Connectivity & IoT Interface",
        proj3_status_desc: "The firmware and base electronics are already fully operational. I am currently developing the native and responsive HTML web interface for mobile devices. Leveraging the Wi-Fi and Bluetooth connectivity built into the ESP32, this web app will visualize real-time humidity graphs and control the micro-pumps remotely from anywhere."
    },
    it: {
        proj3_status_title: "⚡ Fase di Sviluppo Attuale: Connettività e Interfaccia IoT",
        proj3_status_desc: "Il firmware e l'elettronica di base sono pienamente operativi. Attualmente sto sviluppando l'interfaccia web HTML nativa e responsive per dispositivi mobili utilizzando Wi-Fi e Bluetooth per visualizzare grafici in tempo reale."
    },
    fr: {
        proj3_status_title: "⚡ Phase de Développement Actuelle: Connectivité et Interface IoT",
        proj3_status_desc: "Le firmware et l'électronique de base sont opérationnels. Je développe actuellement l'interface web HTML native et responsive pour terminaux mobiles avec Wi-Fi et Bluetooth pour visualiser les graphiques."
    },
    pt: {
        proj3_status_title: "⚡ Fase de Desenvolvimento Actual: Conectividade e Interface IoT",
        proj3_status_desc: "O firmware e a eletrônica base já estão operacionais. Atualmente encontro-me desenvolvendo a interface web HTML nativa e responsiva para dispositivos móveis via Wi-Fi e Bluetooth para monitoramento."
    },
    de: {
        proj3_status_title: "⚡ Aktuelle Entwicklungsphase: Konnektivität & IoT-Schnittstelle",
        proj3_status_desc: "Die Firmware und die Basiselektronik sind bereits voll funktionsfähig. Derzeit entwickle ich die native und responsive HTML-Weboberfläche für mobile Geräte über Wi-Fi und Bluetooth für Echtzeit-Diagramme."
    },
    zh: {
        proj3_status_title: "⚡ 当前开发阶段：物联网连接与响应式 Web 交互界面",
        proj3_status_desc: "固件和基础电路板已完全投入运行。目前我正在开发针对移动设备的原生响应式 HTML 网页端交互界面。利用 ESP32 芯片内置的 Wi-Fi 和蓝牙连接技术，该网页应用将支持实时湿度曲线图的可视化展示，并能从任何地方远程控制微型水泵。"
    },
    ar: {
        proj3_status_title: "⚡ مرحلة التطوير الحالية: الاتصال وواجهة إنترنت الأشياء",
        proj3_status_desc: "البرامج الثابتة والإلكترونيات الأساسية تعمل بكامل طاقتها بالفعل. أعمل حاليًا على تطوير واجهة ويب HTML متجاوبة للأجهزة المحمولة للاستفادة من تقنيات Wi-Fi و Bluetooth المدمجة في ESP32 لعرض الرسوم البيانية."
    }
};

Object.keys(portfolioPart3).forEach(lang => { Object.assign(translations[lang], portfolioPart3[lang]); });
// EXTEBSIÓN PORTAFOLIO - BLOQUE 4: ENERGÍAS LIMPIAS Y EFICIENCIA
const portfolioPart4 = {
    es: {
        proj4_title: "Energías Renovables y Eficiencia Energética",
        proj4_desc: "Proyectos técnicos, dimensionamientos y análisis de optimización en diferentes tecnologías de generación limpia y gestión de la eficiencia energética."
    },
    en: {
        proj4_title: "Renewable Energies and Energy Efficiency",
        proj4_desc: "Technical projects, sizing, and optimization analysis across different clean generation technologies and energy efficiency management."
    },
    it: {
        proj4_title: "Energie Rinnovabili e Efficienza Energetica",
        proj4_desc: "Progetti tecnici, dimensionamento e analisi di ottimizzazione nelle diverse tecnologie di generazione pulita."
    },
    fr: {
        proj4_title: "Énergies Renouvelables et Efficacité Énergétique",
        proj4_desc: "Projets techniques, dimensionnements et analyses d'optimisation des technologies de génération propre."
    },
    pt: {
        proj4_title: "Energias Renováveis e Eficiência Energética",
        proj4_desc: "Projetos técnicos, dimensionamentos e análises de otimização em diferentes tecnologias de geração limpa."
    },
    de: {
        proj4_title: "Erneuerbare Energies und Energieeffizienz",
        proj4_desc: "Technische Projekte, Dimensionierung und Optimierungsanalyse in verschiedenen sauberen Erzeugungstechnologien."
    },
    zh: {
        proj4_title: "可再生能源与能效提升技术蓝皮书",
        proj4_desc: "不同清洁能源发电技术和能效管理方面的技术项目、系统容量设计和优化分析。"
    },
    ar: {
        proj4_title: "الطاقات المتجددة وكفاءة الطاقة",
        proj4_desc: "المشاريع الفنية، وتحديد الأحجام، وتحلیل التحسين في تقنيات التوليد النظيف المختلفة وإدارة كفاءة الطاقة."
    }
};

Object.keys(portfolioPart4).forEach(lang => { Object.assign(translations[lang], portfolioPart4[lang]); });

// EXTENSIÓN: APTITUDES DE LA BARRA LATERAL (SOFT SKILLS)
const skillsTranslations = {
    es: {
        skill_problemas: "Solución de problemas",
        skill_analitico: "Pensamiento analítico",
        skill_equipo: "Trabajo en equipo",
        skill_organizacion: "Organización",
        skill_comunicacion: "Comunicación",
        skill_emocional: "Inteligencia emocional",
        skill_detalle: "Atención al detalle"
    },
    en: {
        skill_problemas: "Problem solving",
        skill_analitico: "Analytical thinking",
        skill_equipo: "Teamwork",
        skill_organizacion: "Organization",
        skill_comunicacion: "Communication",
        skill_emocional: "Emotional intelligence",
        skill_detalle: "Attention to detail"
    },
    it: {
        skill_problemas: "Risoluzione dei problemi",
        skill_analitico: "Pensiero analitico",
        skill_equipo: "Lavoro di squadra",
        skill_organizacion: "Organizzazione",
        skill_comunicacion: "Comunicazione",
        skill_emocional: "Intelligenza emotiva",
        skill_detalle: "Attenzione ai dettagli"
    },
    fr: {
        skill_problemas: "Résolution de problèmes",
        skill_analitico: "Pensée analytique",
        skill_equipo: "Travail en équipe",
        skill_organizacion: "Organisation",
        skill_comunicacion: "Communication",
        skill_emocional: "Intelligence émotionnelle",
        skill_detalle: "Souci du détail"
    },
    pt: {
        skill_problemas: "Resolução de problemas",
        skill_analitico: "Pensamento analítico",
        skill_equipo: "Trabalho em equipe",
        skill_organizacion: "Organização",
        skill_comunicacion: "Comunicação",
        skill_emocional: "Inteligência emocional",
        skill_detalle: "Atenção aos detalhes"
    },
    de: {
        skill_problemas: "Problemlösung",
        skill_analitico: "Analytisches Denken",
        skill_equipo: "Teamarbeit",
        skill_organizacion: "Organisation",
        skill_comunicacion: "Kommunikation",
        skill_emocional: "Emotionale Intelligenz",
        skill_detalle: "Liebe zum Detail"
    },
    zh: {
        skill_problemas: "解决问题能力",
        skill_analitico: "分析性思维",
        skill_equipo: "团队协作",
        skill_organizacion: "组织与规划",
        skill_comunicacion: "沟通协调",
        skill_emocional: "情绪智商",
        skill_detalle: "注重细节"
    },
    ar: {
        skill_problemas: "حل المشكلات",
        skill_analitico: "التفكير التحليلي",
        skill_equipo: "العمل الجماعي",
        skill_organizacion: "التنظيم والتخطيط",
        skill_comunicacion: "مهارات التواصل",
        skill_emocional: "الذكاء العاطفي",
        skill_detalle: "الدقة والانتباه للتفاصيل"
    }
};

// Guardar y fusionar en el objeto translations principal
Object.keys(skillsTranslations).forEach(lang => {
    Object.assign(translations[lang], skillsTranslations[lang]);
});
// ENLACE DE EVENTOS E INICIALIZACIÓN AUTOMÁTICA
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');

    // 1. Recuperar el último idioma usado o poner español por defecto
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';

    // 2. Aplicar la traducción inicial
    changeLanguage(savedLang);

    // 3. Sincronizar el estado visual del menú desplegable HTML
    if (langSelect) {
        langSelect.value = savedLang;

        // 4. Escuchar activamente cuando el usuario clique en otro idioma
        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('selectedLanguage', selectedLang); // Guardar preferencia
            changeLanguage(selectedLang); // Ejecutar cambio masivo de textos
        });
    }
});
// DICCIONARIO DE GEOLOCALIZACIÓN - PARTE 1 (ES, EN, IT)
const datePlaceTranslations = {
    es: {
        // Experiencia
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Actualidad | Ciudad Rodrigo, España",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, España",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, España",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, España",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, España",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, España",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, España",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanca, España",
        // Educación
        geo_edu_eps: "Escuela Politécnica Superior de Zamora de la Universidad de Salamanca<br>2010/2011",
        geo_edu_usal1: "Facultad de Ciencias Agrarias y Ambientales de la Universidad de Salamanca<br>2004/2009",
        geo_edu_cifp: "CIFP Río Tormes de Salamanca<br>2002/2004",
        geo_edu_usal2: "Facultad de Ciencias de la Universidad de Salamanca<br>2000/2002",
        geo_edu_fray: "IES Fray Diego Tadeo González de Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "IES Tierra de Ciudad Rodrigo de Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "CEIP San Francisco de Ciudad Rodrigo<br>1988/1996"
    },
    en: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Present | Ciudad Rodrigo, Spain",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, Spain",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, Spain",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, Spain",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, Spain",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, Spain",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, Spain",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanca, Spain",
        geo_edu_eps: "Higher Polytechnic School of Zamora, University of Salamanca<br>2010/2011",
        geo_edu_usal1: "Faculty of Agricultural and Environmental Sciences, University of Salamanca<br>2004/2009",
        geo_edu_cifp: "CIFP Río Tormes of Salamanca<br>2002/2004",
        geo_edu_usal2: "Faculty of Sciences, University of Salamanca<br>2000/2002",
        geo_edu_fray: "IES Fray Diego Tadeo González High School, Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "IES Tierra de Ciudad Rodrigo High School, Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "CEIP San Francisco Elementary School, Ciudad Rodrigo<br>1988/1996"
    },
    it: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Attualità | Ciudad Rodrigo, Spagna",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, Spagna",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, Spagna",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, Spagna",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, Spagna",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, Spagna",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, Spagna",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanca, Spagna",
        geo_edu_eps: "Scuola Politecnica Superiore di Zamora, Università di Salamanca<br>2010/2011",
        geo_edu_usal1: "Facoltà di Scienze Agrarie e Ambientali, Università di Salamanca<br>2004/2009",
        geo_edu_cifp: "CIFP Río Tormes di Salamanca<br>2002/2004",
        geo_edu_usal2: "Facoltà di Scienze, Università di Salamanca<br>2000/2002",
        geo_edu_fray: "Scuola Superiore IES Fray Diego Tadeo González, Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "Scuola Superiore IES Tierra de Ciudad Rodrigo, Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "Scuola Primaria CEIP San Francisco, Ciudad Rodrigo<br>1988/1996"
    }
};
// DICCIONARIO DE GEOLOCALIZACIÓN - PARTE 2 (FR, PT, DE)
const geoEurope = {
    fr: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Aujourd'hui | Ciudad Rodrigo, Espagne",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, Espagne",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, Espagne",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, Espagne",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, Espagne",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, Espagne",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, Espagne",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanque, Espagne",
        geo_edu_eps: "École Polytechnique Supérieure de Zamora, Université de Salamanque<br>2010/2011",
        geo_edu_usal1: "Faculté des Sciences Agronomiques et Environnementales, Université de Salamanque<br>2004/2009",
        geo_edu_cifp: "CIFP Río Tormes de Salamanque<br>2002/2004",
        geo_edu_usal2: "Faculté des Sciences, Université de Salamanque<br>2000/2002",
        geo_edu_fray: "Lycée IES Fray Diego Tadeo González, Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "Lycée IES Tierra de Ciudad Rodrigo, Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "École Primaire CEIP San Francisco, Ciudad Rodrigo<br>1988/1996"
    },
    pt: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Atualidade | Ciudad Rodrigo, Espanha",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, Espanha",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, Espanha",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, Espanha",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, Espanha",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, Espanha",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, Espanha",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanca, Espanha",
        geo_edu_eps: "Escola Politécnica Superior de Zamora, Universidade de Salamanca<br>2010/2011",
        geo_edu_usal1: "Faculdade de Ciências Agrárias e Ambientais, Universidade de Salamanca<br>2004/2009",
        geo_edu_cifp: "CIFP Río Tormes de Salamanca<br>2002/2004",
        geo_edu_usal2: "Faculdade de Ciências, Universidade de Salamanca<br>2000/2002",
        geo_edu_fray: "Ensino Médio IES Fray Diego Tadeo González, Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "Ensino Médio IES Tierra de Ciudad Rodrigo, Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "Escola Primária CEIP San Francisco, Ciudad Rodrigo<br>1988/1996"
    },
    de: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - Heute | Ciudad Rodrigo, Spanien",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | Ciudad Rodrigo, Spanien",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | Ciudad Rodrigo, Spanien",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | La Maya, Spanien",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | La Maya, Spanien",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | Ávila, Spanien",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | Burgos, Spanien",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | Salamanca, Spanien",
        geo_edu_eps: "Technische Hochschule Zamora, Universität von Salamanca<br>2010/2011",
        geo_edu_usal1: "Fakultät für Agrar- und Umweltwissenschaften, Universität von Salamanca<br>2004/2009",
        geo_edu_cifp: "Berufsbildungszentrum (CIFP) Río Tormes von Salamanca<br>2002/2004",
        geo_edu_usal2: "Naturwissenschaftliche Fakultät, Universität von Salamanca<br>2000/2002",
        geo_edu_fray: "Gymnasium IES Fray Diego Tadeo González, Ciudad Rodrigo<br>1998/2000",
        geo_edu_tierr: "Gymnasium IES Tierra de Ciudad Rodrigo, Ciudad Rodrigo<br>1996/1998",
        geo_edu_sanf: "Grundschule CEIP San Francisco, Ciudad Rodrigo<br>1988/1996"
    }
};

// Adjuntar de forma limpia al diccionario temporal
Object.keys(geoEurope).forEach(lang => { datePlaceTranslations[lang] = geoEurope[lang]; });
// DICCIONARIO DE GEOLOCALIZACIÓN - PARTE 3 (ZH, AR) + FUSIÓN FINAL
const geoAsiaArabic = {
    zh: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>2023年6月 - 至今 | 西班牙，西德罗德里戈",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>2011年8月 - 2023年5月 | 西班牙，西德罗德里戈",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>2011年3月 - 2011年7月 | 西班牙，西德罗德里戈",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>2009年8月 - 2010年12月 | 西班牙，拉马亚",
        geo_start: "START PEOPLE ETT, S.A.<br>2007年8月 - 2008年12月 | 西班牙，拉马亚",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>2006年8月 - 2006年12月 | 西班牙，阿维拉",
        geo_vacceos: "Viña Vacceos S.L.<br>2004年9月 - 2004年10月 | 西班牙，布尔戈斯",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>2004年4月 - 2004年7月 | 西班牙，萨拉曼卡",
        geo_edu_eps: "萨拉曼卡大学萨莫拉高级理工学院<br>2010年 - 2011年",
        geo_edu_usal1: "萨拉曼卡大学农业与环境科学学院<br>2004年 - 2009年",
        geo_edu_cifp: "萨拉曼卡 Río Tormes 高级职业综合中心<br>2002年 - 2004年",
        geo_edu_usal2: "萨拉曼卡大学理学院<br>2000年 - 2002年",
        geo_edu_fray: "西德罗德里戈 IES Fray Diego Tadeo González 高中<br>1998年 - 2000年",
        geo_edu_tierr: "西德罗德里戈 IES Tierra de Ciudad Rodrigo 高中<br>1996年 - 1998年",
        geo_edu_sanf: "西德罗德里戈 CEIP San Francisco 公立小学<br>1988年 - 1996年"
    },
    ar: {
        geo_carpenter: "CARPENTER IBÉRICA, S.L.<br>06/2023 - الحالي | ثيوداد رودريغو، إسبانيا",
        geo_recticel: "RECTICEL IBÉRICA, S.L.<br>08/2011 - 05/2023 | ثيوداد رودريغو، إسبانيا",
        geo_unique: "UNIQUE INTERIM ETT, S.A.U.<br>03/2011 - 07/2011 | ثيوداد رودريغو، إسبانيا",
        geo_isolux: "ISOLUX CORSÁN S.L.<br>08/2009 - 12/2010 | لا مايا، إسبانيا",
        geo_start: "START PEOPLE ETT, S.A.<br>08/2007 - 12/2008 | لا مايا، إسبانيا",
        geo_toyota: "TOYOTA Ken / BMW Avilcar<br>08/2006 - 12/2006 | آبلة، إسبانيا",
        geo_vacceos: "Viña Vacceos S.L.<br>09/2004 - 10/2004 | بورغوس، إسبانيا",
        geo_peugeot: "Peugeot Tolemartín S.L.<br>04/2004 - 07/2004 | سالامانكا، إسبانيا",
        geo_edu_eps: "المدرسة العليا للهندسة التطبيقية في زامورا، جامعة سالامانكا<br>2010/2011",
        geo_edu_usal1: "كلية العلوم الزراعية والبيئية، جامعة سالامانكا<br>2004/2009",
        geo_edu_cifp: "المركز المتكامل للتدريب المهني Río Tormes في سالامانكا<br>2002/2004",
        geo_edu_usal2: "كلية العلوم، جامعة سالامانكا<br>2000/2002",
        geo_edu_fray: "المعهد الثانوي IES Fray Diego Tadeo González في ثيوداد رودريغو<br>1998/2000",
        geo_edu_tierr: "المعهد الثانوي IES Tierra de Ciudad Rodrigo في ثيوداد رودريغو<br>1996/1998",
        geo_edu_sanf: "المدرسة الابتدائية CEIP San Francisco في ثيوداد رودريغو<br>1988/1996"
    }
};

// Adjuntar idiomas restantes al objeto temporal
Object.keys(geoAsiaArabic).forEach(lang => { datePlaceTranslations[lang] = geoAsiaArabic[lang]; });

// FUSIÓN MAESTRA AUTOMÁTICA CON EL OBJETO PRINCIPAL TRANSLATIONS
Object.keys(datePlaceTranslations).forEach(lang => {
    if (!translations[lang]) translations[lang] = {};
    Object.assign(translations[lang], datePlaceTranslations[lang]);
});

// Combinar inyectando las claves en el diccionario global 'translations'
Object.keys(datePlaceTranslations).forEach(lang => {
    Object.assign(translations[lang], datePlaceTranslations[lang]);
});
// EXTENSIÓN: PESTAÑA DE INFORMÁTICA & SOFTWARE
const ITTranslations = {
    es: {
        it_cat_prog: "Programación y Desarrollo",
        it_cat_so: "Sistemas Operativos",
        it_cat_vm: "Entornos Virtuales",
        it_cat_cad: "Diseño y CAD de Ingeniería",
        it_cat_carto: "Cartografía y SIG",
        it_cat_design: "Diseño Gráfico",
        it_cat_office: "Ofimática y Gestión",
        it_cat_budget: "Presupuestos y Mediciones",
        it_cat_erp: "Sistemas de Gestión Empresarial (ERP)",
        // Subtextos informativos opcionales por si los tienes bajo los logos
        it_sub_tec: "Tecnologías Principales",
        it_sub_soft: "Software Especializado"
    },
    en: {
        it_cat_prog: "Programming & Development",
        it_cat_so: "Operating Systems",
        it_cat_vm: "Virtual Environments",
        it_cat_cad: "Engineering CAD & Design",
        it_cat_carto: "Cartography & GIS",
        it_cat_design: "Graphic Design",
        it_cat_office: "Office & Productivity",
        it_cat_budget: "Budgeting & Estimation",
        it_cat_erp: "Enterprise Resource Planning (ERP)",
        it_sub_tec: "Core Technologies",
        it_sub_soft: "Specialized Software"
    },
    it: {
        it_cat_prog: "Programmazione e Sviluppo",
        it_cat_so: "Sistemi Operativi",
        it_cat_vm: "Ambienti Virtuali",
        it_cat_cad: "Progettazione CAD e Ingegneria",
        it_cat_carto: "Cartografia e GIS",
        it_cat_design: "Design Grafico",
        it_cat_office: "Automazione Ufficio",
        it_cat_budget: "Computi metrici e Preventivi",
        it_cat_erp: "Sistemi Gestionali (ERP)",
        it_sub_tec: "Tecnologie Principali",
        it_sub_soft: "Software Specializzato"
    },
    fr: {
        it_cat_prog: "Programmation & Développement",
        it_cat_so: "Systèmes d'Exploitation",
        it_cat_vm: "Environnements Virtuels",
        it_cat_cad: "Conception CAD & Ingénierie",
        it_cat_carto: "Cartographie & SIG",
        it_cat_design: "Design Graphique",
        it_cat_office: "Bureautique & Productivité",
        it_cat_budget: "Budgets & Métiers",
        it_cat_erp: "Gestion d'Entreprise (ERP)",
        it_sub_tec: "Technologies Clés",
        it_sub_soft: "Logiciels Spécialisés"
    },
    pt: {
        it_cat_prog: "Programação e Desenvolvimento",
        it_cat_so: "Sistemas Operacionais",
        it_cat_vm: "Ambientes Virtuais",
        it_cat_cad: "Design CAD e Engenharia",
        it_cat_carto: "Cartografia e SIG",
        it_cat_design: "Design Gráfico",
        it_cat_office: "Escritório e Produtividade",
        it_cat_budget: "Orçamentos e Medições",
        it_cat_erp: "Gestão Empresarial (ERP)",
        it_sub_tec: "Tecnologias Principais",
        it_sub_soft: "Software Especializado"
    },
    de: {
        it_cat_prog: "Programmierung & Entwicklung",
        it_cat_so: "Betriebssysteme",
        it_cat_vm: "Virtuelle Umgebungen",
        it_cat_cad: "CAD & Konstruktion",
        it_cat_carto: "Kartographie & GIS",
        it_cat_design: "Grafikdesign",
        it_cat_office: "Bürosoftware & Produktivität",
        it_cat_budget: "Kalkulation & Messungen",
        it_cat_erp: "Unternehmenssoftware (ERP)",
        it_sub_tec: "Kerntechnologien",
        it_sub_soft: "Spezialisierte Software"
    },
    zh: {
        it_cat_prog: "计算机编程与开发",
        it_cat_so: "操作系统",
        it_cat_vm: "虚拟机与虚拟化环境",
        it_cat_cad: "工程设计与 CAD 建模",
        it_cat_carto: "地图学与地理信息系统 (GIS)",
        it_cat_design: "平面与视觉设计",
        it_cat_office: "办公自动化与行政管理",
        it_cat_budget: "工程造价与预算度量",
        it_cat_erp: "企业资型管理系统 (ERP)",
        it_sub_tec: "核心技术栈",
        it_sub_soft: "专业领域软件"
    },
    ar: {
        it_cat_prog: "البرمجة والتطوير",
        it_cat_so: "أنظمة التشغيل",
        it_cat_vm: "البيئات والأنظمة الوهمية",
        it_cat_cad: "التصميم الهندسي و CAD",
        it_cat_carto: "الخرائط ونظم المعلومات الجغرافية SIG",
        it_cat_design: "التصميم الجرافيكي",
        it_cat_office: "البرامج المكتبية والإنتاجية",
        it_cat_budget: "حساب الميزانيات والتقديرات",
        it_cat_erp: "أنظمة إدارة الشركات (ERP)",
        it_sub_tec: "التقنيات الأساسية",
        it_sub_soft: "البرمجيات المتخصصة"
    }
};

// Fusionar de forma masiva en el objeto principal de traducciones
Object.keys(ITTranslations).forEach(lang => {
    Object.assign(translations[lang], ITTranslations[lang]);
});
// EXTENSIÓN: LOGÍSTICA Y GESTIÓN SAP
const sapTranslations = {
    es: {
        sap_stock_management: "Gestión de stocks en SAP MM"
    },
    en: {
        sap_stock_management: "Stock Management in SAP MM"
    },
    it: {
        sap_stock_management: "Gestione delle scorte in SAP MM"
    },
    fr: {
        sap_stock_management: "Gestion des stocks dans SAP MM"
    },
    pt: {
        sap_stock_management: "Gestão de estoques em SAP MM"
    },
    de: {
        sap_stock_management: "Bestandsführung in SAP MM"
    },
    zh: {
        sap_stock_management: "SAP MM 模块库存管理"
    },
    ar: {
        sap_stock_management: "إدارة المخزون في نظام SAP MM"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(sapTranslations).forEach(lang => {
    Object.assign(translations[lang], sapTranslations[lang]);
});
// EXTENSIÓN: PRESUPUESTOS Y MEDICIONES
const prestoTranslations = {
    es: {
        presto_desc: "Presupuestos, mediciones y control de costes en PRESTO"
    },
    en: {
        presto_desc: "Budgeting, estimation, and cost control in PRESTO"
    },
    it: {
        presto_desc: "Computi metrici, stime e controllo dei costi in PRESTO"
    },
    fr: {
        presto_desc: "Budgets, métrés et contrôle des coûts dans PRESTO"
    },
    pt: {
        presto_desc: "Orçamentos, medições e controle de custos em PRESTO"
    },
    de: {
        presto_desc: "Kalkulation, Massenberechnung und Kostenkontrolle in PRESTO"
    },
    zh: {
        presto_desc: "PRESTO 软件工程预算、度量与成本控制"
    },
    ar: {
        presto_desc: "حساب الميزانيات، المقاييس والتحكم في التكاليف باستخدام PRESTO"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(prestoTranslations).forEach(lang => {
    Object.assign(translations[lang], prestoTranslations[lang]);
});
// EXTENSIÓN: OFIMÁTICA Y PRODUCTIVIDAD
const officeTranslations = {
    es: {
        office_desc: "Dominio profesional de Microsoft Office y Open Office"
    },
    en: {
        office_desc: "Professional proficiency in Microsoft Office and Open Office"
    },
    it: {
        office_desc: "Competenza professionale in Microsoft Office e Open Office"
    },
    fr: {
        office_desc: "Maîtrise professionnelle de Microsoft Office et Open Office"
    },
    pt: {
        office_desc: "Domínio profissional em Microsoft Office e Open Office"
    },
    de: {
        office_desc: "Professionelle Kenntnisse in Microsoft Office und Open Office"
    },
    zh: {
        office_desc: "熟练运用 Microsoft Office 和 Open Office 办公套件"
    },
    ar: {
        office_desc: "إتقان مهني لحزمة برامج Microsoft Office و Open Office"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(officeTranslations).forEach(lang => {
    Object.assign(translations[lang], officeTranslations[lang]);
});
// EXTENSIÓN: DISEÑO GRÁFICO Y EDICIÓN
const designTranslations = {
    es: {
        design_desc: "Diseño vectorial y edición digital en Corel Draw y Photoshop"
    },
    en: {
        design_desc: "Vector design and digital editing in Corel Draw and Photoshop"
    },
    it: {
        design_desc: "Disegno vettoriale e editing digitale in Corel Draw e Photoshop"
    },
    fr: {
        design_desc: "Dessin vectoriel et édition numérique sous Corel Draw et Photoshop"
    },
    pt: {
        design_desc: "Design vetorial e edição digital em Corel Draw e Photoshop"
    },
    de: {
        design_desc: "Vektordesign und digitale Bildbearbeitung mit Corel Draw und Photoshop"
    },
    zh: {
        design_desc: "熟练进行 Corel Draw 矢量设计与 Photoshop 图像数字编辑"
    },
    ar: {
        design_desc: "التصميم المتجهي والتعديل الرقمي باستخدام Corel Draw و Photoshop"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(designTranslations).forEach(lang => {
    Object.assign(translations[lang], designTranslations[lang]);
});
// EXTENSIÓN: CARTOGRAFÍA, SIG Y MODELADO HIDRÁULICO
const gisTranslations = {
    es: {
        gis_desc: "Sistemas de Información Geográfica, teledetección y modelado hidráulico en PCI Geomatica, ArcGIS, ArcGIS Pro y HEC-RAS"
    },
    en: {
        gis_desc: "Geographic Information Systems, remote sensing, and hydraulic modeling in PCI Geomatica, ArcGIS, ArcGIS Pro, and HEC-RAS"
    },
    it: {
        gis_desc: "Sistemi Informativi Geografici, telerilevamento e modellazione idraulica in PCI Geomatica, ArcGIS, ArcGIS Pro e HEC-RAS"
    },
    fr: {
        gis_desc: "Systèmes d'Information Géographique, télédétection et modélisation hydraulique sous PCI Geomatica, ArcGIS, ArcGIS Pro et HEC-RAS"
    },
    pt: {
        gis_desc: "Sistemas de Informação Geográfica, sensoriamento remoto e modelagem hidráulica em PCI Geomatica, ArcGIS, ArcGIS Pro e HEC-RAS"
    },
    de: {
        gis_desc: "Geoinformationssysteme, Fernerkundung und hydraulische Modellierung mit PCI Geomatica, ArcGIS, ArcGIS Pro und HEC-RAS"
    },
    zh: {
        gis_desc: "熟练运用 PCI Geomatica、ArcGIS、ArcGIS Pro 和 HEC-RAS 进行地理信息系统 (GIS) 构建、遥感解译与水文水力学建模"
    },
    ar: {
        gis_desc: "نظم المعلومات الجغرافية، الاستشعار عن بعد، والنمذجة الهيدروليكية باستخدام PCI Geomatica و ArcGIS و ArcGIS Pro و HEC-RAS"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(gisTranslations).forEach(lang => {
    Object.assign(translations[lang], gisTranslations[lang]);
});
// EXTENSIÓN: INGENIERÍA CAD, ESTRUCTURAS Y AUTOMATIZACIÓN
const cadEngTranslations = {
    es: {
        cad_eng_desc: "Diseño industrial 2D/3D, modelado mecánico, cálculo de estructuras y simulación electrónica en Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino y Proteus"
    },
    en: {
        cad_eng_desc: "2D/3D industrial design, mechanical modeling, structural engineering calculations, and electronic simulation using Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino, and Proteus"
    },
    it: {
        cad_eng_desc: "Progettazione industriale 2D/3D, modellazione meccanica, calcolo strutturale e simulazione elettronica con Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino e Proteus"
    },
    fr: {
        cad_eng_desc: "Conception industrielle 2D/3D, modélisation mécanique, calcul de structures et simulation électronique sous Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino et Proteus"
    },
    pt: {
        cad_eng_desc: "Design industrial 2D/3D, modelagem mecânica, cálculo de estruturas e simulação eletrônica em Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino e Proteus"
    },
    de: {
        cad_eng_desc: "2D/3D-Industriedesign, mechanische Modellierung, Baustatik-Berechnung und Elektroniksimulation mit Microstation V8i, SolidWorks, Catia, AutoCAD, Inventor, Sketchup, CypeCAD, Arduino und Proteus"
    },
    zh: {
        cad_eng_desc: "熟练运用 Microstation V8i、SolidWorks、Catia、AutoCAD、Inventor、Sketchup 进行工业 2D/3D 数字化建模，以及使用 CypeCAD 进行结构工程造价计算、利用 Arduino 和 Proteus 进行电子电路设计与仿真"
    },
    ar: {
        cad_eng_desc: "التصميم الصناعي ثنائي وثلاثي الأبعاد، النمذجة الميكانيكية، حساب الإنشاءات، والمحاكاة الإلكترونية باستخدام Microstation V8i و SolidWorks و Catia و AutoCAD و Inventor و Sketchup و CypeCAD و Arduino و Proteus"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(cadEngTranslations).forEach(lang => {
    Object.assign(translations[lang], cadEngTranslations[lang]);
});
// EXTENSIÓN: VIRTUALIZACIÓN Y ENTORNOS VIRTUALES
const vmTranslations = {
    es: {
        vm_desc: "Administración, configuración y despliegue de entornos virtualizados en VMWare, VirtualBox e Hyper-V"
    },
    en: {
        vm_desc: "Administration, configuration, and deployment of virtualized environments in VMWare, VirtualBox, and Hyper-V"
    },
    it: {
        vm_desc: "Amministrazione, configurazione e implementazione di ambienti virtualizzati in VMWare, VirtualBox e Hyper-V"
    },
    fr: {
        vm_desc: "Administration, configuration et déploiement d'environnements virtualisés sous VMWare, VirtualBox et Hyper-V"
    },
    pt: {
        vm_desc: "Administração, configuração e implantação de ambientes virtualizados em VMWare, VirtualBox e Hyper-V"
    },
    de: {
        vm_desc: "Administration, Konfiguration und Bereitstellung virtualisierter Umgebungen mit VMWare, VirtualBox und Hyper-V"
    },
    zh: {
        vm_desc: "熟练进行基于 VMWare、VirtualBox 和 Hyper-V 的虚拟化环境架构、配置与部署管理"
    },
    ar: {
        vm_desc: "إدارة، تهيئة ونشر البيئات الافتراضية والأنظمة الوهمية باستخدام VMWare و VirtualBox و Hyper-V"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(vmTranslations).forEach(lang => {
    Object.assign(translations[lang], vmTranslations[lang]);
});
// EXTENSIÓN: SISTEMAS OPERATIVOS Y PLATAFORMAS
const osTranslations = {
    es: {
        os_desc: "Administración de sistemas y entornos de usuario en MS-DOS, Windows, Linux, Android e iOS"
    },
    en: {
        os_desc: "System administration and user environments in MS-DOS, Windows, Linux, Android, and iOS"
    },
    it: {
        os_desc: "Amministrazione di sistema e ambienti utente in MS-DOS, Windows, Linux, Android e iOS"
    },
    fr: {
        os_desc: "Administration système et environnements utilisateur sous MS-DOS, Windows, Linux, Android et iOS"
    },
    pt: {
        os_desc: "Administração de sistemas e ambientes de usuário em MS-DOS, Windows, Linux, Android e iOS"
    },
    de: {
        os_desc: "Systemadministration und Benutzeroberflächen in MS-DOS, Windows, Linux, Android und iOS"
    },
    zh: {
        os_desc: "熟练掌握 MS-DOS、Windows、Linux、Android 和 iOS 的系统管理与用户操作环境"
    },
    ar: {
        os_desc: "إدارة الأنظمة وبيئات المستخدم في أنظمة التشغيل MS-DOS و Windows و Linux و Android و iOS"
    }
};

// Fusionar automáticamente en el objeto principal
Object.keys(osTranslations).forEach(lang => {
    Object.assign(translations[lang], osTranslations[lang]);
});
// EXTENSIÓN: PROGRAMACIÓN Y LENGUAJES DE DESARROLLO
const progLangTranslations = {
    es: {
        prog_desc: "Desarrollo de lógica, scripts y aplicaciones web en C++, HTML5, CSS, JavaScript y Python"
    },
    en: {
        prog_desc: "Logic development, scripting, and web applications in C++, HTML5, CSS, JavaScript, and Python"
    },
    it: {
        prog_desc: "Sviluppo di logica, script e applicazioni web in C++, HTML5, CSS, JavaScript e Python"
    },
    fr: {
        prog_desc: "Développement de logique, scripts et applications web en C++, HTML5, CSS, JavaScript et Python"
    },
    pt: {
        prog_desc: "Desenvolvimento de lógica, scripts e aplicações web em C++, HTML5, CSS, JavaScript e Python"
    },
    de: {
        prog_desc: "Logikentwicklung, Scripting und Webanwendungen in C++, HTML5, CSS, JavaScript und Python"
    },
    zh: {
        prog_desc: "具备在 C++、HTML5、CSS、JavaScript 和 Python 环境下的系统逻辑设计、高级脚本编写和网页应用开发能力"
    },
    ar: {
        prog_desc: "تطوير المنطق، البرمجيات النصية (Scripts) وتطبيقات الويب باستخدام لغات C++ و HTML5 و CSS و JavaScript و Python"
    }
};

// Fusionar automáticamente en el objeto principal de traducciones
Object.keys(progLangTranslations).forEach(lang => {
    Object.assign(translations[lang], progLangTranslations[lang]);
});
// EXTENSIÓN: BOTONES DE FILTRADO PARA LA SECCIÓN DE EDUCACIÓN
const eduFilterTranslations = {
    es: {
        filter_all_edu: "Todos",
        filter_uni_edu: "Universidad",
        filter_tec_edu: "Técnica",
        filter_otros_edu: "Otros"
    },
    en: {
        filter_all_edu: "All",
        filter_uni_edu: "University",
        filter_tec_edu: "Technical",
        filter_otros_edu: "Others"
    },
    it: {
        filter_all_edu: "Tutti",
        filter_uni_edu: "Università",
        filter_tec_edu: "Tecnica",
        filter_otros_edu: "Altri"
    },
    fr: {
        filter_all_edu: "Tous",
        filter_uni_edu: "Université",
        filter_tec_edu: "Technique",
        filter_otros_edu: "Autres"
    },
    pt: {
        filter_all_edu: "Todos",
        filter_uni_edu: "Universidade",
        filter_tec_edu: "Técnica",
        filter_otros_edu: "Outros"
    },
    de: {
        filter_all_edu: "Alle",
        filter_uni_edu: "Universität",
        filter_tec_edu: "Technische",
        filter_otros_edu: "Andere"
    },
    zh: {
        filter_all_edu: "全部",
        filter_uni_edu: "大学教育",
        filter_tec_edu: "技术/职业教育",
        filter_otros_edu: "其他"
    },
    ar: {
        filter_all_edu: "الكل",
        filter_uni_edu: "تعليم جامعي",
        filter_tec_edu: "تعليم فني",
        filter_otros_edu: "أخرى"
    }
};

// Fusionar automáticamente en el objeto principal translations
Object.keys(eduFilterTranslations).forEach(lang => {
    Object.assign(translations[lang], eduFilterTranslations[lang]);
});
// EXTENSIÓN: NIVELES Y COMPETENCIAS DE IDIOMAS
const languageLevelsTranslations = {
    es: {
        lvl_native: "Español (Competencia Nativa)",
        lvl_professional: "Inglés (Competencia Profesional)",
        lvl_elementary_fr: "Francés (Competencia Elemental)",
        lvl_elementary_pt: "Portugués (Competencia Elemental)",
        lvl_basic_de: "Alemán (Iniciación / Aprendizaje)",
        lvl_basic_zh: "Chino (Iniciación / Aprendizaje)",
        lvl_basic_ar: "Árabe (Iniciación / Aprendizaje)"
    },
    en: {
        lvl_native: "Spanish (Native)",
        lvl_professional: "English (Professional Proficiency)",
        lvl_elementary_fr: "French (Elementary Proficiency)",
        lvl_elementary_pt: "Portuguese (Elementary Proficiency)",
        lvl_basic_de: "German (Beginner / Learning)",
        lvl_basic_zh: "Chinese (Beginner / Learning)",
        lvl_basic_ar: "Arabic (Beginner / Learning)"
    },
    it: {
        lvl_native: "Spagnolo (Madrelingua)",
        lvl_professional: "Inglese (Competenza Professionale)",
        lvl_elementary_fr: "Francese (Competenza Elementare)",
        lvl_elementary_pt: "Portoghese (Competenza Elementare)",
        lvl_basic_de: "Tedesco (Principiante / Base)",
        lvl_basic_zh: "Cinese (Principiante / Base)",
        lvl_basic_ar: "Arabo (Principiante / Base)"
    },
    fr: {
        lvl_native: "Espagnol (Langue Maternelle)",
        lvl_professional: "Anglais (Capacité Professionnelle)",
        lvl_elementary_fr: "Français (Compétence Élémentaire)",
        lvl_elementary_pt: "Portugais (Compétence Élémentaire)",
        lvl_basic_de: "Allemand (Débutant / Apprentissage)",
        lvl_basic_zh: "Chinois (Débutant / Apprentissage)",
        lvl_basic_ar: "Arabe (Débutant / Apprentissage)"
    },
    pt: {
        lvl_native: "Espanhol (Fluente / Nativo)",
        lvl_professional: "Inglês (Proficiência Profissional)",
        lvl_elementary_fr: "Francês (Proficiência Elementar)",
        lvl_elementary_pt: "Português (Proficiência Elementar)",
        lvl_basic_de: "Alemão (Iniciante / Aprendizado)",
        lvl_basic_zh: "Chinês (Iniciante / Aprendizado)",
        lvl_basic_ar: "Árabe (Iniciante / Aprendizado)"
    },
    de: {
        lvl_native: "Spanisch (Muttersprache)",
        lvl_professional: "Englisch (Verhandlungssicher)",
        lvl_elementary_fr: "Französisch (Grundkenntnisse)",
        lvl_elementary_pt: "Portugiesisch (Grundkenntnisse)",
        lvl_basic_de: "Deutsch (Anfänger / Basis)",
        lvl_basic_zh: "Chinesisch (Anfänger / Basis)",
        lvl_basic_ar: "Arabisch (Anfänger / Basis)"
    },
    zh: {
        lvl_native: "西班牙语（母语）",
        lvl_professional: "英语（工作语言熟练）",
        lvl_elementary_fr: "法语（初级基础）",
        lvl_elementary_pt: "葡萄牙语（初级基础）",
        lvl_basic_de: "德语（入门/学习中）",
        lvl_basic_zh: "中文（入门/学习中）",
        lvl_basic_ar: "阿拉伯语（入门/学习中）"
    },
    ar: {
        lvl_native: "الإسبانية (اللغة الأم)",
        lvl_professional: "الإنجليزية (كفاءة مهنية)",
        lvl_elementary_fr: "الفرنسية (كفاءة أساسية)",
        lvl_elementary_pt: "البرتغالية (كفاءة أساسية)",
        lvl_basic_de: "الألمانية (مستوى مبتدئ / تعلم)",
        lvl_basic_zh: "الصينية (مستوى مبتدئ / تعلم)",
        lvl_basic_ar: "العربية (مستوى مبتدئ / تعلم)"
    }
};

// Fusionar automáticamente en el objeto principal translations
Object.keys(languageLevelsTranslations).forEach(lang => {
    Object.assign(translations[lang], languageLevelsTranslations[lang]);
});
// EXTENSIÓN: TODAS LAS TITULACIONES ACADÉMICAS AL COMPLETO
const allDegreesTranslations = {
    es: {
        edu1_degree: "Experto en Energías Renovables y Eficiencia Energética",
        edu2_degree: "Ingeniería Técnico Agrícola, esp. Explotaciones Agropecuarias",
        edu3_degree: "Técnico Superior en Mantenimiento de Vehículos Autopropulsados",
        edu4_degree: "Licenciatura en Matemáticas",
        edu5_degree: "Bachillerato en Ciencias de la Salud",
        edu6_degree: "Educación Secundaria Obligatoria",
        edu7_degree: "Educación Primaria"
    },
    en: {
        edu1_degree: "Expert in Renewable Energies and Energy Efficiency",
        edu2_degree: "Agricultural Technical Engineering, specializing in Agricultural and Livestock Operations",
        edu3_degree: "Higher Technical Degree in Self-Propelled Vehicle Maintenance",
        edu4_degree: "Bachelor's Degree in Mathematics",
        edu5_degree: "High School Diploma in Health Sciences",
        edu6_degree: "Compulsory Secondary Education",
        edu7_degree: "Primary Education"
    },
    it: {
        edu1_degree: "Esperto in Energie Rinnovabili e Efficienza Energetica",
        edu2_degree: "Laurea Triennale in Ingegneria Agraria, spec. Aziende Agricole e Zootecniche",
        edu3_degree: "Tecnico Superiore nella Manutenzione di Veicoli Autopropulsi",
        edu4_degree: "Laurea Magistrale in Matematica",
        edu5_degree: "Diploma di Scuola Superiore in Scienze della Salute",
        edu6_degree: "Istruzione Secondaria Obbligatoria",
        edu7_degree: "Istruzione Primaria"
    },
    fr: {
        edu1_degree: "Expert en Énergies Renouvelables et Efficacité Énergétique",
        edu2_degree: "Licence en Ingénierie Agricole, spéc. Exploitations Agricoles et Élevages",
        edu3_degree: "Technicien Supérieur en Maintenance des Véhicules Automoteurs",
        edu4_degree: "Licence/Maîtrise en Mathématiques",
        edu5_degree: "Baccalauréat en Sciences de la Santé",
        edu6_degree: "Enseignement Secondaire Obligatoire",
        edu7_degree: "Enseignement Primaire"
    },
    pt: {
        edu1_degree: "Especialista em Energias Renováveis e Eficiência Energética",
        edu2_degree: "Engenharia Técnico Agrícola, esp. Explorações Agropecuárias",
        edu3_degree: "Técnico Superior em Manutenção de Veículos Automotores",
        edu4_degree: "Licenciatura em Matemática",
        edu5_degree: "Ensino Médio Técnico em Ciências da Saúde",
        edu6_degree: "Ensino Secundário Obrigatório",
        edu7_degree: "Ensino Fundamental"
    },
    de: {
        edu1_degree: "Experte für Erneuerbare Energien und Energieeffizienz",
        edu2_degree: "Diplom-Agraringenieur (FH), Fachrichtung Landwirtschaftliche Betriebe",
        edu3_degree: "Staatlich geprüfter Techniker für Kraftfahrzeugtechnik",
        edu4_degree: "Bachelor-Studium in Mathematik",
        edu5_degree: "Abitur mit Schwerpunkt Gesundheitswissenschaften",
        edu6_degree: "Realschulabschluss / Sekundarstufe I",
        edu7_degree: "Grundschule"
    },
    zh: {
        edu1_degree: "可再生能源与建筑能效专家学位",
        edu2_degree: "农业技术工程学士（专注于农牧场经营管理）",
        edu3_degree: "自驱式车辆维护与检修高级技术员",
        edu4_degree: "数学专业本科",
        edu5_degree: "健康科学方向高中/预科文凭",
        edu6_degree: "义务教育阶段初中",
        edu7_degree: "小学教育"
    },
    ar: {
        edu1_degree: "خبير في الطاقات المتجددة وكفاءة الطاقة",
        edu2_degree: "الهندسة التقنية الزراعية، تخصص إدارة المزارع والإنتاج الحيواني",
        edu3_degree: "فني عالي في صيانة مركبات الدفع الذاتي",
        edu4_degree: "درجة البكالوريوس في العلوم الرياضية",
        edu5_degree: "شهادة البكالوريا في العلوم الصحية",
        edu6_degree: "التعليم الثانوي الإلزامي",
        edu7_degree: "التعليم الابتدائي"
    }
};

// Fusionar de forma masiva en el objeto translations principal
Object.keys(allDegreesTranslations).forEach(lang => {
    Object.assign(translations[lang], allDegreesTranslations[lang]);
});
// DICCIONARIO DE MÓDULOS DE INGENIERÍA - PARTE 1 (ES, EN, IT)
const portfolioPdfsPart1 = {
    es: {
        // Proyecto 2: Los 9 Módulos Hidrológicos
        p2_m1_t: "Estudio Hidrológico - Parte I", p2_m1_d: "Introducción y contextualización de la cuenca",
        p2_m2_t: "Estudio Hidrológico - Parte II", p2_m2_d: "Climatología y régimen de precipitaciones",
        p2_m3_t: "Estudio Hidrológico - Parte III", p2_m3_d: "Geología, permeabilidad y escorrentía",
        p2_m4_t: "Estudio Hidrológico - Parte IV", p2_m4_d: "Análisis de caudales y avenidas máximas",
        p2_m5_t: "Estudio Hidrológico - Parte V", p2_m5_d: "Balance hídrico y demandas locales",
        p2_m6_t: "Estudio Hidrológico - Parte VI", p2_m6_d: "Calidad de las aguas y estado ecológico",
        p2_m7_t: "Estudio Hidrológico - Parte VII", p2_m7_d: "Infraestructuras y regulaciones hidráulicas",
        p2_m8_t: "Estudio Hidrológico - Parte VIII", p2_m8_d: "Riesgos de inundación y planes preventivos",
        p2_m9_t: "Estudio Hidrológico - Parte IX", p2_m9_d: "Conclusiones y propuestas de gestión",
        // Proyecto 4: Los 5 Módulos de Renovables
        p4_pdf1_t: "Energía Solar", p4_pdf1_d: "Dimensionamiento y memoria fotovoltaica",
        p4_pdf2_t: "Eficiencia Energética", p4_pdf2_d: "Auditoría y optimización de consumos",
        p4_pdf3_t: "Energía Eólica", p4_pdf3_d: "Análisis de recursos y proyectos eólicos",
        p4_pdf4_t: "Biomasa", p4_pdf4_d: "Estudio técnico de aprovechamiento térmico",
        p4_pdf5_t: "Minihidráulica", p4_pdf5_d: "Estudios de salto hidráulico y potencia"
    },
    en: {
        p2_m1_t: "Hydrological Study - Part I", p2_m1_d: "Introduction and watershed contextualization",
        p2_m2_t: "Hydrological Study - Part II", p2_m2_d: "Climatology and rainfall regime",
        p2_m3_t: "Hydrological Study - Part III", p2_m3_d: "Geology, permeability, and runoff",
        p2_m4_t: "Hydrological Study - Part IV", p2_m4_d: "Flow analysis and maximum flood events",
        p2_m5_t: "Hydrological Study - Part V", p2_m5_d: "Water balance and local water demands",
        p2_m6_t: "Hydrological Study - Part VI", p2_m6_d: "Water quality and ecological status",
        p2_m7_t: "Hydrological Study - Part VII", p2_m7_d: "Hydraulic infrastructures and regulations",
        p2_m8_t: "Hydrological Study - Part VIII", p2_m8_d: "Flood risks and preventive planning",
        p2_m9_t: "Hydrological Study - Part IX", p2_m9_d: "Conclusions and management proposals",
        p4_pdf1_t: "Solar Energy", p4_pdf1_d: "Sizing and photovoltaic design report",
        p4_pdf2_t: "Energy Efficiency", p4_pdf2_d: "Audit and consumption optimization",
        p4_pdf3_t: "Wind Energy", p4_pdf3_d: "Resource analysis and wind farm projects",
        p4_pdf4_t: "Biomass", p4_pdf4_d: "Technical study on thermal utilization",
        p4_pdf5_t: "Small Hydro", p4_pdf5_d: "Hydraulic head and power potential studies"
    },
    it: {
        p2_m1_t: "Studio Idrologico - Parte I", p2_m1_d: "Introduzione e contestualizzazione del bacino",
        p2_m2_t: "Studio Idrologico - Parte II", p2_m2_d: "Climatologia e regime delle precipitazioni",
        p2_m3_t: "Studio Idrologico - Parte III", p2_m3_d: "Geologia, permeabilità e deflusso idrico",
        p2_m4_t: "Studio Idrologico - Parte IV", p2_m4_d: "Analisi dei flussi e piene massime",
        p2_m5_t: "Studio Idrologico - Parte V", p2_m5_d: "Bilancio idrico e richieste locali",
        p2_m6_t: "Studio Idrologico - Parte VI", p2_m6_d: "Qualità dell'acqua e stato ecologico",
        p2_m7_t: "Studio Idrologico - Parte VII", p2_m7_d: "Infrastrutture e regolamentazioni idrauliche",
        p2_m8_t: "Studio Idrologico - Parte VIII", p2_m8_d: "Rischi di alluvione e piani preventivi",
        p2_m9_t: "Studio Idrologico - Parte IX", p2_m9_d: "Conclusioni e proposte di gestione",
        p4_pdf1_t: "Energia Solare", p4_pdf1_d: "Dimensionamento e relazione tecnica fotovoltaica",
        p4_pdf2_t: "Efficienza Energetica", p4_pdf2_d: "Audit e ottimizzazione dei consumi energetici",
        p4_pdf3_t: "Energia Eolica", p4_pdf3_d: "Analisi delle risorse e progetti eolici",
        p4_pdf4_t: "Biomassa", p4_pdf4_d: "Studio tecnico per l'utilizzo termico",
        p4_pdf5_t: "Mini-idraulico", p4_pdf5_d: "Studi sul salto idraulico e sul potenziale di potenza"
    }
};
// DICCIONARIO DE MÓDULOS DE INGENIERÍA - PARTE 2 (FR, PT, DE)
const portfolioPdfsPart2 = {
    fr: {
        p2_m1_t: "Étude Hydrologique - Partie I", p2_m1_d: "Introduction et contextualisation du bassin",
        p2_m2_t: "Étude Hydrologique - Partie II", p2_m2_d: "Climatologie et régime des précipitations",
        p2_m3_t: "Étude Hydrologique - Partie III", p2_m3_d: "Géologie, perméabilité et ruissellement",
        p2_m4_t: "Étude Hydrologique - Partie IV", p2_m4_d: "Analyse des débits et crues maximales",
        p2_m5_t: "Étude Hydrologique - Partie V", p2_m5_d: "Bilan hydrique et demandes locales",
        p2_m6_t: "Étude Hydrologique - Partie VI", p2_m6_d: "Qualité des eaux et état écologique",
        p2_m7_t: "Étude Hydrologique - Partie VII", p2_m7_d: "Infrastructures et réglementations hydrauliques",
        p2_m8_t: "Étude Hydrologique - Partie VIII", p2_m8_d: "Risques d'inondation et plans préventifs",
        p2_m9_t: "Étude Hydrologique - Partie IX", p2_m9_d: "Conclusions et propositions de gestion",
        p4_pdf1_t: "Énergie Solaire", p4_pdf1_d: "Dimensionnement et rapport photovoltaïque",
        p4_pdf2_t: "Efficacité Énergétique", p4_pdf2_d: "Audit et optimisation des consommations",
        p4_pdf3_t: "Énergie Éolienne", p4_pdf3_d: "Analyse des ressources et projets éoliens",
        p4_pdf4_t: "Biomasse", p4_pdf4_d: "Étude technique d'utilisation thermique",
        p4_pdf5_t: "Petite Hydro", p4_pdf5_d: "Études de charge hydraulique et puissance"
    },
    pt: {
        p2_m1_t: "Estudo Hidrológico - Parte I", p2_m1_d: "Introdução e contextualização da bacia",
        p2_m2_t: "Estudo Hidrológico - Parte II", p2_m2_d: "Climatologia e regime de precipitações",
        p2_m3_t: "Estudo Hidrológico - Parte III", p2_m3_d: "Geologia, permeabilidade e escoamento superficial",
        p2_m4_t: "Estudo Hidrológico - Parte IV", p2_m4_d: "Análise de vazões e cheias máximas",
        p2_m5_t: "Estudo Hidrológico - Parte V", p2_m5_d: "Balanço hídrico e demandas locais de água",
        p2_m6_t: "Estudo Hidrológico - Parte VI", p2_m6_d: "Qualidade da água e estado ecológico",
        p2_m7_t: "Estudo Hidrológico - Parte VII", p2_m7_d: "Infraestruturas e regulamentações hidráulicas",
        p2_m8_t: "Estudo Hidrológico - Parte VIII", p2_m8_d: "Riscos de inundação e planos preventivos",
        p2_m9_t: "Estudo Hidrológico - Parte IX", p2_m9_d: "Conclusões e propostas de gestão",
        p4_pdf1_t: "Energia Solar", p4_pdf1_d: "Dimensionamento e memorial fotovoltaico",
        p4_pdf2_t: "Eficiência Energética", p4_pdf2_d: "Auditoria e otimização de consumos",
        p4_pdf3_t: "Energia Eólica", p4_pdf3_d: "Análise de recursos e projetos eólicos",
        p4_pdf4_t: "Biomassa", p4_pdf4_d: "Estudo técnico de aproveitamento térmico",
        p4_pdf5_t: "Mini-hidrelétrica", p4_pdf5_d: "Estudos de queda hidráulica e potência"
    },
    de: {
        p2_m1_t: "Hydrologische Studie - Teil I", p2_m1_d: "Einführung und Kontextualisierung des Einzugsgebiets",
        p2_m2_t: "Hydrologische Studie - Teil II", p2_m2_d: "Klimatologie und Niederschlagsregime",
        p2_m3_t: "Hydrologische Studie - Teil III", p2_m3_d: "Geologie, Permeabilität und Oberflächenabfluss",
        p2_m4_t: "Hydrologische Studie - Teil IV", p2_m4_d: "Durchflussanalyse und maximale Hochwasserabflüsse",
        p2_m5_t: "Hydrologische Studie - Teil V", p2_m5_d: "Wasserbilanz und lokale Anforderungen",
        p2_m6_t: "Hydrologische Studie - Teil VI", p2_m6_d: "Wasserqualität und ökologischer Status",
        p2_m7_t: "Hydrologische Studie - Teil VII", p2_m7_d: "Hydraulische Infrastrukturen und Vorschriften",
        p2_m8_t: "Hydrologische Studie - Teil VIII", p2_m8_d: "Hochwasserrisiken und Präventionspläne",
        p2_m9_t: "Hydrologische Studie - Teil IX", p2_m9_d: "Schlussfolgerungen und Managementvorschläge",
        p4_pdf1_t: "Solarenergie", p4_pdf1_d: "Dimensionierung und Photovoltaik-Bericht",
        p4_pdf2_t: "Energieeffizienz", p4_pdf2_d: "Audit und Verbrauchsoptimierung",
        p4_pdf3_t: "Windenergie", p4_pdf3_d: "Ressourcenanalyse und Windkraftprojekte",
        p4_pdf4_t: "Biomasse", p4_pdf4_d: "Technische Studie zur thermischen Nutzung",
        p4_pdf5_t: "Wasserkraft", p4_pdf5_d: "Studien zu Gefälle und Leistungspotenzial"
    }
};

// Adjuntar de forma limpia al objeto temporal del Bloque 1
Object.keys(portfolioPdfsPart2).forEach(lang => { portfolioPdfsPart1[lang] = portfolioPdfsPart2[lang]; });
// DICCIONARIO DE MÓDULOS DE INGENIERÍA - PARTE 3 (ZH, AR) + INYECCIÓN MAESTRA
const portfolioPdfsPart3 = {
    zh: {
        p2_m1_t: "水文研究 - 第一部分", p2_m1_d: "流域概况、背景引言与核心目标分析",
        p2_m2_t: "水文研究 - 第二部分", p2_m2_d: "气候学特征评估与降水量动态演变规律",
        p2_m3_t: "水文研究 - 第三部分", p2_m3_d: "区域地质结构、土壤学属性与地面渗透性能",
        p2_m4_t: "水文研究 - 第四部分", p2_m4_d: "径流总量控制与极端历史洪峰流量精算",
        p2_m5_t: "水文研究 - 第五部分", p2_m5_d: "流域水资源供需平衡模型及地方保障需求",
        p2_m6_t: "水文研究 - 第六部分", p2_m6_d: "地表水水质综合检测与全流域生态健康评价",
        p2_m7_t: "水文研究 - 第七部分", p2_m7_d: "现代水利工程基础设施建设与调度调配规程",
        p2_m8_t: "水文研究 - 第八部分", p2_m8_d: "全域防洪内涝风险灾害区划及应急预案系统",
        p2_m9_t: "水文研究 - 第九部分", p2_m9_d: "整体技术总结报告、展望与水资源管理综合提案",
        p4_pdf1_t: "太阳能光伏系统", p4_pdf1_d: "分布式光伏发电容量设计与系统工程方案",
        p4_pdf2_t: "建筑能效提升", p4_pdf2_d: "全工业综合能效审计与能源消耗节约优化",
        p4_pdf3_t: "风力发电工程", p4_pdf3_d: "区域风能资源宏观选址评估与并网风电场规划",
        p4_pdf4_t: "生物质能利用", p4_pdf4_d: "固废及生物质高效热能转化与供热方案可行性研究",
        p4_pdf5_t: "微型小水电站", p4_pdf5_d: "小流域水力落差计算与装机输出额定功率论证"
    },
    ar: {
        p2_m1_t: "دراسة هيدرولوجية - الجزء الأول", p2_m1_d: "مقدمة وسياق الحوض المائي",
        p2_m2_t: "دراسة هيدرولوجية - الجزء الثاني", p2_m2_d: "المناخ ونظام هطول الأمطار",
        p2_m3_t: "دراسة هيدرولوجية - الجزء الثالث", p2_m3_d: "الجيولوجيا والنفاذية والجريان السطحي",
        p2_m4_t: "دراسة هيدرولوجية - الجزء الرابع", p2_m4_d: "تحليل التدفقات والفيضانات القصوى",
        p2_m5_t: "دراسة هيدرولوجية - الجزء الخامس", p2_m5_d: "الميزانية المائية والطلبات المحلية",
        p2_m6_t: "دراسة هيدرولوجية - الجزء السادس", p2_m6_d: "جودة المياه والوضع البيئي لحوض النهر",
        p2_m7_t: "دراسة هيدرولوجية - الجزء السابع", p2_m7_d: "البنية التحتية واللوائح الهيدروليكية",
        p2_m8_t: "دراسة هيدرولوجية - الجزء الثامن", p2_m8_d: "مخاطر الفيضانات والخطط الوقائية",
        p2_m9_t: "دراسة هيدرولوجية - الجزء التاسع", p2_m9_d: "الاستنتاجات ومقترحات إدارة الموارد",
        p4_pdf1_t: "الطاقة الشمسية", p4_pdf1_d: "تحديد الأحجام والتقرير الكهروضوئي الفني",
        p4_pdf2_t: "كفاءة الطاقة", p4_pdf2_d: "تدقيق وتحسين استهلاك الطاقة الإجمالي",
        p4_pdf3_t: "طاقة الرياح", p4_pdf3_d: "تحليل الموارد ومشاريع مزارع الرياح",
        p4_pdf4_t: "الكتلة الحيوية", p4_pdf4_d: "دراسة فنية للاستخدام والاستغلال الحراري",
        p4_pdf5_t: "الطاقة الهيدروليكية الصغيرة", p4_pdf5_d: "دراسات الارتفاع الهيدروليكي وطاقة التوليد"
    }
};

// Adjuntar los idiomas restantes al objeto unificado
Object.keys(portfolioPdfsPart3).forEach(lang => { portfolioPdfsPart1[lang] = portfolioPdfsPart3[lang]; });

// FUSIÓN MAESTRA CON EL OBJETO TRANSLATIONS PRINCIPAL DEL SCRIPT
Object.keys(portfolioPdfsPart1).forEach(lang => {
    if (!translations[lang]) translations[lang] = {};
    Object.assign(translations[lang], portfolioPdfsPart1[lang]);
});
// DICCIONARIO UNIFICADO DE SUBTÍTULOS DE PROYECTOS - PARTE A
const fixedSubtitlesPartA = {
    es: {
        proj1_sub: "Desarrollo e Implementación de Sistemas de Información Geográfica | 2025",
        proj2_sub: "Estudio Hidrológico y Gestión Ambiental | 2024",
        proj3_sub: "Desarrollo de Hardware y Automatización | 2022",
        proj4_sub: "Estudios Técnicos y Proyectos de Ingeniería | 2010"
    },
    en: {
        proj1_sub: "Development and Implementation of Geographic Information Systems | 2025",
        proj2_sub: "Hydrological Study and Environmental Management | 2024",
        proj3_sub: "Hardware Development and Automation | 2022",
        proj4_sub: "Technical Studies and Engineering Projects | 2010"
    },
    it: {
        proj1_sub: "Sviluppo e Implementazione di Sistemi Informativi Geografici | 2025",
        proj2_sub: "Studio Idrologico e Gestione Ambientale | 2024",
        proj3_sub: "Sviluppo Hardware e Automazione | 2022",
        proj4_sub: "Studi Tecnici e Progetti di Ingegneria | 2010"
    },
    fr: {
        proj1_sub: "Développement et mise en œuvre de systèmes d'information géographique | 2025",
        proj2_sub: "Étude hydrologique et gestion environnementale | 2024",
        proj3_sub: "Développement de matériel et automatisation | 2022",
        proj4_sub: "Études techniques et projets d'ingénierie | 2010"
    }
};

// Inyectar la Parte A en el diccionario global
Object.keys(fixedSubtitlesPartA).forEach(lang => {
    if (!translations[lang]) translations[lang] = {};
    Object.assign(translations[lang], fixedSubtitlesPartA[lang]);
});
// DICCIONARIO UNIFICADO DE SUBTÍTULOS DE PROYECTOS - PARTE B
const fixedSubtitlesPartB = {
    pt: {
        proj1_sub: "Desenvolvimento e Implementação de Sistemas de Informação Geográfica | 2025",
        proj2_sub: "Estudo Hidrológico e Gestão Ambiental | 2024",
        proj3_sub: "Desenvolvimento de Hardware e Automação | 2022",
        proj4_sub: "Estudos Técnicos e Projetos de Engenharia | 2010"
    },
    de: {
        proj1_sub: "Entwicklung und Implementierung von Geoinformationssystemen | 2025",
        proj2_sub: "Hydrologische Studie und Umweltmanagement | 2024",
        proj3_sub: "Hardwareentwicklung und Automatisierung | 2022",
        proj4_sub: "Technische Studien und Ingenieurprojekte | 2010"
    },
    zh: {
        proj1_sub: "地理信息系统 (GIS) 开发与应用实务 | 2025年",
        proj2_sub: "水文研究与环境 management 评估蓝皮书 | 2024年",
        proj3_sub: "物联网智能硬件研发与垂直自动化 | 2022年",
        proj4_sub: "绿色能源工程技术研究与系统设计规划项目 | 2010年"
    },
    ar: {
        proj1_sub: "تطوير وتنفيذ نظم المعلومات الجغرافية | 2025",
        proj2_sub: "دراسة هيدرولوجية وإدارة بيئية | 2024",
        proj3_sub: "تطوير الأجهزة والأتمتة | 2022",
        proj4_sub: "الدراسات الفنية ومشاريع الهندسة | 2010"
    }
};

// Inyectar la Parte B en el diccionario global sin pisar idiomas anteriores
Object.keys(fixedSubtitlesPartB).forEach(lang => {
    if (!translations[lang]) translations[lang] = {};
    Object.assign(translations[lang], fixedSubtitlesPartB[lang]);
});
function changeLanguage(lang) {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // <-- Esto fuerza la actualización real del HTML
        }
    });
}
