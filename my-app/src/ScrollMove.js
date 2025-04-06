import React, { useRef } from 'react';

export default function ScrollMove() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

   //scrollIntoView() 스크롤되도록 화면에 표시해주는 메서드
    const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, background: '#fff', width: '100%', padding: '1rem', zIndex: 10 }}>
        <button onClick={() => scrollToSection(section1Ref)}>Section 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Section 2</button>
        <button onClick={() => scrollToSection(section3Ref)}>Section 3</button>
      </nav>

      <div style={{ paddingTop: '4rem' }}>
        <section ref={section1Ref} style={{ height: '100vh', backgroundColor: '#f8b400' }}>
          <h2>Section 1</h2>
        </section>
        <section ref={section2Ref} style={{ height: '100vh', backgroundColor: '#6a2c70' }}>
          <h2>Section 2</h2>
        </section>
        <section ref={section3Ref} style={{ height: '100vh', backgroundColor: '#b83b5e' }}>
          <h2>Section 3</h2>
        </section>
      </div>
    </div>
  );
}

