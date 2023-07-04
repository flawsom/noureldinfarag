import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Menu } from "./components/Menu";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollManager } from "./components/ScrollManager";
import { Suspense, useEffect, useState } from "react";
import { Leva } from "leva";
import { MotionConfig } from "framer-motion";
import { Cursor } from "./components/Cursor";
import { framerMotionConfig } from "./config";
import { Navbar } from "./components/Navbar";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      setIsMobile(true);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [-0.2, 4.5, 12], fov: 45 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        {isMobile ? (
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        ) : (
          <Navbar
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        )}
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
