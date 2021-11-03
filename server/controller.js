const data = require('./data.json');

module.exports = {
    getData: (req, res) => res.status(200).send(data),
    deleteData: (req, res) => {
        const { id } = req.params;
        let index = data.findIndex(element => element.id === +id);
        data.splice(index, 1);
        res.status(200).send(data)
    }
}