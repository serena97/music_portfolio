uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec2 vUv2;

void main()
{
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    vUv = uv;
    vUv2 = (uv - 0.5) * vec2(1, 1) + 0.5;
}

