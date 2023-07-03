import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Recycling website",
    url: "https://github.com/Noureldin2303/Recycling_Project",
    image: "projects/screenshot.png",
    description: "Creating awesome website with php",
  },
  {
    title: "e-commerce backend",
    url: "https://github.com/Noureldin2303/e-commerce-with-TypeScript-Nodejs-Express",
    image: "projects/ecommerce.png",
    description: "Learn how to build a simple e-commerce with TypeScript, Nodejs, and Express",
  },
  {
    title: "Coach Advisory System",
    url: "https://github.com/Noureldin2303/Coach_Advisory_System_Football_Prediction_In_Julia",
    image: "projects/GUI.png",
    description: "Football Prediction and Analysis System using Julia",
  },
  {
    title: "Music player",
    url: "https://github.com/Noureldin2303/Music-Player",
    image: "projects/music.png",
    description: "Simple Music Player Using CSS & Javascript",
  },
  {
    title: "Simple-Glassmorphism-card",
    url: "https://github.com/Noureldin2303/Simple-Glassmorphism-card",
    image: "projects/card.png",
    description: "Create a Simple-Glassmorphism-card Using CSS & Javascript",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.01}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[4, 3.7]} />
        <meshBasicMaterial color="black" transparent opacity={0.5} />
      </mesh>
      <Image
        scale={[4, 2, 2]}
        url={project.image}
        toneMapped={false}
        position-y={0.82}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.25}
        position={[-1.8, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2.6}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1.8, -1, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
