uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec2 vUv2;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    vUv = uv;
    vUv2 = (uv - 0.5) * vec2(1, 1) + 0.5;
    vUv2.y += sin(modelPosition.x * 10.0) * 0.1;
    vUv2.x += sin(modelPosition.y * 10.0) * 0.1;

    gl_Position = projectedPosition;

}

