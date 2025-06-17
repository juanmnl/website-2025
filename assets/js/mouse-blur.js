import * as THREE from 'three';

class MouseBlur {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.material = null;
    this.mouse = new THREE.Vector2(0.5, 0.5);
    this.animationId = null;
    this.container = null;
    this.init();
  }

  init() {
    this.createContainer();
    this.setupScene();
    this.createShader();
    this.setupEventListeners();
    this.animate();
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.style.cssText =
      'position: fixed; top: 0; left: 0; width: 100%; height: 100vh; pointer-events: none; z-index: 1;';
    document.body.insertBefore(this.container, document.body.firstChild);
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);
  }

  createShader() {
    const vertexShader =
      'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';

    const fragmentShader = [
      'uniform vec2 u_resolution;',
      'uniform vec2 u_mouse;',
      'uniform float u_time;',
      'varying vec2 vUv;',
      '',
      'void main() {',
      '  vec2 st = vUv;',
      '  vec2 p = st * 2.0 - 1.0;',
      '  p.x *= u_resolution.x / u_resolution.y;',
      '  ',
      '  vec2 mouse = u_mouse * 2.0 - 1.0;',
      '  mouse.x *= u_resolution.x / u_resolution.y;',
      '  ',
      '  float mouseDistance = length(p - mouse);',
      '  ',
      '  float mouseInfluence = 1.0 - smoothstep(0.0, 0.8, mouseDistance);',
      '  float strongMouseInfluence = 1.0 - smoothstep(0.0, 0.4, mouseDistance);',
      '  float immediateInfluence = 1.0 - smoothstep(0.0, 0.15, mouseDistance);',
      '  float mediumInfluence = 1.0 - smoothstep(0.0, 0.35, mouseDistance);',
      '  float farInfluence = 1.0 - smoothstep(0.0, 0.7, mouseDistance);',
      '  ',
      '  float combinedInfluence = immediateInfluence * 1.0 + mediumInfluence * 0.6 + farInfluence * 0.3;',
      '  ',
      '  float effect = 0.0;',
      '  ',
      '  float trailEffect = smoothstep(0.4, 0.0, mouseDistance) * 0.8;',
      '  effect = max(effect, trailEffect * 0.3);',
      '  ',
      '  float distortionField = exp(-mouseDistance * 3.0) * 0.4;',
      '  effect = max(effect, distortionField);',
      '  ',
      '  float rippleDistance = length(p - mouse);',
      '  float ripple = sin(rippleDistance * 20.0 - u_time * 5.0) * 0.1 * immediateInfluence;',
      '  effect += ripple * 0.5;',
      '  ',
      '  vec3 effectColor = vec3(0.1);',
      '  float colorVariation = combinedInfluence * 0.1;',
      '  effectColor += vec3(colorVariation * 0.15, colorVariation * 0.15, colorVariation * 0.15);',
      '  effectColor += vec3(immediateInfluence * 0.1, immediateInfluence * 0.1, immediateInfluence * 0.1);',
      '  ',
      '  gl_FragColor = vec4(effectColor, effect * 0.8);',
      '}',
    ].join('\n');

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        u_mouse: { value: this.mouse },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        u_time: { value: 0 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(mesh);
  }

  setupEventListeners() {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = 1.0 - event.clientY / window.innerHeight;

      this.mouse.x = x;
      this.mouse.y = y;

      if (this.material) {
        this.material.uniforms.u_mouse.value.copy(this.mouse);
      }
    };

    const handleResize = () => {
      if (this.renderer && this.material) {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.material.uniforms.u_resolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    this.cleanup = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }

  animate(time = 0) {
    if (this.material) {
      this.material.uniforms.u_time.value = time * 0.001;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }

    this.animationId = requestAnimationFrame((time) => this.animate(time));
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.cleanup) {
      this.cleanup();
    }

    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }

    if (this.material) {
      this.material.dispose();
    }

    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}

export { MouseBlur };
