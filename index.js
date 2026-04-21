require("datejs");
function combineUsers(...args) {
  const combinedObject = {
    users: []
  };
  for(let arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }
  combinedObject.merge_date = Date.today().toString("M/dd/yyyy");
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};