import { PromiseItem, ModuleWeek, BonusItem, TestimonialItem, FaqItem } from '../types';

export const MAIN_HEADLINE =
  'Transforme o comportamento do seu cão em 30 dias (ou menos) usando o poder do reforço positivo — sem gritos, sem força bruta e sem coleiras de estrangulamento.';

export const MAIN_SUBTITLE =
  'O manual prático definitivo que ensina a linguagem que seu cão realmente entende. Desenvolva obediência voluntária, passeios prazerosos e calma absoluta dentro de casa em apenas 10 a 15 minutos diários de exercícios prazerosos.';

export const SECONDARY_PROMISES: PromiseItem[] = [
  {
    id: 'obediencia-sem-repeticao',
    title: 'Obediência sem Repetição',
    promiseQuote:
      'Aprenda como fazer o seu cão olhar e responder de primeira, sem precisar repetir o nome dele 5 vezes como se estivesse a ignorá-lo.',
    pain: 'Você chama pelo nome, repete alto, faz sons com a boca e o cão simplesmente continua focado em outra coisa ou te ignora completamente.',
    solution:
      'Implementação do "Marcador de Atenção Instantânea": seu cão aprende que fazer contato visual imediato é a coisa mais vantajosa do mundo.',
    actionSummary: 'Contato visual em menos de 1 segundo sob qualquer distração.',
    badge: 'Comunicação Básica',
  },
  {
    id: 'passeios-sem-estresse',
    title: 'Passeios Sem Estresse',
    promiseQuote:
      'Elimine os puxões de coleira e transforme as caminhadas diárias num momento de puro lazer e tranquilidade.',
    pain: 'Caminhadas que parecem uma sessão de musculação forçada, braço dolorido, cão engasgando na guia e puxando em direção a tudo.',
    solution:
      'Técnica da "Guia Frouxa Natural": o cão aprende o prazer de sincronizar o ritmo dele com o seu, mantendo a guia com curvatura em U.',
    actionSummary: 'Passeios leves e relaxantes com apenas uma mão na guia.',
    badge: 'Controle Externo',
  },
  {
    id: 'visitas-sem-constrangimento',
    title: 'Visitas Sem Constrangimento',
    promiseQuote:
      'Acabe com o hábito do seu cão de pular nas visitas ou enlouquecer toda vez que a campainha toca.',
    pain: 'Amigos chegando e você correndo para trancar o cão no quarto, roupas sujas com patas, latidos ensurdecedores com a campainha.',
    solution:
      'Protocolo do "Comando Lugar com Condicionamento Positivo": ao som da campainha, o cão vai automaticamente para a caminha esperar um petisco.',
    actionSummary: 'Recepção educada e calma para qualquer convidado.',
    badge: 'Boas Maneiras',
  },
  {
    id: 'seguranca-e-liberdade',
    title: 'Segurança e Liberdade',
    promiseQuote:
      'Domine o comando de chamado vital que faz o seu cão voltar para si imediatamente em qualquer situação de perigo.',
    pain: 'Medo constante de o portão abrir ou da coleira soltar na rua e o cão sair correndo em direção a carros ou outros animais sem responder.',
    solution:
      'O "Chamado de Emergência Blindado": uma resposta reflexa e incondicional construída com valor de recompensa ultra-elevado.',
    actionSummary: 'Retorno instantâneo mesmo solto em parques abertos.',
    badge: 'Segurança Máxima',
  },
  {
    id: 'paz-e-sossego',
    title: 'Paz e Sossego em Casa',
    promiseQuote:
      'Controle a hiperatividade e a ansiedade do seu cão ensinando comandos de descanso e permanência.',
    pain: 'Cão inquieto o tempo todo, choramingando, pedindo comida na mesa, destruindo chinelos e incapaz de relaxar sozinho.',
    solution:
      'Condicionamento do "Modo Desligar": estímulos mentais corretos que saciam a necessidade biológica canina e induzem sono restaurador.',
    actionSummary: 'Cão calmo, seguro e relaxado nos seus momentos de descanso.',
    badge: 'Equilíbrio Emocional',
  },
  {
    id: 'metodo-pratico-rapido',
    title: 'Método Prático e Rápido',
    promiseQuote:
      'Exercícios simples de poucos minutos por dia que funcionam até mesmo para cães mais agitados.',
    pain: 'Achar que adestramento exige horas diárias, aulas caras com adestradores agressivos ou meses de teorias complexas.',
    solution:
      'Micro-sessões de 10 a 15 minutos integradas na sua rotina diária (antes da refeição ou durante o passeio matinal).',
    actionSummary: 'Resultados visíveis nos primeiros 7 a 10 dias de prática.',
    badge: 'Rotina Sem Complicação',
  },
];

