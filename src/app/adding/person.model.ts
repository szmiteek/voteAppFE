export interface Person {
    firstName: string,
    lastName: string,

}

export interface Candidate extends Person {
    id: number,
    votesCount: number
}

export interface Elector extends Person {
    id: number;
}


export enum PersonType {
    CANDIDATES = "candidates",
    ELECTORS = "electors"
}