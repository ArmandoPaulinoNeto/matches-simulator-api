module.exports = {
    
    simulator (req, res) { 
        
        const reponse = { status: false, data: [], error: [] };

        try {           
            reponse.data = returnMatches();
            reponse.status = true;
            console.log('return consult');
            return res.json(reponse);
        } catch (error) {
            reponse.data = [{error: `Error ao acessar a API ${error}`}];
            return res.json(reponse);
        }        
    }
}

function returnMatches(){

    return [
        {
            description: "Eliminatorias da copa de 2002",
            local: {
                name: 'Sudão', 
                image: ''
            },
            home: {
                name:'',
                stars: 5,
                image: ''
            },
            away: {
                name:'',
                stars: 5,
                image: ''
            },
        },
        {
            description: "Eliminatorias da copa de 2002",
            local: {
                name: 'Dubai', 
                image: ''
            },
            home: {
                name:'',
                stars: 5,
                image: ''
            },           
            away: {
                name:'',
                stars: 5,
                image: ''
            },           
        },
        {
            description: "Eliminatorias da copa de 2002",
            local: {
                name: 'Angola', 
                image: ''
            },
            home: {
                name:'',
                stars: 5,
                image: ''
            },
            away: {
                name:'',
                stars: 5,
                image: ''
            },
        },
    ];
}