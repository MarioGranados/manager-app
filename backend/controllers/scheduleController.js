const createSchedule = (req, res) => {
    console.log(req.body.text)
    res.json({message: "scheduleCreated"})
}
module.exports = {createSchedule,}