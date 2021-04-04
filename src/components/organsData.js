import beta from '../assets/img/organs/beta.png';
import lipid from '../assets/img/organs/lipid.png';
import capa from '../assets/img/organs/capa.png';
import brain from '../assets/img/organs/brain.png';
import intestines from '../assets/img/organs/intestines.png';
import musle from '../assets/img/organs/musle.png';
import infection from '../assets/img/organs/infection.png';
import stomach from '../assets/img/organs/stomach.png';
import kidneys from '../assets/img/organs/kidneys.png';

export const directions = {
    TOP: 'organ-top',
    BOTTOM: 'organ-bottom',
    LEFT: 'organ-left',
    RIGHT: 'organ-right',
};

export const sizes = {
    SMALL: 'SMALL',
    BIG: 'BIG'
};

export const organs = [
    {
        number: 1,
        title: 'β-клетки',
        img: beta,
        direction: directions.TOP,
        size: sizes.BIG,
        styles: {
            top: 0
        }
    },
    {
        number: 2,
        title: '↓ инкретинового эффекта',
        img: false,
        direction: directions.TOP,
        styles: {
            top: '180px'
        }
    },
    {
        number: 3,
        title: 'Дефект α-клеток',
        img: false,
        direction: directions.TOP,
        styles: {
            top: '280px'
        }
    },
    {
        number: 4,
        title: 'Жировые клетки',
        img: lipid,
        direction: directions.RIGHT,
        styles: {
            top: '315px'
        }
    },
    {
        number: 5,
        title: 'Мышцы',
        img: musle,
        direction: directions.RIGHT,
        styles: {
            top: '215px'
        }
    },
    {
        number: 6,
        title: 'Печень',
        img: capa,
        direction: directions.RIGHT,
        styles: {
            top: '115px'
        }
    },
    {
        number: 7,
        title: 'Головной мозг',
        img: brain,
        direction: directions.RIGHT,
        styles: {
            top: '15px'
        }
    },
    {
        number: 8,
        title: 'Микрофлора кишечника',
        img: intestines,
        direction: directions.LEFT,
        styles: {
            top: '15px'
        }
    },
    {
        number: 9,
        title: 'Нарушение имунной регуляции/воспаление',
        img: infection,
        direction: directions.LEFT,
        styles: {
            top: '115px'
        }
    },
    {
        number: 10,
        title: 'Желудок',
        img: stomach,
        direction: directions.LEFT,
        styles: {
            top: '215px'
        }
    },
    {
        number: 11,
        title: 'Почки',
        img: kidneys,
        direction: directions.LEFT,
        styles: {
            top: '315px'
        }
    }
];