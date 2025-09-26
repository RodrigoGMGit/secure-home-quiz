import React from 'react';
import TextType from './TextType';

const TextTypeExample = () => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">TextType Animation Examples</h2>
        
        {/* Basic typing animation */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Basic Typing:</h3>
          <TextType
            text={["La puerta ya no es la calle"]}
            typingSpeed={100}
            showCursor={true}
            className="text-xl text-gray-800"
          />
        </div>

        {/* Multiple sentences with loop */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Multiple Sentences (Loop):</h3>
          <TextType
            text={[
              "La puerta ya no es la calle",
              "Los riesgos entran por las pantallas",
              "Protege a tu familia digitalmente"
            ]}
            typingSpeed={80}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            className="text-xl text-blue-600"
          />
        </div>

        {/* Variable speed typing */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Variable Speed:</h3>
          <TextType
            text={["La puerta ya no es la calle"]}
            variableSpeed={{ min: 50, max: 200 }}
            showCursor={true}
            className="text-xl text-green-600"
          />
        </div>

        {/* Different cursor styles */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Custom Cursor:</h3>
          <TextType
            text={["La puerta ya no es la calle"]}
            cursorCharacter="▊"
            cursorBlinkDuration={0.3}
            showCursor={true}
            className="text-xl text-purple-600"
          />
        </div>

        {/* Color changing text */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color Changing:</h3>
          <TextType
            text={[
              "La puerta ya no es la calle",
              "Los riesgos entran por las pantallas"
            ]}
            textColors={["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]}
            loop={true}
            showCursor={true}
            className="text-xl font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default TextTypeExample;
