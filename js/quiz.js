/**
 * Þetta er hlutur sem heldur utanum eins spurningu, svarmöguleika og hver möguleikanna er rétta svarið.
 * @param nr1 Þetta er fyrsta talan í spurningunni eins og t.d 3 í "3 * 2"
 * @param nr2 Þetta er seinni talan í spurningunni eins og t.d 2 í "3 * 2"
 * @param answers Þetta eru svarmöguleikarnir eins og t.d [0,5,6]
 * @param rightAnswerIndex Þetta er vísun í rétta svarið eins og t.d 2
 * @constructor
 */
function Question (nr1,nr2,answers,rightAnswerIndex) {
    this.nr1 = nr1
    this.nr2 = nr2
    this.answers = answers
    this.rightAnswerIndex = rightAnswerIndex
}

/**
 * Þetta er aðgerð sem smíðar random spuringu
 * @returns {Question}
 * @constructor
 */
function RandomQuestion(){
    // Búa til tvær random tölur
    var rand1 = getRandomInt(0,10)
    var rand2 = getRandomInt(0,10)

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

/**
 * Býr til random tölu á ákveðnu bili. Notar Math.Random til að finna random fyrir "random"
 * @param min þetta er minnst mögulega talan
 * @param max Þetta er stærsta mögulega talan
 * @returns {*}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

