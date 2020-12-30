export const checkFileTypeCSV = (fileName: string): boolean => {
        // jsonファイル,pmjファイル以外は処理を止める
        if (
            fileName.match('.csv$') == null
        ) {
            return true;
        }
        return false;
    };

export const parseCSV = (csv: string)=>{
        let tmp=[];
        csv=csv.replace(/("[^"]*")+/g,(match)=>{
            tmp.push(match.slice(1,-1).replace(/""/g,'"'));return '[TMP]';
        });
        return csv.split("\n").map((row)=>{
            return row.split(',').map((val)=>val==='[TMP]'?tmp.shift():val)
        });
    };
  
   