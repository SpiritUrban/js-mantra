/* tslint:disable */

const enum Taste {
    UGLY = "ugly",
    TASTY = "tasty",
    STRANGE = "strange",
    TASTELESS = "tasteless"
}

interface CumPortion {
    producer: string;
    volume: number;
    taste: Taste;
}

const data: CumPortion[] = [
    {
        producer: "Vasya",
        volume: 50, // 50 ml
        taste: Taste.TASTY
    },
    {
        producer: "Sanya",
        volume: 60, // 60 ml
        taste: Taste.UGLY
    },
    {
        producer: "Siroja",
        volume: 70, // 70 ml
        taste: Taste.STRANGE
    }
];

const cumFilter = (cumPortions: CumPortion[]): string[] => 
    cumPortions
        .filter((currentPortion) => ... Taste.TASTY)
        .map((portion) => portion.producer);
