import React, { useState, useEffect } from 'react';
import { Student, StudentPosition, StudentAnimationState } from '../../types/game';
import { Student2DCharacter } from './Student2DCharacter';

interface BoatStudentLayerProps {
  students: Student[];
  positions: Record<string, StudentPosition>;
  selectedStudent: Student | null;
  isSpinning: boolean;
}

/**
 * Coordinates student interaction on the boat.
 * ARCHITECTURAL RULE:
 * - Exactly ONE student can be highlighted at a time.
 * - When no student is selected, this layer renders zero duplicate elements.
 * - Manages the animation timing lifecycle:
 *   1. 0 - 2.8s: SELECTED (Joyful bounce, arm raise, waving hand 2-3 cycles)
 *   2. 2.8s - 6.5s: SPEAKING (Polite hand raise, lip-sync speaking, answer prompt)
 *   3. 6.5s+: RETURN to IDLE (Arm settles, aura eases)
 */
export const BoatStudentLayer: React.FC<BoatStudentLayerProps> = ({
  students,
  positions,
  selectedStudent,
  isSpinning,
}) => {
  const [animState, setAnimState] = useState<StudentAnimationState>('IDLE');

  useEffect(() => {
    if (selectedStudent && !isSpinning) {
      // 1. Immediately enter SELECTED state (Arm raise & waving hand)
      setAnimState('SELECTED');

      // 2. Transition to SPEAKING state after 2.8s
      const speakingTimer = window.setTimeout(() => {
        setAnimState('SPEAKING');
      }, 2800);

      // 3. Transition to RETURN state after 6.5s
      const returnTimer = window.setTimeout(() => {
        setAnimState('RETURN');
        setTimeout(() => {
          setAnimState('IDLE');
        }, 800);
      }, 6500);

      return () => {
        clearTimeout(speakingTimer);
        clearTimeout(returnTimer);
      };
    } else {
      setAnimState('IDLE');
    }
  }, [selectedStudent, isSpinning]);

  // Position of active student
  const activeStudentPos = selectedStudent ? positions[selectedStudent.id] : null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible select-none">
      {/* 
        1. SPOTLIGHT FOCUS MASK:
        Gently dims surrounding students on the artwork to spotlight the selected student
      */}
      {selectedStudent && activeStudentPos && !isSpinning && (
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-15 ${
            animState === 'SELECTED' || animState === 'SPEAKING' ? 'opacity-100' : 'opacity-40'
          }`}
          style={{
            background: `radial-gradient(circle at ${activeStudentPos.x}% ${activeStudentPos.y}%, transparent 0%, transparent ${
              (activeStudentPos.radius || 4.2) * 1.6
            }%, rgba(10, 18, 30, 0.42) ${(activeStudentPos.radius || 4.2) * 3.6}%)`,
          }}
        />
      )}

      {/* 
        2. RENDER ONLY THE ACTIVE SELECTED STUDENT:
        Strictly prevents 41 duplicate characters across the boat.
      */}
      {selectedStudent && activeStudentPos && !isSpinning && (
        <Student2DCharacter
          key={selectedStudent.id}
          student={selectedStudent}
          position={activeStudentPos}
          animState={animState}
          isSelected={true}
        />
      )}
    </div>
  );
};
