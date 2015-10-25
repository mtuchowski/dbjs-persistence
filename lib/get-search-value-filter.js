'use strict';

module.exports = function (searchValue) {
	if (typeof searchValue === 'function') return searchValue;
	if (searchValue == null) {
		return function (sValue) { return ((sValue !== '') && (sValue !== '0')); };
	}
	return function (sValue) { return searchValue === sValue; };
};