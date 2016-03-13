/**
 * Þetta er hlutur sem heldur utanum eins spurningu, svarmöguleika og hver möguleikanna er rétta svarið.
 * @param nr1 Þetta er fyrsta talan í spurningunni eins og t.d 3 í "3 * 2"
 * @param nr2 Þetta er seinni talan í spurningunni eins og t.d 2 í "3 * 2"
 * @param answers Þetta eru svarmöguleikarnir eins og t.d [0,5,6]
 * @param rightAnswerIndex Þetta er vísun í rétta svarið eins og t.d 2
 * @constructor
 */
function Question (nr1,nr2,answers,rightAnswerIndex) {
    this.nr1 =  nr1 //nr1 * nr2
    this.nr2 = nr2 // nr1 verður jpg.
    this.answers = answers
    this.rightAnswerIndex = rightAnswerIndex
}

/**
 * Þetta er AÐGERÐ sem smíðar random spurningu
 * @returns {Question}
 * @constructor
 */
function RandomQuestion(){
    // Búa til tvær random tölur
    var rand1 = getRandomInt(0,10) //getRandomInt er aðgerð sem býr til random tölu á milli 0 og 10
    var rand2 = getRandomInt(0,10) //getRandomInt er aðgerð sem er neðst

    // Reikna margfeldi talnanna
    var ans = rand1 * rand2

    // Búa til 3 random svör
    var answeres = []
    answeres.push(getRandomInt(0,100))
    answeres.push(getRandomInt(0,100))
    answeres.push(getRandomInt(0,100))

    // Finna random stað fyrir rétta svarið
    var rightAnswerIndex = getRandomInt(0,2)

    // Setja rétta svarið á sinn stað
    answeres[rightAnswerIndex] = ans

    // Skila Nýrri spurningu
    return new Question(rand1,rand2,answeres,rightAnswerIndex)

}
function answerSelected(e){
    var answer = $(e.currentTarget)
    var isCorrect = answer.hasClass('js_correct')
    if (isCorrect){
        $('.wrong').addClass('hidden')
        $('.right').removeClass('hidden')
    }
    else{
        $('.right').addClass('hidden')
        $('.wrong').removeClass('hidden')
    }

    setTimeout(renderNewQuestion,2000)
}
/**
 * Býr til random tölu á ákveðnu bili. Notar Math.Random til að finna random fyrir "random"
 * @param min þetta er minnst mögulega talan
 * @param max Þetta er stærsta mögulega talan
 * @returns {*}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function renderNewQuestion(){

    $('.question').empty()
    $('.answers').empty()
    $('.right').addClass('hidden')
    $('.wrong').addClass('hidden')

    var question = RandomQuestion()
    var p = $('<p class="bla" >'+ question.nr1 +' * '+ question.nr2 +'</p>')
    $('.question').append(p)



    var answers = $('.answers')
    for (var i =0; i<question.answers.length;i++){
        var ans = question.answers[i]
        var correct = question.rightAnswerIndex == i
        var classes = "js_answer"
        if (correct){
            classes = classes + ' js_correct'
        }
        var li = $('<li class="'+ classes +'"> '+ ans +'</li>')
        answers.append(li)
    }
}

$(function(){
    $('body').on('click','.js_answer',answerSelected)
    renderNewQuestion()
})




























