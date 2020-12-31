// @ts-ignore
import { Answer } from "./Answer"
import { removeDoubleQuotes } from "./Helper"

export class AnswerSheet {
    private answers: Answer[];
    
    getAnswers = () :Answer[] =>{
        return this.answers
    }

    public setAnswers = (answers: Answer[]) :boolean=>{
        const elementConsts = answers.map(row => {row.answer.length});
        const checkColumns = Array.from(new Set(elementConsts)).length == 1

        this.answers = checkColumns ? answers : undefined;
        return checkColumns;
    }

    public getCorrect = (keyword: string) :string[] =>{
        let c: string[] = []
        for (let index = 0; index < this.answers[0].answer.length; index++) {
            for (const element of this.answers) {
                if(removeDoubleQuotes(element.answer[index]) === keyword) {
                    c.push(element.name);
                    break;
                }
            }
        }
        return c
    }

    public calcScore = (keyword: string) =>{
        const corrects = this.getCorrect(keyword);

        for (const element of this.answers) {
            let scores: boolean[] = []

            element.answer.forEach((answer, index) => {
                const correct = corrects[index];
                scores.push(removeDoubleQuotes(answer) === removeDoubleQuotes(correct))
            });
            element.score = scores;
        }
    }
    
    public getScoreBoard = (keyword: string) =>{
        let board: string[][] = new Array();

        for (const answer of this.answers) {
            let score: string[] = [];
            score.push(answer.name)
            score.push(this.getScoreForScoreBoard(answer, keyword))
            board.push(score)
        }
        return board;
    }

    getScoreForScoreBoard = (answer: Answer, keyword:string): string =>{

        const corrects = this.getCorrect(keyword);
        let score:number = 0
        score = answer.score.filter(e => e).length
        
        corrects.forEach((correct, index) => {
            if(removeDoubleQuotes(correct) === removeDoubleQuotes(answer.name)){
                const num :number = this.answers.filter(a => a.score[index]).length

                console.log(answer.name)
                console.log("index:" + index)
                console.log("point:" + ((num === 0) ? 0 : this.answers.length - 2 - num))
                score += (num === 0) ? 0 : this.answers.length - 2 - num
            }
        })
        return score.toString()
    }
}