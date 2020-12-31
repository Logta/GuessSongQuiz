import { Answer } from "./Answer"

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
}