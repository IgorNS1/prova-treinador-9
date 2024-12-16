const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_9.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_9[currentQuestionIndex].question
    questions_page_9[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_9.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_9 = [
    {
        question: 'Por que nossas bandejas UBQ são consideradas um material circular?',
        answer: [
            { text: 'Porque são feitas de materiais reciclados e podem ser recicladas novamente.', correct: false },
            { text: 'Porque são feitas de plásticos que podem ser reutilizados diretamente.', correct: false },
            { text: 'Porque são feitas de resíduos orgânicos e plásticos reciclados que seriam encaminhados para aterro sanitário, mas com uma tecnologia conseguimos reutilizar esses resíduos como matéria prima para fabricação de novas bandejas.', correct: true },
            { text: 'Porque são biodegradáveis e não geram lixo.', correct: false },
        ]
    },
    {
        question: 'Por que o McDonalds se destaca no combate contra o desmatamento?',
        answer: [
            { text: 'Porque utilizamos carne proveniente de florestas replantadas.', correct: false },
            { text: 'Porque não utilizamos carne de origem animal.', correct: false },
            { text: 'Porque todos os nossos fornecedores seguem rigorosas práticas ambientais.', correct: false },
            { text: 'Somos a única companhia do setor que possui e cumpre a Política de Abastecimento de Carne Livre de Desmatamento do McDonald´s, que monitora por satélite a carne, desde o campo até a mesa dos clientes.', correct: true },
        ]
    },
    {
        question: 'Por que o reuso de água de ar condicionado e chuva nos ajudam nos pilares da receita do futuro?',
        answer: [
            { text: 'Reduzimos o consumo de água usando água de reuso para limpeza, jardinagem e sanitários.', correct: true },
            { text: 'Porque ajuda a economizar na compra de água potável.', correct: false },
            { text: 'Porque melhora a qualidade da água usada em processos internos.', correct: false },
            { text: 'Porque é uma solução mais barata e eficiente para o consumo de água.', correct: false },
        ]
    },
    {
        question: 'Por que podemos dizer que uma reclamação é um presente?',
        answer: [
            { text: 'Porque os clientes que reclamam geralmente são os mais leais e nos dão a oportunidade de reverter a situação.', correct: true },
            { text: 'Porque as reclamações nos ajudam a melhorar nossos produtos.', correct: false },
            { text: 'Porque as reclamações indicam que os clientes esperam mais de nós.', correct: false },
            { text: 'Porque uma reclamação não é um problema, é uma oportunidade de feedback.', correct: false },
        ]
    },
    {
        question: 'Por que usar EPIs na operação das chapas e fritadeiras?',
        answer: [
            { text: 'Os equipamentos como chapas e fritadeiras são quentes e podem causar queimaduras graves se os EPIs não forem usados.', correct: true },
            { text: 'Porque o uso de EPIs é obrigatório em todas as operações.', correct: false },
            { text: 'Porque os EPIs ajudam a melhorar o desempenho dos funcionários.', correct: false },
            { text: 'Porque os EPIs garantem uma operação mais rápida e eficiente.', correct: false },
        ]
    },
    {
        question: 'Porque devemos utilizar as Técnicas de Influencers Vendedores?',
        answer: [
            { text: 'Porque as técnicas de vendas aumentam a fidelidade dos clientes.', correct: false },
            { text: 'Porque atraem mais clientes ao restaurante.', correct: false },
            { text: 'Porque os influencers ajudam a promover novas promoções.', correct: false },
            { text: 'Para aumentar as vendas e oferecer uma boa experiência aos clientes.', correct: true },
        ]
    },
    {
        question: 'Quais ações de reciclagem estão em 100% dos restaurantes do McDonalds?',
        answer: [
            { text: 'Reciclagem de plásticos e garrafas PET', correct: false },
            { text: 'Reciclagem de alimentos não consumidos', correct: false },
            { text: 'Reciclagem de óleo de fritura', correct: true },
            { text: 'Reciclagem de todos os materiais de embalagem', correct: false },
        ]
    },
    {
        question: 'Quais ações devemos realizar ao trabalhar nas áreas externas?',
        answer: [
            { text: 'Usar uniforme completo e fazer pausas frequentes.', correct: false },
            { text: 'Sempre trabalhar com a ajuda de outro funcionário.', correct: false },
            { text: 'Usar casaco ou colete de segurança, prestar atenção aos veículos na área e manter distância de segurança.', correct: true },
            { text: 'Evitar o uso de equipamentos pesados na área externa.', correct: false },
        ]
    },
    {
        question: 'Quais ações os restaurantes podem tomar com o objetivo de reduzir os impactos das Mudanças Climáticas?',
        answer: [
            { text: 'Uso de embalagens recicláveis', correct: false },
            { text: 'Economia de energia', correct: true },
            { text: 'Redução do consumo de carne', correct: false },
            { text: 'Uso de energia solar', correct: false },
        ]
    },
    {
        question: 'Quais as duas razões que tornam as portas corta-fogo importantes?',
        answer: [
            { text: 'Oferecer uma saída segura de um edifício e proteger o restante do prédio, evitando a propagação de chamas e fumaça.', correct: true },
            { text: 'Evitar que os funcionários usem as saídas principais durante emergências.', correct: false },
            { text: 'Garantir a segurança da cozinha e do ambiente.', correct: false },
            { text: 'Reduzir o risco de incêndios em ambientes internos.', correct: false },
        ]
    },
    {
        question: 'Quais as fontes de microrganismos que causam intoxicação alimentar?',
        answer: [
            { text: 'Alimentos mal cozidos e utensílios sujos', correct: false },
            { text: 'Alimentos de fontes não confiáveis e embalagens danificadas', correct: false },
            { text: 'Ar condicionado e ambientes mal ventilados', correct: false },
            { text: 'Pragas, lixo, pessoa com diarréia/vômito e alimentos crus', correct: true },
        ]
    },
    {
        question: 'Quais causas que podem diminuir o tempo de vida da gordura?',
        answer: [
            { text: 'O uso excessivo de calor', correct: false },
            { text: 'Todas as alternativas estão corretas', correct: true },
            { text: 'A adição de água à gordura', correct: false },
            { text: 'A presença de alimentos com resíduos de farinha', correct: false },
        ]
    },
    {
        question: 'Quais das ações abaixo tem ligação com o pilar de Economia Circular?',
        answer: [
            { text: 'Redução do consumo de carne', correct: false },
            { text: 'Aumento do uso de materiais recicláveis', correct: false },
            { text: 'Redução de 48% de plásticos de uso único', correct: true },
            { text: 'Uso de produtos biodegradáveis', correct: false },
        ]
    },
    {
        question: 'Quais dos compromissos abaixo fazem parte do pilar de Abastecimento Sustentável?',
        answer: [
            { text: 'Reduzir o consumo de água até 2030', correct: false },
            { text: 'Aumentar o uso de fontes renováveis de energia', correct: false },
            { text: 'Eliminar o desmatamento de nossa cadeia de suprimentos até 2030.', correct: true },
            { text: 'Certificar todos os fornecedores em sustentabilidade', correct: false },
        ]
    },
    {
        question: 'Quais dos compromissos abaixo fazem parte do pilar de Mudanças Climáticas?',
        answer: [
            { text: 'Usar 100% de energia renovável em todas as operações até 2030', correct: false },
            { text: 'Reduzir em 50% o desperdício de alimentos até 2030', correct: false },
            { text: 'Atingir zero emissões líquidas até 2040', correct: false },
            { text: 'Reduzir em 36% as emissões de gases de efeito estufa de nossa operação direta, além de 31% das emissões de toda cadeia, até 2030.', correct: true },
        ]
    },
]