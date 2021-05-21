module.exports = function getval (root, path, delimiter) {
  var tmp = root, keys = (''+path).split(delimiter||'.')
  try { for (idx in keys) { tmp = tmp[keys[idx]] }
  } catch (e) { return }
  return tmp
}
