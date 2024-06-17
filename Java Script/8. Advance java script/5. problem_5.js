// Check if Array.prototype.includes is not defined
if (!Array.prototype.includes) {
    // Define customIncludes method
    Array.prototype.customIncludes = function(searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('Array.prototype.customIncludes called on null or undefined');
        }

        var O = Object(this);
        var len = O.length >>> 0;

        if (len === 0) {
            return false;
        }

        var n = fromIndex || 0;
        var k;

        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }

        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement || (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
            k++;
        }

        return false;
    };
}

// Example usage:
const array = [1, 2, 3, NaN, 5];

console.log(array.customIncludes(3));   // Output: true
console.log(array.customIncludes(NaN)); // Output: true
console.log(array.customIncludes(6));   // Output: false
