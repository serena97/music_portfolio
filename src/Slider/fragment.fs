precision mediump float;

uniform sampler2D uTexture;
uniform sampler2D uTexture2;
uniform float time;
uniform float progress;
uniform vec2 pixels;

varying vec2 vUv;
varying vec2 vUv2;

vec2 mirrored(vec2 v) {
  vec2 m = mod(v, 2.0);
  return mix(m, 2.0 - m, step(1.0, m));
}

float tri(float p) {
  return mix(p, 1.0 - p, step(0.5, p))*2.0;
}

vec2 gradient(vec2 uv) {
    vec2 w = sin( sin(time)*vec2(0,0.3) + uv.yx*vec2(0,4.)) * vec2(0, 0.5);
    float p = fract(progress);
    vec2 xy = w*(tri(p)*0.5 + tri(progress)*0.5);
    return uv + clamp(sin(time), 0.0, 1.0) * 0.4 + xy;
}


vec2 moveTexture(vec2 uv, float dir) {
    return vec2(uv.x, uv.y + progress * dir);
}

void main() {
    vec4 textureColor = texture2D(uTexture, moveTexture(mirrored(gradient(vUv)), 0.2));
    vec4 textureColor2 = texture2D(uTexture2, moveTexture(mirrored(gradient(vUv2)), -0.2));
    float colorProgress = clamp(sin(time + vUv.y), 0.0, 1.0);
    vec4 rgba = mix(textureColor, textureColor2, colorProgress);
    gl_FragColor = rgba;
}