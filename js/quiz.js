/**
 * Þetta er hlutur sem heldur utanum eins spurningu, svarmöguleika og hver möguleikanna er rétta svarið.
 * @param question Þetta er spurningin eins og t.d "3 * 2"
 * @param answers Þetta eru svarmöguleikarnir eins og t.d [0,5,6]
 * @param rightAnswerIndex Þetta er vísun í rétta svarið eins og t.d 2
 * @constructor
 */
function Question (question,answers,rightAnswerIndex) {
    this.question = question
    this.answere = answers
    this.rightix = rightAnswerIndex
}

/**
 * Þetta er aðgerð sem smíðar random spuringu
 * @returns {Question}
 * @constructor
 */
function RandomQuestion(){
    var rand1 = getRandomInt(0,10)
    var rand2 = getRandomInt(0,10)
    var ans = rand1 * rand2
    var answeres = []
    answeres.push(getRandomInt(0,100))
    answeres.push(getRandomInt(0,100))
    answeres.push(getRandomInt(0,100))
    var rightAnswerIndex = getRandomInt(0,2)
    answeres[rightAnswerIndex] = ans

    var ques = rand1 + " * " + rand2

    return new Question(ques,answeres,rightAnswerIndex)

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

