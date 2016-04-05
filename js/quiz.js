/**
 * Þetta er hlutur sem heldur utanum eins spurningu, svarmöguleika og hver möguleikanna er rétta svarið.
 * @param nr1 Þetta er fyrsta talan í spurningunni eins og t.d 3 í "3 * 2"
 * @param nr2 Þetta er seinni talan í spurningunni eins og t.d 2 í "3 * 2"
 * @param answers Þetta eru svarmöguleikarnir eins og t.d [0,5,6]
 * @param rightAnswerIndex Þetta er vísun í rétta svarið eins og t.d 2 þar sem answers[rightAnswerIndex] gefur rétt svar
 * @constructor
 */
function Question (nr1,nr2,answers,rightAnswerIndex) {
    this.nr1 =  nr1 //nr1 * nr2
    this.nr2 = nr2 // nr1
    this.answers = answers
    this.rightAnswerIndex = rightAnswerIndex
}

/**
 * Býr til random tölu á ákveðnu bili. Notar Math.Random til að finna random fyrir "random"
 * @param min þetta er minnst mögulega talan
 * @param max Þetta er stærsta mögulega talan
 * @param array Ekki skila tölum sem að eru í þessu array
 * @returns random tölu sem er á milli min og max.
 */
function getRandomInt(min, max, array) {
    array = array || []
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    while (array.indexOf(randomInt)>=0){
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomInt
}

/**
 * Þetta er AÐGERÐ sem smíðar random spurningu
 * @returns {Question}
 */
function RandomQuestion(){
    // Búa til tvær random tölur
    var rand1 = getRandomInt(0,10) //getRandomInt er aðgerð sem býr til random tölu á milli 0 og 10
    var rand2 = getRandomInt(0,10)

    // Reikna margfeldi talnanna; sem er raunverulega svarið
    var ans = rand1 * rand2
    // Búa til 4 random svör, byrjum með raunverulega svarið
    // til að fá það ekki tvisvar
    var answeres = [ans]
    answeres.push(getRandomInt(0,100, answeres))
    answeres.push(getRandomInt(0,100, answeres))
    answeres.push(getRandomInt(0,100, answeres))
    answeres.push(getRandomInt(0,100, answeres))
    //fjarlægum fyrsta stakið (svarið) úr listanum með slice aðgerðinni
    answeres = answeres.slice(1,answeres.length)
    // Finna random stað fyrir rétta svarið
    var rightAnswerIndex = getRandomInt(0,3)

    // Setja rétta svarið á sinn stað
    answeres[rightAnswerIndex] = ans

    // Skila Nýrri spurningu
    return new Question(rand1,rand2,answeres,rightAnswerIndex)
}

/**
 * Hún finnur svarið sem var smellt á og athugar hvort það sé rétt svar.
 * ef það er rétt þá er bætt við Class sem heitir 'yes' og litar elementið grænt.
 * eða ef það er rangt þá er bætt við Class sem heitir 'no' og litar elementið rautt.
 * og litar rétta svarið grænt.
 * @param e er event frá músa smell
 *
 */
function answerSelected(e){
    // sækjum elementið sem smellt var á
    var answer = $(e.currentTarget)
    //könnum hvort það sé rétt
    var isCorrect = answer.hasClass('js_correct')
    if (isCorrect){
        //litum svarið grænt
        answer.addClass('yes')
    }
    else{
        // litum svarið rautt
        answer.addClass('no')
        //litum rétta svarið grænt
        var correctAnswer = answer.siblings('.js_correct')
        correctAnswer.addClass('yes')
    }
    //Bíðum í 3 sekúndur og birtum nýja spurningu
    setTimeout(renderNewQuestion,3000)
}
/**
 *
 */
function renderNewQuestion(){

    $('.question').empty()
    $('.answers').empty()

    var question = RandomQuestion()
    var questionElement = $('<h3> Hvað er '+ question.nr1 +' * '+ question.nr2 +' ?</h3>')
    $('.question').append(questionElement)
    var answers = $('.answers')
    for (var i =0; i<question.answers.length;i++){
        var ans = question.answers[i]
        var correct = question.rightAnswerIndex == i
        var classes = "js_answer"
        if (correct){
            classes = classes + ' js_correct'
        }
        var li = $('<div class="'+ classes +'" ><h5> '+ ans +'</h5></div>')
        answers.append(li)
    }
}

$(function(){
    $('body').on('click','.js_answer',answerSelected)
    renderNewQuestion()
})




























