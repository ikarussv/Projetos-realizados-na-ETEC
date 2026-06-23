const TRANSLATIONS = {
    pt: {
        "nav.home": "Início",
        "nav.types": "Tipos de Fake News",
        "nav.identify": "Como Identificar",
        "nav.examples": "Exemplos Reais",
        "nav.quiz": "Quiz Interativo",
        "nav.map": "Mapa de Riscos",
        "nav.news": "Notícias & Golpes",
        "nav.contact": "Contato",

        "ticker.live": "AO VIVO",
        "ticker.alerts": "ALERTAS",

        "footer.credit": "© 2026 Portal Alerta Digital. desenvolvido por Ícaro Assunção, aluno 1-DS-3 turma noite",

        "home.heroPart1": "O que são",
        "home.heroHighlight": "Fake News",
        "home.heroQuestion": "?",
        "home.heroParagraph": "Fake News são notícias falsas criadas para enganar as pessoas, espalhar boatos e prejudicar a sociedade. Elas parecem reais, mas são feitas para gerar cliques, visualizações ou manipular a opinião pública.",
        "home.heroCta": "Aprenda a se Proteger",
        "home.badgeTitle": "Pense antes de compartilhar!",
        "home.badgeText": "A desinformação se espalha mais rápido quando não checamos a fonte.",
        "home.exploreTitle": "Explore o Portal",
        "home.exploreSubtitle": "Navegue pelas seções e aprenda a se proteger da desinformação e dos golpes mais comuns.",

        "qlc.types.title": "Tipos de Fake News",
        "qlc.types.desc": "Conheça as formas mais comuns de desinformação.",
        "qlc.identify.title": "Como Identificar",
        "qlc.identify.desc": "Um passo a passo prático para checar qualquer notícia.",
        "qlc.examples.title": "Exemplos Reais",
        "qlc.examples.desc": "Compare boatos e notícias verdadeiras, e teste frases suspeitas.",
        "qlc.quiz.title": "Quiz Interativo",
        "qlc.quiz.desc": "Teste seus conhecimentos sobre fake news.",
        "qlc.map.title": "Mapa de Riscos",
        "qlc.map.desc": "Veja os bairros de São Vicente com mais ocorrências de roubo e furto.",
        "qlc.news.title": "Notícias & Golpes",
        "qlc.news.desc": "Fontes confiáveis de tecnologia e os principais golpes digitais para você reconhecer.",
        "qlc.contact.title": "Contato",
        "qlc.contact.desc": "Encontrou um golpe ou uma fake news? Denuncie aqui.",

        "types.heroTitle": "Tipos de Fake News",
        "types.heroSubtitle": "Entenda as diferentes formas que a desinformação pode assumir.",
        "types.title": "Principais Tipos de Desinformação",
        "types.subtitle": "A mentira na internet se veste de várias formas. Conheça as mais comuns:",
        "types.card1.title": "Completamente Falsas",
        "types.card1.desc": "Notícias inventadas do zero, sem nenhum fundo de verdade, criadas puramente para enganar ou causar pânico.",
        "types.card2.title": "Conteúdo Enganoso",
        "types.card2.desc": "Usa dados reais ou falas verdadeiras de forma distorcida para fazer você chegar a uma conclusão errada.",
        "types.card3.title": "Títulos Sensacionalistas (Clickbait)",
        "types.card3.desc": "Manchetes exageradas que servem apenas para atrair cliques e gerar dinheiro com anúncios, sem compromisso com a verdade.",
        "types.card4.title": "Imagens e Vídeos Manipulados",
        "types.card4.desc": "Fotos cortadas, montagens ou vídeos alterados (e até Deepfakes criados por inteligência artificial) para inventar fatos.",
        "types.card5.title": "Fora de Contexto",
        "types.card5.desc": "Uma notícia antiga e verdadeira é republicada hoje como se fosse atual, mudando completamente o sentido do acontecimento.",

        "identify.heroTitle": "Como Identificar Notícias Falsas",
        "identify.heroSubtitle": "Um guia prático antes de repassar qualquer mensagem.",
        "identify.title": "Guia Prático: Como Identificar Notícias Falsas",
        "identify.subtitle": "Siga este passo a passo antes de repassar qualquer mensagem no WhatsApp ou redes sociais:",
        "identify.step1.title": "Verifique a Fonte",
        "identify.step1.desc": "Olhe o nome do site. É um portal de notícias conhecido e confiável? Se for um blog desconhecido ou cheio de anúncios estranhos, desconfie.",
        "identify.step2.title": "Conferir a Data",
        "identify.step2.desc": "Muitas boatos são notícias reais que aconteceram anos atrás. Veja o dia, mês e ano da publicação antes de reagir.",
        "identify.step3.title": "Comparar com outros sites",
        "identify.step3.desc": "Jogue o título no Google. Se a notícia for muito importante e apenas um site estiver falando sobre ela, há uma enorme chance de ser falsa.",
        "identify.step4.title": "Desconfie de Manchetes Exageradas",
        "identify.step4.desc": "Títulos com muitas exclamações (!!!), letras maiúsculas (URGENTE) ou palavras apelativas (\"O sistema não quer que você saiba\") são sinais clássicos de alerta.",
        "identify.step5.title": "Checar Imagens",
        "identify.step5.desc": "Use ferramentas de busca reversa de imagem ou repare se a foto parece antiga, fora de foco ou desconexa com o texto apresentado.",

        "examples.heroTitle": "Exemplos Reais",
        "examples.heroSubtitle": "Veja a desinformação na prática e teste suas próprias frases suspeitas.",
        "examples.title": "Exemplos Educativos",
        "examples.subtitle": "Veja como a desinformação funciona na prática comparada com a realidade:",
        "examples.fakeBadge": "Boato / Fake News",
        "examples.fakeTitle": "\"Chá de casca de laranja cura qualquer vírus em 24 horas!\"",
        "examples.fakeWhy": "Por que é falso?",
        "examples.fakeDesc": "Não existe comprovação científica. Foi espalhado em grupos de mensagens usando o nome de um \"médico famoso\" que nem sequer existe.",
        "examples.realBadge": "Notícia Verdadeira",
        "examples.realTitle": "\"Cientistas reforçam a importância de uma alimentação equilibrada para a imunidade\"",
        "examples.realWhy": "Por que é real?",
        "examples.realDesc": "Publicado por portais de saúde renomados, traz entrevistas com médicos reais e explica que alimentos ajudam na prevenção, mas não curam doenças sozinhos.",
        "examples.checkerTitle": "Simulador de Verificação",
        "examples.checkerText": "Cole uma frase ou manchete suspeita abaixo para simular uma checagem rápida:",
        "examples.checkerPlaceholder": "Ex: Ganhe um brinde grátis clicando neste link agora...",
        "examples.checkerButton": "Analisar Notícia",
        "examples.checkerEmptyAlert": "Por favor, digite alguma frase ou texto para analisar!",

        "quiz.heroTitle": "Quiz Interativo",
        "quiz.heroSubtitle": "Teste seus conhecimentos e descubra se você sabe identificar uma Fake News!",
        "quiz.title": "Teste Seus Conhecimentos",
        "quiz.subtitle": "Responda ao nosso quiz rápido e descubra se você sabe identificar uma Fake News!",
        "quiz.resultTitle": "Quiz Concluído!",
        "quiz.tryAgain": "Tentar Novamente",

        "map.heroTitle": "Mapa de Pontos de Atenção",
        "map.heroSubtitle": "Onde mais ocorrem roubos e furtos em São Vicente — e por que golpes online não aparecem num mapa.",
        "map.title": "Roubos e Furtos por Bairro em São Vicente",
        "map.subtitle": "Dados oficiais da Secretaria de Segurança Pública de SP, agregados por bairro, mostram onde a atenção deve ser redobrada.",
        "map.sidebarTitle": "Bairros com mais ocorrências",
        "map.legendHigh": "Alta incidência",
        "map.legendMedium": "Incidência média",
        "map.legendLow": "Incidência menor",
        "map.scamCalloutTitle": "E os golpes (estelionato digital)? Por que não estão no mapa",
        "map.scamCalloutText": "Diferente do roubo e do furto, que acontecem em um lugar físico, golpes como falso suporte bancário, falsas promoções e fraudes via PIX ou WhatsApp acontecem pelo telefone ou internet — não têm um endereço fixo. Por isso, a melhor defesa contra eles não é evitar um bairro, e sim aplicar as mesmas técnicas de verificação que você aprendeu neste portal.",
        "map.tipsTitle": "Como se proteger no dia a dia",
        "map.tip1.title": "Na rua",
        "map.tip1.desc": "Evite usar o celular distraidamente em pontos de ônibus e calçadas movimentadas, principalmente no Centro e nos bairros listados ao lado.",
        "map.tip2.title": "Em casa",
        "map.tip2.desc": "Desconfie de ligações ou mensagens pedindo dados bancários, mesmo que pareçam vir do seu banco ou de órgãos públicos.",
        "map.tip3.title": "No WhatsApp e redes sociais",
        "map.tip3.desc": "Nunca compartilhe códigos de verificação (SMS) e confirme promoções diretamente no site oficial da empresa.",
        "map.tip4.title": "Em caso de emergência",
        "map.tip4.desc": "Ligue 190 (Polícia Militar) para ocorrências em andamento ou registre um Boletim de Ocorrência na delegacia mais próxima.",
        "map.sourceNote": "Fontes: Secretaria de Segurança Pública de São Paulo (SSP-SP), via reportagens do jornal A Tribuna (2024) e Diário do Litoral / Santa Portal (2025). Os números representam o total de boletins de roubo e furto (incluindo celulares) registrados por bairro nos períodos consultados. Os marcadores foram posicionados no centro aproximado de cada bairro — não indicam endereços exatos. Para dados atualizados em tempo real, consulte o portal da SSP-SP ou a delegacia local.",
        "map.viewOptionsTitle": "Mais formas de visualizar o local",
        "map.viewOptionsNote": "Use o botão no canto superior direito do mapa para alternar entre visão de Mapa e Satélite. Clique em qualquer marcador para abrir aquele ponto direto no Street View (Google) ou no Apple Maps.",
        "map.layerStreet": "Mapa",
        "map.layerSatellite": "Satélite",
        "map.streetView": "Ver no Street View",
        "map.appleMaps": "Ver no Apple Maps",

        "news.heroTitle": "Notícias de TI e Golpes Digitais",
        "news.heroSubtitle": "Fontes confiáveis para se manter informado e os golpes mais comuns para você reconhecer de longe.",
        "news.sourcesTitle": "Onde Acompanhar Notícias Confiáveis de Tecnologia",
        "news.sourcesSubtitle": "Estes veículos são referência em tecnologia e checagem de fatos no Brasil. Clique para visitar o site oficial de cada um:",
        "news.source1.name": "Olhar Digital",
        "news.source1.desc": "Um dos maiores portais de tecnologia do Brasil, com notícias diárias sobre inovação, inteligência artificial, gadgets e segurança digital.",
        "news.source2.name": "Canaltech (Segurança)",
        "news.source2.desc": "Cobertura completa de tecnologia, com uma editoria dedicada à Segurança onde golpes e fraudes digitais são destrinchados em detalhes.",
        "news.source3.name": "Fato ou Fake (G1)",
        "news.source3.desc": "Serviço de checagem mantido pela Globo, que verifica boatos e conteúdos suspeitos que circulam na internet e no WhatsApp.",
        "news.source4.name": "Agência Lupa",
        "news.source4.desc": "Primeira agência de fact-checking do Brasil. Investiga declarações públicas e boatos virais com metodologia jornalística transparente.",
        "news.sourcesNote": "Esses links abrem em uma nova aba e levam a sites externos. O Portal Alerta Digital não tem qualquer vínculo oficial com esses veículos — são apenas sugestões de fontes confiáveis.",
        "news.scamsTitle": "Principais Tipos de Golpes Digitais",
        "news.scamsSubtitle": "Conheça as táticas mais usadas por criminosos para roubar dados, dinheiro e senhas:",
        "news.scam1.title": "Engenharia Social",
        "news.scam1.desc": "A base de quase todo golpe digital: o criminoso manipula emoções como urgência, medo ou confiança para te convencer a agir sem pensar, sem precisar 'hackear' nada.",
        "news.scam2.title": "Phishing",
        "news.scam2.desc": "E-mails, SMS ou mensagens com links falsos que imitam bancos, lojas ou órgãos públicos para roubar senhas e dados do cartão.",
        "news.scam3.title": "Vishing (Falsa Central de Atendimento)",
        "news.scam3.desc": "Ligações de criminosos se passando por atendentes do banco ou de empresas, criando um clima de urgência para você revelar códigos de segurança.",
        "news.scam4.title": "Golpe do Pix e WhatsApp Clonado",
        "news.scam4.desc": "O criminoso clona seu número ou invade sua conta para pedir dinheiro 'emprestado' aos seus contatos, fingindo ser você em uma emergência.",
        "news.scam5.title": "Falso Suporte Técnico",
        "news.scam5.desc": "Pop-ups ou ligações alegando que seu computador está infectado, pedindo acesso remoto ao aparelho ou pagamento por um 'reparo' falso.",
        "news.scam6.title": "Falso Boleto ou Fatura",
        "news.scam6.desc": "Boletos com o código de barras alterado, redirecionando o pagamento direto para a conta do criminoso em vez do destinatário real.",
        "news.scam7.title": "Golpe do Amor (Romance Scam)",
        "news.scam7.desc": "Perfis falsos em redes sociais ou apps de namoro constroem um relacionamento de confiança ao longo de semanas só para depois pedir dinheiro.",
        "news.scam8.title": "Ransomware",
        "news.scam8.desc": "Um programa malicioso 'sequestra' os arquivos do dispositivo, criptografando tudo, e só libera o acesso de volta após o pagamento de um resgate.",
        "news.scamsTipTitle": "Como se proteger desses golpes",
        "news.scamsTipText": "Nunca compartilhe senhas, códigos de SMS ou dados bancários por telefone ou WhatsApp. Bancos e órgãos públicos nunca pedem isso. Em caso de dúvida, desligue e ligue de volta usando o número oficial da instituição.",

        "contact.heroTitle": "Central de Denúncias",
        "contact.heroSubtitle": "Encontrou uma fake news ou um golpe digital? Ajude a proteger outras pessoas relatando aqui.",
        "contact.title": "Denuncie um Golpe ou uma Fake News",
        "contact.subtitle": "Preencha o formulário com o máximo de detalhes possível: de onde veio a mensagem, qual o link ou número utilizado, e o que foi pedido a você.",
        "contact.placeholderTitle": "Espaço reservado para o formulário de denúncia",
        "contact.placeholderText": "Este espaço foi reservado para receber o formulário de denúncias. Insira aqui o código de incorporação (iframe) do Google Forms, Typeform ou outro serviço, ou os campos do formulário em HTML.",
        "contact.altTitle": "Outras formas de contato",
        "contact.alt1.title": "E-mail",
        "contact.alt1.desc": "Envie prints, links e detalhes do golpe para o e-mail de contato do portal.",
        "contact.alt2.title": "Boletim de Ocorrência",
        "contact.alt2.desc": "Se houve prejuízo financeiro, registre um B.O. na delegacia mais próxima ou pela delegacia eletrônica.",
        "contact.alt3.title": "SaferNet Brasil",
        "contact.alt3.desc": "ONG brasileira dedicada a receber denúncias de crimes e violações de direitos na internet, em safernet.org.br."
    },

    en: {
        "nav.home": "Home",
        "nav.types": "Types of Fake News",
        "nav.identify": "How to Identify",
        "nav.examples": "Real Examples",
        "nav.quiz": "Interactive Quiz",
        "nav.map": "Risk Map",
        "nav.news": "News & Scams",
        "nav.contact": "Contact",

        "ticker.live": "LIVE",
        "ticker.alerts": "ALERTS",

        "footer.credit": "© 2026 Portal Alerta Digital. Developed by Ícaro Assunção, student of class 1-DS-3 (night).",

        "home.heroPart1": "What are",
        "home.heroHighlight": "Fake News",
        "home.heroQuestion": "?",
        "home.heroParagraph": "Fake news are false stories created to deceive people, spread rumors and harm society. They look real, but are made to generate clicks, views, or manipulate public opinion.",
        "home.heroCta": "Learn How to Protect Yourself",
        "home.badgeTitle": "Think before you share!",
        "home.badgeText": "Disinformation spreads faster when we don't check the source.",
        "home.exploreTitle": "Explore the Portal",
        "home.exploreSubtitle": "Browse the sections and learn to protect yourself from disinformation and the most common scams.",

        "qlc.types.title": "Types of Fake News",
        "qlc.types.desc": "Learn about the most common forms of disinformation.",
        "qlc.identify.title": "How to Identify",
        "qlc.identify.desc": "A practical step-by-step guide to check any news story.",
        "qlc.examples.title": "Real Examples",
        "qlc.examples.desc": "Compare rumors with true news, and test suspicious phrases.",
        "qlc.quiz.title": "Interactive Quiz",
        "qlc.quiz.desc": "Test your knowledge about fake news.",
        "qlc.map.title": "Risk Map",
        "qlc.map.desc": "See the neighborhoods in São Vicente with the most robbery and theft reports.",
        "qlc.news.title": "News & Scams",
        "qlc.news.desc": "Reliable tech sources and the main digital scams to help you spot them.",
        "qlc.contact.title": "Contact",
        "qlc.contact.desc": "Found a scam or fake news? Report it here.",

        "types.heroTitle": "Types of Fake News",
        "types.heroSubtitle": "Understand the different shapes disinformation can take.",
        "types.title": "Main Types of Disinformation",
        "types.subtitle": "Lies on the internet wear many disguises. Get to know the most common ones:",
        "types.card1.title": "Completely False",
        "types.card1.desc": "Stories invented from scratch, with no basis in truth, created purely to deceive or cause panic.",
        "types.card2.title": "Misleading Content",
        "types.card2.desc": "Uses real data or genuine statements in a distorted way to lead you to a wrong conclusion.",
        "types.card3.title": "Sensational Headlines (Clickbait)",
        "types.card3.desc": "Exaggerated headlines that exist only to attract clicks and generate ad revenue, with no commitment to the truth.",
        "types.card4.title": "Manipulated Images and Videos",
        "types.card4.desc": "Cropped photos, montages, or altered videos (including AI-generated deepfakes) used to invent facts.",
        "types.card5.title": "Out of Context",
        "types.card5.desc": "An old, true story is republished today as if it were current, completely changing the meaning of the event.",

        "identify.heroTitle": "How to Identify Fake News",
        "identify.heroSubtitle": "A practical guide before you forward any message.",
        "identify.title": "Practical Guide: How to Identify Fake News",
        "identify.subtitle": "Follow these steps before forwarding any message on WhatsApp or social media:",
        "identify.step1.title": "Check the Source",
        "identify.step1.desc": "Look at the website's name. Is it a well-known, trustworthy news outlet? If it's an unknown blog full of strange ads, be suspicious.",
        "identify.step2.title": "Check the Date",
        "identify.step2.desc": "Many rumors are real news stories from years ago. Check the day, month, and year of publication before reacting.",
        "identify.step3.title": "Compare with Other Sites",
        "identify.step3.desc": "Search the headline on Google. If the story is truly major and only one site is reporting it, there's a strong chance it's false.",
        "identify.step4.title": "Be Wary of Exaggerated Headlines",
        "identify.step4.desc": "Titles with lots of exclamation marks (!!!), all caps (URGENT), or sensational phrases (\"The system doesn't want you to know\") are classic warning signs.",
        "identify.step5.title": "Check the Images",
        "identify.step5.desc": "Use reverse image search tools, or notice if the photo looks old, out of focus, or disconnected from the text presented.",

        "examples.heroTitle": "Real Examples",
        "examples.heroSubtitle": "See disinformation in practice and test your own suspicious phrases.",
        "examples.title": "Educational Examples",
        "examples.subtitle": "See how disinformation works in practice compared to reality:",
        "examples.fakeBadge": "Rumor / Fake News",
        "examples.fakeTitle": "\"Orange peel tea cures any virus in 24 hours!\"",
        "examples.fakeWhy": "Why is it false?",
        "examples.fakeDesc": "There is no scientific evidence. It spread through message groups using the name of a \"famous doctor\" who doesn't even exist.",
        "examples.realBadge": "True News",
        "examples.realTitle": "\"Scientists reinforce the importance of a balanced diet for immunity\"",
        "examples.realWhy": "Why is it real?",
        "examples.realDesc": "Published by reputable health outlets, it includes interviews with real doctors and explains that food helps with prevention, but doesn't cure diseases on its own.",
        "examples.checkerTitle": "Verification Simulator",
        "examples.checkerText": "Paste a suspicious phrase or headline below to simulate a quick check:",
        "examples.checkerPlaceholder": "E.g.: Get a free gift by clicking this link now...",
        "examples.checkerButton": "Analyze Story",
        "examples.checkerEmptyAlert": "Please type a phrase or text to analyze!",

        "quiz.heroTitle": "Interactive Quiz",
        "quiz.heroSubtitle": "Test your knowledge and find out if you can spot fake news!",
        "quiz.title": "Test Your Knowledge",
        "quiz.subtitle": "Take our quick quiz and find out if you know how to identify fake news!",
        "quiz.resultTitle": "Quiz Completed!",
        "quiz.tryAgain": "Try Again",

        "map.heroTitle": "Risk Map",
        "map.heroSubtitle": "Where robberies and thefts happen most in São Vicente — and why online scams don't show up on a map.",
        "map.title": "Robberies and Thefts by Neighborhood in São Vicente",
        "map.subtitle": "Official data from the São Paulo State Public Security Department, aggregated by neighborhood, shows where extra caution is needed.",
        "map.sidebarTitle": "Neighborhoods with the most reports",
        "map.legendHigh": "High incidence",
        "map.legendMedium": "Medium incidence",
        "map.legendLow": "Lower incidence",
        "map.scamCalloutTitle": "What about scams (digital fraud)? Why aren't they on the map",
        "map.scamCalloutText": "Unlike robbery and theft, which happen in a physical place, scams such as fake bank support calls, fake promotions, and PIX or WhatsApp fraud happen over the phone or internet — they don't have a fixed address. That's why the best defense against them isn't avoiding a neighborhood, but applying the same verification techniques you learned on this site.",
        "map.tipsTitle": "How to protect yourself day to day",
        "map.tip1.title": "On the street",
        "map.tip1.desc": "Avoid using your phone distractedly at bus stops and busy sidewalks, especially in the Centro and the neighborhoods listed alongside the map.",
        "map.tip2.title": "At home",
        "map.tip2.desc": "Be suspicious of calls or messages asking for banking details, even if they appear to come from your bank or a government agency.",
        "map.tip3.title": "On WhatsApp and social media",
        "map.tip3.desc": "Never share verification codes (SMS), and confirm promotions directly on the company's official website.",
        "map.tip4.title": "In an emergency",
        "map.tip4.desc": "Call 190 (Military Police) for ongoing incidents, or file a police report at your nearest station.",
        "map.sourceNote": "Sources: São Paulo State Public Security Department (SSP-SP), via reporting from A Tribuna newspaper (2024) and Diário do Litoral / Santa Portal (2025). The figures represent the total robbery and theft reports (including cell phones) recorded per neighborhood for the periods consulted. Markers are placed at the approximate center of each neighborhood — they do not indicate exact addresses. For real-time data, consult the SSP-SP portal or your local police station.",
        "map.viewOptionsTitle": "More ways to view the location",
        "map.viewOptionsNote": "Use the button in the map's top-right corner to switch between Map and Satellite view. Click any marker to open that spot directly in Street View (Google) or Apple Maps.",
        "map.layerStreet": "Map",
        "map.layerSatellite": "Satellite",
        "map.streetView": "View on Street View",
        "map.appleMaps": "View on Apple Maps",

        "news.heroTitle": "Tech News & Digital Scams",
        "news.heroSubtitle": "Reliable sources to stay informed, and the most common scams so you can spot them from a mile away.",
        "news.sourcesTitle": "Where to Follow Reliable Tech News",
        "news.sourcesSubtitle": "These outlets are references in technology and fact-checking in Brazil. Click to visit each official site:",
        "news.source1.name": "Olhar Digital",
        "news.source1.desc": "One of Brazil's largest tech portals, with daily news on innovation, artificial intelligence, gadgets, and digital security.",
        "news.source2.name": "Canaltech (Security)",
        "news.source2.desc": "Full tech coverage, with a dedicated Security section that breaks down digital scams and fraud in detail.",
        "news.source3.name": "Fato ou Fake (G1)",
        "news.source3.desc": "A fact-checking service run by Globo that verifies rumors and suspicious content circulating online and on WhatsApp.",
        "news.source4.name": "Agência Lupa",
        "news.source4.desc": "Brazil's first fact-checking agency. Investigates public statements and viral rumors using transparent journalistic methodology.",
        "news.sourcesNote": "These links open in a new tab and lead to external sites. Portal Alerta Digital has no official affiliation with these outlets — they're simply suggested reliable sources.",
        "news.scamsTitle": "Main Types of Digital Scams",
        "news.scamsSubtitle": "Learn the tactics criminals use most to steal data, money, and passwords:",
        "news.scam1.title": "Social Engineering",
        "news.scam1.desc": "The foundation of almost every digital scam: the criminal manipulates emotions like urgency, fear, or trust to get you to act without thinking — no 'hacking' required.",
        "news.scam2.title": "Phishing",
        "news.scam2.desc": "Emails, texts, or messages with fake links that mimic banks, stores, or government agencies to steal passwords and card details.",
        "news.scam3.title": "Vishing (Fake Call Center)",
        "news.scam3.desc": "Calls from criminals posing as bank or company representatives, creating a sense of urgency so you reveal security codes.",
        "news.scam4.title": "PIX & Cloned WhatsApp Scam",
        "news.scam4.desc": "The criminal clones your number or takes over your account to ask your contacts to 'lend' money, pretending to be you in an emergency.",
        "news.scam5.title": "Fake Tech Support",
        "news.scam5.desc": "Pop-ups or calls claiming your computer is infected, asking for remote access to the device or payment for a fake 'repair'.",
        "news.scam6.title": "Fake Bill or Invoice",
        "news.scam6.desc": "Bills with a tampered barcode that redirect payment straight to the criminal's account instead of the real recipient.",
        "news.scam7.title": "Romance Scam",
        "news.scam7.desc": "Fake profiles on social media or dating apps build a trusting relationship over weeks, only to later ask for money.",
        "news.scam8.title": "Ransomware",
        "news.scam8.desc": "Malicious software that 'kidnaps' files on a device by encrypting everything, only restoring access after a ransom is paid.",
        "news.scamsTipTitle": "How to protect yourself from these scams",
        "news.scamsTipText": "Never share passwords, SMS codes, or banking details over the phone or WhatsApp. Banks and government agencies never ask for this. If in doubt, hang up and call back using the institution's official number.",

        "contact.heroTitle": "Report Center",
        "contact.heroSubtitle": "Found fake news or a digital scam? Help protect others by reporting it here.",
        "contact.title": "Report a Scam or Fake News",
        "contact.subtitle": "Fill out the form with as much detail as possible: where the message came from, which link or number was used, and what was asked of you.",
        "contact.placeholderTitle": "Space reserved for the report form",
        "contact.placeholderText": "This space has been reserved to hold the report form. Insert the embed code (iframe) from Google Forms, Typeform, or another service here, or the HTML form fields.",
        "contact.altTitle": "Other Ways to Get in Touch",
        "contact.alt1.title": "Email",
        "contact.alt1.desc": "Send screenshots, links, and scam details to the portal's contact email.",
        "contact.alt2.title": "Police Report",
        "contact.alt2.desc": "If there was financial loss, file a police report at your nearest station or through the online police report system.",
        "contact.alt3.title": "SaferNet Brasil",
        "contact.alt3.desc": "Brazilian NGO dedicated to receiving reports of internet crimes and rights violations, at safernet.org.br."
    }
};

const DEFAULT_LANG = "pt";
const LANG_STORAGE_KEY = "alerta-digital-lang";

function getCurrentLang() {
    return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
}

function setCurrentLang(lang) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function translate(key, lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    return dict[key] !== undefined ? dict[key] : key;
}

function applyTranslations(lang) {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translate(key, lang);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", translate(key, lang));
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
        btn.classList.toggle("active-lang", btn.getAttribute("data-lang") === lang);
    });

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function initLanguageSwitcher() {
    const lang = getCurrentLang();
    applyTranslations(lang);

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const newLang = btn.getAttribute("data-lang");
            setCurrentLang(newLang);
            applyTranslations(newLang);
        });
    });
}

document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
