const fs = require('fs');

function main() {
    let fragmentShader = fs.readFileSync('./src/Slider/fragment.fs', {encoding: 'utf8'})
    let vertexShader = fs.readFileSync('./src/Slider/vertex.vs', {encoding: 'utf8'})
    fragmentShader = 'export default `' + fragmentShader + '`'
    vertexShader = 'export default `' + vertexShader + '`'
    fs.writeFileSync('./src/Slider/fragment.js', fragmentShader)
    fs.writeFileSync('./src/Slider/vertex.js', vertexShader)
}

main()