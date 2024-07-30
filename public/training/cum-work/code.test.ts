interface CumPortion {
    producer: string;
    volume: number;
};

const data: CumPortion[] = [
    {
    producer: "Vasya",
    volume: 50 // 50 ml
    },
    {
    producer: "Sanya",
    volume: 60 // 60 ml
    },
    {
    producer: "Siroja",
    volume: 70 // 70 ml
    }
];

const cumMixer = (cumPortions: CumPortion[]): number => 
    cumPortions.reduce((backet, currentPortion) => /* тут */, 0);

// dickSplitter(glassDick) => ['my', 'dick', 'is', 'big']