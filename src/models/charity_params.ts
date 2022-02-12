import * as R from 'ramda';

class CharityParams {
    public taxCaps: {
        Cap: number,
        denom:string
    }[];
    public taxRate: number;
    public burnRate: number;
    public charities: {
        charityName: string,
        accAddress: string,
        checksum: string
    }[];

    constructor(payload: any) {
        this.taxCaps = payload.taxCaps;
        this.taxRate = payload.taxRate;
        this.burnRate = payload.burnRate;
        this.charities = payload.charities;
    }

    static fromJson(data: any) {
        return new CharityParams({
            taxCaps: R.pathOr([], ["tax_caps"], data).map((x) => ({
                denom: x.denom,
                Cap: x.Cap,
            })),
            taxRate: R.pathOr(0, ["tax_rate"], data),
            burnRate: R.pathOr(0, ["burn_rate"], data),
            charities: R.pathOr([], ["charities"], data).map((x) => ({
                charityName: x.charityName,
                accAddress: x.accAddress,
                checksum: x.checksum,
            }))
        });
    }
}

export default CharityParams;