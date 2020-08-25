
const signCake=[
    {
        name:'Rasamali',
        imgUrl:'/images/signature_cakes/Rasmali.jpg',
        cost:550
    },
    {
        name:'Mango Rose Cake',
        imgUrl:'/images/signature_cakes/Mango.jpg',
        cost:550
    },
    {
        name:'Kaju Malai',
        imgUrl:'/images/signature_cakes/Kaju.jpg',
        cost:550
    },
    {
        name:'Saffron Pista',
        imgUrl:'/images/signature_cakes/Saffron.jpg',
        cost:550
    }
];
const cheese=[
    {
        name:'Mango',
        imgUrl:'/images/cheese_cakes/mango.webp',
        cost:550

    },
    {
        name:'Strawberry',
        imgUrl:'/images/cheese_cakes/strawberry.jpg',
        cost:550

    },
    {
        name:'Blueberry',
        imgUrl:'/images/cheese_cakes/blueberry.png',
        cost:550

    },
    {
        name:'Raspberry',
        imgUrl:'/images/signature_cakes/Saffron.jpg',
        cost:550

    }
];
const diet=[

    {
        name:'Keto Diet',
        imgUrl:'/images/diet_cakes/keto.jpg',
        cost:550
    },
    {
        name:'Sugar Free',
        imgUrl:'/images/diet_cakes/sugar.jpg',
        cost:550
    },
    {
        name:'Gluten Free',
        imgUrl:'/images/diet_cakes/gluten.jpg',
        cost:550
    }

];
module.exports.singnatureCakes=function(req,res){


    return res.render('cakes_category',{
        title:'signature',
        category:signCake
    });
}

module.exports.cheeseCakes=function(req,res)
{
    return res.render('cakes_category',{
        title:'cheese',
        category:cheese
    });
}
module.exports.dietCakes=function(req,res)
{
    return res.render('cakes_category',{
        title:'Diet Cakes',
        category:diet
    });
}