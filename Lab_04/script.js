function Run() {

    // Get the geographic points from data.js
    var data = theJSON.data;

    // Find the four corner points
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    // Store the corner points in an output
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    // Print the result to the console
    console.log("Bounding box computed for csr249@tamu.edu:");
    console.log(boundingBox);
}

// Find the northwest corner
function findTopLeft(data) {
    var point = data[0];

    data.forEach(function(item) {
        if (item.lat - item.lon > point.lat - point.lon) {
            point = item;
        }
    });

    return point;
}

// Find the northeast corner
function findTopRight(data) {
    var point = data[0];

    data.forEach(function(item) {
        if (item.lat + item.lon > point.lat + point.lon) {
            point = item;
        }
    });

    return point;
}

// Find the southwest corner
function findBottomLeft(data) {
    var point = data[0];

    data.forEach(function(item) {
        if (item.lat + item.lon < point.lat + point.lon) {
            point = item;
        }
    });

    return point;
}

// Find the southeast corner
function findBottomRight(data) {
    var point = data[0];

    data.forEach(function(item) {
        if (item.lat - item.lon < point.lat - point.lon) {
            point = item;
        }
    });

    return point;
}
