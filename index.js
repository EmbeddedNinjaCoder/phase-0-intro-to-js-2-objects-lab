const employee = {
  name: "John",
  streetAddress: "60 East 9th",
};


function updateEmployeeWithKeyAndValue(placeholder, key, value) {
  const newObj = { ...placeholder };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(placeholder, key, value) {
    //employee = { ...obj };
  
    placeholder[key] = value;
  
    return placeholder;
  }

  function deleteFromEmployeeByKey(placeholder, key) {
    const newObj = { ...placeholder };
    delete newObj[key];
      
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(placeholder, key) {
    // const newObj = { ...placeholder };
    delete placeholder[key];
      
    return placeholder;
  }