export const MODULES_30_DAYS: ModuleWeek[] = [
  {
    week: 1,
    title: 'Semana 1: A Conexão e o Foco de Primeira',
    description:
      'Estabeleça os pilares da comunicação clara verbal e gestual. Seu cão aprende a prestar atenção em você espontaneamente.',
    topics: [
      'A psicologia do Reforço Positivo: por que cães aprendem 3x mais rápido sem medo',
      'O Marcador Positivo (Clicker ou palavra marcadora como "Muito Bem")',
      'Eliminando a necessidade de repetir o nome várias vezes',
      'Treino do olhar magnético: foco no tutor mesmo com brinquedos no chão',
    ],
    keyOutcome: 'Cão olhando nos seus olhos e atendendo ao nome na primeira tentativa.',
    exerciseTime: '10 min/dia',
  },
  {
    week: 2,
    title: 'Semana 2: O Passeio Perfeito e a Guia Frouxa',
    description:
      'Diga adeus aos braços doloridos e aos puxões constantes. Transforme o passeio no momento mais agradável do dia.',
    topics: [
      'A anatomia do puxão: por que puxar de volta só faz o cão puxar mais forte',
      'O treino dos "Passos com Guia em U" dentro de casa antes de ir à rua',
      'Como lidar com distrações externas (outros cães, pássaros e motos)',
      'O comando "Junto" sem nenhuma força mecânica ou broncas',
    ],
    keyOutcome: 'Caminhadas relaxadas onde o cão acompanha seus passos com a guia solta.',
    exerciseTime: '12 min/dia',
  },
  {
    week: 3,
    title: 'Semana 3: Boas Maneiras em Casa e Campainha Silenciosa',
    description:
      'Recupere a tranquilidade do seu lar. Ensine seu cão a lidar com visitas, comida na mesa e estímulos sonoros.',
    topics: [
      'O Protocolo Anti-Pulo: como extinguir a saudade estabanada em 5 dias',
      'Campainha Zen: dessensibilização sonora para acabar com a histeria na porta',
      'O comando vital "Fica" e o envio para a caminha ("Vai pro seu Lugar")',
      'Como eliminar pedidos insistentes durante almoços e jantares',
    ],
    keyOutcome: 'Visitas entrando em casa sem sujeira de patas e sem cão descontrolado.',
    exerciseTime: '15 min/dia',
  },
  {
    week: 4,
    title: 'Semana 4: Chamado Blindado, Autocontrole e Liberdade',
    description:
      'A consolidação definitiva. Seu cão obedecendo em situações de alta distração e em momentos de perigo iminente.',
    topics: [
      'O comando de chamado de emergência: retorno imediato a 100% de velocidade',
      'O comando "Larga" e "Deixa": proteção contra ingestão de alimentos perigosos',
      'Treino de autocontrole com bolinha, petiscos e distrações em movimento',
      'Plano de manutenção vitalícia para consolidar os comportamentos para sempre',
    ],
    keyOutcome: 'Segurança absoluta para soltar a guia em locais permitidos com controle total.',
    exerciseTime: '15 min/dia',
  },
];

