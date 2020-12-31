export class Answer {
    name: string;
    answer: string[];
    score: boolean[] = [];

    constructor(name: string, answer: string[]) {
        this.name = name;
        this.answer = answer;
    }
}