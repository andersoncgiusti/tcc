const agenda = {
    clientes: [ 
        {
            id: 1,
            nomeCompleto: 'Luiz Brabo',
            dia: '2022-22-10',
            horario: '13:00',
            sessoes: 1
        }
    ]
}

module.exports = { 

    agendaGet: (req, res) => {  
        try {
            res.json(agenda.clientes)
        } catch (error) {
            res.status(200).json({ message: error.message })
        }  
    }
}