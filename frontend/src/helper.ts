import {Answer} from "./Answer"

export const checkFileTypeCSV = (fileName: string): boolean => {
    // jsonファイル,pmjファイル以外は処理を止める
    if (
        fileName.match('.csv$') == null
    ) {
        return true;
    }
    return false;
};

export const parseAnswer = (csv: string): Answer[] => {
    var arr = csv.split('\n');
    
    return arr.map(row =>swapAnswersFromCSV(row.split(',')))
};

const swapAnswersFromCSV = (str: string[]): Answer => {
    let answer = new Answer(str[1], str.slice(2));
    return answer;
}