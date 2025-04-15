import React, { ElementType, useEffect, useState } from 'react';
import { useStyles } from './typingEffect.styles';

const TYPING_DELAY = 100;
const START_DELAY = 2000;
const CURSOR_DELAY = 500;
const CURSOR_END_DURATION = 3500;

interface TypingEffectProps {
  text: string;
  as?: ElementType;
  classes?: {
    root?: string;
  }
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text, as: Tag = 'p', classes
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [hasCursorFaded, sethasCursorFaded] = useState(false);

  const isTyping = hasStartedTyping && currentIndex < text.length;

  const styles = useStyles();

  useEffect(() => {
    setHasStartedTyping(false);
    setCurrentIndex(0);
    setShowCursor(true);
    sethasCursorFaded(false);

    const startTypingTimer = setTimeout(() => {
      setHasStartedTyping(true);
      setShowCursor(true);
    }, START_DELAY);
    return () => clearTimeout(startTypingTimer);
  }, [text]);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout | undefined;
    if (isTyping) {
      typingTimer = setTimeout(() => {
        const stepSize = 1;
        setCurrentIndex(currentIndex + stepSize);
      }, TYPING_DELAY);
    } else if (hasStartedTyping) {
      typingTimer = setTimeout(() => {
        sethasCursorFaded(true);
      }, CURSOR_END_DURATION);
    }
    return () => typingTimer && clearTimeout(typingTimer);
  }, [currentIndex, isTyping]);

  useEffect(() => {
    let cursorTimer: NodeJS.Timeout | undefined;
    if (!isTyping && !hasCursorFaded) {
      cursorTimer = setTimeout(() => {
        setShowCursor(!showCursor);
      }, CURSOR_DELAY);
    } else if (hasCursorFaded) {
      setShowCursor(false);
    }
    return () => cursorTimer && clearTimeout(cursorTimer);
  }, [showCursor, isTyping, hasCursorFaded]);

  return (
    <Tag className={classes?.root}>
      {text.substring(0, currentIndex)}
      <span className={showCursor ? styles.cursor : `${styles.cursorHidden} ${styles.cursor}`}>
        |
      </span>
    </Tag>
  );
};
