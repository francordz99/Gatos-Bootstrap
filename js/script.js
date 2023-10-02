document.addEventListener("DOMContentLoaded", main);

const subtitle = document.getElementById('randomCarousel');

const textData = [
    {
        "text": "Saltando con gracia y agilidad, los gatitos nos muestran que la vida es una aventura llena de diversión y amor, uniendo corazones con sus travesuras encantadoras."
    },
    {
        "text": "Con su pelaje suave y ronroneo reconfortante, los gatitos nos brindan compañía y calidez, convirtiéndose en amigos leales para toda la vida."
    },
    {
        "text": "Curiosos y juguetones, los gatitos exploran cada rincón con sus patitas suaves y ojitos curiosos, llenando el hogar de alegría y travesuras."
    }
];

function startTextChangeInterval(data) {
    let index = 0;

    setInterval(() => {
        const text = data[index].text;
        subtitle.textContent = text;
        index = (index + 1) % 3;
    }, 2000);
}

function main() {
    startTextChangeInterval(textData);
}
