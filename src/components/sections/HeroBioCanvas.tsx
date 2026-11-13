"use client";

import React, { useEffect, useRef } from "react";

export const HeroBioCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseRadius: number;
      phase: number;
      label?: string;
    }

    const points: Point3D[] = [];
    const baseRadius = Math.min(width, height) * 0.32;

    for (let i = 0; i < 26; i++) {
      const theta = Math.acos(-1 + (2 * i) / 26);
      const phi = Math.sqrt(26 * Math.PI) * theta;
      points.push({
        x: baseRadius * Math.cos(phi) * Math.sin(theta),
        y: baseRadius * Math.sin(phi) * Math.sin(theta),
        z: baseRadius * Math.cos(theta),
        baseRadius: 6 + (i % 4) * 3.5,
        phase: Math.random() * Math.PI * 2,
        label:
          i === 0
            ? "CORE_NUCLEUS"
            : i === 7
            ? "EGF_RECEPTOR"
            : i === 15
            ? "LIPID_BILAYER"
            : undefined,
      });
    }

    const floatingParticles = Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * width * 0.9,
      y: (Math.random() - 0.5) * height * 0.9,
      z: (Math.random() - 0.5) * 300,
      r: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.008 + 0.004,
      angle: Math.random() * Math.PI * 2,
    }));

    let rotX = 0;
    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const normX = (mouseX - width / 2) / (width / 2);
      const normY = (mouseY - height / 2) / (height / 2);

      rotY += 0.004 + normX * 0.003;
      rotX += 0.002 + normY * 0.002;

      const centerX = width / 2 + normX * 15;
      const centerY = height / 2 + normY * 15;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer rings
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.25, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(50, 141, 111, 0.12)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 98, 65, 0.1)";
      ctx.setLineDash([2, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Floating bio ambient particles
      floatingParticles.forEach((p) => {
        p.angle += p.speed;
        const px = p.x + Math.sin(p.angle) * 12;
        const py = p.y + Math.cos(p.angle) * 12;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(50, 141, 111, 0.28)";
        ctx.fill();
      });

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project 3D points
      const projected = points.map((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;
        const scale = 420 / (420 + z2);

        return {
          x2d: x1 * scale,
          y2d: y2 * scale,
          z: z2,
          scale,
          radius: p.baseRadius * scale,
          original: p,
        };
      });

      projected.sort((a, b) => b.z - a.z);

      // Draw connecting filaments
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x2d - projected[j].x2d;
          const dy = projected[i].y2d - projected[j].y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < baseRadius * 0.75) {
            const alpha = Math.max(0, 1 - dist / (baseRadius * 0.75)) * 0.35;
            ctx.beginPath();
            ctx.moveTo(projected[i].x2d, projected[i].y2d);
            ctx.lineTo(projected[j].x2d, projected[j].y2d);
            ctx.strokeStyle = `rgba(0, 98, 65, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Central core glow
      const coreGrad = ctx.createRadialGradient(
        -baseRadius * 0.15,
        -baseRadius * 0.15,
        baseRadius * 0.05,
        0,
        0,
        baseRadius * 0.55
      );
      coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      coreGrad.addColorStop(0.3, "rgba(50, 141, 111, 0.45)");
      coreGrad.addColorStop(0.7, "rgba(0, 98, 65, 0.3)");
      coreGrad.addColorStop(1, "rgba(0, 98, 65, 0.05)");

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.48, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw spheres
      projected.forEach((node) => {
        const sphereGrad = ctx.createRadialGradient(
          node.x2d - node.radius * 0.3,
          node.y2d - node.radius * 0.3,
          node.radius * 0.1,
          node.x2d,
          node.y2d,
          node.radius
        );

        if (node.z > 0) {
          sphereGrad.addColorStop(0, "#FFFFFF");
          sphereGrad.addColorStop(0.4, "#328D6F");
          sphereGrad.addColorStop(1, "#006241");
        } else {
          sphereGrad.addColorStop(0, "rgba(255, 255, 255, 0.6)");
          sphereGrad.addColorStop(0.5, "rgba(50, 141, 111, 0.35)");
          sphereGrad.addColorStop(1, "rgba(0, 98, 65, 0.2)");
        }

        ctx.beginPath();
        ctx.arc(node.x2d, node.y2d, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrad;
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (node.original.label && node.z > 0) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = "#006241";
          ctx.fillText(node.original.label, node.x2d + node.radius + 6, node.y2d + 3);
          ctx.beginPath();
          ctx.arc(node.x2d + node.radius + 2, node.y2d, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "#10B981";
          ctx.fill();
        }
      });

      // Crosshair center
      ctx.strokeStyle = "rgba(50, 141, 111, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-16, 0);
      ctx.lineTo(16, 0);
      ctx.moveTo(0, -16);
      ctx.lineTo(0, 16);
      ctx.stroke();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] flex items-center justify-center overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0 block cursor-crosshair" />
      <div className="absolute bottom-4 left-4 glass-panel px-3.5 py-2 rounded-lg text-xs font-mono text-gw-charcoal/80 flex items-center gap-3 pointer-events-none shadow-sm">
        <span className="text-gw-deep font-semibold">BIO-MODEL</span>
        <span className="text-slate-400">·</span>
        <span className="tabular-nums">VESICLE_REFRACT: 98.4%</span>
        <span className="text-slate-400">·</span>
        <span className="text-emerald-700">STABLE</span>
      </div>
    </div>
  );
};
