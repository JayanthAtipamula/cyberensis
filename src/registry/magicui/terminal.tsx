import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-black p-6 shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-1.5 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex flex-col gap-2 font-mono text-sm text-white">
        {children}
      </div>
    </div>
  );
}

interface TypingAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedContent, setDisplayedContent] = useState("");
  const content = children?.toString() || "";
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startAnimation) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= content.length) {
        setDisplayedContent(content.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [content, startAnimation]);

  return <div className={className}>{displayedContent}</div>;
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: AnimatedSpanProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return <div className={className}>{children}</div>;
}