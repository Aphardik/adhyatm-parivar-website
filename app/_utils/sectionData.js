import hiHome from '../data/sections/hi/home.json';
import enHome from '../data/sections/en/home.json';
import guHome from '../data/sections/gu/home.json';

import hiJinagam from '../data/sections/hi/jinagam.json';
import enJinagam from '../data/sections/en/jinagam.json';
import guJinagam from '../data/sections/gu/jinagam.json';

import hiJinmandir from '../data/sections/hi/jinmandir.json';
import enJinmandir from '../data/sections/en/jinmandir.json';
import guJinmandir from '../data/sections/gu/jinmandir.json';

import hiJinmurti from '../data/sections/hi/jinmurti.json';
import enJinmurti from '../data/sections/en/jinmurti.json';
import guJinmurti from '../data/sections/gu/jinmurti.json';

import hiAdhyatm from '../data/sections/hi/adhyatm.json';
import enAdhyatm from '../data/sections/en/adhyatm.json';
import guAdhyatm from '../data/sections/gu/adhyatm.json';

const data = {
    hi: {
        home: hiHome,
        jinagam: hiJinagam,
        jinmandir: hiJinmandir,
        jinmurti: hiJinmurti,
        adhyatm: hiAdhyatm,
    },
    en: {
        home: enHome,
        jinagam: enJinagam,
        jinmandir: enJinmandir,
        jinmurti: enJinmurti,
        adhyatm: enAdhyatm,
    },
    gu: {
        home: guHome,
        jinagam: guJinagam,
        jinmandir: guJinmandir,
        jinmurti: guJinmurti,
        adhyatm: guAdhyatm,
    },
};

export const getSectionData = (language, section) => {
    return data[language]?.[section] || data['hi'][section];
};
