export class Roman {
    
    convert = (num: number): string => {
        if(num === 10) return "X";
        let result = "";
        if(num >= 5) {
            result = "V";
            num -= 5;
        }
        for(let i = 0; i < num; i++) {
            result += "I";
        }
        return result;
    }
}