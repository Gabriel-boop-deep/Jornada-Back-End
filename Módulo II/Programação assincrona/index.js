const { getStateFromZipcode, getCityFromZipcode } = require("utils-playground");

(async function () {
    const estado = getStateFromZipcode("41920290")

    const cidade = getCityFromZipcode("41920290")

    const promisse = await Promise.all([estado, cidade]);

    console.log(promisse);

})();