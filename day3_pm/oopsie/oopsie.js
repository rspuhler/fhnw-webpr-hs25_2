
const Player = _name => {
    let fallbackIndex = 0;
    let progressIndex = 0;
    return {
        getFallbackIndex : ()     => fallbackIndex,
        getProgressIndex : ()     => progressIndex,
        turn             : ()     => fallbackIndex  = progressIndex,
        fallback         : ()     => progressIndex  = fallbackIndex,
        proceed          : stride => progressIndex += stride,
    }
};

const display = () => {
    for (let i = 0; i < 100; i++) {
        const field = document.getElementById("FIELD-" + i);
        field.setAttribute("CLASS", "field");
    }
    const fallbackField = document.getElementById("FIELD-" + player.getFallbackIndex());
    fallbackField.setAttribute("CLASS", "field fallback");
    const progressField = document.getElementById("FIELD-" + player.getProgressIndex());
    progressField.setAttribute("CLASS", "field progress");
};

const start   = () => {
    const fields = document.getElementById('fields');

    for (let i = 0; i < 100; i++) {
        const field = document.createElement("DIV");
        field.setAttribute("ID", "FIELD-"+i);
        field.textContent = " ";
        fields.appendChild(field);
    }
    display();
};

const dice = () => {
    const stride = Math.round(1 + Math.random() * 5);
    document.getElementById('dice').textContent = String(stride);
    if (stride === 3) {
        player.fallback();
    } else {
        player.proceed(stride);
    }
    display();
};

const turn = () => {
    player.turn();
    display();
};

const player = Player("One");
