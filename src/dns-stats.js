const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  domains.forEach(domain => {
    const arr = domain.split('.').reverse();
    let val = '';
    arr.forEach(dom => {
      val += "."+dom;
      if (!stats[val]) {
        stats[val] = 1;
      } else {
        stats[val]++;
      }
    });
  });

  return stats;
}


module.exports = {
  getDNSStats
};
