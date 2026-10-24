import React, { useEffect, useRef } from 'react';

interface CyberneticShaderBackgroundProps {
  reducedMotion?: boolean;
}

export const CyberneticShaderBackground: React.FC<CyberneticShaderBackgroundProps> = ({
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let resizeObserver: ResizeObserver | null = null;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => syncSize());
      resizeObserver.observe(canvas);
    }
    syncSize();

    // Prefer webgl2 for native fwidth support, fallback to webgl
    const gl =
      (canvas.getContext('webgl2') as WebGL2RenderingContext | null) ||
      (canvas.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) return;

    const isWebGL2 = 'WebGL2RenderingContext' in window && gl instanceof WebGL2RenderingContext;
    if (!isWebGL2) {
      gl.getExtension('OES_standard_derivatives');
    }

    const vs = isWebGL2
      ? `#version 300 es
in vec2 a_position;
out vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`
      : `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = isWebGL2
      ? `#version 300 es
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
out vec4 fragColor;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.15;
    
    vec2 gridUV = uv * vec2(40.0, 24.0);
    gridUV.y += sin(uv.x * 3.0 + t) * 0.5;
    vec2 grid = abs(fract(gridUV - 0.5) - 0.5) / fwidth(gridUV);
    float line = min(grid.x, grid.y);
    float gridGlow = 1.0 - min(line, 1.0);
    
    float n = noise(p * 2.0 + vec2(t * 0.5, -t * 0.3));
    float n2 = noise(p * 4.0 - vec2(t * 0.2, t * 0.4));
    float energyField = smoothstep(0.3, 0.75, n * 0.6 + n2 * 0.4);
    
    float dist = length(p - vec2(0.0, 0.3));
    float heroVignette = smoothstep(1.8, 0.2, dist);
    
    vec3 deepBase = vec3(0.04, 0.06, 0.11);
    vec3 glowCyan = vec3(0.0, 0.94, 1.0);
    vec3 glowTeal = vec3(0.05, 0.65, 0.9);
    vec3 glowPurple = vec3(0.35, 0.15, 0.65);
    
    vec3 col = deepBase;
    col += glowCyan * (gridGlow * 0.15 * heroVignette);
    col += mix(glowTeal, glowPurple, sin(t + uv.x * 2.0) * 0.5 + 0.5) * (energyField * 0.22 * heroVignette);
    
    float dust = pow(hash(floor(uv * 120.0) + floor(u_time * 2.0)), 18.0) * 0.4;
    col += glowCyan * dust * heroVignette;

    fragColor = vec4(col, 1.0);
}`
      : `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.15;
    
    vec2 gridUV = uv * vec2(40.0, 24.0);
    gridUV.y += sin(uv.x * 3.0 + t) * 0.5;
    vec2 grid = abs(fract(gridUV - 0.5) - 0.5) / fwidth(gridUV);
    float line = min(grid.x, grid.y);
    float gridGlow = 1.0 - min(line, 1.0);
    
    float n = noise(p * 2.0 + vec2(t * 0.5, -t * 0.3));
    float n2 = noise(p * 4.0 - vec2(t * 0.2, t * 0.4));
    float energyField = smoothstep(0.3, 0.75, n * 0.6 + n2 * 0.4);
    
    float dist = length(p - vec2(0.0, 0.3));
    float heroVignette = smoothstep(1.8, 0.2, dist);
    
    vec3 deepBase = vec3(0.04, 0.06, 0.11);
    vec3 glowCyan = vec3(0.0, 0.94, 1.0);
    vec3 glowTeal = vec3(0.05, 0.65, 0.9);
    vec3 glowPurple = vec3(0.35, 0.15, 0.65);
    
    vec3 col = deepBase;
    col += glowCyan * (gridGlow * 0.15 * heroVignette);
    col += mix(glowTeal, glowPurple, sin(t + uv.x * 2.0) * 0.5 + 0.5) * (energyField * 0.22 * heroVignette);
    
    float dust = pow(hash(floor(uv * 120.0) + floor(u_time * 2.0)), 18.0) * 0.4;
    col += glowCyan * dust * heroVignette;

    gl_FragColor = vec4(col, 1.0);
}`;

    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        return null;
      }
      return s;
    }

    const vShader = compileShader(gl.VERTEX_SHADER, vs);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vShader || !fShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = (t: number) => {
      if (!canvasRef.current) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 bg-gradient-to-b from-[#090e1c] via-[#060911] to-[#060911]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

