const { models } = require('../models');

async function getAll(req, res) {
    const rectangles = await models.rectangle.findAll();
    let error = undefined;
    if (req.session.error){
        error = req.session.error
        req.session.error = undefined;
    }
    res.render('index', {rectangles:rectangles, error:error});
};

async function create(req, res) {
    if(req.body.height == "" || req.body.weight == "" || req.body.color == ""){
        req.session.error = "Cannot Create: Please fill out all fields"
        res.redirect("/");
    }else{
        req.body.height = parseInt(req.body.height)
        req.body.width = parseInt(req.body.width)

        const perimeter = 2*(req.body.height + req.body.width)
        req.body.perimeter = perimeter

        const area = (req.body.height * req.body.width)
        req.body.area = area

        if(! checkHex(req.body.color)){
            req.session.error = "Cannot Create: Not valid Color"
            res.redirect("/");
        }
        else if (req.body.id) {
            req.session.error = "Cannot Create: Bad Request"
            res.redirect("/");
        } else {
            await models.rectangle.create(req.body);
            res.redirect("/");
        }
    }

    
};

async function update(req, res) {
	const id = parseInt(req.params.id);
    req.body.height = parseInt(req.body.height)
    req.body.width = parseInt(req.body.width)

    const perimeter = 2*(req.body.height + req.body.width)
    req.body.perimeter = perimeter

    const area = (req.body.height * req.body.width)
    req.body.area = area

    if(req.body.height == "" || req.body.weight == "" || req.body.color == ""){
        req.session.error = "Cannot Create: Please don't leave fields blank"
        res.redirect("/");
    } else if(!checkHex(req.body.color)){
        req.session.error = "Cannot Update: Not valid Color"
        res.redirect("/");
    } else {
        await models.rectangle.update(req.body, {where: {id: id}});
        res.redirect("/");
    }
};

async function remove(req, res) {
    const id = req.params.id;
    console.log(id);
    await models.rectangle.destroy({where: {id: id}});
	res.redirect("/");
};

// helpers
function checkHex(color) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
}

module.exports = {
	getAll,
	create,
	update,
	remove,
};