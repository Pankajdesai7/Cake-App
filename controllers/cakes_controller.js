
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

module.exports.singnatureCakes=function(req,res){


    return res.render('cakes_category',{
        title:'signature',
        category:signCake
    });
}