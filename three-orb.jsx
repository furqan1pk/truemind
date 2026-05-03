// Three.js breathing orb — calm 3D centerpiece for the hero.
// Wireframe icosahedron + drifting particle halo. Sage + terracotta palette.
// Honors prefers-reduced-motion and pauses while off-screen.

const ThreeOrb = ({ height = 480, intensity = 1 }) => {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount || typeof THREE === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = () => mount.clientWidth;
    const heightPx = () => mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width() / heightPx(), 0.1, 100);
    camera.position.set(0, 0, 5.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), heightPx());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    // ── Core orb: wireframe icosahedron in sage
    const orbGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const orbMat = new THREE.MeshBasicMaterial({
      color: 0x3D5A4A,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);

    // ── Inner solid orb with subtle gradient feel
    const innerGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6B8778,
      transparent: true,
      opacity: 0.12,
    });
    const innerOrb = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerOrb);

    // ── Terracotta accent ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.012, 16, 128);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xC97A5A,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.2;
    scene.add(ring);

    const ring2 = new THREE.Mesh(ringGeo.clone(), ringMat.clone());
    ring2.material.color.setHex(0xD4A656);
    ring2.material.opacity = 0.35;
    ring2.scale.setScalar(1.18);
    ring2.rotation.x = Math.PI / 1.6;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // ── Particle halo
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sage = new THREE.Color(0x6B8778);
    const terracotta = new THREE.Color(0xC97A5A);
    const cream = new THREE.Color(0xF4EFE6);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const pick = Math.random();
      const c = pick < 0.55 ? sage : pick < 0.85 ? cream : terracotta;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Mouse parallax
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.x = ((e.clientX - cx) / window.innerWidth) * 0.6;
      target.y = ((e.clientY - cy) / window.innerHeight) * 0.6;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── Resize
    const onResize = () => {
      camera.aspect = width() / heightPx();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), heightPx());
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // ── Visibility — pause when off screen
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(mount);

    // ── Animate
    const clock = new THREE.Clock();
    let raf;
    const tick = () => {
      const t = clock.getElapsedTime();
      if (visible) {
        const speed = reduceMotion ? 0.05 : 1;
        orb.rotation.y = t * 0.18 * speed;
        orb.rotation.x = Math.sin(t * 0.25) * 0.18 * speed;
        innerOrb.rotation.y = -t * 0.12 * speed;
        innerOrb.rotation.z = t * 0.08 * speed;

        // breathing
        const breath = 1 + Math.sin(t * 0.6) * 0.04 * intensity;
        orb.scale.setScalar(breath);
        innerOrb.scale.setScalar(breath * 0.98);

        ring.rotation.z = t * 0.08 * speed;
        ring2.rotation.z = -t * 0.05 * speed;

        particles.rotation.y = t * 0.04 * speed;
        particles.rotation.x = Math.sin(t * 0.1) * 0.08;

        current.x += (target.x - current.x) * 0.04;
        current.y += (target.y - current.y) * 0.04;
        camera.position.x = current.x * 0.8;
        camera.position.y = -current.y * 0.8;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      io.disconnect();
      renderer.dispose();
      orbGeo.dispose();
      orbMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2.material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [intensity]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        position: "relative",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

Object.assign(window, { ThreeOrb });
