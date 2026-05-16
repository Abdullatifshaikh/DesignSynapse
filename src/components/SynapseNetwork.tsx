import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function SynapseNetwork() {
  const [nodes, setNodes] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const newNodes = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Draw connections between nearby nodes */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((other) => {
            const dist = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2));
            if (dist < 35) {
              return (
                <motion.line
                  key={`${node.id}-${other.id}`}
                  x1={node.x}
                  y1={node.y}
                  x2={other.x}
                  y2={other.y}
                  stroke="#2563EB"
                  strokeWidth="0.1"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1.5 h-1.5 bg-brand-blue rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            x: [0, Math.random() * 10 - 5, 0],
            y: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
