const Database = require('./db.js');
const saveOrphanages = require('./saveOrphanage.js');


Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanages(db , {
        id: 1,
        lat: "-28.504809", 
        lng: "-41.5194263",
        name: "Lar des menines",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98188118",
        images: [
            "https://images.unsplash.com/photo-1599577180589-0a0b958016b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages= await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //const orphanages= await db.all('SELECT * FROM orphanages WHERE id="6"')
    //console.log(orphanages)

    //deletar dado da tabela
    
    //console.log(await db.run ('DELETE FROM orphanages WHERE id="3"'))
})