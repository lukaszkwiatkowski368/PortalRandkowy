import { Photo } from './photo';

export interface User {
    /**Podstawowe informacje */
        id: number;
        username: string;
        gender: string;
        age: number;
        zodiacSign: string;
        created: Date;
        lastActive: string;
        city: string;
        country: string;
        /**Zakłądka info */
        growth: string;
        eyeColor: string;
        hairColor: string;
        martialStatus: string;
        education: string;
        profession: string;
        children: string;
        languages: string;
        /**Zakłądka o mnie */
        motto: string;
        description: string;
        personality: string;
        lookingFor: string;
        /**Zakłądka pasje, zainteresowania */
        interests: string;
        freeTime: string;
        sport: string;
        movies: string;
        music: string;
        // tslint:disable-next-line: jsdoc-format
        /**Zakładka preferencje */
        iLike: string;
        idoNotLike: string;
        makesMeLaugh: string;
        itFeelsBestIn: string;
        frienderWouldDescribeMe?: any;
        photos: Photo[];
        photoUrl: string;
}
