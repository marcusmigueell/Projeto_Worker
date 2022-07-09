
export class GetTimeWorkers {
    async timeDiff(d1) {

        var d2 = new Date().getTime();
        var bd = new Date(d1).getTime();
        var df = Math.abs(d2 - bd);

        let d = Math.round(df / (24 * 60 * 60 * 1000));
        let h = Math.floor(df / (60 * 60 * 1000));
        let m = Math.floor(df / (60 * 1000) - (h * 60));
        
        var result = '';
        d > 0 ? result += d + ' dias ' : '';
        h >= 0 ? result += ('0' + h).slice(-2) + 'h' : '00h';
        m >= 0 ? result += ('0' + m).slice(-2) + 'm' : '00m';

        return result;
    }
}