export const EXCLUSIVE_BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'Bônus #1: O Guia de Socialização Segura Sem Reatividade',
    subtitle: 'Aprenda a apresentar seu cão a pessoas estranhas, crianças e outros cães sem tensão.',
    originalPrice: 'R$ 67,00',
    description:
      'Um manual passo a passo para evitar brigas, latidos defensivos na grade e traumas de infância em cães de qualquer porte.',
    tag: 'E-book Complementar',
  },
  {
    id: 'bonus-2',
    title: 'Bônus #2: Checklist Diário de 10 Minutos para Rotinas Corridas',
    subtitle: 'Não tem tempo? Tenha um cronograma impresso de exercícios ultra-rápidos.',
    originalPrice: 'R$ 47,00',
    description:
      'Dividido em micro-hábitos que você faz enquanto espera a água do café ferver ou nos 5 minutos antes de colocar a tigela de ração.',
    tag: 'Guia Imprimível em PDF',
  },
  {
    id: 'bonus-3',
    title: 'Bônus #3: Manual SOS Anti-Ansiedade de Separação',
    subtitle: 'Como sair de casa sem que seu cão chore, uive ou destrua portas.',
    originalPrice: 'R$ 77,00',
    description:
      'As técnicas científicas de dessensibilização para chaves, sapatos e saída da porta que devolvem a segurança emocional ao cão.',
    tag: 'Manual Prático',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Mariana Duarte',
    location: 'Belo Horizonte, MG',
    dogName: 'Thor',
    dogBreed: 'Golden Retriever',
    dogAge: '1 ano e meio',
    beforeProblem: 'Puxava tanto na guia que desloquei o ombro duas vezes. Passear era um pesadelo.',
    afterResult: 'Hoje anda do meu lado olhando para mim. O método da guia frouxa funcionou em 9 dias!',
    quote:
      'Eu já tinha gastado mais de 1.200 reais com um adestrador que usava tranco e só deixava o Thor estressado. Com o Guia de Adestramento Canino, em menos de 2 semanas de reforço positivo a mudança foi da água para o vinho.',
    daysToResult: '9 dias',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Carlos Eduardo Mendes',
    location: 'São Paulo, SP',
    dogName: 'Bento',
    dogBreed: 'Vira-lata (SRD)',
    dogAge: '2 anos',
    beforeProblem: 'Pulava sujo em todas as visitas e latia desesperadamente na campainha.',
    afterResult: 'Ao tocar a campainha ele corre direto para a caminha dele e aguarda o petisco.',
    quote:
      'Receber pessoas em casa era uma vergonha. As visitas ficavam assustadas com a afobação dele. O módulo de boas maneiras e o comando de descanso resolveram com uma simplicidade absurda.',
    daysToResult: '12 dias',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Juliana Vasconcelos',
    location: 'Curitiba, PR',
    dogName: 'Luna',
    dogBreed: 'Border Collie',
    dogAge: '8 meses',
    beforeProblem: 'Hiperativa, destruía móveis, não parava um segundo e ignorava o nome.',
    afterResult: 'Aprendeu a desligar, atende de primeira e gasta energia mental com foco.',
    quote:
      'Border Collies são famosos por serem elétricos, mas o exercício de atenção e o modo desligar do guia salvaram o meu sofá e a minha sanidade. Ela olha nos meus olhos no exato segundo em que falo o nome dela!',
    daysToResult: '7 dias',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O método realmente funciona para cães adultos ou idosos?',
    answer:
      'Sim, com 100% de certeza. O cérebro canino tem neuroplasticidade em qualquer fase da vida. Cães adultos e idosos aprendem tão rápido quanto filhotes quando a recompensa é motivadora e a comunicação não gera estresse ou medo.',
    category: 'Eficácia',
  },
  {
    question: 'Meu cão é extremamente teimoso e hiperativo. Vai funcionar?',
    answer:
      'Não existe cão teimoso; existe cão confuso ou pouco motivado. Cães hiperativos são justamente os que mais se beneficiam do reforço positivo, porque o método canaliza a energia mental que eles têm acumulada em cooperação voluntária.',
    category: 'Comportamento',
  },
  {
    question: 'Preciso comprar equipamentos caros como coleiras especiais?',
    answer:
      'Não! Você não precisa de enforcadores, coleiras de choque ou nenhum acessório caro. Tudo o que você precisa é da guia comum que você já tem em casa e de pequenos pedacinhos de petisco ou da própria ração do seu cão.',
    category: 'Materiais',
  },
  {
    question: 'Quanto tempo por dia preciso dedicar aos treinos?',
    answer:
      'Apenas 10 a 15 minutos diários. Inclusive, sessões curtas são muito mais eficientes para o cérebro canino do que treinos longos e cansativos. Você pode fazer durante a rotina normal do seu dia.',
    category: 'Tempo',
  },
  {
    question: 'Como e quando recebo o acesso ao Guia?',
    answer:
      'O acesso é imediato! Assim que o seu pagamento for confirmado (no PIX ou Cartão é aprovado em segundos), você recebe em seu e-mail todos os dados de acesso para ler no celular, tablet, computador ou até imprimir se preferir.',
    category: 'Acesso',
  },
  {
    question: 'E se não funcionar para o meu cachorro?',
    answer:
      'Você tem 7 dias de garantia incondicional blindada. Se por qualquer motivo você aplicar as técnicas e achar que não teve resultados, basta mandar um único e-mail para a nossa equipe e devolveremos 100% do seu dinheiro, sem perguntas e sem ressentimentos.',
    category: 'Garantia',
  },
];

export const PRICING_DETAILS = {
  regularPrice: 'R$ 97,00',
  currentPrice: 'R$ 10,00',
  installments: '2x de R$ 5,35',
  savings: 'Economia de R$ 87,00 (90% OFF)',
  guaranteeDays: 7,
};
